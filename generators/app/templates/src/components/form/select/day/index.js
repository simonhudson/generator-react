'use strict';

import React from 'react';
import Label from '~/components/form/label';
import Option from '~/components/form/select/option';
import FormRow from '~/components/form/form-row';
const getDayName = require('~/utilities/date/getDayName');
import '../css/styles.scss';

const DaySelect = props => {

	if (!props.id || !props.labelText) return null;

	const generateOptions = () => {
		let options = [];
		for (let i=1; i <= 7; i++) {
			const value = getDayName(i, props.truncate);
			options.push(<Option key={i} value={i} text={value} />);
		}
		return options;
	};

	return (
		<FormRow>
			<Label {...props} />
			<select data-test="day-select" id={props.id}>
				{generateOptions()}
	        </select>
		</FormRow>
	);

};

export default DaySelect;
