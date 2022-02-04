### _.compact

Creates an array with all falsy values removed.

  ```js
  // Underscore/Lodash
  _.compact([0, 1, false, 2, '', 3]);

  // Native
  [0, 1, false, 2, '', 3].filter(Boolean)
  ```

#### Browser Support for `array.prototype.filter`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ |  1.5 ✔ |  9.0 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**
