### _.fill

Fills elements of array with value from start up to, but not including, end.
*Note that `fill` is a mutable method in both native and Lodash/Underscore.*

  ```js
  // Underscore/Lodash
  var array = [1, 2, 3]

  _.fill(array, 'a')

  console.log(array)
  // output: ['a', 'a', 'a']

  _.fill(Array(3), 2)
  // output: [2, 2, 2]

  _.fill([4, 6, 8, 10], '*', 1, 3)
  // output: [4, '*', '*', 10]

  // Native
  var array = [1, 2, 3]

  array.fill('a')

  console.log(array)
  // output: ['a', 'a', 'a']

  Array(3).fill(2)
  // output: [2, 2, 2]

  [4, 6, 8, 10].fill('*', 1, 3)
  // output: [4, '*', '*', 10]
  ```

<!-- caniuse: es6 -->
