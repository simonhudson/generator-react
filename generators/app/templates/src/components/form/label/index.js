'use strict';

import React from 'react';

const Label = props => {

	if (!props.id || !props.text) return null;

	return (
		<label className={`${props.isHidden ? 'visually-hidden' : ''}`} data-test="form-label" htmlFor={props.id}>{props.text}</label>
	);

};

export default Label;
