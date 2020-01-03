'use strict';

import React from 'react';

const Option = props => {

	// if (!props.text || !props.value) return null;

	return (
		<option value={props.value}>{props.text}</option>
	);

};

export default Option;
