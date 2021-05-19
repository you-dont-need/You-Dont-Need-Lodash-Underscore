'use strict';
const RuleTester = require('eslint').RuleTester;
const assert = require('assert');
const rules = require('../../../lib/rules/all');
const allRules = require('../../../lib/rules/rules');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2018, sourceType: "module" }
});

// Only a couple of smoke tests because otherwise it would get very redundant

ruleTester.run('_.concat', rules.concat, {
  valid: [
    'array.concat(2, [3], [[4]])'
  ],
  invalid: [{
    code: '_.concat(array, 2, [3], [[4]])',
    errors: ['Consider using the native Array.prototype.concat()']
  }]
});

ruleTester.run('lodash.keys', rules.keys, {
  valid: [
    'Object.keys({one: 1, two: 2, three: 3})'
  ],
  invalid: [{
    code: 'lodash.keys({one: 1, two: 2, three: 3})',
    errors: ['Consider using the native Object.keys()']
  }]
});

ruleTester.run(`Import lodash.isnan`, rules['is-nan'], {
  valid: [`{ x: require('lodash') }`],
  invalid: [{
    code: `import isNaN from 'lodash/isNaN';`,
    errors: [`Import from 'lodash/isNaN' detected. Consider using the native Number.isNaN()`]
  }, {
    code: `import isNaN from 'lodash.isnan';`,
    errors: [`Import from 'lodash.isnan' detected. Consider using the native Number.isNaN()`]
  }, {
    code: `import { isNaN as x } from 'lodash';`,
    errors: [`Import { isNaN } from 'lodash' detected. Consider using the native Number.isNaN()`]
  }, {
    code: `const { isNaN: x } = require('lodash');`,
    errors: [`{ isNaN } = require('lodash') detected. Consider using the native Number.isNaN()`]
  }, {
    code: `({ isNaN: x } = require('lodash'));`,
    errors: [`{ isNaN } = require('lodash') detected. Consider using the native Number.isNaN()`]
  }, {
    code: `require('lodash/isNaN');`,
    errors: [`require('lodash/isNaN') detected. Consider using the native Number.isNaN()`]
  }, {
    code: `require('lodash.isnan');`,
    errors: [`require('lodash.isnan') detected. Consider using the native Number.isNaN()`]
  }]
});

ruleTester.run(`Import { isNaN } from lodash-es`, rules['is-nan'], {
  valid: [`{ x: require('lodash-es') }`],
  invalid: [{
    code: `import { isNaN } from 'lodash-es';`,
    errors: [`Import { isNaN } from 'lodash-es' detected. Consider using the native Number.isNaN()`]
  },
    {
    code: `import isNaN from 'lodash-es/isNaN';`,
    errors: [`Import from 'lodash-es/isNaN' detected. Consider using the native Number.isNaN()`]
  }, {
    code: `import { isNaN as x } from 'lodash-es';`,
    errors: [`Import { isNaN } from 'lodash-es' detected. Consider using the native Number.isNaN()`]
  }, {
    code: `const { isNaN: x } = require('lodash-es');`,
    errors: [`{ isNaN } = require('lodash-es') detected. Consider using the native Number.isNaN()`]
  }, {
    code: `({ isNaN: x } = require('lodash-es'));`,
    errors: [`{ isNaN } = require('lodash-es') detected. Consider using the native Number.isNaN()`]
  }, {
    code: `require('lodash-es/isNaN');`,
    errors: [`require('lodash-es/isNaN') detected. Consider using the native Number.isNaN()`]
  }]
});

ruleTester.run('underscore.forEach', rules['for-each'], {
  valid: [
    '[0, 1].forEach()',
    "Object.entries({'one':1,'two':2}).forEach()"
  ],
  invalid: [{
    code: 'underscore.forEach()',
    errors: ['Consider using the native Array.prototype.forEach() or Object.entries().forEach()']
  }]
});

ruleTester.run('underscore.isNaN', rules['is-nan'], {
  valid: [
    'Number.isNaN(NaN);'
  ],
  invalid: [{
    code: 'underscore.isNaN(NaN)',
    errors: ['Consider using the native Number.isNaN()']
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

ruleTester.run('_.isUndefined', rules['is-undefined'], {
  valid: [
    '2 === undefined'
  ],
  invalid: [{
    code: '_.isUndefined(2)',
    errors: ['Consider using the native value === undefined']
  },{
    code: '_(2).isUndefined()',
    errors: ['Consider using the native value === undefined']

  }]
});

/*This is to make sure that You-Dont-Need-Lodash can handle the
evaluation of nested functions that had caused an error noted in the comments of
Pull Request #219*/
ruleTester.run('Nested functions', rules['is-undefined'], {
  valid: [
    `function myNestedFunction(firstInput) {
      return (secondInput) => {
        return firstInput + secondInput
      }
    }
    myNestedFunction(2)(2)`
  ],
  invalid: []
});

/*Test for new flatten rule*/
ruleTester.run('_.flatten', rules['flatten'], {
  valid: [
    `[1,2,[3,4]].reduce((a,b) => a.concat(b), [])`,
    `[1,2,[3,4]].flat()`,
    `[1,2,[3,4]].flatMap(a => a)`
  ],
  invalid: [{
    code: `_.flatten([1,2,[3,4]])`,
    errors: [`Consider using the native Array.prototype.reduce((a,b) => a.concat(b), [])`]
  },{
    code: `_([1,2,[3,4]]).flatten()`,
    errors: [`Consider using the native Array.prototype.reduce((a,b) => a.concat(b), [])`]
  }]
});

ruleTester.run('_.isUndefined', rules['is-undefined'], {
  valid: [
    '2 === undefined'
  ],
  invalid: [{
    code: '_.isUndefined(2)',
    errors: ['Consider using the native value === undefined']
  },{
    code: '_(2).isUndefined()',
    errors: ['Consider using the native value === undefined']

  }]
});

ruleTester.run('_.startsWith', rules['starts-with'], {
  valid: [
    '"abc".startsWith("a")',
    '"abc".startsWith("b", 1)'
  ],
  invalid: [{
    code: '_.startsWith("abc", "a")',
    errors: ['Consider using the native String.prototype.startsWith()']
  },{
    code: '_.startsWith("abc", "b", 1)',
    errors: ['Consider using the native String.prototype.startsWith()']

  }]
});

ruleTester.run('_.endsWith', rules['ends-with'], {
  valid: [
    '"abc".endsWith("c")',
    '"abc".endsWith("b", 1)'
  ],
  invalid: [{
    code: '_.endsWith("abc", "c")',
    errors: ['Consider using the native String.prototype.endsWith()']
  },{
    code: '_.endsWith("abc", "b", 1)',
    errors: ['Consider using the native String.prototype.endsWith()']

  }]
});

