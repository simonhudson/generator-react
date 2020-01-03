'use strict';

import React from 'react';
import { mount } from 'enzyme';
import NumberSelect from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    id: 'foo',
    labelText: 'Some label',
    min: 5,
    max: 10
};

describe('NumberSelect', () => {

    let objectUnderTest;
	const selector = `select[data-test="number-select"]`;
    const label = `label[data-test="form-label"]`;

    it('should return null when no id prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.id;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no labelText prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.labelText;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no max prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.max;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        assertElementExists(objectUnderTest, label);
        expect(objectUnderTest.find(label).text()).toEqual('Some label');
        expect(objectUnderTest.find('option').at(0).text()).toEqual('5');
        expect(objectUnderTest.find('option').at(5).text()).toEqual('10');
    });

    it('should use zero as min value when no min prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.min;
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find('option').at(0).text()).toEqual('0');
        expect(objectUnderTest.find('option').at(10).text()).toEqual('10');
    });

    const initialise = props => objectUnderTest = mount(<NumberSelect {...props} />);

});
