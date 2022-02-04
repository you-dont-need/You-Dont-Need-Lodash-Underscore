### _.extend

The method is used to copy the values of all enumerable own and inherited properties from one or more source objects to a target object.

  ```js
  // Underscore
  // Lodash: _.assignIn
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = _.extend({}, new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }

  // Native
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = Object.assign({}, new Foo, Foo.prototype, new Bar, Bar.prototype);
  console.log(result);
  // output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }

  //Or using a function
  const extend = (target, ...sources) => {
   const length = sources.length;

    if (length < 1 || target == null) return target;
    for (let i = 0; i < length; i++) {
      const source = sources[i];

      for (const key in source) {
        target[key] = source[key];
      }
    }
    return target;
  };
  console.log(extend({}, new Foo, new Bar));
  // output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }
  ```

#### Browser Support for `Object.assign()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔  | ✔ | 34.0 ✔ |  ✖  |  32.0 ✔ |  9.0 ✔  |

 **[⬆ back to top](#quick-links)**

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

  **[⬆ back to top](#quick-links)**


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

#### Browser Support for Object destructing

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  49.0 ✔  | 14.0 ✔ |  41.0 ✔ |  ✖  |  41.0 ✔ |  8.0 ✔ |

#### Browser Support for optional chaining `?.`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  80.0 ✔  | 80.0 ✔ |  74.0 ✔ |  ✖  |  67.0 ✔ |  13.1 ✔ |

#### Browser Support for nullish coalescing operator `??`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  80.0 ✔  | 80.0 ✔ |  72.0 ✔ |  ✖  |  ✖ |  13.1 ✔ |

  **[⬆ back to top](#quick-links)**
