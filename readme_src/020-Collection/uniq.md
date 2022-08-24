### _.uniq

Produces a duplicate-free version of the array, using === to test object equality.

  ```js
  // Underscore/Lodash
  var array = [1, 2, 1, 4, 1, 3]
  var result = _.uniq(array)
  console.log(result)
  // output: [1, 2, 4, 3]

  // Native
  var array = [1, 2, 1, 4, 1, 3];
  var result = [...new Set(array)];
  console.log(result)
  // output: [1, 2, 4, 3]
  ```

<!-- caniuse: es6 -->
