'use strict';

import React from 'react';
import './css/styles.scss';

const Switch = props => {

	if (!props.id || !props.label) return null;

	return (
        <div className="switch">
            <input className="switch__input" id={props.id} name={props.id} type="checkbox" />
            <label className="switch__label" htmlFor={props.id}>{props.label}</label>
        </div>
	);

};

export default Switch;
