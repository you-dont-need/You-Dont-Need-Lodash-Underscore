### _.reverse

:heavy_exclamation_mark:`Not in Underscore.js`
Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

  ```js
  // Lodash
  var array = [1, 2, 3]
  console.log(_.reverse(array))
  // output: [3, 2, 1]

  // Native
  var array = [1, 2, 3]
  console.log(array.reverse())
  // output: [3, 2, 1]
  ```

Voice from the Lodash author:

>Lodash's `_.reverse` just calls `Array#reverse` and enables composition like `_.map(arrays, _.reverse).`
It's exposed on _ because previously, like `Underscore`, it was only exposed in the chaining syntax.
>--- [jdalton](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore/commit/22c4bcf2be48dd415d2b073759805562e520b615#)

#### Browser Support for `Array.prototype.reverse()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**
