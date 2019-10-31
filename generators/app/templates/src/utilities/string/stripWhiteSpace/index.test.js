'use strict';

const { expect, test } = require('../../../expect');
const stripWhiteSpace = require('./index');

module.exports = () => {

	test('stripWhiteSpace()', 'strip white space from string', () => {
		
		const ORIGINAL_STRING = ' lorem Ipsum  dolor   foo  ';

		const tests = [
			{
				input:  1,
				expected: 1
			},
			{
				input:  true,
				expected: true 
			},
			{
				input:  ORIGINAL_STRING,
				expected: 'loremIpsumdolorfoo'
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = stripWhiteSpace(input);
			expect(actual).toEqual(expected);
		});

	});

};