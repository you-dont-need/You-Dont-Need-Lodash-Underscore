### _.fromPairs

Returns an object composed from key-value pairs.

  ```js
  // Underscore/Lodash
  _.fromPairs([['a', 1], ['b', 2]]);
  // => { 'a': 1, 'b': 2 }

  // Native
  const fromPairs = function(arr) {
    return arr.reduce(function(accumulator, value) {
      accumulator[value[0]] = value[1];
      return accumulator;
    }, {})
  }

  // Compact form
  const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1], acc), {})

  fromPairs([['a', 1], ['b', 2]]);
  // => { 'a': 1, 'b': 2 }

  // Native(ES2019)
  Object.fromEntries([['a', 1], ['b', 2]])
  // => { 'a': 1, 'b': 2 }
  ```

<!-- caniuse: es6 -->

#### Browser Support for `Object.fromEntries()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  73.0 ✔  | 79.0 ✔ | 63.0 ✔ |  ✖  |  60 ✔ |  12.1 ✔ |
