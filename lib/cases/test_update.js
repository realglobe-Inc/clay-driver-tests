/**
 * Test update method of driver
 * @function testUpdate
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')
const { equal } = require('assert')

/** @lends testUpdate */
function testUpdate (driver, options = {}) {
  const RESOURCE_NAME = 'driver-test-update'
  return co(function * () {
    let created = yield driver.create(RESOURCE_NAME, {
      name: 'foo',
      version: 1,
      at: new Date()
    })

    let updated = yield driver.update(RESOURCE_NAME, created.id, {
      name: 'foo2'
    })

    let one = yield driver.one(RESOURCE_NAME, updated.id)
    equal(one.name, 'foo2')
  })
}

module.exports = testUpdate
