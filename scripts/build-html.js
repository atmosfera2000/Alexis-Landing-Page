'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

const srcHTML = upath.resolve(upath.dirname(__filename), '../src/index.html');
const distHTML = upath.resolve(upath.dirname(__filename), '../dist/');

if (!sh.test('-e', distHTML)) {
    sh.mkdir('-p', distHTML);
}

sh.cp(srcHTML, distHTML);