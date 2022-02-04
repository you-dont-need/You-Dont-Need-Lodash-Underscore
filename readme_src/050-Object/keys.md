### _.keys

Retrieves all the names of the object's own enumerable properties.

  ```js
  // Underscore/Lodash
  var result = _.keys({one: 1, two: 2, three: 3})
  console.log(result)
  // output: ["one", "two", "three"]

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: ["one", "two", "three"]
  ```

<!-- caniuse: es5 -->
