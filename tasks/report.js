#!/usr/bin/env node

const spawn = require('child_process').spawn;

spawn('open', ['./coverage/lcov-report/index.html'], { stdio: 'inherit' });
