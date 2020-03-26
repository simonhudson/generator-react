'use strict';

import { mainNavigation } from '../config/selectors';
import { breakpoints } from '../config';

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
            cy.get(mainNavigation.toggle).should(
                'have.class',
                'main-navigation-is-visible'
            );
            cy.get(mainNavigation.root).should(
                'have.class',
                'main-navigation--is-visible'
            );
        });
};

describe('Main navigation', () => {
    describe('mobile', () => {
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
});
