'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './index';

describe('Header', () => {
    
    let objectUnderTest;
	const selector = `[data-test="header"]`;
    
    it('should render as expected', () => {
        initialise();
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
    });

    const initialise = () => objectUnderTest = shallow(<Header />);
    
});
