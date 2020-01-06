'use strict';

import React from 'react';
import './css/styles.scss';

const FormRow = props => {

	if (!props) return null;

	return (
		<div className="form-row">
            {props.children}
        </div>
    );

};

export default FormRow;
