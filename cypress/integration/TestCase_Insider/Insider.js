describe('my first test', function()
{
    it('Verify Title', function()
    {
        cy.visit('https://insider.in/')
        if(cy.title()>0)
        {
        cy.title().should('eq', '#1 Events in Mumbai (Buy Tickets for all Upcoming Events)')
        }
    /*    if (Cypress.env('isTablet'))
        {
            cy.log("tablet device selected")
        }*/

    })
    
    it('Select Mumbai City', function()
    {   
      
        cy.get('body').then($body => {
        if($body.find('.city-list-mobile > nav>li>a').eq(4).length > 0)
        {
        cy.get('.city-list-mobile > nav>li>a').eq(4).click()
        }
        else
        {
        cy.log("else opt")
        cy.get('.city-list>li>a').eq(4).should('be.visible').click()

        }
    })
    })

    it('Select Show', function()
    {
        
        cy.get('.carousel-item-1 > .featured-card > a').click()
       
    })



    it('Click Buy Now Button', function()
    {

    //  cy.scrollTo(500, 0)  
      /*  cy.get('.action-button-wrapper.page.bottom.enabled').then($bottom => {
           
            if ($bottom.is(':visible')){
                cy.log("it is mobile browser")
                cy.get('.action-button-wrapper.page.bottom.enabled')
                .find('.action-button-main.bottom').click()
            } else {
                cy.log("it is browser")
                cy.get('.action-button-wrapper.page.top.enabled')
                .find('.action-button-main.top').click()
            }
       })
                */
       if (Cypress.env('isMobile'))
       {
        cy.log("it is mobile browser")
        cy.get('.action-button-main.page.bottom').click()
    

       }
       else
       {
        cy.log("it is desktop browser")
        cy.get('.action-button-main.page.top').click()
       }



     

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
        cy.log("buy block")
        cy.get('.choose-buy-button-link>button').eq(0).click()

         }

         if ($body.find('.marionette-spa-btn>button').length > 0)   //evaluates as true
         {

        //click on pass book button
        cy.log("mari block")
        cy.get('.marionette-spa-btn>button').eq(0).click()

         }  


        })
    })

    it('Choose 1 Qty from phase 1 ticket drop down and click Buy', function()
    {   
        cy.wait(3000);
        //select first option
        cy.get('select').eq(0).select('1').should('have.value', '1')
        //click on BUY button
        cy.get('.buyflow-buy>button').eq(0).click()

    })
    
    it('Verify user is on Checkout Page', function()
    {
        //Fetch current url and validate the same
        cy.wait(8000);
        cy.url().should('eq', 'https://insider.in/buy/checkout')
        

    })

    
}


)