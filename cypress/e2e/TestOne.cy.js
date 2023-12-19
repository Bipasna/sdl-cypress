describe('Test One', () => {
    it('verify title: positive', () => {
      
        cy.visit("https://specialitydrinks-qa.eu.auth0.com/u/login?state=hKFo2SB1eGUwcFZtTTRaV1piNnFwc3VsS3B0dGJ5Z3FsYzZjWaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHh6R2VpSWJ1NDBHS2dIMnI0cDJ5aXdEUjNWQmhtZllso2NpZNkgMzdLaUZSdlVGcVkyMnVKNXpteE5JY2V2ZzBka2lGRlc");
        cy.title().should('eq','Speciality Drinks');

    });

    // it('verify title: negative', () => {
      
    //     cy.visit("https://specialitydrinks-qa.eu.auth0.com/u/login?state=hKFo2SB1eGUwcFZtTTRaV1piNnFwc3VsS3B0dGJ5Z3FsYzZjWaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHh6R2VpSWJ1NDBHS2dIMnI0cDJ5aXdEUjNWQmhtZllso2NpZNkgMzdLaUZSdlVGcVkyMnVKNXpteE5JY2V2ZzBka2lGRlc");
    //     cy.title().should('eq','specialitydrinksI');

    // });
  });

