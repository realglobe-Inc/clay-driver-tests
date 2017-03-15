/**
 * Test case for run.
 * Runs with mocha.
 */
'use strict'

const run = require('../lib/run.js')
const assert = require('assert')
const rimraf = require('rimraf')
const clayDriverMemory = require('clay-driver-memory')
const clayDriverSqlite = require('clay-driver-sqlite')
const co = require('co')

describe('run', function () {
  this.timeout(33000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Memory', () => co(function * () {
    let driver = clayDriverMemory()
    yield run(driver)
  }))

  it('Sqlite', () => co(function * () {
    let filename = `${__dirname}/../tmp/sqlite-testing.db`
    rimraf.sync(filename)
    let driver = clayDriverSqlite(filename)
    yield run(driver)
  }))
})

/* global describe, before, after, it */
