/**
 * Test case for testUpdate.
 * Runs with mocha.
 */
'use strict'

const testUpdate = require('../lib/cases/test_update.js')
const clayDriverMemory = require('clay-driver-memory')
const assert = require('assert')
const co = require('co')

describe('test-update', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Test update', () => co(function * () {
    let driver = clayDriverMemory({})
    yield testUpdate(driver)
  }))
})

/* global describe, before, after, it */
