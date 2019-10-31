'use strict';

const { expect, test } = require('../../../expect');
const getAverage = require('./index');

module.exports = () => {

	test('getAverage()', 'calculates average value from array of values', () => {
		const tests = [
			{ input: null, expected: null },
			{ input: 1, expected: null },
			{ input: 'string', expected: null },
			{ input: [], expected: null },
			{ input: ['string', 'string1', 'string2', 'string3'], expected: null },
			{ input: {}, expected: null },
			{ input: [5], expected: 5 },
			{ input: [1, 2, 3, 4, 5], expected: 3 },
			{ input: [17, 52, 300, 4, -1], expected: 74 }
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = getAverage(input);
			expect(actual).toEqual(expected);
		});
		
	});

};