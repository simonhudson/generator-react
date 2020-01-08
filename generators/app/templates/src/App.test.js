'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import { assertElementExists } from '&/tests/utilities';

describe('App', () => {

    let objectUnderTest;
    const header = `[data-test="header"]`;
    const mainNavigation = `[data-test="main-navigation"]`;
    const footer = `[data-test="footer"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, [header, mainNavigation, footer]);
    });

    const initialise = () => objectUnderTest = mount(<App />);

});
