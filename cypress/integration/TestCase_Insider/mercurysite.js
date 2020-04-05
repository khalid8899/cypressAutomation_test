describe('my first test', function()
{
    it('Verify Title', function()
    {
        cy.visit('http://www.newtours.demoaut.com/')
        cy.url().should('include','newtours')  //verify url
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=login]').should('be.visible').click()  //click on signon

        //verify title
        cy.title().should('eq','Find a Flight: Mercury Tours:')

        //radio button
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')  //check radiobutton status
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()  //check radiobutton status to unchecked an click
        
        //click on continue button
        cy.get('input[name=findFlights]').should('be.visible').click()

        //verify title
        cy.title().should('eq','Select a Flight: Mercury Tours')


      })

    
})