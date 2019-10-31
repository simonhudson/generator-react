'use strict';

const { expect, test } = require('../../../expect');
const isValidDate = require('./index');

module.exports = () => {
	
	test('isValidDate()', 'checks value is a valid date', () => {
	
		const tests = [
			{ input: null, expected: false },
			{ input: 1, expected: false },
			{ input: [1,2,3], expected: false },
			{ input: true, expected: false },
			{ input: 'Hello', expected: false },
			{ input: new Date('Hello'), expected: false },
			{ input: new Date('29 April 1981'), expected: true }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = isValidDate(input);
			expect(actual).toEqual(expected);
		});
	});

};