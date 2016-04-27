'use strict'

function makeUnique (list) {
  if (!list) {
    throw new Error('Missing required input: array')
  }

  if (!Array.isArray(list)) {
    throw new Error('Wrong input type: array is required')
  }

  var uniqueList = []
  var set = new Set(list)

  set.forEach(function (item) {
    uniqueList.push(item)
  })

  return uniqueList
}

module.exports = makeUnique
