describe('Medicare Advantage Sandbox', () => {
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');
        
        // Login
        cy.get('#mat-input-0').clear().type('valli@gmail.com');
        cy.get('#mat-input-1').clear().type('sri');
        cy.get('.mat-button-wrapper').click();
        cy.wait(2000);

        // Navigate through the form
        cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
          .should('be.visible')
          .click({ force: true });
        cy.wait(2000);

        // Fill user details
        cy.get('#mat-input-3').clear().type('afrinnirmala2002@gmail.com');
        cy.get('#mat-select-value-3 > .mat-select-value-text > .mat-select-min-line').click();
        cy.get('#mat-option-4 > .mat-option-text').click();
        cy.get('#mat-input-4').clear().type('afrin nirmala');
        cy.get('#mat-input-7').clear().type('604 sofia ln');
        cy.get('#mat-input-8').clear().type('28262');
        cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
        cy.get('.form-wrapper > .mat-raised-button').click();
        
        // Select radio option
        cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
          .should('be.visible')
          .click({ force: true });
        cy.wait(2000);
        cy.get('#mat-radio-11-input').check();
        cy.get('.preference-wrapper > .button-wrapper > .mat-focus-indicator > .mat-button-wrapper').click();

        // Search and select dropdown
        cy.get('.ng-tns-c108-28 > .ant-select-selection-search > .ant-select-selection-search-input')
          .clear()
          .type('aspi');
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();

        cy.wait(2000);
        cy.get('.primary-btn > .ng-star-inserted').click();
        cy.wait(2000);
        cy.get('.marginTop2Percent > .ng-star-inserted').click();
        cy.wait(2000);
        cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper')
          .should('be.visible')
          .click();
        
        // Checkbox interactions
        cy.get('#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get('#mat-checkbox-4-input').check();
        cy.get('.button-wrapper > .mat-button-wrapper').click();

        cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('#mat-checkbox-13 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get('#mat-checkbox-13-input').check();
        cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').click();
        
        // Final selections and submission
        cy.get('.mat-card-header').click();
        cy.get('.main-header > .mat-tooltip-trigger').click();
        cy.get('.mat-checkbox-inner-container').click();
        cy.get('#mat-checkbox-25-input').check();
        cy.get('.button-container > :nth-child(2) > .mat-button-wrapper').click();
    });

//    it('should complete the user form and proceed through the application', () => {
//        // Test execution happens in beforeEach, so this test will simply verify if everything was successful
//        cy.log('Test executed successfully');
//        cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableBefore)=>{
//            const initialContent = $tableBefore.text().trim();
//            cy.get('.mat-expansion-panel-header-title').click();
//            cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
//            cy.get('#mat-option-44 > .mat-option-text').click();
//            cy.wait(1000);
//            cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
//            cy.wait(1000); 
//                cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableAfter)=>{
//                    const finalContent = $tableAfter.text().trim();
//                    expect(finalContent).not.to.eq(initialContent);
//                });
//        });
//        /* ==== Generated with Cypress Studio ==== */
//        cy.get('#mat-expansion-panel-header-1').click();
//        cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
//        cy.get('#mat-option-42 > .mat-option-text').click();
//        cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
//        /* ==== End Cypress Studio ==== */
//    });
//     it('First select in-home care option 4, Select in-home care option 3 and compare the values',()=>{
//         cy.log('Test executed successfully');
//         cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableBefore)=>{
//             const initialContent = $tableBefore.text().trim();
//             cy.get('.mat-expansion-panel-header-title').click();
//     cy.get('#mat-select-value-23').click();
//     cy.get('#mat-option-44 > .mat-option-text').click();
//     cy.get(':nth-child(5) > .mat-focus-indicator').click();
//     cy.get('.mat-expansion-panel-header-title').click();
//     cy.get('#mat-select-value-23').click();
//     cy.get('#mat-option-42 > .mat-option-text').click();
//     cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
            


//   });
      /* ==== Generated with Cypress Studio ==== */
  //     it('First select in-home care option 4, Select in-home care option 3 and compare the values',()=>{
  //       cy.log('Test executed successfully');
  //       cy.wait(2000);
  //       cy.get('.mat-expansion-panel-header-title').click();
  //       cy.get('#mat-select-value-23').click();
  //       cy.get('#mat-option-44 > .mat-option-text').click();
  //       cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
  //       cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableBefore)=>{
  //                  const initialContent = $tableBefore.text().trim();
  //                  cy.get('#mat-expansion-panel-header-1').click();
  //       cy.get('#mat-select-value-23').click();
  //       cy.get('#mat-option-42 > .mat-option-text').click();
  //       cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
  //       cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableAfter)=>{
  //                            const finalContent = $tableAfter.text().trim();
  //                             expect(finalContent).not.to.eq(initialContent);
  //                        });

    
  // });

       
  //     });

// it('should deselect the previously selected option when a new option is selected', () => {
//     cy.get('#mat-select-22').click(); 
//     cy.get('.mat-option');
//     cy.contains('1');
//     cy.get('#mat-select-22').should('be.visible').click({force:true});
//     cy.get('#mat-select-value-23').should('contain', '1');
//     cy.wait(2000);
//     cy.get('#mat-select-22').click({force:true});
//     cy.get('.mat-option').contains('2').click();
    
//     cy.get('#mat-select-22').click({force:true});

   
//     cy.get('#mat-select-value-23').should('contain', '2');
//     cy.wait(2000);
  
//     cy.get('#mat-select-value-23').should('not.contain', '1');
// });
// it('Ensure that Future Value and Present Value is changing accordingly Years of Nursing Home Care options', () => {
//   cy.log('Test executed successfully');
//   cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableBefore)=>{
//       const initialContent = $tableBefore.text().trim();
//       cy.get('.mat-expansion-panel-header-title').click();
//       cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
//       cy.get('#mat-option-44 > .mat-option-text').click();
//       cy.wait(1000); 
//       cy.get('#mat-select-value-25').click();
//       cy.get('#mat-option-53 > .mat-option-text').click();
//       cy.wait(1000); 
//       cy.get(':nth-child(5) > .mat-focus-indicator').click();
//       cy.wait(1000); 
//           cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableAfter)=>{
//               const finalContent = $tableAfter.text().trim();
//               expect(finalContent).not.to.eq(initialContent);
//           });
//   });
// });
it('Ensure the Future cost and Present value is changed and calculated and displayed correctly when the submit button is clicked after updating the quality of care, Adult day care, In Home care and Nursing Home care dropdowns.', () => {
  cy.log('Test executed successfully');
  cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableBefore)=>{
      const initialContent = $tableBefore.text().trim();
      cy.get('.mat-expansion-panel-header-title').click();
      cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
      cy.get('#mat-option-44 > .mat-option-text').click();
      cy.wait(1000); 
      cy.get('#mat-select-value-25').click();
      cy.get('#mat-option-53 > .mat-option-text').click();
      cy.wait(1000); 
      cy.get(':nth-child(5) > .mat-focus-indicator').click();
      cy.get('.mat-expansion-panel-header-title').click();
      cy.get('#mat-select-18 > .mat-select-trigger').click();
      cy.get('#mat-option-28 > .mat-option-text').click();
      cy.get('#mat-select-value-21').click();
      cy.get('#mat-option-32 > .mat-option-text').click();
      cy.get('#mat-select-value-23').click();
      cy.get('#mat-option-41 > .mat-option-text').click();
      cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
      cy.get('#mat-option-51 > .mat-option-text').click();
      cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click();
      cy.wait(1000); 
          cy.get('body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-long-term > div.longterm-container.login-box > div:nth-child(2) > table').then(($tableAfter)=>{
              const finalContent = $tableAfter.text().trim();
              expect(finalContent).not.to.eq(initialContent);
          });
  });
});
});
