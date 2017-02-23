/**
 * Test drop method of driver
 * @function testDrop
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')

/** @lends testDrop */
function testDrop (driver, options = {}) {
  const RESOURCE_NAME = 'driver-test-drop'
  return co(function * () {
    yield driver.create(RESOURCE_NAME, {
      name: 'foo',
      version: 1,
      at: new Date()
    })
    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = testDrop
