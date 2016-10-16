import test from "ava";
import isPlainObj from 'is-plain-obj';

test('index.js', t => {
	const conf = require('../index.js');
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.globals));
	t.true(isPlainObj(conf.rules));
});
