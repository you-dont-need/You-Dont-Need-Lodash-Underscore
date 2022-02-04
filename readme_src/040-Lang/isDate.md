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

#### Browser Support for `String.prototype.toString.call()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**
