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

<!-- caniuse: es6 -->
