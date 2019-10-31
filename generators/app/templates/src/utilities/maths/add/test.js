'use strict';

const { expect, test } = require('../../../expect');
const add = require('./index');

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
			expected: 8
		},
		{
			input: { valueA: -5, valueB: 3 },
			expected: -2
		}
	];
	
	test('add()', 'adds numbers', () => {
		tests.forEach(test => {
			const { input, expected } = test;
			const { valueA, valueB } = input;
			const actual = add(valueA, valueB);
			expect(actual).toEqual(expected);
		});
	});

};