'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Header from './index';
import { assertElementExists } from '&/tests/utilities';

describe('Header', () => {

    let objectUnderTest;
	const selector = `header[data-test="header"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = () => objectUnderTest = mount(<Header />);

});
