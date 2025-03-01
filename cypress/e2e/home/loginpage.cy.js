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
it('logintest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');
  cy.get('#mat-input-0').clear('v');
  cy.get('#mat-input-0').type('valli@gmail.com');
  cy.get('#mat-input-1').clear('s');
  cy.get('#mat-input-1').type('sri');
  cy.get('.mat-button-wrapper').click();
  /* ==== End Cypress Studio ==== */
});
