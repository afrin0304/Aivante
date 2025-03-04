/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login')
    cy.get('#mat-input-0').clear('a');
    cy.get('#mat-input-0').type('valli@gmail.com');
    cy.get('#mat-input-1').clear('s');
    cy.get('#mat-input-1').type('sri');
    cy.get('.mat-button-wrapper').click();
  })

  /* ==== Test Created with Cypress Studio ==== */
  
})

/* ==== Test Created with Cypress Studio ==== */
it('preferencetest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');
  cy.get('#mat-input-0').clear('v');
  cy.get('#mat-input-0').type('valli@gmail.com');
  cy.get('#mat-input-1').clear('s');
  cy.get('#mat-input-1').type('sri');
  cy.get('.mat-button-wrapper').click();
  cy.get(':nth-child(1) > .cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
  cy.get(':nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon').click();
  cy.get('.form-wrapper > .mat-raised-button').click();
  cy.wait(1500);
  cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force: true });
 
  cy.get('#mat-radio-11-input').check();
  
  cy.get('.preference-wrapper > .button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click();
  /* ==== End Cypress Studio ==== */
});
