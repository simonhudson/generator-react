'use strict';

const { expect, test } = require('../../../expect');
const replaceWhiteSpaceWithDelimiter = require('./index');

module.exports = () => {

	test('replaceWhiteSpaceWithDelimiter()', 'replaces spaces in string with specified delimiter', () => {
		
		const ORIGINAL_STRING = 'lorem Ipsum  dolor   foo';

		const tests = [
			{
				input: {
					string: [1,2,3],
				},
				expected: [1,2,3]
			},
			{
				input: {
					string: true, delimiter: '_'
				},
				expected: true
			},
			{
				input: {
					string: ORIGINAL_STRING,
				},
				expected: 'lorem-Ipsum-dolor-foo'
			},
			{
				input: {
					string: ORIGINAL_STRING,
					delimiter: '+'
				},
				expected: 'lorem+Ipsum+dolor+foo'
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const { string, delimiter } = input;
			const actual = replaceWhiteSpaceWithDelimiter(string, delimiter);
			expect(actual).toDeepEqual(expected);
		});

	});

};