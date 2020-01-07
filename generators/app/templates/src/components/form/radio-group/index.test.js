'use strict';

import React from 'react';
import { mount } from 'enzyme';
import RadioGroup from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    legend: 'Tell us your gender',
    inputName: 'gender',
    inputs: [
        { id: 'gender-male', value: 'male', labelText: 'Male' },
        { id: 'gender-female', value: 'female', labelText: 'Female' },
        { id: 'gender-other', value: 'other', labelText: 'Other' }
    ]
};

describe('RadioGroup', () => {

    let objectUnderTest;
	const selector = `fieldset[data-test="form-radio-group"]`;
    const input = `input[data-test="form-radio"]`;
    const label = `label[data-test="form-label"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should return null when no inputs prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.inputs;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when inputs prop is an empty array', () => {
        const props = cloneDeep(baseProps);
        props.inputs = [];
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no legend prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.legend;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no inputName prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.inputName;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    it('should render correct inputs and labels', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.find(input).length).toEqual(3);
        expect(objectUnderTest.find(input).at(0).prop('id')).toEqual('gender-male');
        expect(objectUnderTest.find(input).at(0).prop('value')).toEqual('male');
        expect(objectUnderTest.find(label).at(0).prop('htmlFor')).toEqual('gender-male');
        expect(objectUnderTest.find(label).at(0).text()).toEqual('Male');
        expect(objectUnderTest.find(input).at(1).prop('id')).toEqual('gender-female');
        expect(objectUnderTest.find(input).at(1).prop('value')).toEqual('female');
        expect(objectUnderTest.find(label).at(1).prop('htmlFor')).toEqual('gender-female');
        expect(objectUnderTest.find(label).at(1).text()).toEqual('Female');
        expect(objectUnderTest.find(input).at(2).prop('id')).toEqual('gender-other');
        expect(objectUnderTest.find(input).at(2).prop('value')).toEqual('other');
        expect(objectUnderTest.find(label).at(2).prop('htmlFor')).toEqual('gender-other');
        expect(objectUnderTest.find(label).at(2).text()).toEqual('Other');
    });

    const initialise = props => objectUnderTest = mount(<RadioGroup {...props} />);

});
