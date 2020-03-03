'use strict';

import React from 'react';
import { mount } from 'enzyme';
import FeatureRow from './index';
import { assertElementExists } from '&/tests/utilities';

describe.only('FeatureRow', () => {

    let objectUnderTest;
    const selector = `div[data-test="row"]`;
    const wrap = `div[data-test="row__wrap"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should render as expected when data has loaded', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
        assertElementExists(objectUnderTest, wrap);
    });

    const initialise = props => objectUnderTest = mount(<FeatureRow />);

});
