'use strict';

const { expect, test } = require('../../../expect');
const orderByKey = require('./index');

module.exports = () => {
	
	test('orderByKey()', 'order object based on key name', function() {

	const tests = [
			{ input: 'string', expected: null },
			{ input: [], expected: null },
			{ input: true, expected: null },
			{
				input: {
					b: 'value b',
					d: 'value d',
					a: 'value a',
					c: 'value c'
				},
				expected: {
					a: 'value a',
					b: 'value b',
					c: 'value c',
					d: 'value d'
				}
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = orderByKey(input);
			expect(actual).toDeepEqual(expected);
		});
		
	});

};