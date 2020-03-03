// 'use strict';

// import React from 'react';
// import { mount } from 'enzyme';
// import { expect } from 'chai';
// import FeatureRow from './index';
// const cloneDeep = require('lodash/cloneDeep');
// import { assertElementExists, assertElementDoesNotExist } from '&/tests/utilities';

// describe('FeatureRow', () => {

//     let objectUnderTest;
//     const selector = `div[data-test="feature-row"]`;
//     const item = `div[data-test="feature-row-item"]`;
//     const loading = `div[data-test="loading"]`;

//     afterEach(() => !!objectUnderTest ? objectUnderTest.unmount() : null);

//     it('should render loading when loading data', () => {
//         const props = cloneDeep();
//         initialise(props);
//         objectUnderTest.setState({ isLoading: true });
// 		objectUnderTest.update();
//         assertElementExists(objectUnderTest, loading);
//     });

//     it('should render as expected when data has loaded', () => {
//         const props = cloneDeep();
//         initialise(props);
//         objectUnderTest.setState({ isLoading: false });
// 		objectUnderTest.update();
//         assertElementExists(objectUnderTest, selector);
//     });

//     it('should render the correct number of items', () => {
//         const props = cloneDeep();
//         initialise(props);
//         objectUnderTest.setState({
//             isLoading: false,
//             data: [
//                 { name: 'Lorem ipsum', url: '#' },
//                 { name: 'Craig Bryson', url: '#' },
//                 { name: 'The Texas Chain Saw Massacre', url: '#' }
//             ]
//         });
// 		objectUnderTest.update();
//         assertElementExists(objectUnderTest, selector);
//         expect(objectUnderTest.find(item).length).to.equal(3);
//     });

//     const initialise = props => objectUnderTest = mount(<FeatureRow {...props} />);

// });
