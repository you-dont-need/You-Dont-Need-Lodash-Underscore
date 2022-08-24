### _.size

Returns the number of values in the collection.

  ```js
  // Underscore/Lodash
  var result = _.size({one: 1, two: 2, three: 3})
  console.log(result)
  // output: 3

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3}).length
  console.log(result2)
  // output: 3
  ```

<!-- caniuse: es5 -->
