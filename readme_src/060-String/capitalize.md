### _.capitalize

:heavy_exclamation_mark:`Not in Underscore.js`
Converts the first character of string to upper case and the remaining to lower case.

  ```js
  // Lodash
  var result = _.capitalize('FRED');
  console.log(result);
  // => 'Fred'

  // Native
  const capitalize = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '';
  };

  var result = capitalize('FRED');
  console.log(result);
  // => 'Fred'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

**[⬆ back to top](#quick-links)**
