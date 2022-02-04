### _.castArray

Puts the value into an array of length one if it is not already an array.

```js
// Underscore
console.log(_.castArray(5))
// output: [5]
console.log(_.castArray([2]))
// output: [2]

// Native
function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr]
}
// output: true
console.log(castArray(5));
// output: [5]
console.log(castArray([2]));
// output: [2]
```

<!-- caniuse: es5 -->