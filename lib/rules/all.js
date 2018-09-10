'use strict';
const kebabCase = require('kebab-case');
const rules = require('./rules');

for (const rule in rules) {
  const alternative = rules[rule].alternative;
  const ruleName = rules[rule].ruleName || kebabCase(rule);
  module.exports[ruleName] = {
    create (context) {
      return {
        CallExpression(node) {
          const callee = node.callee;
          const objectName = callee.name || (callee.object && callee.object.name);

          if ((objectName === '_' || objectName === 'lodash' || objectName === 'underscore') && callee.property && callee.property.name === rule) {
            context.report({
              node,
              message: `Consider using the native ${alternative}`
            });
          }
        },
        ImportDeclaration(node) {
          if (node.source.value === `lodash/${rule}`) {
            context.report({
              node,
              message: `Import from 'lodash/${rule}' detected. Consider using the native ${alternative}`
            });
          }
        }
      };
    }
  };
}
