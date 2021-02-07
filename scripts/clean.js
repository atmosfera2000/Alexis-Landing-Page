'use strict';

const sh = require('shelljs');
const upath = require('upath');

const distPath = upath.resolve(upath.dirname(__filename), '../dist');

sh.rm('-rf', `${distPath}/*`);