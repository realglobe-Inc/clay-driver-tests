/**
 * Test case for run.
 * Runs with mocha.
 */
'use strict'

const run = require('../lib/run.js')
const assert = require('assert')
const clayDriverMemory = require('clay-driver-memory')
const co = require('co')

describe('run', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Run', () => co(function * () {
    let driver = clayDriverMemory()
    yield run(driver)
  }))
})

/* global describe, before, after, it */
