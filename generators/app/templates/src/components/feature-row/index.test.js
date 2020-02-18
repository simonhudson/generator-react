'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import FeatureRow from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    items: [
        { title: 'Lorem ipsum', ctaUrl: '#' },
        { title: 'Craig Bryson', ctaUrl: '#' },
        { title: 'The Texas Chain Saw Massacre', ctaUrl: '#' }
    ]
};

describe('FeatureRow', () => {

    let objectUnderTest;
    const selector = `div[data-test="feature-row"]`;
    const item = `div[data-test="feature-row-item"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should return null when no items prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.items;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when empty items prop passed', () => {
        const props = cloneDeep(baseProps);
        props.items = [];
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    it('should render the correct number of items', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(item).length).to.equal(3);
    });

    const initialise = props => objectUnderTest = mount(<FeatureRow {...props} />);

});
