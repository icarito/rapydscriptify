Require [RapydScript](http://rapydscript.com/) code in your [browserify](https://github.com/substack/node-browserify)-built webapp!

## To use

Include `rapydscriptify` in your browserify-using package:

```sh
npm install rapydscriptify --save-dev
```

Change your build to use the rapydscriptify transform:

```sh
browserify -t rapydscriptify start.js -o coolbuild.js
```

All files with the extension `.pyj` or `.py` will be interpreted as RapydScript files.

## Lineage

This script is modified from [lispyscriptify](https://github.com/TehShrike/lispyscriptify) which, naturally, is the Lispyscript transform for Browserify.
