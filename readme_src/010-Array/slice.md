### _.slice

Returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included)

  ```js
  // Lodash
  var array = [1, 2, 3, 4]
  console.log(_.slice(array, 1, 3))
  // output: [2, 3]

  // Native
  var array = [1, 2, 3, 4]
  console.log(array.slice(1, 3));
  // output: [2, 3]
  ```

#### Browser Support for `Array.prototype.slice()`

 ![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**
