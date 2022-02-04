### _.lastIndexOf

Returns the index of the last occurrence of value in the array, or -1 if value is not present.

  ```js
  // Underscore/Lodash
  var array = [2, 9, 9, 4, 3, 6]
  var result = _.lastIndexOf(array, 9)
  console.log(result)
  // output: 2

  // Native
  var array = [2, 9, 9, 4, 3, 6]
  var result = array.lastIndexOf(9)
  console.log(result)
  // output: 2
  ```

<!-- caniuse: es5 -->
