Require [Lispyscript](http://lispyscript.com/) code in your [browserify](https://github.com/substack/node-browserify)-built webapp!

## To use

Include `lispyscriptify` in your browserify-using package:

```sh
npm install lispyscriptify --save-dev
```

Change your build to use the lispyscriptify transform:

```sh
browserify -t lispyscriptify start.js -o coolbuild.js
```

All files with the extension `.ls` will be interpreted as Lispyscript files.
