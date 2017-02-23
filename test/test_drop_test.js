/**
 * Test case for testDrop.
 * Runs with mocha.
 */
'use strict'

const testDrop = require('../lib/cases/test_drop.js')
const clayDriverMemory = require('clay-driver-memory')
const assert = require('assert')
const co = require('co')

describe('test-drop', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Test drop', () => co(function * () {
    let driver = clayDriverMemory({})
    yield testDrop(driver)
  }))
})

/* global describe, before, after, it */
