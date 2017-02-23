/**
 * Test case for testResources.
 * Runs with mocha.
 */
'use strict'

const testResources = require('../lib/cases/test_resources.js')
const clayDriverMemory = require('clay-driver-memory')
const assert = require('assert')
const co = require('co')

describe('test-resources', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Test resources', () => co(function * () {
    let driver = clayDriverMemory({})
    yield testResources(driver)
  }))
})

/* global describe, before, after, it */
