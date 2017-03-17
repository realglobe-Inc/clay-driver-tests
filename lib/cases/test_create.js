/**
 * Test create method of driver
 * @function testCreate
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')
const { ok, strictEqual } = require('assert')

/** @lends testCreate */
function testCreate (driver, options = {}) {
  const RESOURCE_NAME = 'driver-test-create'
  return co(function * () {
    let created = yield driver.create(RESOURCE_NAME, {
      name: 'foo',
      version: 1,
      at: new Date()
    })
    ok(created)
    strictEqual(created.name, 'foo')
    strictEqual(created.version, 1)
    ok(created.at)
    ok(created.at instanceof Date)

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = testCreate
