/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login')
  })

  
  
})

/* ==== Test Created with Cypress Studio ==== */
it('recommendation', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');
  cy.get('#mat-input-0').clear('v');
  cy.get('#mat-input-0').type('valli@gmail.com');
  cy.get('#mat-input-1').clear('s');
  cy.get('#mat-input-1').type('sri');
  cy.get('.mat-button-wrapper').click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').click();
  cy.get('#mat-input-3').clear('a');
  cy.get('#mat-input-3').type('afrinnirmala2002@gmail.com');
  cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
  cy.get('#mat-input-4').clear();
  cy.get('#mat-input-4').type('nirmala');
  cy.get('#mat-input-7').clear('s');
  cy.get('#mat-input-7').type('sofia ln');
  cy.get('#mat-input-8').clear('2');
  cy.get('#mat-input-8').type('28262');
  cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
  cy.get('.mat-field.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
  cy.get('#mat-option-13 > .mat-option-text').click();
  cy.get('.form-wrapper > .mat-raised-button > .mat-button-wrapper').click();
  /* ==== End Cypress Studio ==== */
});
