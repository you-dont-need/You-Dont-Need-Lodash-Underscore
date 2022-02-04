### _.template
:heavy_exclamation_mark: *Note this is an alternative implementation. Native template literals not escape html.*

Create a template function.

  ```js
  // Lodash/Underscore
  const compiled = _.template('hello <%= user %>!');
  var result = compiled({ 'user': 'fred' });
  console.log(result);
  // output: 'hello fred'

  // Native
  const templateLiteral = (value) => `hello ${value.user}`;
  var result = templateLiteral({ 'user': 'fred' });
  console.log(result);
  // output: 'hello fred'
  ```

#### Browser Support for String (template) literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  41.0 ✔  | 12.0 ✔ | 34.0 ✔ |  ✖  |  28.0 ✔ |  9.0 ✔  |

**[⬆ back to top](#quick-links)**
