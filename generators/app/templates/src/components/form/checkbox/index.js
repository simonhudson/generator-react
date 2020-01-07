'use strict';

import React from 'react';
import Label from '~/components/form/label';

const Checkbox = props => {

	if (!props.id || !props.name || !props.value || !props.labelText) return null;

	return (
        <>
			<Label id={props.id} labelText={props.labelText} />
			<input data-test="form-checkbox" type="checkbox" name={props.name} id={props.id} value={props.value} />
        </>
    );

};

export default Checkbox;
