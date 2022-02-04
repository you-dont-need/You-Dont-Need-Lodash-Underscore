### _.head
Gets the first element or all but the first element.

  ```js
  const array = [1, 2, 3]

  // Underscore: _.first, _.head, _.take
  // Lodash: _.first, _.head
  _.head(array)
  // output: 1

  // Native
  const [ head, ...tail ] = array
  console.log(head)
  // output: 1
  ```

#### Browser Support for Spread in array literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  46.0 ✔  | 12.0 ✔ |  16.0 ✔ |  ✖ |  37.0 ✔ | 8.0 ✔  |

**[⬆ back to top](#quick-links)**
