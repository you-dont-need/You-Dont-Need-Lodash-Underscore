### _.isNil
:heavy_exclamation_mark:`Not in Underscore.js`
Checks if value is null or undefined.

```js
// Lodash
console.log(_.isNil(null))
// output: true
console.log(_.isNil(NaN))
// output: false
console.log(_.isNil(undefined))
// output: true

// Native
console.log(null == null);
// output: true
console.log(NaN == null);
// output: false
console.log(undefined == null)
// output: true
```
