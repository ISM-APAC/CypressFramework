# CypressFramework


mochawesome
===========
[![npm](https://img.shields.io/npm/v/mochawesome.svg?style=flat-square)](http://www.npmjs.com/package/mochawesome) [![Build Status](https://img.shields.io/travis/adamgruber/mochawesome/master.svg?style=flat-square)](https://travis-ci.org/adamgruber/mochawesome) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/mochawesome/general) [![Code Climate](https://img.shields.io/codeclimate/coverage/adamgruber/mochawesome.svg?style=flat-square)](https://codeclimate.com/github/adamgruber/mochawesome)

Mochawesome is a custom reporter for use with the Javascript testing framework, [mocha][mocha]. It runs on Node.js (>=8) and works in conjunction with [mochawesome-report-generator][marge] to generate a standalone HTML/CSS report to help visualize your test runs.


## Features

<img align="right" src="./docs/marge-report-1.0.1.png" alt="Mochawesome Report" width="55%" />

- Simple, clean, and modern design
- Beautiful charts (via ChartJS)
- Support for test and suite nesting
- Displays before and after hooks
- Review test code inline
- Stack trace for failed tests
- Support for adding context information to tests
- Filters to display only the tests you want
- Responsive and mobile-friendly
- Offline viewing

## Essential packages
 ```
"mocha": "5.2.0", 
"mochawesome": "4.1.0", 
"mochawesome-merge": "2.0.1", 
"mochawesome-report-generator": "4.0.1"
 ```

## Report configuration in cypress.json
 ```
"reporter": "./node_modules/mochawesome/src/mochawesome.js", 
"reporterOptions": 
{ 
	"reportDir": "cypress/reports/separate-reports", 
	"overwrite": false, 
	"html": false, 
	"json": true 
}
 ```

## Script configuration in package.json
 ```
"clean-reports":"rm -rf cypress/reports", 
"test": "npx cypress run", 
"merge-report": "npx mochawesome-merge --reportDir cypress/reports/separate-reports cypress/reports/full_report.json", 
"generate-report": "npx mochawesome-report-generator --reportDir cypress/reports cypress/reports/full_report.json", 
"after:tests": "npm run merge-report; npm run generate-report", 
"cypress": "npm run clean-reports; npm run test; npm run after:tests"
 ```
