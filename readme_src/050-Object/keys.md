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

#### Browser Support for `Object.keys()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |  :-: |
  5.0 ✔  | ✔ | 4.0 ✔ |  9.0 ✔ |  12.0 ✔ |  5.0 ✔ |

**[⬆ back to top](#quick-links)**
