#!/usr/bin/env node

const fs = require('fs');
const argv = require('yargs').argv;
const yaml = require('js-yaml');
const spawn = require('child_process').spawn;

const options = yaml.load(fs.readFileSync(`${process.cwd()}/.devtools.yml`));

const filesToTestGlob = argv.files || options.js_test_files;
const shouldNotCover = argv.no_cover || false;
const bin = 'node_modules/.bin';
const istanbul = `${bin}/istanbul`;

const mocha = `${bin}/mocha`;
const mochaNoChildProcess = `${bin}/_mocha`;

const mochaOpts = yaml.load(fs.readFileSync(`${process.cwd()}/.mocha.yml`)).mocha;
const mochaArgs = mochaOpts.join(' ').split(' ').concat([filesToTestGlob]);

let child;

if (shouldNotCover) {
  child = spawn(mocha, mochaArgs, { stdio: 'inherit' });
} else {
  child = spawn(istanbul, [
    'cover', mochaNoChildProcess, '-x', filesToTestGlob, '--',
  ].concat(mochaArgs), { stdio: 'inherit' });
}

child.on('error', () => {
  console.log('Test Task: ERROR, Code 1 ');
  process.exit(1);
});


child.on('exit', (code, signal) => {
  console.log(`Test Task: EXIT, Code ${code}`);
  process.exit(code);
});
