### _.without
:heavy_exclamation_mark:`Not in Underscore.js`
Returns an array where matching items are filtered.

  ```js
  // Lodash
  var array = [1, 2, 3]
  console.log(_.without(array, 2))
  // output: [1, 3]

  // Native
  var array = [1, 2, 3]
  console.log(array.filter(function(value) {
    return value !== 2;
  }));
  // output: [1, 3]
  ```

#### Browser Support for `Array.prototype.filter()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  | ✔ | 1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**
