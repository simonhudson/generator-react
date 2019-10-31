'use strict';

const { expect, test } = require('../../../expect');
const cleanUp = require('./index');

module.exports = () => {
	
	test('cleanUp()', 'recursively removes null/undefined/empty strings from object', function() {

		const tests = [
			{ input: null, expected: null },
			{ input: 1, expected: 1 },
			{ input: 'string', expected: 'string' },
			{ input: [], expected: [] },
			{ input: {}, expected: {} },
			{
				input: {
					key1: '1', key2: 2, key3: null, key4: '', key5: [1,2,3], key6: undefined, key7: {}
				},
				expected: {
					key1: '1', key2: 2, key5: [1,2,3], key7: {}
				}
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = cleanUp(input);
			expect(actual).toDeepEqual(expected);
		});
		
	});

};