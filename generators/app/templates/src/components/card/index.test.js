'use strict';

import React from 'react';
import { mount } from 'enzyme';
const cloneDeep = require('lodash/cloneDeep');
import Card from './index';
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    title: 'Card title',
    content: 'Card content'
};

describe('Card', () => {

    let objectUnderTest;
    const selector = `div[data-test="card"]`;
    const media = `div[data-test="card__media"]`;
    const title = `p[data-test="card__title"]`;
    const content = `div[data-test="card__content"]`;
    const contentText = `p[data-test="card__content-text"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should render as expected when all content available', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        assertElementExists(objectUnderTest, media);
        assertElementExists(objectUnderTest, title);
        expect(objectUnderTest.find(title).text()).toEqual('Card title');
        assertElementExists(objectUnderTest, content);
        assertElementExists(objectUnderTest, contentText);
        expect(objectUnderTest.find(contentText).text()).toEqual('Card content');
    });

    it('should not render title when no title passed', () => {
        const props = cloneDeep(baseProps);
        delete props.title;
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        assertElementDoesNotExist(objectUnderTest, title);
    });

    it('should not render content when no content passed', () => {
        const props = cloneDeep(baseProps);
        delete props.content;
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        assertElementDoesNotExist(objectUnderTest, contentText);
    });

    const initialise = props => objectUnderTest = mount(<Card {...props} />);

});
