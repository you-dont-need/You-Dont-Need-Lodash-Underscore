### _.endsWith
:heavy_exclamation_mark:`Not in Underscore.js`
Checks if string ends with the given target string.

  ```js
  // Lodash
  _.endsWith('abc', 'c');
  // => true

  _.endsWith('abc', 'b');
  // => false

  _.endsWith('abc', 'b', 2);
  // => true

  // Native
  'abc'.endsWith('c');
  // => true

  'abc'.endsWith('b');
  // => false

  'abc'.endsWith('b', 2);
  // => true
  ```

#### Browser Support for `String.prototype.endsWith()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  41.0 ✔  |  ✔ | 17.0 ✔ |  ✖  |  28.0 ✔ |  9.0 ✔ |

**[⬆ back to top](#quick-links)**
