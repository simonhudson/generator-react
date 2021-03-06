'use strict';

import React from 'react';
import { mount } from 'enzyme';
import FormRow from './index';
import { assertElementExists } from '&/tests/utilities';

describe('FormRow', () => {

    let objectUnderTest;
	const selector = `div[data-test="form-row"]`;

    afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = props => objectUnderTest = mount(<FormRow {...props} />);

});
