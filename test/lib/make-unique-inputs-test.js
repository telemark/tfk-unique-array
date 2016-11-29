'use strict'

var tap = require('tap')
var makeUnique = require('../../index')

tap.throws(
  function () {
    makeUnique()
  },
  {message: 'Missing required input: array'},
  'Requires input'
)

tap.throws(
  function () {
    makeUnique('Agurkene vokser fort')
  },
  {message: 'Wrong input type: array is required'},
  'Requires input to be array'
)
