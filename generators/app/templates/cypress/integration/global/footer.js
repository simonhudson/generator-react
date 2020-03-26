'use strict';

import { footer } from '../../config/selectors';

beforeEach(() => {
    cy.openPage('home');
});

describe('Footer', () => {
    it('contains copyright text', () => {
        cy.get(footer.copyright)
            .should('be.visible')
            .contains('Copyright 2020');
    });
});
