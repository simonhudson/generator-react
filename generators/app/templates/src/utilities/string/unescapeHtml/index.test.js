'use strict';

const { expect, test } = require('../../../expect');
const unescapeHtml = require('./index');

module.exports = () => {
	
	test('unescapeHtml()', 'unescapes HTML special characters', () => {
	
		const tests = [
			{ input: { str: null }, expected: null },
			{ input: { str: true }, expected: null },
			{ input: { str: 10 }, expected: null },
			{ input: { str: '' }, expected: null },
			{ input: { str: `&lt;div class=&#39;my-element&#39;&gt;Hello&lt;/div&gt;` }, expected: `<div class='my-element'>Hello</div>` },
			{ input: { str: '&lt;div class=&quot;my-element&quot;&gt;Hello&lt;/div&gt;' }, expected: '<div class="my-element">Hello</div>' },
			{ input: { str: 'www.foo.com/?a=1&amp;b=2' }, expected: 'www.foo.com/?a=1&b=2' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const { str } = input;
			const actual = unescapeHtml(str);
			expect(actual).toEqual(expected);
		});
	});

};