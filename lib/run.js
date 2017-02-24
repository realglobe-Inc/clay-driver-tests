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
const colorprint = require('colorprint')

/** @function run */
function run (driver, options = {}) {
  return co(function * () {
    for (let name of Object.keys(cases)) {
      let startAt = new Date()
      colorprint.info(`[clay-driver-tests] "${name}" started...`)
      yield cases[ name ](driver, options)
      let took = new Date() - startAt
      colorprint.info(`[clay-driver-tests] ..."${name}" done! (${took}ms)`)
    }
  })
}

module.exports = run
