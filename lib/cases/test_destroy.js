/**
 * Test destroy method of driver
 * @function testDestroy
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')
const { ok } = require('assert')

/** @lends testDestroy */
function testDestroy (driver, options = {}) {
  const RESOURCE_NAME = 'driver-test-destroy'
  return co(function * () {
    let created = yield driver.create(RESOURCE_NAME, {
      name: 'foo',
      version: 1,
      at: new Date()
    })

    let one = yield driver.one(RESOURCE_NAME, created.id)

    let destroyed = yield driver.destroy(RESOURCE_NAME, one.id)
    ok(destroyed)

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = testDestroy
