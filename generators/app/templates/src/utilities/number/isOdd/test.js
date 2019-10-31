'use strict';

const { expect, test } = require('../../../expect');
const isOdd = require('./index');

module.exports = () => {

	test('isOdd()', 'checks if number is odd', () => {

		const tests = [
			{ input: 'string', expected: null },
			{ input: [1,2,3], expected: null },
			{ input: true, expected: null },
			{ input: 25, expected: true },
			{ input: 26, expected: false }
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = isOdd(input);
			expect(actual).toEqual(expected);
		});

	});

};