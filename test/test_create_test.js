/**
 * Test case for testCreate.
 * Runs with mocha.
 */
'use strict'

const testCreate = require('../lib/cases/test_create.js')
const clayDriverMemory = require('clay-driver-memory')
const assert = require('assert')
const co = require('co')

describe('test-create', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Test create', () => co(function * () {
    let driver = clayDriverMemory({})
    yield testCreate(driver)
  }))
})

/* global describe, before, after, it */
