# Front End Tools

This repo is a collection of general-purpose scripts intended to be used as npm
scripts that you can use to simplify frontend development. Usage of these tools
currently requires using Node 6 and NPM 3. No guarantees for other versions!


## Installation
1. Start your new JavaScript Project in a separate repo
1. `npm init` (if not done yet)
1. `npm install --save-dev git+ssh://git@github.com/mirainc/front-end-tools#<VERSION>`
1. The following scripts will be installed into your node_modules/.bin folder:
  * `front-end-tools-test`
  * `front-end-tools-lint`
  * `front-end-tools-report`
  * `front-end-tools-build`
1. The following files need to be set up, see [mira-dash](http://github.com/mirainc/mira-dash) for examples
  * `.devtools.yml` - contains configuration info for the dev tools
  * `.babelrc` - contains configuration for [Babel](http://github.com/babel/babel), our transpilation tool
  * `.eslintrc` - contains linter configuration
  * `.mocha.yml` - contains mocha CLI options
  * `.istanbul.yml` - contains [Istanbul](github.com/gotwarlost/istanbul) configuration
  * `webpack.config.js` - contains webpack configuration
1. Add the scripts to the package.json of your project, for example:
```json
  "scripts": {
    "test": "front-end-tools-test",
    "lint": "front-end-tools-lint",
    "report": "front-end-tools-report",
    "dev": "front-end-tools-build --dev",
    "build": "front-end-tools-build"
  }
```
1. These commands can now be run as follows:
  - `npm test`
  - `npm run lint`
  - `npm run report`
  - `npm run dev`
  - `npm run build`

