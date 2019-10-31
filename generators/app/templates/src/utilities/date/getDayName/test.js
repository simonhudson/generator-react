'use strict';

const { expect, test } = require('../../../expect');
const getDayName = require('./index');

module.exports = () => {
	
	test('getDayName()', 'returns day name from numeric value', () => {
	
		const tests = [
			{ input: { value: null, truncate: null }, expected: null },
			{ input: { value: 'hello', truncate: null }, expected: null },
			{ input: { value: '13', truncate: null }, expected: null },
			{ input: { value: 8, truncate: null }, expected: null },
			{ input: { value: -1, truncate: null }, expected: null },
			{ input: { value: '5', truncate: null }, expected: 'Friday' },
			{ input: { value: 2, truncate: null }, expected: 'Tuesday' },
			{ input: { value: '3', truncate: true }, expected: 'Wed' },
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const { value, truncate } = input;
			const actual = getDayName(value, truncate);
			expect(actual).toEqual(expected);
		});
	});

};