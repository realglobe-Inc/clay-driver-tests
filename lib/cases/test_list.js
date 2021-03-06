/**
 * Test list method of driver
 * @function testList
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')
const { ok, equal, deepEqual } = require('assert')

/** @lends testList */
function testList (driver, options = {}) {
  const RESOURCE_NAME = 'driver-test-list'
  return co(function * () {
    let created = yield driver.create(RESOURCE_NAME, {
      username: 'okunishinishi',
      num: 40
    })
    let created2 = yield driver.create(RESOURCE_NAME, {
      username: 'hoge',
      num: 100
    })
    let created3 = yield driver.create(RESOURCE_NAME, {
      username: 'hoge',
      num: 200
    })
    ok(created2.id !== created.id)
    ok(created.id)
    equal(created.username, 'okunishinishi')

    let one = yield driver.one(RESOURCE_NAME, created.id)

    equal(String(created.id), String(one.id))

    let list01 = yield driver.list(RESOURCE_NAME, {})
    deepEqual(list01.meta, { offset: 0, limit: 100, length: 3, total: 3 })

    let list02 = yield driver.list(RESOURCE_NAME, {
      filter: { username: 'okunishinishi' }
    })
    deepEqual(list02.meta, { offset: 0, limit: 100, length: 1, total: 1 })

    let list03 = yield driver.list(RESOURCE_NAME, {
      page: { size: 1, number: 1 }
    })
    deepEqual(list03.meta, { offset: 0, limit: 1, length: 1, total: 3 })

    equal(
      (yield driver.list(RESOURCE_NAME, {
        filter: { num: { $gte: 100 } }
      })).meta.length,
      2
    )

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = testList
