### _.reduceRight

This method is like _.reduce except that it iterates over elements of collection from right to left.

  ```js
  // Underscore/Lodash
  var array = [0, 1, 2, 3, 4]
  var result = _.reduceRight(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue - currentValue
  })
  console.log(result)
  // output: -2

  // Native
  var array = [0, 1, 2, 3, 4]
  var result = array.reduceRight(function (previousValue, currentValue, currentIndex, array) {
    return previousValue - currentValue
  })
  console.log(result)
  // output: -2
  ```

<!-- caniuse: es5 -->
