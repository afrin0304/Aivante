/* ==== Test Created with Cypress Studio ==== */
it('longteamtest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');
    cy.get('#mat-input-0').clear('v');
    cy.get('#mat-input-0').type('valli@gmail.com');
    cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#mat-input-1').clear();
    cy.get('#mat-input-1').type('sri');
    cy.get('.mat-button-wrapper').click();
    cy.wait(2000);
    cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('#mat-input-3').clear('a');
    cy.get('#mat-input-3').type('afrinnirmala2002@gmail.com');
    cy.get('#mat-select-value-3 > .mat-select-value-text > .mat-select-min-line').click();
    cy.get('#mat-option-4 > .mat-option-text').click();
    cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#mat-input-4').clear();
    cy.get('#mat-input-4').type('afrin nirmala');
    cy.get('#mat-input-7').clear('6');
    cy.get('#mat-input-7').type('604 sofia ln');
    cy.get(':nth-child(9) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#mat-input-8').clear();
    cy.get('#mat-input-8').type('28262');
    cy.get(':nth-child(11) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.get('.form-wrapper > .mat-raised-button').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */

    cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('#mat-radio-11-input').check();
    cy.get('.preference-wrapper > .button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('.ng-tns-c108-28 > .ant-select-selection-search > .ant-select-selection-search-input').clear('a');
    cy.get('.ng-tns-c108-28 > .ant-select-selection-search > .ant-select-selection-search-input').type('aspi');
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.wait(2000);

    cy.get('.primary-btn > .ng-star-inserted').click();
    cy.wait(2000);

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.marginTop2Percent > .ng-star-inserted').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.wait(2000);
    cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').should('be.visible').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get('#mat-checkbox-4-input').check();
    cy.get('.button-wrapper > .mat-button-wrapper').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('#mat-checkbox-13 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get('#mat-checkbox-13-input').check();
    cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('.mat-card-header').click();
    cy.get('.main-header > .mat-tooltip-trigger').click();
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('#mat-checkbox-25-input').check();
    cy.get('.button-container > :nth-child(2) > .mat-button-wrapper').click();
    /* ==== End Cypress Studio ==== */
})