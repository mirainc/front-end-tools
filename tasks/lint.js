#!/usr/bin/env node

const fs = require('fs');
const argv = require('yargs').argv;
const yaml = require('js-yaml');
const spawn = require('child_process').spawn;

// Linting config is project based .eslintrc
const options = yaml.load(fs.readFileSync(`${process.cwd()}/.devtools.yml`));

const filesToLintGlob = argv.files || options.js_files_to_lint;
const eslint = 'node_modules/.bin/eslint';

const child = spawn(eslint, [filesToLintGlob], { detached: true, stdio: 'inherit' });

child.on('error', () => {
  console.log('Lint Task: ERROR, Code 1 ');
  process.exit(1);
});


child.on('exit', (code, signal) => {
  console.log(`Lint Task: EXIT, Code ${code}`);
  process.exit(code);
});
