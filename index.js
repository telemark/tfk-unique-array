'use strict'

module.exports = (list) => {
  if (!list) {
    throw new Error('Missing required input: array')
  }

  if (!Array.isArray(list)) {
    throw new Error('Wrong input type: array is required')
  }

  const filtered = list.map(item => JSON.stringify(item))
  const set = new Set(filtered)
  var uniqueList = []

  set.forEach(item => { uniqueList.push(JSON.parse(item)) })

  return uniqueList
}
