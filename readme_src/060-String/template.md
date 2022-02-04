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

<!-- caniuse: template-literals -->
