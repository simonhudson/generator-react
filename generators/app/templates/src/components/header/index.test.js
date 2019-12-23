'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './index';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {};

describe('Header', () => {

    let objectUnderTest;
	const selector = `[data-test="header"]`;

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
    });

    const initialise = props => objectUnderTest = shallow(<Header {...props} />);

});
