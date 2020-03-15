describe('my first test', function()
{
    it('Verify Title', function()
    {
        cy.visit('https://insider.in/')
        cy.title().should('eq', '#1 Events in Mumbai (Buy Tickets for all Upcoming Events)')
    })
    
    it('Select Mumbai City', function()
    {   
        cy.get('.city-list > :nth-child(6) > a').click()
    })

    it('Select Show', function()
    {
        
        cy.get('.carousel-item-1 > .featured-card > a').click()
       
    })

    it('Click Buy Now Button', function()
    {
        cy.scrollTo(500, 0)  
     //   cy.get('.header-detail > .action-button-wrapper > .action-button-btns-row > .action-button-main').click()
        cy.contains('BUY NOW').eq(0).click()

    })

/*    it('Click on Book', function()
    {

        cy.get('.choose-buy-button-link>button').eq(0).click()
    })  */

    it('Click on Book', function()
    {   
        cy.get('body').then($body => {
        if ($body.find('.choose-buy-button-link>button').length > 0)   //evaluates as true
         {

        //click on date book button
        cy.get('.choose-buy-button-link>button').eq(0).click()

         }

         if ($body.find('.marionette-spa-btn>button').length > 0)   //evaluates as true
         {

        //click on pass book button
        cy.get('.marionette-spa-btn>button').eq(0).click()

         }

        })
    })

    it('Choose 1 Qty from phase 1 ticket drop down and click Buy', function()
    {
        //select first option
        cy.get('select').eq(0).select('1').should('have.value', '1')
        //click on BUY button
        cy.get('.buyflow-buy>button').eq(0).click()

    })
    
    it('Verify user is on Checkout Page', function()
    {
        //Fetch current url and validate the same
        cy.url().should('eq', 'https://insider.in/buy/checkout')
        

    })

    
}


)