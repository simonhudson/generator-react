'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Footer from './index';
import { assertElementExists } from '&/tests/utilities';

describe('Footer', () => {

    let objectUnderTest;
	const selector = `footer[data-test="footer"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = () => objectUnderTest = mount(<Footer />);

});
