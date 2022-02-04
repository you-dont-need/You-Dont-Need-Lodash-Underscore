### _.drop

Creates a slice of array with n elements dropped from the beginning.

  ```js
  // Underscore/Lodash
  _.drop([1, 2, 3]);
  // => [2, 3]

  _.drop([1, 2, 3], 2);
  // => [3]

  // Native
  [1, 2, 3].slice(1);
  // => [2, 3]

  [1, 2, 3].slice(2);
  // => [3]
  ```

#### Browser Support for `Array.prototype.slice()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**
