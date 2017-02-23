'use strict'

const co = require('co')
const clayDriverTests = require('clay-driver-tests')
const { Driver } = require('clay-driver-base')

class CustomDriver extends Driver {
  /* ... */
}

{
  let driver = new CustomDriver({ /* ... */ })

  co(function * () {
    // Run all tests
    yield clayDriverTests.run(driver, {})
  }).catch((e) => {
    console.error('Test failed!')
    console.error(e)
  })
}
