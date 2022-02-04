### _.dropRight

Creates a slice of array with n elements dropped at the end.

  ```js
  // Underscore/Lodash
  _.dropRight([1, 2, 3]);
  // => [1, 2]

  _.dropRight([1, 2, 3], 2);
  // => [1]

  // Native
  [1, 2, 3].slice(0, -1);
  // => [1, 2]

  [1, 2, 3].slice(0, -2);
  // => [1]
  ```

#### Browser Support for `Array.prototype.slice()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**
