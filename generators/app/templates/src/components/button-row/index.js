'use strict';

import React from 'react';
import './css/styles.scss';

const ButtonRow = props => {

	return (
		<div className="button-row">
            {props.children}
        </div>
	);

};

export default ButtonRow;
