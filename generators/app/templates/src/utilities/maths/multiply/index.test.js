'use strict';

const { expect, test } = require('../../../expect');
const multiply = require('./index');

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
			expected: 15
		},
		{
			input: { valueA: -5, valueB: 3 },
			expected: -15
		}
	];
	
	test('multiply()', 'multiplies numbers', () => {
		
		tests.forEach(test => {
			const { input, expected } = test;
			const { valueA, valueB } = input;
			const actual = multiply(valueA, valueB);
			expect(actual).toEqual(expected);
		});
		
	});

};