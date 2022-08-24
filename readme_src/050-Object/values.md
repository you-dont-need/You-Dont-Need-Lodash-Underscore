### _.values

Retrieves all the given object's own enumerable property values.

  ```js
  // Underscore/Lodash
  var result = _.values({one: 1, two: 2, three: 3})
  console.log(result)
  // output: [1, 2, 3]

  // Native
  var result2 = Object.values({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: [1, 2, 3]
  ```

<!-- caniuse: es6 -->
