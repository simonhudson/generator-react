'use strict';

const { expect, test } = require('../../../expect');
const divide = require('./index');

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
			input: { valueA: 12, valueB: 3 },
			expected: 4
		},
		{
			input: { valueA: 11, valueB: 2 },
			expected: 5.5
		},
		{
			input: { valueA: 11, valueB: 3 },
			expected: 3.67
		}
	];
	
	test('divide()', 'divides numbers', () => {
		tests.forEach(test => {
			const { input, expected } = test;
			const { valueA, valueB } = input;
			const actual = divide(valueA, valueB);
			expect(actual).toEqual(expected);
		});
	});

};