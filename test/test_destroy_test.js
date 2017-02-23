/**
 * Test case for testDestroy.
 * Runs with mocha.
 */
'use strict'

const testDestroy = require('../lib/cases/test_destroy.js')
const clayDriverMemory = require('clay-driver-memory')
const assert = require('assert')
const co = require('co')

describe('test-destroy', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Test destroy', () => co(function * () {
    let driver = clayDriverMemory({})
    yield testDestroy(driver)
  }))
})

/* global describe, before, after, it */
