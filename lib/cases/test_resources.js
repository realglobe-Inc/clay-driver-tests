/**
 * Test resources method of driver
 * @function testResources
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')
const aschema = require('aschema')
const { ok } = require('assert')
const { ResourceSchema } = require('clay-schemas')

/** @lends testResources */
function testResources (driver, options = {}) {
  const RESOURCE_NAME = 'driver-test-resources'
  return co(function * () {
    yield driver.create(RESOURCE_NAME, {
      name: 'foo',
      version: 1,
      at: new Date()
    })

    let resources = yield driver.resources()
    ok(resources.length > 0)
    let schema = aschema(ResourceSchema)
    for (let resource of resources) {
      schema.validateToThrow(resource)
    }
  })
}

module.exports = testResources
