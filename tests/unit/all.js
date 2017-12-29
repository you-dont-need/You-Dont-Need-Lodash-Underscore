'use strict';
const assert = require('assert');
const _ = require('lodash');

let tests = {}

tests.compact = function(){
  assert.deepEqual(
    _.compact([0, 1, false, 2, '', 3]),
    [0, 1, false, 2, '', 3].filter(v => v)
  )
}

tests.concat = function() {
  const lodashArray = [1]
  const lodashResult = _.concat(lodashArray, 2, [3], [[4]])

  const nativehArray = [1]
  const nativeResult = nativehArray.concat(2, [3], [[4]])

  assert.deepEqual(lodashResult, nativeResult)
}

tests.fill1 = function() {
  var array = [1, 2, 3]
  assert.deepEqual(
    _.fill(array, 'a'),
    array.fill('a')
  )
}

tests.fill2 = function() {
  assert.deepEqual(
    _.fill(Array(3), 2),
    Array(3).fill(2)
  )
}

tests.fill3 = function() {
  assert.deepEqual(
    _.fill([4, 6, 8, 10], '*', 1, 3),
    [4, 6, 8, 10].fill('*', 1, 3)
  )
}

// Run tests
Object.values(tests).forEach((testFn]) => {
  testFn()
})