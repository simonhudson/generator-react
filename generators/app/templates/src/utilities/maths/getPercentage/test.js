'use strict';

const { expect, test } = require('../../../expect');
const getPercentage = require('./index');

module.exports = () => {
	
	test('getPercentage()', 'calculates x as a percentage of y', () => {

		const tests = [
			{
				input: { x: null, y: null },
				expected: null
			},
			{
				input: { x: 'string', y: 'string' },
				expected: null
			},
			{
				input: { x: [1, 2, 3], y: [4, 5, 6] },
				expected: null
			},
			{
				input: { x: {}, y: {} },
				expected: null
			},
			{
				input: { x: 20, y: 100 },
				expected: 20
			},
			{
				input: { x: 5, y: 50 },
				expected: 10
			},
			{
				input: { x: 75, y: 150 },
				expected: 50
			},
			{
				input: { x: 471, y: 1884 },
				expected: 25
			},
			{
				input: { x: 13, y: 130 },
				expected: 10
			},
			{
				input: { x: 12500, y: 10000 },
				expected: 125
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const { x, y } = input;
			const actual = getPercentage(x, y);
			expect(actual).toEqual(expected);
		});

	});

};