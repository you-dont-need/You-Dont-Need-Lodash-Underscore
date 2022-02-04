### _.reduce

Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

  ```js
  // Underscore/Lodash
  var array = [0, 1, 2, 3, 4]
  var result = _.reduce(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
  })
  console.log(result)
  // output: 10

  // Native
  var array = [0, 1, 2, 3, 4]
  var result = array.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
  })
  console.log(result)
  // output: 10
  ```

<!-- caniuse: es6 -->
