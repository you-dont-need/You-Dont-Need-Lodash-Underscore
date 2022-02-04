### _.tail

Gets the first element or all but the first element.

  ```js
  const array = [1, 2, 3]

  // Underscore: _.rest, _.tail, _.drop
  // Lodash: _.tail
  _.tail(array)
  // output: [2, 3]


  // Native
  const [ head, ...tail ] = array
  console.log(tail)
  // output [2, 3]
  ```

#### Browser Support for Spread in array literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  46.0 ✔  | 12.0 ✔ |  16.0 ✔ |  ✖ |  37.0 ✔ | 8.0 ✔  |

**[⬆ back to top](#quick-links)**
