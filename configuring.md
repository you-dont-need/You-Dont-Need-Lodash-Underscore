## Configuring the ESLint Plugin


### If you haven't already, add ESLint to your project

```sh
npm install --save-dev eslint
```

### Add the plugin

```sh
npm install --save-dev eslint-plugin-you-dont-need-lodash-underscore
```

### Add the plugin to your .eslintrc.js file

```js
"plugins": ["you-dont-need-lodash-underscore"],
```

If you already have plugins installed, just add to the array.

```js
"plugins": ["react", "you-dont-need-lodash-underscore"],
```

### Now configure your plugin.

You can enable or disable individual rules.

```js
"rules": {
  "you-dont-need-lodash-underscore/for-each": "error",
  "you-dont-need-lodash-underscore/concat": "warn",
  "you-dont-need-lodash-underscore/map": "off",
  ...
}
```

To save the trouble of configuring each rule individually, you can start by extending one of the
default configurations, and then override individual rules as desired.

```js
"extends" : ["plugin:you-dont-need-lodash-underscore/compatible"],
```

The following options are available:

- you-dont-need-lodash-underscore:all-warn (all rules set to warn)
- you-dont-need-lodash-underscore:all (all rules set to error)
- you-dont-need-lodash-underscore:compatible-warn (rules in which the native implementation is perfectly compatible with the _ one are set to warn, the rest are disabled)
- you-dont-need-lodash-underscore:compatible (rules in which the native implementation is perfectly compatible with _ one are set to error, the rest are set to warn)


For more information, see the [ESLint documentation](http://eslint.org/docs/user-guide/configuring).
