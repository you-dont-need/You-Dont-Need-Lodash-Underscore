### _.isDate

Checks if value is classified as a Date object.

```js
// Lodash
console.log(_.isDate(new Date));
// output: true

// Native
console.log(Object.prototype.toString.call(new Date) === "[object Date]");
// output: true
```
