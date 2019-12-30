'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Alert from './index';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    type: 'warning'
};

describe('Alert', () => {

    let objectUnderTest;
	const selector = `[data-test="alert"]`;
    const icon = `[data-test="icon"]`;

    it('should return null when no type prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.type;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });

    it('should return null when invalid type prop passed', () => {
        const props = cloneDeep(baseProps);
        props.type = 'foo';
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
        expect(objectUnderTest.find(selector).hasClass('alert--warning')).to.equal(true);
    });

    it('should render with icon', () => {
        const props = cloneDeep(baseProps);
        props.hasIcon = true;
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.find(selector).hasClass('alert--has-icon')).to.equal(true);
        expect(objectUnderTest.exists(icon)).to.be.true;
        expect(objectUnderTest.find(icon).length).to.equal(1);
        expect(objectUnderTest.find(icon).hasClass('fa-exclamation-triangle')).to.equal(true);
    });

    const initialise = props => objectUnderTest = mount(<Alert {...props} />);

});
