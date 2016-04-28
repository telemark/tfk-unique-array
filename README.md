[![Build Status](https://travis-ci.org/telemark/tfk-unique-array.svg?branch=master)](https://travis-ci.org/telemark/tfk-unique-array)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-unique-array/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-unique-array?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-unique-array
Creates an array of unique values

## Installation
```
$ npm install tfk-unique-array
```

## Usage

```
'use strict'

var makeUnique = require('tfk-unique-array')
var objekt = {
  title: 'Ole'
}
var streng = 'En dag jeg gikk tur'
var liste = [1,2,3,4,5,1,2,3,4,1,23,4,5, objekt, streng, streng, objekt, objekt, objekt]

console.log(makeUnique(liste))

//=>[ 1, 2, 3, 4, 5, 23, { title: 'Ole' }, 'En dag jeg gikk tur' ]
```

## License
[MIT](LICENSE)