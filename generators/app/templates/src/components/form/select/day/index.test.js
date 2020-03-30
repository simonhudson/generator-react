'use strict';

import React from 'react';
import { mount } from 'enzyme';
import DaySelect from './index';
const cloneDeep = require('lodash/cloneDeep');
import {
    assertElementExists,
    assertElementDoesNotExist
} from '&/tests/utilities';

const baseProps = {
    id: 'foo-id',
    name: 'foo-name',
    labelText: 'Day'
};

describe('DaySelect', () => {
    let objectUnderTest;
    const selector = `select[data-test="day-select"]`;
    const label = `label[data-test="form-label"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

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
        assertElementExists(objectUnderTest, label);
        expect(objectUnderTest.find(label).text()).toEqual('Day');
        expect(objectUnderTest.find('option').length).toEqual(7);
        expect(
            objectUnderTest
                .find('option')
                .at(0)
                .text()
        ).toEqual('Monday');
        expect(
            objectUnderTest
                .find('option')
                .at(0)
                .prop('value')
        ).toEqual(1);
        expect(
            objectUnderTest
                .find('option')
                .at(6)
                .text()
        ).toEqual('Sunday');
        expect(
            objectUnderTest
                .find('option')
                .at(6)
                .prop('value')
        ).toEqual(7);
    });

    it('should render with truncated text when specified', () => {
        const props = cloneDeep(baseProps);
        props.truncate = true;
        initialise(props);
        expect(objectUnderTest.find('option').length).toEqual(7);
        expect(
            objectUnderTest
                .find('option')
                .at(0)
                .text()
        ).toEqual('Mon');
        expect(
            objectUnderTest
                .find('option')
                .at(6)
                .text()
        ).toEqual('Sun');
    });

    const initialise = props =>
        (objectUnderTest = mount(<DaySelect {...props} />));
});
