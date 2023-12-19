const cypress = require ("cypress")

describe('CSSLocators', ()=>{

    it("csslocators", ()=>{
        cy.visit("https://qa-platform.specialitydrinks.com/")
     //   cy.get(".btn btn-outline-activeprimary").type("button").click()
        cy.get(".col > .btn").click()
        cy.wait(1000);


    })
})

