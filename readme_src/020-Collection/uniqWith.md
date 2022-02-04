### _.uniqWith

similar to _.uniq except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.

  ```js
  // Lodash
  const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
  const result = _.uniqWith(objects, _.isEqual);
  console.log(result);
  // output: [{ x: 1, y: 2 }, { x: 2, y: 1 }]

  // Native
  const uniqWith = (arr, fn) => arr.filter((element, index) => arr.findIndex((step) => fn(element, step)) === index);

  const array = [1, 2, 2, 3, 4, 5, 2];
  const result = uniqWith(array, (a, b) => a === b);
  console.log(result);
  // output: [1, 2, 3, 4, 5]

  const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
  const result = uniqWith(objects, (a, b) => JSON.stringify(a) === JSON.stringify(b));
  console.log(result);
  // output: [{ x: 1, y: 2 }, { x: 2, y: 1 }]
  ```

#### Browser Support for `Array.prototype.filter()` and `Array.prototype.findIndex()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 45.0  ✔  | 12.0 ✔ | 25.0 ✔ |  ✖  |  32.0 ✔  |  8.0 ✔  |

**[⬆ back to top](#quick-links)**
