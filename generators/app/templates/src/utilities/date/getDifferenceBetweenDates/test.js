'use strict';

const { expect, test } = require('../../../expect');
const getDifferenceBetweenDates = require('./index');

module.exports = () => {

	const NOW = new Date();
	const nowDate = {
		day: NOW.getUTCDate(),
		month: NOW.getUTCMonth() + 1,
		year: NOW.getUTCFullYear()
	};
	
	test('getDifferenceBetweenDates()', 'gets difference between dates as specified value', () => {
	
		const tests = [
			{ input: { date: null, unit: 'years' }, expected: null },
			{ input: { date: 'hello', unit: 'years' }, expected: null },
			{ input: { date: '13', unit: 'years' }, expected: null },
			{ input: { date: '12 25 1981', unit: 'years', startDate: '12 25 1985' }, expected: 4 },
			{ input: { date: '12 28 1981', unit: 'days', startDate: '12 25 1981' }, expected: -3 },
			{ input: { date: '2 25 1981', unit: 'months', startDate: '12 25 1981' }, expected: 9 },
			{ input: { date: `${nowDate.month} ${nowDate.day} ${nowDate.year + 7}`, unit: 'years' }, expected: -7 },
			{ input: { date: `${nowDate.month - 2} ${nowDate.day} ${nowDate.year}`, unit: 'months' }, expected: 2 },
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const { date, unit, startDate } = input;
			const actual = getDifferenceBetweenDates(date, unit, startDate);
			expect(actual).toEqual(expected);
		});
	});

};