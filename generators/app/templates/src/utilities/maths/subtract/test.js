'use strict';

const { expect, test } = require('../../../expect');
const subtract = require('./index');

module.exports = () => {
	
	const tests = [
		{
			input: { valueB: 3 },
			expected: null
		},
		{
			input: { valueA: 'string' },
			expected: null
		},
		{
			input: { valueA: 5 },
			expected: null
		},
		{
			input: { valueA: 5, valueB: [1,2,3] },
			expected: null
		},
		{
			input: { valueA: 5, valueB: 3 },
			expected: 2
		},
		{
			input: { valueA: -5, valueB: 3 },
			expected: -8
		}
	];
	
	test('subtract()', 'subtracts numbers', () => {
		tests.forEach(test => {
			const { input, expected } = test;
			const { valueA, valueB } = input;
			const actual = subtract(valueA, valueB);
			expect(actual).toEqual(expected);
		});
	});

};