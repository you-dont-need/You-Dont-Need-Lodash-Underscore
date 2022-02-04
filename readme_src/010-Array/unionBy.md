### _.unionBy

Creates an array of unique values, taking an `iteratee` to compute uniqueness with
(note that to iterate by a key in an object you must use `x => x.key` instead of `key` for the `iteratee`)

  ```js
  // Lodash
  var array1 = [2.1];
  var array2 = [1.2, 2.3];
  var result = _.unionBy(array1, array2, Math.floor)
  console.log(result)
  // output: [2.1, 1.2]

  // Native
  var array1 = [2.1];
  var array2 = [1.2, 2.3];
  function unionBy(...arrays) {
      const iteratee = (arrays).pop();

      if (Array.isArray(iteratee)) {
          return []; // return empty if iteratee is missing
      }

      return [...arrays].flat().filter(
          (set => (o) => set.has(iteratee(o)) ? false : set.add(iteratee(o)))(new Set()),
      );
  };
  console.log(unionBy(array1, array2, Math.floor))
  // output: [2.1, 1.2]
  ```

#### Browser Support for `Array.prototype.flat()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |

#### Browser Support for `Array.isArray()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
5.0 ✔  |  ✔  | 4.0 ✔  |  9.0 ✔  |  10.5 ✔  | 5.0 ✔  |

#### Browser Support for `Set.prototype.has()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
38 ✔ | 12 ✔ | 13 ✔ | 11 ✔ | 25 ✔ | 8 ✔ |

**[⬆ back to top](#quick-links)**
