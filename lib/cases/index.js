/**
 * Test cases
 * @module cases
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get testCreate () { return d(require('./test_create')) },
  get testDestroy () { return d(require('./test_destroy')) },
  get testDrop () { return d(require('./test_drop')) },
  get testList () { return d(require('./test_list')) },
  get testOne () { return d(require('./test_one')) },
  get testResources () { return d(require('./test_resources')) },
  get testUpdate () { return d(require('./test_update')) }
}
