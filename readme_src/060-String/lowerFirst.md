### _.lowerFirst
:heavy_exclamation_mark:`Not in Underscore.js`
Converts the first character of string to lower case.

  ```js
  // Lodash
  var result = _.lowerFirst('Fred')
  console.log(result)
  // output: 'fred'

  // Native
  const lowerFirst = (string) => {
    return string ? string.charAt(0).toLowerCase() + string.slice(1) : ''
  }

  var result = lowerFirst('Fred')
  console.log(result)
  // output: 'fred'
  ```
![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ |  ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**
