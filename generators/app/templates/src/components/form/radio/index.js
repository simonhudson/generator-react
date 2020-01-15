'use strict';

import React from 'react';
import Label from '~/components/form/label';

const Radio = props => {

	if (!props.id || !props.name || !props.value || !props.labelText) return null;

	return (
        <>
			<Label id={props.id} labelText={props.labelText} />
			<input data-test="form-radio" type="radio" name={props.name} id={props.id} value={props.value} />
        </>
    );

};

export default Radio;
