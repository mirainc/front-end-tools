#!/usr/bin/env node

const fs = require('fs');
const argv = require('yargs').argv;
const yaml = require('js-yaml');
const spawn = require('child_process').spawn;

// Linting config is project based .eslintrc
const options = yaml.load(fs.readFileSync(`${process.cwd()}/.devtools.yml`));

const filesToLintGlob = argv.files || options.js_files_to_lint;
const eslint = 'node_modules/.bin/eslint';

spawn(eslint, [filesToLintGlob], { stdio: 'inherit' });
