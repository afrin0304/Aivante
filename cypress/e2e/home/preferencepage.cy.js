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
  it('Basic_Test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-form-field.ng-tns-c170-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#mat-input-0').clear();
    cy.get('#mat-input-0').type('valli@gmail.com ');
    cy.get('#mat-input-0').click();
    cy.get('#mat-input-1').clear('s');
    cy.get('#mat-input-1').type('sri');
    cy.get('.mat-focused > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#mat-input-0').clear('valli@gmail.com');
    cy.get('#mat-input-0').type('valli@gmail.com');
    cy.get('.mat-button-wrapper').click();
    cy.get('tbody > :nth-child(1) > .cdk-column-email').click();
    cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('#mat-input-3').clear('a');
    cy.get('#mat-input-3').type('afrin.gmail.com');
    cy.get('#mat-input-3').clear('afringmail.com');
    cy.get('#mat-input-3').type('afrin@gmail.com');
    cy.get('#mat-select-value-3').click();
    cy.get('#mat-option-5 > .mat-option-text').click();
    cy.get('#mat-input-4').clear('a');
    cy.get('#mat-input-4').type('afee');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(7) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#mat-input-7').clear();
    cy.get('#mat-input-7').type('604,sofia Ln, Apt j');
    cy.get('#mat-input-8').clear('2');
    cy.get('#mat-input-8').type('28262');
    cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-field.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#mat-option-12 > .mat-option-text').click();
    cy.get('.form-wrapper > .mat-raised-button > .mat-button-wrapper').click();
    cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').should('be.visible').click({force:true});
    cy.get('#mat-radio-11-input').check();
    cy.get('.preference-wrapper > .button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .login-form-forgot > u').click();
    cy.get('.ant-drawer-body > :nth-child(13)').click();
    cy.get('.ant-drawer-footer > div.ng-star-inserted > :nth-child(2) > .ng-star-inserted').click();
    cy.get('.primary-btn').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.wait(2000);
    cy.get('.marginTop2Percent > .ng-star-inserted').click();
    cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get('#mat-checkbox-2-input').check();
    cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get('#mat-checkbox-3-input').check();
    cy.get('.button-wrapper > .mat-button-wrapper').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#mat-checkbox-13 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get('#mat-checkbox-13-input').check();
    cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('#mat-checkbox-25-input').check();
    cy.get('.button-container > :nth-child(2) > .mat-button-wrapper').click();
    /* ==== End Cypress Studio ==== */
  });

  

  it('new_Test23', function() {
    /* ==== Generated with Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
  });

  it('new_Test24', function() {
    /* ==== Generated with Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
  });
})
