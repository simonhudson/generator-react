'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Button from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    label: 'Click me',
    onClick: jest.fn()
};

describe('Button', () => {

    let objectUnderTest;
	const selector = `button[data-test="button"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should return null when no label prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.label;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no onClick prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.onClick;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    it('should render with default type when no prop passed', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).prop('type')).to.equal('button');
    });

    const initialise = props => objectUnderTest = mount(<Button {...props} />);

});
