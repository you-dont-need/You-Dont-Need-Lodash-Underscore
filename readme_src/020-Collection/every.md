### _.every

Tests whether all elements in the array pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }
  var array = [10, 20, 30]
  var result = _.every(array, isLargerThanTen)
  console.log(result)
  // output: true

  // Native
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }

  var array = [10, 20, 30]
  var result = array.every(isLargerThanTen)
  console.log(result)
  // output: true
  ```

#### Browser Support fpr `Array.prototype.every()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9.0 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**
