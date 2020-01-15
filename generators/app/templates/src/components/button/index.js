'use strict';

import React from 'react';
import './css/styles.scss';

const VALID_TYPES = ['submit', 'button'];
const VALID_VARIANTS = ['primary', 'secondary', 'tertiary'];

const Button = props => {

	if (!props.label || typeof props.onClick !== 'function') return null;

    const type = (props.type && VALID_TYPES.includes(props.type)) ? props.type : 'button';
	const variant = (props.variant && VALID_VARIANTS.includes(props.variant)) ? props.variant : 'primary';

	const setClassName = () => {
		let className = ['btn', `btn--${props.variant}`];
		if (props.isHollow) className.push('btn--is-hollow');
		return className.join(' ');
	};

	return (
		<button className={setClassName()} data-test="button" type={props.type} onClick={props.onClick}>{props.label}</button>
	);

};

export default Button;
