### _.omit

Returns a copy of the object, filtered to omit the keys specified.

  ```js
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // Underscore/Lodash
  var result = _.omit(object, ['a', 'c']);
  console.log(result)
  // output: { 'b': '2' }

  // Native
  var { a, c, ...result2 } = object;
  console.log(result2)
  // output: { 'b': '2' }
  ```

#### Browser Support for Spread in object literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  60.0 ✔ | ✖ | 55.0 ✔ |  ✖ |  37.0 ✔ | ✖ |

**[⬆ back to top](#quick-links)**
