'use strict';
const RuleTester = require('eslint').RuleTester;
const assert = require('assert');
const rules = require('../../../lib/rules/all');
const allRules = require('../../../lib/rules/rules');

assert.equal(Object.keys(allRules).length, 54, 'Don\'t miss a rule 😄');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2018, sourceType: "module" }
});

// Only a couple of smoke tests because otherwise it would get very reduntant

ruleTester.run('_.concat', rules.concat, {
  valid: [
    'array.concat(2, [3], [[4]])'
  ],
  invalid: [{
    code: '_.concat(array, 2, [3], [[4]])',
    errors: ['Consider using the native Array.prototype.concat()']
  }, {
    code: "import concat from 'lodash/concat';",
    errors: ["Import from 'lodash/concat' detected. Consider using the native Array.prototype.concat()"]
  }, {
    code: "import concat from 'lodash.concat';",
    errors: ["Import from 'lodash.concat' detected. Consider using the native Array.prototype.concat()"]
  }]
});

ruleTester.run('lodash.keys', rules.keys, {
  valid: [
    'Object.keys({one: 1, two: 2, three: 3})'
  ],
  invalid: [{
    code: 'lodash.keys({one: 1, two: 2, three: 3})',
    errors: ['Consider using the native Object.keys()']
  }, {
    code: "import concat from 'lodash/keys';",
    errors: ["Import from 'lodash/keys' detected. Consider using the native Object.keys()"]
  }, {
    code: "import concat from 'lodash.keys';",
    errors: ["Import from 'lodash.keys' detected. Consider using the native Object.keys()"]
  }]
});

ruleTester.run('underscore.forEach', rules['for-each'], {
  valid: [
    '[0, 1].forEach()'
  ],
  invalid: [{
    code: 'underscore.forEach()',
    errors: ['Consider using the native Array.prototype.forEach()']
  }, {
    code: "import concat from 'lodash/forEach';",
    errors: ["Import from 'lodash/forEach' detected. Consider using the native Array.prototype.forEach()"]
  }, {
    code: "import concat from 'lodash.foreach';",
    errors: ["Import from 'lodash.foreach' detected. Consider using the native Array.prototype.forEach()"]
  }]
});

ruleTester.run('underscore.isNaN', rules['is-nan'], {
  valid: [
    'Number.isNaN(NaN);'
  ],
  invalid: [{
    code: 'underscore.isNaN(NaN)',
    errors: ['Consider using the native Number.isNaN()']
  }, {
    code: "import concat from 'lodash/isNaN';",
    errors: ["Import from 'lodash/isNaN' detected. Consider using the native Number.isNaN()"]
  }, {
    code: "import concat from 'lodash.isnan';",
    errors: ["Import from 'lodash.isnan' detected. Consider using the native Number.isNaN()"]
  }]
});

ruleTester.run('_.first', rules['first'], {
  valid: [
    '[0, 1, 3][0]',
    '[0, 1, 3].slice(0, 2)'
  ],
  invalid: [{
      code: '_.first([0, 1, 3])',
      errors: ['Consider using the native Array.prototype.slice()']
  }, {
    code: '_.first([0, 1, 3], 2)',
    errors: ['Consider using the native Array.prototype.slice()']
  }]
});

ruleTester.run('_.last', rules['last'], {
  valid: [
    'var numbers = [0, 1, 3]; numbers[numbers.length - 1]',
    '[0, 1, 3].slice(-2)'
  ],
  invalid: [{
      code: '_.last([0, 1, 3])',
      errors: ['Consider using the native Array.prototype.slice()']
  }, {
    code: '_.last([0, 1, 3], 2)',
    errors: ['Consider using the native Array.prototype.slice()']
  }]
});

ruleTester.run('_', rules.concat, {
  valid: [
    '_(2, [3], [[4]])'
  ],
  invalid: []
});
