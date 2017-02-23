/**
 * Run tests
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const cases = require('./cases')
const co = require('co')

/** @function run */
function run (driver, options = {}) {
  return co(function * () {
    for (let name of Object.keys(cases)) {
      yield cases[ name ](driver, options)
    }
  })
}

module.exports = run
