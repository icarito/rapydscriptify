var through = require('through2')
var parseLispyscript = require('lispyscript').parseWithSourceMap
var convert = require('convert-source-map')

function isLispyscript(file) {
	return /\.ls$/.test(file)
}

module.exports = function(file, opts) {
	if (isLispyscript(file)) {
		var data = ''

		var stream = through(function write(chunk, enc, cb) {
			data += chunk
			cb()
		}, function end(cb) {
			try {
				var output = parseLispyscript(data, file)
			} catch (e) {
				console.error(e.message)
				cb(e)
				return
			}

			var sourceNodeGenerator = output.map

			sourceNodeGenerator.setSourceContent(file, data)

			var map = convert.fromJSON(sourceNodeGenerator.toString())

			map.setProperty('sources', [file])
			map.setProperty('file', file)

			this.push(output.code + '\n' + map.toComment() + '\n')
			cb()
		})

		return stream
	} else {
		return through()
	}
}
