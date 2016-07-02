'use strict';

const _ = require('lodash'); // Ironic, ain't it?
const rules = require('./lib/rules/rules.json')

module.exports.rules = require('./lib/rules/all');

const all = Object.keys(rules);
const compatible = Object.keys(rules).filter(key => rules[key].compatible);
const incompatible = Object.keys(rules).filter(key => !rules[key].compatible);

const ERROR = 2;
const WARN = 1;

module.exports.configs = {
    'all': {
      rules: _.zipObject(all, Array(all.length).fill(WARN))
    },

    'all-strict': {
      rules: _.zipObject(all, Array(all.length).fill(ERROR))
    },

    'safe': {
      rules: _.zipObject(compatible, Array(compatible.length).fill(WARN))
    },

    'safe-strict': {
      rules: Object.assign(
          _.zipObject(compatible, Array(compatible.length).fill(ERROR)),
          _.zipObject(incompatible, Array(incompatible.length).fill(WARN))
      )
    }
}
