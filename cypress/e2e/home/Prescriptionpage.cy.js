/* ==== Test Created with Cypress Studio ==== */
it('drugpage', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');
  cy.get('#mat-input-0').clear('v');
  cy.get('#mat-input-0').type('valli@gmail.com');
  cy.get('#mat-input-1').clear('s');
  cy.get('#mat-input-1').type('sri');
  cy.get('.mat-button-wrapper').click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('tbody > :nth-child(1) > .cdk-column-email').click();
  cy.get(':nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon').click();
  cy.get('.form-wrapper > .mat-raised-button > .mat-button-wrapper').click();

  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.form-wrapper > .mat-raised-button').click();
  cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force: true });
  cy.get('#mat-radio-11-input').check();
  cy.get('.preference-wrapper > .button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.ng-tns-c108-28 > .ant-select-selection-search > .ant-select-selection-search-input').clear('a');
  cy.get('.ng-tns-c108-28 > .ant-select-selection-search > .ant-select-selection-search-input').type('aspi');
  cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
  cy.get('.marginTop2Percent > .ng-star-inserted').click({ multiple: true });
  /* ==== End Cypress Studio ==== */
});