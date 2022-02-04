### _.flatten

Flattens array a single level deep.

  ```js
  // Underscore/Lodash
  _.flatten([1, [2, [3, [4]], 5]]);
  // => [1, 2, [3, [4]], 5]

  // Native
  const flatten = [1, [2, [3, [4]], 5]].reduce( (a, b) => a.concat(b), [])
  // => [1, 2, [3, [4]], 5]

  const flatten = [].concat(...[1, [2, [3, [4]], 5]])
  // => [1, 2, [3, [4]], 5]

  // Native(ES2019)
  const flatten = [1, [2, [3, [4]], 5]].flat()
  // => [1, 2, [3, [4]], 5]

  const flatten = [1, [2, [3, [4]], 5]].flatMap(number => number)
  // => [1, 2, [3, [4]], 5]
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |  :-: |
  46.0 ✔ |  ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4 ✔ |

#### Browser Support for `Array.prototype.flat()`


![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |

#### Browser Support for `Array.prototype.flatMap()`


![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |

**[⬆ back to top](#quick-links)**
