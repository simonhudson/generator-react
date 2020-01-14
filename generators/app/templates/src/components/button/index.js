'use strict';

import React from 'react';
import './css/styles.scss';

const VALID_TYPES = ['submit', 'button'];

const Button = props => {

	if (!props.label || typeof props.onClick !== 'function') return null;

    const type = (props.type && VALID_TYPES.includes(props.type)) ? props.type : 'button';

	const setClassName = () => {
		let className = ['btn'];
		let variant;
		if (!props.variant || props.variant === 'primary') className.push('btn--primary');
		if (props.variant === 'secondary') className.push('btn--secondary');
		if (props.variant === 'tertiary') className.push('btn--tertiary');
		if (props.isHollow) className.push('btn--is-hollow');
		return className.join(' ');
	};

	return (
		<button className={setClassName()} data-test="button" type={type} onClick={props.onClick}>{props.label}</button>
	);

};

export default Button;
