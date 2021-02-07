'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');


const srcPath = upath.resolve(upath.dirname(__filename), '../src/assets');
const distPath = upath.resolve(upath.dirname(__filename), '../dist/.');

sh.cp('-R', srcPath, distPath);
