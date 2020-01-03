'use strict';

import React from 'react';

const Label = props => {

	if (!props.id || !props.labelText) return null;

	return (
		<label className={`${props.hideLabel ? 'visually-hidden' : ''}`} data-test="form-label" htmlFor={props.id}>{props.labelText}</label>
	);

};

export default Label;
