### _.bind
Create a new function that calls _func_ with _thisArg_ and _args_.

  ```js
  var objA = {
    x: 66,
    offsetX: function(offset) {
      return this.x + offset;
    }
  }

  var objB = {
    x: 67
  };

  // Underscore/Lodash
  var boundOffsetX = _.bind(objA.offsetX, objB, 0);

  // Native
  var boundOffsetX = objA.offsetX.bind(objB, 0);
  ```

<!-- caniuse: es5 -->
