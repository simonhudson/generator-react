'use strict';

import React from 'react';
import './css/styles.scss';

const FormRow = props => {

	return (
		<div className="form-row" data-test="form-row">
            {props.children}
        </div>
    );

};

export default FormRow;
