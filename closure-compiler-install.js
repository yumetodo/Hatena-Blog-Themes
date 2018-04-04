'use strict';

const fse = require('fs-extra');
const download = require('download');
const path = require('path');
console.log('installing Google Closure Compiler...');
download('http://dl.google.com/closure-compiler/compiler-latest.zip', {
    extract: true,
    filter:  file => path.extname(file.path) === '.jar',
}).then(d => fse.writeFile('closure-compiler.jar', d[0].data)).then(() => console.log('done.'));
