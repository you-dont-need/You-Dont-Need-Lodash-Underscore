'use strict';
const RuleTester = require('eslint').RuleTester;
const assert = require('assert');
const rules = require('../../../lib/rules/all');
const allRules = require('../../../lib/rules/rules');

assert.equal(Object.keys(allRules).length, 39, 'Don\'t miss a rule 😄');

const ruleTester = new RuleTester();

// Only a couple of smoke tests because otherwise it would get very reduntant

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

ruleTester.run('underscore.forEach', rules['for-each'], {
  valid: [
    '[0, 1].forEach()'
  ],
  invalid: [{
    code: 'underscore.forEach()',
    errors: ['Consider using the native Array.prototype.forEach()']
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

ruleTester.run('_', rules.concat, {
  valid: [
    '_(2, [3], [[4]])'
  ],
  invalid: []
});
