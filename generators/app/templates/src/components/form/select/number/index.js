'use strict';

import React from 'react';
import Label from '~/components/form/label';
import Option from '~/components/form/select/option';

const NumberSelect = props => {

	if (!props.id || !props.labelText || !props.max) return null;

	let min = props.min || 0;

	const generateOptions = () => {
		let options = [];
		for (let i=min; i <= props.max; i++) options.push(<Option key={i} value={i} text={i} />);
		return props.descending ? options.reverse() : options;
	};

	return (
		<>
			<Label id={props.id} text={props.labelText} />
			<select data-test="number-select" id={props.id}>
				{generateOptions()}
			</select>
		</>
	);

};

export default NumberSelect;
