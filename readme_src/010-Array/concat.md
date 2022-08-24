### _.concat

Creates a new array concatenating array with any additional arrays and/or values.

  ```js
  // Underscore/Lodash
  var array = [1]
  var other = _.concat(array, 2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]

  // Native
  var array = [1]
  var other = array.concat(2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]
  ```

<!-- caniuse: es5 -->
