'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Label from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    id: 'foo',
    labelText: 'My label'
};

describe('Label', () => {

    let objectUnderTest;
	const selector = `label[data-test="form-label"]`;
    const labelInfo = `span[data-test="label-info"]`;
    const HIDDEN_CLASS = 'visually-hidden';

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
        expect(objectUnderTest.find(selector).text()).toEqual('My label');
        expect(objectUnderTest.find(selector).prop('htmlFor')).toEqual('foo');
        expect(objectUnderTest.find(selector).hasClass(HIDDEN_CLASS)).toEqual(false);
    });

    it('should render as hidden when specified', () => {
        const props = cloneDeep(baseProps);
        props.hideLabel = true;
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).hasClass(HIDDEN_CLASS)).toEqual(true);
    });

    it('should render with info when specified', () => {
        const props = cloneDeep(baseProps);
        props.labelInfo = 'This is some info text';
        initialise(props);
        assertElementExists(objectUnderTest, labelInfo);
        expect(objectUnderTest.find(labelInfo).text()).toEqual('This is some info text');
    });

    const initialise = props => objectUnderTest = mount(<Label {...props} />);

});
