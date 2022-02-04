### _.keyBy
:heavy_exclamation_mark: `Not in Underscore.js`
Creates an object composed of keys generated from the results of running each element of collection through iteratee.

  ```js
  // Lodash
  console.log(_.keyBy(['a', 'b', 'c']))
  // output: { a: 'a', b: 'b', c: 'c' }
  console.log(_.keyBy([{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }], 'id'))
  // output: { a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } }
  console.log(_.keyBy({ data: { id: 'a1', title: 'abc' }}, 'id'))
  // output: { a1: { id: 'a1', title: 'abc' }}

  // keyBy for array only
  const keyBy = (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});

  // Native
  console.log(keyBy(['a', 'b', 'c']))
  // output: { a: 'a', b: 'b', c: 'c' }
  console.log(keyBy([{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }], 'id'))
  // output: { a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } }
  console.log(keyBy(Object.values({ data: { id: 'a1', title: 'abc' }}), 'id'))
  // output: { a1: { id: 'a1', title: 'abc' }}

  // keyBy for array and object
  const collectionKeyBy = (collection, key) => {
    const c = collection || {};
    return c.isArray() ? keyBy(c, key) : Object.values(keyBy(c, key));
  }
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | 12.0 ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**
