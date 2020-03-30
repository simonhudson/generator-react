'use strict';

import React from 'react';
import Label from '~/components/form/label';
import Option from '~/components/form/select/option';
import FormRow from '~/components/form/form-row';
import './css/styles.scss';

const Select = props => {
    if (
        !props.id ||
        !props.labelText ||
        !props.options ||
        !props.options.length
    )
        return null;

    return (
        <FormRow>
            <Label {...props} />
            <select
                data-test="select"
                id={props.id}
                name={props.name ? props.name : props.id}
            >
                {props.options.map((option, index) => {
                    return (
                        <Option
                            key={index}
                            value={option.value}
                            text={option.text}
                        />
                    );
                })}
            </select>
        </FormRow>
    );
};

export default Select;
