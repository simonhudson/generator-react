'use strict';

const { expect, test } = require('../../../expect');
const defineArticle = require('./index');

module.exports = () => {
	
	test('defineArticle()', 'defines article (e.g "a" / "an") preceding a string', () => {
	
		const tests = [
			{ input: { str: null }, expected: null },
			{ input: { str: true }, expected: null },
			{ input: { str: 10 }, expected: null },
			{ input: { str: '' }, expected: null },
			{ input: { str: 'Hello' }, expected: 'a' },
			{ input: { str: 'goodbye' }, expected: 'a' },
			{ input: { str: 'Hello', capitalise: true }, expected: 'A' },
			{ input: { str: 'goodbye', capitalise: true }, expected: 'A' },
			{ input: { str: 'Error' }, expected: 'an' },
			{ input: { str: 'apple' }, expected: 'an' },
			{ input: { str: 'Error', capitalise: true }, expected: 'An' },
			{ input: { str: 'apple', capitalise: true }, expected: 'An' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const { str, capitalise } = input;
			const actual = defineArticle(str, capitalise);
			expect(actual).toEqual(expected);
		});
	});

};