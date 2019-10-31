'use strict';

const { expect, test } = require('../../../expect');
const isEven = require('./index');

module.exports = () => {
	
	test('isEven()', 'checks if number is even', () => {

		const tests = [
			{ input: 'string', expected: null },
			{ input: [1,2,3], expected: null },
			{ input: true, expected: null },
			{ input: 25, expected: false },
			{ input: 26, expected: true }
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = isEven(input);
			expect(actual).toEqual(expected);
		});

	});

};