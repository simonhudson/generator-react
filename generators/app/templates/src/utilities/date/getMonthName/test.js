'use strict';

const { expect, test } = require('../../../expect');
const getMonthName = require('./index');

module.exports = () => {
	
	test('getMonthName()', 'returns month name from numeric value', () => {
	
		const tests = [
			{ input: { value: null, truncate: null }, expected: null },
			{ input: { value: 'hello', truncate: null }, expected: null },
			{ input: { value: '13', truncate: null }, expected: null },
			{ input: { value: -1, truncate: null }, expected: null },
			{ input: { value: '10', truncate: null }, expected: 'October' },
			{ input: { value: 9, truncate: null }, expected: 'September' },
			{ input: { value: '8', truncate: true }, expected: 'Aug' },
			{ input: { value: 12, truncate: null }, expected: 'December' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const { value, truncate } = input;
			const actual = getMonthName(value, truncate);
			expect(actual).toEqual(expected);
		});
	});

};