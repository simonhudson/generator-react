'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import LabelInfo from './info';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    labelInfo: 'My label info'
};

describe('LabelInfo', () => {

    let objectUnderTest;
    const selector = `span[data-test="label-info"]`;

    it('should return null when no labelInfo prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.labelInfo;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).text()).toEqual('My label info');
    });

    const initialise = props => objectUnderTest = shallow(<LabelInfo {...props} />);

});
