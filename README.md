clay-driver-tests
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-driver-tests
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-driver-tests
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-driver-tests.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-driver-tests
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-driver-tests.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-driver-tests/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-driver-tests
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-driver-tests.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-driver-tests.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-driver-tests
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-driver-tests.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-driver-tests
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-driver-tests.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Tests for ClayDB drivers

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-driver-tests --save-dev
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Cases.md.hbs" Start -->

<a name="section-doc-guides-03-cases-md"></a>

Cases
---------

Available Test Cases

| Signature | Description |
| ---- | ----------- |
| `testCreate(driver, options)` | Test create method of driver |
| `testDestroy(driver, options)` | Test destroy method of driver |
| `testDrop(driver, options)` | Test drop method of driver |
| `testList(driver, options)` | Test list method of driver |
| `testOne(driver, options)` | Test one method of driver |
| `testResources(driver, options)` | Test resources method of driver |
| `testUpdate(driver, options)` | Test update method of driver |


<!-- Section from "doc/guides/03.Cases.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-driver-tests/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
