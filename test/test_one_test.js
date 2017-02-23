/**
 * Test case for testOne.
 * Runs with mocha.
 */
'use strict'

const testOne = require('../lib/cases/test_one.js')
const clayDriverMemory = require('clay-driver-memory')
const assert = require('assert')
const co = require('co')

describe('test-one', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Test one', () => co(function * () {
    let driver = clayDriverMemory({})
    yield testOne(driver)
  }))
})

/* global describe, before, after, it */
