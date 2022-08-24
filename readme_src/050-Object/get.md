### _.get

Gets the value at path of object.
*Note: If provided path does not exist inside the object js will generate error.*

  ```js
  // Lodash
  var object = { a: [{ b: { c: 3 } }] };
  var result = _.get(object, 'a[0].b.c', 1);
  console.log(result);
  // output: 3

  // Native (ES6 - IE not supported)
  var object = { a: [{ b: { c: 3 } }] };
  var { a: [{ b: { c: result = 1 } = {} } = {}] = [] } = object;
  console.log(result);
  // output: 3

  // Native (ES11)
  var object = { a: [{ b: { c: 3 } }] };
  var result = object?.a?.[0]?.b?.c ?? 1;
  console.log(result);
  // output: 3

  // Native
  const get = (obj, path, defaultValue = undefined) => {
    const travel = regexp =>
      String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
  };

  var object = { a: [{ b: { c: 3 } }] };
  var result = get(object, 'a[0].b.c', 1);
  // output: 3

  ```

#### Browser Support for optional chaining `?.`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  80.0 ✔  | 80.0 ✔ |  74.0 ✔ |  ✖  |  67.0 ✔ |  13.1 ✔ |

#### Browser Support for nullish coalescing operator `??`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  80.0 ✔  | 80.0 ✔ |  72.0 ✔ |  ✖  |  ✖ |  13.1 ✔ |

<!-- caniuse: es6 -->
