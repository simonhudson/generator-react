'use strict';

const { expect, test } = require('../../../expect');
const isOver18Years = require('./index');

const NOW = new Date();
const now = {
	day: NOW.getUTCDay(),
	month: NOW.getUTCMonth(),
	year: NOW.getUTCFullYear()
};

module.exports = () => {
	
	test('isOver18Years()', 'checks if date is more than or equal to 18 years from now', () => {
	
		const tests = [
			{ input: null, expected: null },
			{ input: 'hello', expected: null },
			{ input: '13', expected: null },
			{ input: `${now.day} ${now.month} ${now.year - 1}`, expected: false },
			{ input: `${now.day} ${now.month} ${now.year - 19}`, expected: true }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = isOver18Years(input);
			expect(actual).toEqual(expected);
		});
	});

};