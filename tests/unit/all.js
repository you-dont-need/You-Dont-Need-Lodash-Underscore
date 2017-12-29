'use strict';
const assert = require('assert');
const _ = require('lodash');

describe('code snippet example', () => {

  it('compact', () => {
    assert.deepEqual(
      _.compact([0, 1, false, 2, '', 3]),
      [0, 1, false, 2, '', 3].filter(v => v)
    )
  })

  it('concat', () => {
    const lodashArray = [1]
    const lodashResult = _.concat(lodashArray, 2, [3], [[4]])

    const nativehArray = [1]
    const nativeResult = nativehArray.concat(2, [3], [[4]])

    assert.deepEqual(lodashResult, nativeResult)
  })

  describe('fill', () => {
    it("_.fill(array, 'a')", () => {
      var array = [1, 2, 3]
      assert.deepEqual(
        _.fill(array, 'a'),
        array.fill('a')
      )
    })
    it("_.fill(Array(3), 2)", () => {
      assert.deepEqual(
        _.fill(Array(3), 2),
        Array(3).fill(2)
      )
    })

    it("_.fill([4, 6, 8, 10], '*', 1, 3)", () => {
      assert.deepEqual(
        _.fill([4, 6, 8, 10], '*', 1, 3),
        [4, 6, 8, 10].fill('*', 1, 3)
      )
    })
  })
})