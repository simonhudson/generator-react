'use strict';

import React from 'react';

const VALID_TYPES = ['submit', 'button'];

const Button = props => {

	if (!props.label || typeof props.onClick !== 'function') return null;

    const type = (props.type && VALID_TYPES.includes(props.type)) ? props.type : 'button';

	return (
		<button data-test="button" type={type} onClick={props.onClick}>{props.label}</button>
	);

};

export default Button;
