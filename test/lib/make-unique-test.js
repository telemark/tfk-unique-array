'use strict'

var tap = require('tap')
var data = require('./data/make-unique-test-data.json')
var makeUnique = require('../../index')

tap.equal(JSON.stringify(data.expected), JSON.stringify(makeUnique(data.raw)), 'Returns expected results')
