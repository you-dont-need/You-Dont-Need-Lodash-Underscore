'use strict';
const kebabCase = require('kebab-case');
const rules = require('./rules');

const forbiddenLibs = ['lodash', 'lodash-es'];

function getAssignmentLeftHandSide(node) {
  // For VariableDeclarator nodes, the left hand side is called `id`
  // The `x` on `var x = 3;
  if (node.type === 'VariableDeclarator') {
    return node.id;
  }
  // For AssignmentExpression nodes, the left hand side is called `left`
  // The `x` on `x = 3;
  if (node.type === 'AssignmentExpression') {
    return node.left;
  }
  return null;
}

for (const rule in rules) {
  const alternative = rules[rule].alternative;
  const ruleName = rules[rule].ruleName || kebabCase(rule);
  const forbiddenImports = { [`lodash/${rule}`]: 1, [`lodash-es/${rule}`]: 1, [`lodash.${rule.toLowerCase()}`]: 1 };
  module.exports[ruleName] = {
    create(context) {
      return {
        CallExpression(node) {
          const callee = node.callee;
          const objectName = callee.name || (callee.object && callee.object.name) || (callee.object && callee.object.callee && callee.object.callee.name);

          if (objectName === 'require' && node.arguments.length === 1) {
            const requiredModuleName = node.arguments[0].value;
            const { parent } = node;
            if (forbiddenLibs.includes(requiredModuleName)) {
              const leftHandSide = getAssignmentLeftHandSide(parent);
              // ex: const { indexOf } = require('lodash');
              // ex: ({ indexOf } = require('lodash'));
              if (leftHandSide && leftHandSide.type === 'ObjectPattern') {
                leftHandSide.properties.forEach(property => {
                  if (property.key.name === rule) {
                    context.report({
                      node,
                      message: `{ ${rule} } = require('${requiredModuleName}') detected. Consider using the native ${alternative}`
                    });
                  }
                });
              }
            } else if (forbiddenImports.hasOwnProperty(requiredModuleName)) {
              // ex: const indexOf = require('lodash.indexof');
              // ex: const indexOf = require('lodash/indexOf');
              context.report({
                node,
                message: `require('${requiredModuleName}') detected. Consider using the native ${alternative}`
              });
            }
          } else if ((objectName === '_' || objectName === 'lodash' || objectName === 'underscore') && callee.property && callee.property.name === rule) {
            context.report({
              node,
              message: `Consider using the native ${alternative}`
            });
          }
        },
        ImportDeclaration(node) {
          if (forbiddenLibs.includes(node.source.value)) {
            // ex: import { indexOf } from 'lodash';
            // ex: import { indexOf as x } from 'lodash';
            node.specifiers.forEach(specifier => {
              if (specifier.type === 'ImportSpecifier' && specifier.imported.name === rule) {
                context.report({
                  node,
                  message: `Import { ${rule} } from '${node.source.value}' detected. Consider using the native ${alternative}`
                });
              }
            });
          } else if (forbiddenImports.hasOwnProperty(node.source.value)) {
            // ex: import indexOf from 'lodash/indexOf';
            // ex: import indexOf from 'lodash.indexof';
            context.report({
              node,
              message: `Import from '${node.source.value}' detected. Consider using the native ${alternative}`
            });
          }
        }
      };
    }
  };
}
