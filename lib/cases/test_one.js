/**
 * Test one method of driver
 * @function testOne
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')
const { equal } = require('assert')

/** @lends testOne */
function testOne (driver, options = {}) {
  const RESOURCE_NAME = 'driver-test-one'
  return co(function * () {
    let created = yield driver.create(RESOURCE_NAME, {
      name: 'foo',
      version: 1,
      at: new Date()
    })

    let one = yield driver.one(RESOURCE_NAME, created.id)
    equal(String(one.id), String(created.id))
    equal(one.name, created.name)
    equal(one.version, created.version)
    equal(one.at - created.at, 0)

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = testOne
