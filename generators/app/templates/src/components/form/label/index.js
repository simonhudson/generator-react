'use strict';

import React from 'react';
import Info from '~/components/form/label/info';
import './css/styles.scss';

const Label = props => {

	if (!props.id || !props.labelText) return null;

	return (
		<label className={`${props.hideLabel ? 'visually-hidden' : ''}`} data-test="form-label" htmlFor={props.id}>
			{`${props.labelText}`}
			{props.labelInfo && (<Info {...props} />)}
		</label>
	);

};

export default Label;
