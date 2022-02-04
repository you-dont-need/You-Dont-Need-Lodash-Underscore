### _.some

Tests whether any of the elements in the array pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }
  var array = [10, 9, 8]
  var result = _.some(array, isLargerThanTen)
  console.log(result)
  // output: true

  // Native
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }

  var array = [10, 9, 8]
  var result = array.some(isLargerThanTen)
  console.log(result)
  // output: true
  ```

#### Browser Support for `Array.prototype.some()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  ✔ 9.0  |  ✔  | ✔  |
