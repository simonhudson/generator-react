'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Loading from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

describe('Loading', () => {

    let objectUnderTest;
    const selector = `div[data-test="loading"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should render as expected', () => {
        const props = cloneDeep();
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = props => objectUnderTest = mount(<Loading />);

});
