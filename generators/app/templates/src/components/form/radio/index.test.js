'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Radio from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    id: 'my-id',
    name: 'my-name',
    value: 'my-value',
    labelText: 'My label'
};

describe('Radio', () => {

    let objectUnderTest;
	const selector = `input[data-test="form-radio"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should return null when no id prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.id;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no name prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.name;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no value prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.value;
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
        expect(objectUnderTest.find(selector).prop('type')).toEqual('radio');
        expect(objectUnderTest.find(selector).prop('id')).toEqual('my-id');
        expect(objectUnderTest.find(selector).prop('name')).toEqual('my-name');
        expect(objectUnderTest.find(selector).prop('value')).toEqual('my-value');
    });
    //
    // it('should render as hidden when specified', () => {
    //     const props = cloneDeep(baseProps);
    //     props.hideRadio = true;
    //     initialise(props);
    //     assertElementExists(objectUnderTest, selector);
    //     expect(objectUnderTest.find(selector).hasClass(HIDDEN_CLASS)).toEqual(true);
    // });
    //
    // it('should render with info when specified', () => {
    //     const props = cloneDeep(baseProps);
    //     props.labelInfo = 'This is some info text';
    //     initialise(props);
    //     assertElementExists(objectUnderTest, labelInfo);
    //     expect(objectUnderTest.find(labelInfo).text()).toEqual('This is some info text');
    // });

    const initialise = props => objectUnderTest = mount(<Radio {...props} />);

});
