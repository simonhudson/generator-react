'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import Label from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

const baseProps = {
    id: 'foo',
    labelText: 'My label'
};

describe('Label', () => {

    let objectUnderTest;
	const selector = `label[data-test="form-label"]`;
    const HIDDEN_CLASS = 'visually-hidden';

    it('should return null when no id prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.id;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null when no labelText prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.labelText;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).text()).toEqual('My label');
        expect(objectUnderTest.find(selector).prop('htmlFor')).toEqual('foo');
        expect(objectUnderTest.find(selector).hasClass(HIDDEN_CLASS)).toEqual(false);
    });

    it('should render as hidden when specified', () => {
        const props = cloneDeep(baseProps);
        props.hideLabel = true;
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).hasClass(HIDDEN_CLASS)).toEqual(true);
    });

    //
    // it('should render with truncated text when specified', () => {
    //     const props = cloneDeep(baseProps);
    //     props.truncate = true;
    //     initialise(props);
    //     expect(objectUnderTest.find('option').length).toEqual(7);
    //     expect(objectUnderTest.find('option').at(0).text()).toEqual('Mon');
    //     expect(objectUnderTest.find('option').at(6).text()).toEqual('Sun');
    // });

    const initialise = props => objectUnderTest = shallow(<Label {...props} />);

});
