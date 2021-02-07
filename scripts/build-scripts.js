'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

const jquery = upath.resolve(upath.dirname(__filename), '../node_modules/jquery/dist/jquery.min.js');
const jqueryEasing = upath.resolve(upath.dirname(__filename), '../node_modules/jquery.easing/jquery.easing.min.js');
const bootstrap = upath.resolve(upath.dirname(__filename), '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
const custom = upath.resolve(upath.dirname(__filename), '../src/js/custom.js');


const distJs = upath.resolve(upath.dirname(__filename), '../dist/js/');

if (!sh.test('-e', distJs)) {
    sh.mkdir('-p', distJs);
}

sh.cp([jquery, jqueryEasing, bootstrap, custom], distJs);
