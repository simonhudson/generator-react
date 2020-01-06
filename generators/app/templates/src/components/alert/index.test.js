'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Alert from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    type: 'warning'
};

describe('Alert', () => {

    let objectUnderTest;
	const selector = `[data-test="alert"]`;
    const icon = `[data-test="icon"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should return null when no type prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.type;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when invalid type prop passed', () => {
        const props = cloneDeep(baseProps);
        props.type = 'foo';
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).hasClass('alert--warning')).to.equal(true);
    });

    it('should render with icon', () => {
        const props = cloneDeep(baseProps);
        props.hasIcon = true;
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        assertElementExists(objectUnderTest, icon);
        expect(objectUnderTest.find(selector).hasClass('alert--has-icon')).to.equal(true);
        expect(objectUnderTest.find(icon).hasClass('fa-exclamation-triangle')).to.equal(true);
    });

    const initialise = props => objectUnderTest = mount(<Alert {...props} />);

});
