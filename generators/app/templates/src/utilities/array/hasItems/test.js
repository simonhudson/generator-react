'use strict';

const { expect, test } = require('../../../expect');
const hasItems = require('./index');

module.exports = () => {
	
	test('hasItems()', 'checks if array has items', function() {

		const tests = [
			{ input: null, expected: false },
			{ input: 1, expected: false },
			{ input: 'string', expected: false },
			{ input: [], expected: false },
			{ input: {}, expected: false },
			{ input: [1], expected: true },
			{ input: ['1', '2', 'lorem', true], expected: true }
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = hasItems(input);
			expect(actual).toEqual(expected);
		});
		
	});

};