### _.toPairs

Retrieves all the given object's own enumerable property `[ key, value ]` pairs.

  ```js
  // Underscore - also called _.pairs
  // Lodash - also called _.entries
  var result = _.toPairs({one: 1, two: 2, three: 3})
  console.log(result)
  // output: [["one", 1], ["two", 2], ["three", 3]]

  // Native
  var result2 = Object.entries({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: [["one", 1], ["two", 2], ["three", 3]]
  ```

#### Browser Support for `Object.entries()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  54.0 ✔  | 14.0 ✔  | 47.0 ✔ |  ✖  |  41.0 ✔ |  10.1 ✔ |

**[⬆ back to top](#quick-links)**
