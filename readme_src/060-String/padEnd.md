### _.padEnd
:heavy_exclamation_mark:`Not in Underscore.js`
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

  ```js
  // Lodash
  console.log(_.padEnd('123', 5, '0'))
  // output: '12300'

  // Native
  console.log('123'.padEnd(5, '0'))
  // output: '12300'
  ```

#### Browser Support for `String.prototype.padEnd()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  57.0 ✔  |  15.0 ✔ | 48.0 ✔ |  ✖  |  44.0 ✔ |  10.0 ✔ |

**[⬆ back to top](#quick-links)**
