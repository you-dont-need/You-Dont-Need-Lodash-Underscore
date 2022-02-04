### _.pick

Creates an object composed of the object properties predicate returns truthy for.

  ```js
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // Underscore/Lodash
  var result = _.pick(object, ['a', 'c']);
  console.log(result)
  // output: {a: 1, c: 3}

  // Native
  const { a, c } = object;
  const result = { a, c};
  console.log(result);
  // output: {a: 1, c: 3}
  // for an array of this object --> array.map(({a, c}) => ({a, c}));

  // Native
  function pick(object, keys) {
    return keys.reduce((obj, key) => {
       if (object && object.hasOwnProperty(key)) {
          obj[key] = object[key];
       }
       return obj;
     }, {});
  }
  var result = pick(object, ['a', 'c']);
  console.log(result)
  // output: {a: 1, c: 3}
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  38.0 ✔ | ✔ | 13.0 ✔ |  12.0 ✔  |  25.0 ✔ | 7.1 ✔ |

**[⬆ back to top](#quick-links)**
