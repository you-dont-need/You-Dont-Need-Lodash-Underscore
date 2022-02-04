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

#### Browser Support for `Object.values()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  54.0 ✔  | 14.0 ✔ |  47.0 ✔ |  ✖  |  41.0 ✔ |  10.1 ✔ |

**[⬆ back to top](#quick-links)**
