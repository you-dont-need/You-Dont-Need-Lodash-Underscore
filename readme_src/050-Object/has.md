
### _.has

Checks if `key` is a direct property of `object`. Key may be a path of a value separated by `.`

  ```js
  // Lodash
  var object = { a: 1, b: 'settings', c: { d: 'test' } };

  var hasA = _.has(object, 'a');
  var hasCWhichHasD = _.has(object, 'c.d')

  console.log(hasA);
  // output: true
  console.log(hasCWhichHasD);
  // output: true

  // Native
  const has = function (obj, key) {
    var keyParts = key.split('.');

    return !!obj && (
      keyParts.length > 1
        ? has(obj[key.split('.')[0]], keyParts.slice(1).join('.'))
        : hasOwnProperty.call(obj, key)
    );
  };

  var object = { a: 1, b: 'settings' };
  var result = has(object, 'a');
  // output: true
  ```

#### Browser Support for Object .hasOwnProperty

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | 12 ✔ |  ✔ |  5.5 ✔ |  5 ✔ |  3 ✔ |
