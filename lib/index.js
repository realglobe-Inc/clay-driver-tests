/**
 * Tests for ClayDB drivers
 * @module clay-driver-tests
 * @version 1.1.2
 */

'use strict'

const run = require('./run')
const cases = require('./cases')

let lib = run.bind(this)

Object.assign(lib, run, {
  run,
  cases
})

module.exports = lib
