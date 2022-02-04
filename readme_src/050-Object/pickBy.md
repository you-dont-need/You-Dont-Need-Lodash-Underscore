### _.pickBy

Creates an object composed of the object properties predicate returns truthy for.

  ```js
  var object = { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined };

  // Underscore/Lodash
  var result = _.pickBy(object);
  console.log(result)
  // output: {a: 1, c: 3}

  // Native
  function pickBy(object) {
      const obj = {};
      for (const key in object) {
          if (object[key]) {
              obj[key] = object[key];
          }
      }
      return obj;
  }
  var result = pickBy(object);
  console.log(result)
  // output: {a: 1, c: 3}
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |  :-: |
  ✔  | ✔ |  ✔ | 6.0 ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**
