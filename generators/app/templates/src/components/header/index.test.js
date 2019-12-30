'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { assertElementExists } from '&/tests/utilities';

describe('Header', () => {

    let objectUnderTest;
	const selector = `[data-test="header"]`;

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = () => objectUnderTest = shallow(<Header />);

});
