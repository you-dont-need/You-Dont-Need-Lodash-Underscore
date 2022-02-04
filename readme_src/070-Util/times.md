### _.times
Invokes the iteratee n times, returning an array of the results of each invocation.

  ```js
  // Lodash
  var result = _.times(10)
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'

  // Native
  var result = Array.from({length: 10}, (_,x) => x)
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'

  // Native
  var result = [...Array(10).keys()]
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'
  ```

#### Browser Support for `Array.from()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔  | ✔ |  32.0 ✔ |  ✖  |  ✔ | 9.0 ✔  |

**[⬆ back to top](#quick-links)**
