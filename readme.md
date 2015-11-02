Require [Lispyscript](http://lispyscript.com/) code in your [browserify](https://github.com/substack/node-browserify)-built webapp!

## Depends on a version of Lispyscript not yet on npm

This transform will work with versions of Lispyscript after [this commit](https://github.com/santoshrajan/lispyscript/commit/f4a3bd407613d29f0b7488495d9b7214d1ecee1f) to the Lispyscript repository.

Until the Lispyscript package on npm is updated, you'll have to depend on the version in the repository, something like this: `"lispyscript": "git+https://github.com/santoshrajan/lispyscript.git#f4a3bd4076"`

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
