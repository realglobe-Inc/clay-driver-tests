/**
 * Test cases
 * @module cases
 */

'use strict'

const d = (module) => module && module.default || module

const testCreate = d(require('./test_create'))
const testDestroy = d(require('./test_destroy'))
const testDrop = d(require('./test_drop'))
const testList = d(require('./test_list'))
const testOne = d(require('./test_one'))
const testResources = d(require('./test_resources'))
const testUpdate = d(require('./test_update'))

module.exports = {
  testCreate,
  testDestroy,
  testDrop,
  testList,
  testOne,
  testResources,
  testUpdate
}
