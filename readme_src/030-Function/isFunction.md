### _.isFunction

Checks if value is classified as a _Function_ object.

```js
// Lodash
_.isFunction(console.log);
// => true

_.isFunction(/abc/);
// => false

// Native
function isFunction(func) {
  return typeof func === "function";
}

isFunction(setTimeout);
// => true

isFunction(123);
// => false
```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
 ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

 **[⬆ back to top](#quick-links)**
