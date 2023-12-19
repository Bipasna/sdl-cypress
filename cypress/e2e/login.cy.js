// describe('login', () => {
//   beforeEach(() =>
//   {  
//       cy.visit("https://qa-platform.specialitydrinks.com/");
      
//   })


// it('verify title: negative', () => {
//   cy.get('.col > .btn').click();
//   cy.wait(1000);
//   //cy.title().should('eq', 'Log in | SDL(QA)');

  
// });
// });

describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://qa-platform.specialitydrinks.com/");
    cy.get('.col > .btn').click();
    cy.origin('https://specialitydrinks-qa.eu.auth0.com' , () => {
     
     
      cy.url({ timeout: 1000 }).should('include', 'https://specialitydrinks-qa.eu.auth0.com/u/login?');
      cy.get('#username').type('admin@thewhiskeyexchange.com');
      cy.get('#password').type('p@ssw0rd');
      cy.get('.ccaa66e69 > .c6141592f').click();
      cy.origin('https://qa-platform.specialitydrinks.com' , () => {
        cy.wait(1000);
        cy.url({ timeout: 1000 }).should('include', 'https://qa-platform.specialitydrinks.com/dashboard');
        cy.get(':nth-child(2) > .col-lg-3 > a > .sc-kgbQpE').click();
      });
    });
   
   });
});


