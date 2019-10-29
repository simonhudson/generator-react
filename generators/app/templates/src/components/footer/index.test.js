'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './index';

describe('Footer', () => {
    
    let objectUnderTest;
	const selector = `[data-test="footer"]`;
    
    it('should render as expected', () => {
        initialise();
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
    });

    const initialise = () => objectUnderTest = shallow(<Footer />);
    
});
