### _.map

Translates all items in an array or object to new array of items.

  ```js
  // Underscore/Lodash
  var array1 = [1, 2, 3]
  var array2 = _.map(array1, function (value, index) {
    return value * 2
  })
  console.log(array2)
  // output: [2, 4, 6]

  // Native
  var array1 = [1, 2, 3]
  var array2 = array1.map(function (value, index) {
    return value * 2
  })
  console.log(array2)
  // output: [2, 4, 6]
  ```

  ```js
  // Underscore/Lodash
  var object1 = { 'a': 1, 'b': 2, 'c': 3 }
  var object2 = _.map(object1, function (value, index) {
    return value * 2
  })
  console.log(object2)
  // output: [2, 4, 6]

  // Native
  var object1 = { 'a': 1, 'b': 2, 'c': 3 }
  var object2 = Object.entries(object1).map(function ([key, value], index) {
    return value * 2
  })
  console.log(object2)
  // output: [2, 4, 6]
  ```

<!-- caniuse: object-entries -->
<!-- caniuse: es6 -->
