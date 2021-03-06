'use strict';

import React from 'react';
import { mount } from 'enzyme';
import MonthSelect from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    id: 'foo',
    labelText: 'Month'
};

describe('MonthSelect', () => {

    let objectUnderTest;
	const selector = `select[data-test="month-select"]`;
    const label = `label[data-test="form-label"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

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

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        assertElementExists(objectUnderTest, label);
        expect(objectUnderTest.find(label).text()).toEqual('Month');
        expect(objectUnderTest.find('option').length).toEqual(12);
        expect(objectUnderTest.find('option').at(0).text()).toEqual('January');
        expect(objectUnderTest.find('option').at(0).prop('value')).toEqual(1);
        expect(objectUnderTest.find('option').at(11).text()).toEqual('December');
        expect(objectUnderTest.find('option').at(11).prop('value')).toEqual(12);
    });

    it('should render with truncated text when specified', () => {
        const props = cloneDeep(baseProps);
        props.truncate = true;
        initialise(props);
        expect(objectUnderTest.find('option').length).toEqual(12);
        expect(objectUnderTest.find('option').at(0).text()).toEqual('Jan');
        expect(objectUnderTest.find('option').at(11).text()).toEqual('Dec');
    });

    const initialise = props => objectUnderTest = mount(<MonthSelect {...props} />);

});
