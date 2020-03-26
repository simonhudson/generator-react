'use strict';

import { mainNavigation } from '../../../config/selectors';
import { breakpoints } from '../../../config';

beforeEach(() => {
    cy.openPage('home');
});

const navigationIsNotVisible = () => {
    cy.wait(500)
        .get(mainNavigation.root)
        .then(element => {
            const rect = element[0].getBoundingClientRect();
            expect(rect.top).to.equal(0);
            expect(rect.left).to.equal(-breakpoints.phone.width);
        });
};

const navigationIsVisible = () => {
    cy.wait(500)
        .get(mainNavigation.root)
        .then(element => {
            const rect = element[0].getBoundingClientRect();
            expect(rect.top).to.equal(0);
            expect(rect.left).to.equal(0);
        });
};

describe('Main navigation', () => {
    describe('Mobile', () => {
        beforeEach(() => cy.setMobile());

        it('should hide navigation on load', () => {
            navigationIsNotVisible();
        });

        it('should show toggle on load', () => {
            cy.get(mainNavigation.toggle).should('be.visible');
        });

        it('should toggle navigation on toggle click', () => {
            cy.get(mainNavigation.toggle).click();
            navigationIsVisible();
            cy.get(mainNavigation.toggle).click();
            navigationIsNotVisible();
        });
    });
    describe('Tablet', () => {
        beforeEach(() => cy.setTablet(true));

        it('should show navigation on load', () => {
            navigationIsVisible();
        });

        it('should hide toggle on load', () => {
            cy.get(mainNavigation.toggle).should('not.be.visible');
        });
    });
    describe('Desktop', () => {
        beforeEach(() => cy.setDesktop());

        it('should show navigation on load', () => {
            navigationIsVisible();
        });

        it('should hide toggle on load', () => {
            cy.get(mainNavigation.toggle).should('not.be.visible');
        });
    });
});
