### _.isArrayBuffer

Checks if value is classified as an ArrayBuffer object.

  ```js
  // Lodash
  _.isArrayBuffer(new ArrayBuffer(2));
  // output: true

  // Native
  console.log(new ArrayBuffer(2) instanceof ArrayBuffer);
  // output: true
  ```

  :warning: You will get the wrong result if you get `ArrayBuffer` from another realm. [See details.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_context_e.g._frames_or_windows)

<!-- caniuse: sharedarraybuffer -->
