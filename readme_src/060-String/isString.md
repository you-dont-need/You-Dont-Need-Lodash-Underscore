### _.isString

Checks if value is classified as a String primitive or object.

  ```js
  // Lodash
  _.isString('abc');
  // => true

  _.isString(123);
  // => false

  // Native
  function isString(str){
    if (str != null && typeof str.valueOf() === "string") {
      return true
    }
    return false
  }

  isString('abc');
  // => true

  isString(123);
  // => false
  ```
