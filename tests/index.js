require('./lib/rules/all.js');

const assert = require('assert');
const plugin = require('../');

assert.equal(plugin.configs['all-warn'].rules['you-dont-need-lodash-underscore/contains'], 1);
assert.equal(plugin.configs['all-warn'].rules['you-dont-need-lodash-underscore/trim'], 1);
assert.equal(plugin.configs.all.rules['you-dont-need-lodash-underscore/every'], 2);
assert.equal(plugin.configs.all.rules['you-dont-need-lodash-underscore/keys'], 2);
assert.equal(plugin.configs['compatible-warn'].rules['you-dont-need-lodash-underscore/each'], undefined);
assert.equal(plugin.configs['compatible-warn'].rules['you-dont-need-lodash-underscore/last-index-of'], 1);
assert.equal(plugin.configs.compatible.rules['you-dont-need-lodash-underscore/for-each'], 1);
assert.equal(plugin.configs.compatible.rules['you-dont-need-lodash-underscore/is-nan'], 2);

assert.equal(plugin.flatConfigs['all-warn'].rules['you-dont-need-lodash-underscore/contains'], 1);
assert.equal(plugin.flatConfigs['all-warn'].rules['you-dont-need-lodash-underscore/trim'], 1);
assert.equal(plugin.flatConfigs.all.rules['you-dont-need-lodash-underscore/every'], 2);
assert.equal(plugin.flatConfigs.all.rules['you-dont-need-lodash-underscore/keys'], 2);
assert.equal(plugin.flatConfigs['compatible-warn'].rules['you-dont-need-lodash-underscore/each'], undefined);
assert.equal(plugin.flatConfigs['compatible-warn'].rules['you-dont-need-lodash-underscore/last-index-of'], 1);
assert.equal(plugin.flatConfigs.compatible.rules['you-dont-need-lodash-underscore/for-each'], 1);
assert.equal(plugin.flatConfigs.compatible.rules['you-dont-need-lodash-underscore/is-nan'], 2);

assert.strictEqual(plugin.flatConfigs['all-warn'].plugins['you-dont-need-lodash-underscore'], plugin);
assert.strictEqual(plugin.flatConfigs.all.plugins['you-dont-need-lodash-underscore'], plugin);
assert.strictEqual(plugin.flatConfigs['compatible-warn'].plugins['you-dont-need-lodash-underscore'], plugin);
assert.strictEqual(plugin.flatConfigs.compatible.plugins['you-dont-need-lodash-underscore'], plugin);

assert.strictEqual(plugin.configs['flat/all-warn'], plugin.flatConfigs['all-warn']);
assert.strictEqual(plugin.configs['flat/all'], plugin.flatConfigs.all);
assert.strictEqual(plugin.configs['flat/compatible-warn'], plugin.flatConfigs['compatible-warn']);
assert.strictEqual(plugin.configs['flat/compatible'], plugin.flatConfigs.compatible);
