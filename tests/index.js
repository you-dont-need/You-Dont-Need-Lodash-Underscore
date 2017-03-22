require('./lib/rules/all.js');

const assert = require('assert');
const plugin = require('../');

assert.equal(plugin.configs['all-warn'].rules.contains, 1);
assert.equal(plugin.configs['all-warn'].rules.trim, 1);
assert.equal(plugin.configs.all.rules.every, 2);
assert.equal(plugin.configs.all.rules.keys, 2);
assert.equal(plugin.configs['compatible-warn'].rules.each, undefined);
assert.equal(plugin.configs['compatible-warn'].rules['find-index'], 1);
assert.equal(plugin.configs.compatible.rules['for-each'], 1);
assert.equal(plugin.configs.compatible.rules['is-nan'], 2);
