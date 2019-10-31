'use strict';

const { expect, test } = require('../../../expect');
const stripHtmlTags = require('./index');

module.exports = () => {
	
	test('unescapeHtml()', 'unescapes HTML special characters', () => {
	
		const tests = [
			{ input: { str: null }, expected: null },
			{ input: { str: true }, expected: null },
			{ input: { str: 10 }, expected: null },
			{ input: { str: '' }, expected: null },
			{ input: { str: `<div class='my-element'>Hello</div>` }, expected: `div class='my-element'Hello/div` }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const { str } = input;
			const actual = stripHtmlTags(str);
			expect(actual).toEqual(expected);
		});
	});

};