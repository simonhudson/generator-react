'use strict';

import React from 'react';
import './css/styles.scss';

const VALID_TYPES = ['info', 'warning', 'error', 'success'];

const Alert = props => {

	if (!props || !VALID_TYPES.includes(props.type)) return null;

	return (
        <div className={`alert alert--${props.type}`} data-test="alert">
            {props.children}
        </div>
    );

};

export default Alert;
