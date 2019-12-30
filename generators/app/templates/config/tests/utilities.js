'use strict';

import { expect } from 'chai';

const assertElementExists = (objectUnderTest, element) => {
    expect(objectUnderTest.html()).to.not.be.null;
    expect(objectUnderTest.exists(element)).to.be.true;
    expect(objectUnderTest.find(element).length).to.equal(1);
};

const assertElementDoesNotExist = (objectUnderTest, element) => {
    expect(objectUnderTest.html()).to.be.null;
    expect(objectUnderTest.exists(element)).to.be.false;
    expect(objectUnderTest.find(element).length).to.equal(0);
};

module.exports = {
    assertElementExists,
    assertElementDoesNotExist
};
