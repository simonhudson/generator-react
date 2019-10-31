'use strict';

const { expect, test } = require('../../../expect');
const escapeHtml = require('./index');

module.exports = () => {
	
	test('escapeHtml()', 'escapes string for insertion into HTML', () => {
	
		const tests = [
			{ input: { str: null }, expected: null },
			{ input: { str: true }, expected: null },
			{ input: { str: 10 }, expected: null },
			{ input: { str: '' }, expected: null },
			{ input: { str: `<div class='my-element'>Hello</div>` }, expected: '&lt;div class=&#39;my-element&#39;&gt;Hello&lt;/div&gt;' },
			{ input: { str: '<div class="my-element">Hello</div>' }, expected: '&lt;div class=&quot;my-element&quot;&gt;Hello&lt;/div&gt;' },
			{ input: { str: 'www.foo.com/?a=1&b=2' }, expected: 'www.foo.com/?a=1&amp;b=2' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const { str } = input;
			const actual = escapeHtml(str);
			expect(actual).toEqual(expected);
		});
	});

};