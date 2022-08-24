### _.includes

Checks if a value is in collection.

  ```js
  var array = [1, 2, 3]
  // Underscore/Lodash - also called _.contains
  _.includes(array, 1)
  // output: true

  // Native
  var array = [1, 2, 3]
  array.includes(1)
  // output: true

  // Native (does not use same value zero)
  var array = [1, 2, 3]
  array.indexOf(1) > -1
  // output: true
  ```

<!-- caniuse: array-includes -->
<!-- caniuse: es5 -->
