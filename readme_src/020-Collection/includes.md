### _.includes

Checks if a value is in collection.

  ```js
  var array = [1, 2, 3]
  // Underscore/Lodash - also called _.contains
  _.includes(array, 1)
  // output: true

  // Native
  var array = [1, 2, 3]
  array.includes(1)
  // output: true

  // Native (does not use same value zero)
  var array = [1, 2, 3]
  array.indexOf(1) > -1
  // output: true
  ```

#### Browser Support for `Array.prototype.includes`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  47.0 ✔  | 14.0 ✔ | 43.0 ✔ |  ✖  |  34.0 ✔ |  9.0 ✔ |

#### Browser Support for `Array.prototype.indexOf`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔ | ✔ | 1.5 ✔ | 9.0 ✔ | ✔ | ✔ |

**[⬆ back to top](#quick-links)**
