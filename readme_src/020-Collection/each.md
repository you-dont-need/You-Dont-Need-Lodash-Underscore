### _.each

Iterates over a list of elements, yielding each in turn to an iteratee function.

  ```js
  // Underscore/Lodash
  //For arrays
  _.each([1, 2, 3], function (value, index) {
    console.log(value)
  })
  // output: 1 2 3

  //For objects
  _.each({'one':1, 'two':2, 'three':3}, function(value) {
    console.log(value)
  })
  // output: 1 2 3

  // Native
  //For arrays
  [1, 2, 3].forEach(function (value, index) {
    console.log(value)
  })
  // output: 1 2 3

  //For objects
  Object.entries({'one':1, 'two':2, 'three':3}).forEach(function([key,value],index) {
    console.log(value)
  })
  //output: 1 2 3
  ```

#### Browser Support for `Array.prototype.forEach()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9.0 ✔  |  ✔  |  ✔  |

#### Browser Support for `Object.entries().forEach()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  54 ✔  | 14 ✔ | 47 ✔ |  ✖  |  41 ✔  |  10.1✔  |

**[⬆ back to top](#quick-links)**
