'use strict';

const { expect, test } = require('../../../expect');
const toIsoString = require('./index');

module.exports = () => {
	
	test('toIsoString()', 'creates ISO string from date string', () => {
	
		const tests = [
			{ input: null, expected: null },
			{ input: 1, expected: null },
			{ input: [1,2,3], expected: null },
			{ input: true, expected: null },
			{ input: 'Hello', expected: null },
			{ input: '29 April 1981', expected: '1981-04-28T23:00:00.000Z' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = toIsoString(input);
			expect(actual).toEqual(expected);
		});
	});

};