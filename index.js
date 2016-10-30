var through = require('through2')
var rapydscript = require('rapydscript')

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
				var output = rapydscript.compile(data, { omit_baselib:true } )
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
