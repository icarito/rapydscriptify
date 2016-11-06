var through = require('through2')
var rapydscript = require('rapydscript')
var fs = require('fs')
var path = require('path')

function isRapydscript(file) {
	return /\.pyj?$/.test(file)
}

module.exports = function(file, opts) {
	if (isRapydscript(file)) {
		var data = ''

		var stream = through(function write(chunk, enc, cb) {
			data += chunk
			cb()
		}, function end(cb) {
			try {
				var output = rapydscript.compile(data, { filename:file,
                                                                         toplevel: null,
                                                                         base_dir: ".",
                                                                         import_dirs: [path.dirname(file)],
                                                                         auto_bind: true,
                                                                         libdir: 'src/lib',
                                                                         readfile:fs.readFileSync,
                                                                         omit_baselib:false,
                                                                         private_scope:false,
                                                                         beautify:true } )
			} catch (e) {
				console.error(e.message)
				cb(e)
				return
			}

			this.push(output)
			cb()
		})

		return stream
	} else {
		return through()
	}
}
