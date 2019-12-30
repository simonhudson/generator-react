'use strict';

import React from 'react';
import './css/styles.scss';
import Icon from '~/components/icon';

const VALID_TYPES = ['info', 'warning', 'error', 'success'];

const ICONS = {
	'info': 'info-circle',
	'warning': 'exclamation-triangle',
	'error': 'times',
	'success': 'check-circle'
};

const Alert = props => {

	if (!props || !VALID_TYPES.includes(props.type)) return null;

	return (
        <div className={`alert alert--${props.type} ${props.hasIcon ? 'alert--has-icon' : ''}`} data-test="alert">
			{props.hasIcon && (
				<Icon type={ICONS[props.type]} />
			)}
            {props.children}
        </div>
    );

};

export default Alert;
