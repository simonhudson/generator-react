'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Accordion from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    summaryText: 'Find out more information'
};

describe('Accordion', () => {

    let objectUnderTest;
	const selector = `[data-test="accordion"]`;
    const summary = `[data-test="accordion__summary"]`;
    const content = `[data-test="accordion__content"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should return null when no summaryText prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.summaryText;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    it('should render with correct summary text', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, summary);
        expect(objectUnderTest.find(summary).text()).to.equal('Find out more information');
    });

    it('should render with content element', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, content);
    });

    const initialise = props => objectUnderTest = mount(<Accordion {...props} />);

});
