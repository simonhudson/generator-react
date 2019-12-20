'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Icon from './index';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    type: 'bars'
};

describe('Icon', () => {

    let objectUnderTest;
	const selector = `[data-test="icon"]`;

    it('should return null when no type prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.type;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
        expect(objectUnderTest.find(selector).hasClass('fa-bars')).to.equal(true);
    });

    const initialise = props => objectUnderTest = shallow(<Icon {...props} />);

});
