/**
 * @fileoverview Check methods you can use natively without lodash/underscore
 * @author Patrick McElhaney
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const kebabCase = require('kebab-case');
const rules = require('./rules');

for (const rule in rules) {
  const errorMessage = rules[rule];
  let ruleName;

  if (rule === 'isNaN') {
    ruleName = 'is-nan';
  } else {
    ruleName = kebabCase(rule);
  }

  module.exports[ruleName] = {
    create (context) {
      return {
        CallExpression: function (node) {
          const callee = node.callee;
          const objectName = callee.name || (callee.object && callee.object.name);

          if ((objectName === '_' || objectName === 'lodash' || objectName === 'underscore') && callee.property && callee.property.name === rule) {
            context.report({
              node,
              message: errorMessage
            });
          }
        },
      };
    }
  };
}
