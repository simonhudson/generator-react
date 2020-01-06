'use strict';

import React from 'react';
import FormRow from '~/components/form/form-row';
import Radio from '~/components/form/radio';

const RadioGroup = props => {

	if (!props.inputs || !props.inputs.length || !props.legend || !props.inputName) return null;

	return (
		<FormRow>
			<fieldset>
				<legend>{props.legend}</legend>
				{props.inputs.map((input, index) => {
					return (
						<Radio
							key={index}
							id={input.id}
							name={props.inputName}
							value={input.value}
							labelText={input.labelText}
						/>
					)
				})}
			</fieldset>
		</FormRow>
	);

};

export default RadioGroup;
