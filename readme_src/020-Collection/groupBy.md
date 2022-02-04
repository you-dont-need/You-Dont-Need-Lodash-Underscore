### _.groupBy

Group items by key.

  ```js
  // Underscore/Lodash
  var grouped = _.groupBy(['one', 'two', 'three'], 'length')
  console.log(grouped)
  // output: {3: ["one", "two"], 5: ["three"]}

  // Native
  var grouped = ['one', 'two', 'three'].reduce((r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r), {})
  console.log(grouped)
  // output: {3: ["one", "two"], 5: ["three"]}
  ```

  ```js
  // Underscore/Lodash
  var grouped = _.groupBy([1.3, 2.1, 2.4], num => Math.floor(num))
  console.log(grouped)
  // output: {1: [1.3], 2: [2.1, 2.4]}

  // Native
  var grouped = [1.3, 2.1, 2.4].reduce((r, v, i, a, k = Math.floor(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
  console.log(grouped)
  // output: {1: [1.3], 2: [2.1, 2.4]}
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔  | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**
