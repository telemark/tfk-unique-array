# tfk-unique-array
Creates array of unique objects

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
