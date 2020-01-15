'use strict';

import React from 'react';
import Label from '~/components/form/label';

const Checkbox = props => {

	if (!props.id || !props.labelText) return null;

	const name = props.name || props.id;

	return (
        <>
			<Label id={props.id} labelText={props.labelText} />
			<input data-test="form-checkbox" type="checkbox" name={name} id={props.id} value={props.value} />
        </>
    );

};

export default Checkbox;
