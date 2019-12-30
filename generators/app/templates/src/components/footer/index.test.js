'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';
import { assertElementExists } from '&/tests/utilities';

describe('Footer', () => {

    let objectUnderTest;
	const selector = `[data-test="footer"]`;

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = () => objectUnderTest = shallow(<Footer />);

});
