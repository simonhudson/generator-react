'use strict';

import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { assertElementExists } from '&/tests/utilities';

describe('App', () => {
    let objectUnderTest;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, [
            'Header',
            'MainNavigation',
            'Footer'
        ]);
    });

    const initialise = () => (objectUnderTest = mount(<App />));
});
