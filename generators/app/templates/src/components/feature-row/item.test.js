'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import FeatureRowItem from './item';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    title: 'Item title',
    ctaUrl: '/some/url'
};

describe('FeatureRowItem', () => {

    let objectUnderTest;
    const selector = `div[data-test="feature-row-item"]`;
    const title = `p[data-test="feature-row-item__title"]`;
    const cta = `a[data-test="feature-row-item__cta"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should return null when no title prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.title;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no ctaUrl prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.ctaUrl;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    it('should render with correct title', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(title).text()).to.equal('Item title');
    });

    it('should render with correct CTA link', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(cta).prop('href')).to.equal('/some/url');
    });

    const initialise = props => objectUnderTest = mount(<FeatureRowItem {...props} />);

});
