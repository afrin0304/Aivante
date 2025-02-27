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
    cy.visit('http://169.61.105.110/aivante-medicare/user-info')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Basic_Test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#mat-input-0').clear('a');
    cy.get('#mat-input-0').type('afrin@gmail.com');
    cy.get('#mat-input-1').clear();
    cy.get('#mat-input-1').type('Afrin nirmala');
    cy.get('#mat-input-2').clear();
    cy.get('#mat-input-2').type('28262{enter}');
    cy.get('#mat-radio-1-input').check();
    cy.get('.mdc-button__label').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('basic2', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#mat-input-0').clear('a');
    cy.get('#mat-input-0').type('afrinnirmala2002@gmail.com');
    cy.get('#mat-input-1').clear('A');
    cy.get('#mat-input-1').type('Afrin nirmala');
    cy.get('#mat-input-2').clear('2');
    cy.get('#mat-input-2').type('28262');
    cy.get('#mat-select-value-0').click();
    cy.get('.mdc-icon-button > .mat-icon').click();
    cy.get('#mat-radio-1-input').check();
    cy.get('#mat-select-value-3').click();
    cy.get('#mat-option-12 > .mdc-list-item__primary-text').click();
    cy.wait(1000);
    cy.get('.mdc-button > .mat-mdc-button-touch-target').should('be.visible').click({force:true});
    /* ==== End Cypress Studio ==== */
  });
})
