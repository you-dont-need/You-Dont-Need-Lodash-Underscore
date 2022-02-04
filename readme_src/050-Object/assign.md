### _.assign

The method is used to copy the values of all enumerable own properties from one or more source objects to a target object.

  ```js
  // Underscore: _.extendOwn
  // Lodash
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = _.assign(new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'e': 5 }

  // Native
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = Object.assign({}, new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'e': 5 }
  ```

#### Browser Support for `Object.assign()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔  | ✔ | 34.0 ✔ |  ✖  |  32.0 ✔ |  9.0 ✔  |

 **[⬆ back to top](#quick-links)**
