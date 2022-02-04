### _.flattenDeep

Recursively flattens array.

  ```js
  // Underscore/Lodash
  _.flattenDeep([1, [2, [3, [4]], 5]]);
  // => [1, 2, 3, 4, 5]

  // Native
  const flattenDeep = (arr) => Array.isArray(arr)
    ? arr.reduce( (a, b) => a.concat(flattenDeep(b)) , [])
    : [arr]

  flattenDeep([1, [[2], [3, [4]], 5]])
  // => [1, 2, 3, 4, 5]

  // Native(ES2019)
  [1, [2, [3, [4]], 5]].flat(Infinity)
  // => [1, 2, 3, 4, 5]

  const flattenDeep = (arr) => arr.flatMap((subArray, index) => Array.isArray(subArray) ? flattenDeep(subArray) : subArray)

  flattenDeep([1, [[2], [3, [4]], 5]])
  // => [1, 2, 3, 4, 5]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  46.0 ✔ |  ✔ | 16.0 ✔ |  ✖  |  37.0 ✔ |  7.1 ✔ |


#### Browser Support for `Array.prototype.flat()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |


#### Browser Support for `Array.prototype.flatMap()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |


**[⬆ back to top](#quick-links)**
