Require [Lispyscript](http://lispyscript.com/) code in your [browserify](https://github.com/substack/node-browserify)-built webapp!

## CURRENTLY WAITING FOR THIS PULL REQUEST TO BE MERGED

This code will not *officially* work until [pull request 61](https://github.com/santoshrajan/lispyscript/pull/61) is merged into the Lispyscript codebase.

Until then, you can add `"lispyscript": "git+https://github.com/tehshrike/lispyscript.git#expose-sourcemap"` to `dependencies` in your `package.json` if you want to use this.

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
