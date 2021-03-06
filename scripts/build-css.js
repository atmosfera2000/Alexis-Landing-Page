'use strict';

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fs = require('fs');
const upath = require('upath');
const postcss = require('postcss');
const sass = require('sass');
const sh = require('shelljs');

const stylesPath = upath.resolve(upath.dirname(__filename), '../src/scss/style.scss');
const destPath = upath.resolve(upath.dirname(__filename), '../dist/css/style.min.css');

const results = sass.renderSync({  
    file: stylesPath,
    includePaths: [
        upath.resolve(upath.dirname(__filename), '../node_modules')
    ],
});

const destPathDirname = upath.dirname(destPath);
if (!sh.test('-e', destPathDirname)) {
    sh.mkdir('-p', destPathDirname);
}

postcss([ autoprefixer, cssnano ]).process(results.css, {from: 'style.min.css', to: 'style.min.css'}).then(result => {
    result.warnings().forEach(warn => {
        console.warn(warn.toString())
    })
    fs.writeFileSync(destPath, result.css.toString());
});
