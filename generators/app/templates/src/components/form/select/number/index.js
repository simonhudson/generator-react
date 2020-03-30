'use strict';

import React from 'react';
import Label from '~/components/form/label';
import Option from '~/components/form/select/option';
import FormRow from '~/components/form/form-row';
import '../css/styles.scss';

const NumberSelect = props => {
    if (!props.id || !props.labelText || !props.max) return null;

    let min = props.min || 0;

    const generateOptions = () => {
        let options = [];
        for (let i = min; i <= props.max; i++)
            options.push(<Option key={i} value={i} text={i} />);
        return props.descending ? options.reverse() : options;
    };

    return (
        <FormRow>
            <Label {...props} />
            <select
                data-test="number-select"
                id={props.id}
                name={props.name ? props.name : props.id}
            >
                {generateOptions()}
            </select>
        </FormRow>
    );
};

export default NumberSelect;
