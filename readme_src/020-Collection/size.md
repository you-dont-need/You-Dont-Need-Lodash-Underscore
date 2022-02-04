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

#### Browser Support for `Object.keys()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  5.0 ✔  | ✔ | 4.0 ✔ |  9.0 ✔ |  12.0 ✔ |  5.0 ✔ |

**[⬆ back to top](#quick-links)**
