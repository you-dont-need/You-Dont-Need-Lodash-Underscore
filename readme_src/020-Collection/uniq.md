### _.uniq

Produces a duplicate-free version of the array, using === to test object equality.

  ```js
  // Underscore/Lodash
  var array = [1, 2, 1, 4, 1, 3]
  var result = _.uniq(array)
  console.log(result)
  // output: [1, 2, 4, 3]

  // Native
  var array = [1, 2, 1, 4, 1, 3];
  var result = [...new Set(array)];
  console.log(result)
  // output: [1, 2, 4, 3]
  ```

#### Browser Support for Spread in array literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 46.0  ✔  | 12.0 ✔ | 16.0 ✔ |  ✖  |  37.0 ✔  |  8.0 ✔  |

**[⬆ back to top](#quick-links)**
