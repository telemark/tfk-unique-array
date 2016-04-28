'use strict'

function makeUnique (list) {
  if (!list) {
    throw new Error('Missing required input: array')
  }

  if (!Array.isArray(list)) {
    throw new Error('Wrong input type: array is required')
  }

  var filtered = list.map(function (item) {
    return JSON.stringify(item)
  })
  var uniqueList = []
  var set = new Set(filtered)

  set.forEach(function (item) {
    uniqueList.push(JSON.parse(item))
  })

  return uniqueList
}

module.exports = makeUnique
