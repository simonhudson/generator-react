'use strict';

import React from 'react';
import Label from '~/components/form/label';
import Option from '~/components/form/select/option';
import FormRow from '~/components/form/form-row';
const getMonthName = require('~/utilities/date/getMonthName');
import '../css/styles.scss';

const MonthSelect = props => {

	if (!props.id || !props.labelText) return null;

	const generateOptions = () => {
		let options = [];
		for (let i=1; i <= 12; i++) {
			const value = getMonthName(i, props.truncate);
			options.push(<Option key={i} value={i} text={value} />);
		}
		return options;
	};

	return (
		<FormRow>
			<Label {...props} />
			<select data-test="month-select" id={props.id}>
				{generateOptions()}
	        </select>
		</FormRow>
	);

};

export default MonthSelect;
