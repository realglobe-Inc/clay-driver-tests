/**
 * Test case for testList.
 * Runs with mocha.
 */
'use strict'

const testList = require('../lib/cases/test_list.js')
const clayDriverMemory = require('clay-driver-memory')
const clayDriverSequelize = require('clay-driver-sequelize')
const assert = require('assert')
const co = require('co')
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')

describe('test-list', function () {
  this.timeout(3000)

  let storage01 = `${__dirname}/../tmp/testing-list-driver.db`

  before(() => co(function * () {
    let storages = [ storage01 ]
    for (let storage of storages) {
      rimraf.sync(storage)
      mkdirp.sync(path.dirname(storage))
    }
  }))

  after(() => co(function * () {

  }))

  it('Test list with memory', () => co(function * () {
    let driver = clayDriverMemory({})
    yield testList(driver)
  }))
  it('Test list with sqlite', () => co(function * () {
    let driver = clayDriverSequelize('hoge', '', '', {
      storage: storage01,
      dialect: 'sqlite',
      benchmark: true,
      logging: console.log
    })
    yield testList(driver)
  }))
})

/* global describe, before, after, it */
