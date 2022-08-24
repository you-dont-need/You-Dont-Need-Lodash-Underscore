### _.initial

Returns everything but the last entry of the array. Pass n to exclude the last n elements from the result.

  ```js
  // Underscore
  var array = [5, 4, 3, 2, 1]
  console.log(_.initial(array, 2))
  // output: [5, 4, 3]

  // Native
  var array = [5, 4, 3, 2, 1]
  console.log(array.slice(0, -2));
  // output: [5, 4, 3]
  ```

<!-- caniuse: es6 -->
