### _.range

Creates an array of numbers progressing from start up to.

  ```js
  // Underscore/Lodash
  _.range(4)  // output: [0, 1, 2, 3]
  _.range(-4) // output: [0, -1, -2, -3]
  _.range(1, 5)     // output: [1, 2, 3, 4]
  _.range(0, 20, 5) // output: [0, 5, 10, 15]

  // Native ( solution with Array.from )
  Array.from({length: 4}, (_, i) => i)  // output: [0, 1, 2, 3]
  Array.from({length: 4}, (_, i) => -i) // output: [-0, -1, -2, -3]
  Array.from({length: 4}, (_, i) => i + 1) // output: [1, 2, 3, 4]
  Array.from({length: 4}, (_, i) => i * 5) // output: [0, 5, 10, 15]

  // Native ( solution with keys() and spread )
  [...Array(4).keys()]  // output: [0, 1, 2, 3]
  [...Array(4).keys()].map(k => -k) // output: [-0, -1, -2, -3]
  [...Array(4).keys()].map(k => k + 1)  // output: [1, 2, 3, 4]
  [...Array(4).keys()].map(k => k * 5)  // output: [0, 5, 10, 15]
  ```


#### Browser Support for `Array.from()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 45.0 ✔  |  ✔ |  32.0 ✔ |  ✖   |  ✔ |  9.0 ✔ |

<!-- caniuse: es6 -->
