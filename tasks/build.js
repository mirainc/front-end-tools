#!/usr/bin/env node

/* IMPORTANT:
 * You still have to specify a babel.rc in the consuming repository
 * TODO: Fix this ^? couples plugins :(
 * You still have to specify a webpack.config.js in the consuming repository
 * TODO: Fix this ^? couples loaders :(
 */
const argv = require('yargs').argv;
const spawn = require('child_process').spawn;
const webpack = 'node_modules/.bin/webpack';

let webpackOpts = [];

if (argv.dev) {
  webpackOpts = ['-d', '--watch'];
}

spawn(webpack, webpackOpts, { stdio: 'inherit' });

/* TODO: Use dev server with hotloading instead
 * const webpackDevServer = 'node_modules/.bin/webpack-dev-server';
 *  spawn(webpackDevServer, [
 *    '--hot', '--inline',
 *    '--config', './webpack.config.js',
 *    '--open',
 *  ], { stdio: 'inherit' });
 */
