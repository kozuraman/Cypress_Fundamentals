//Save the login tokens in the browser local storage using cypress
describe('JWT Session',() =>{
    it('Is logged in through local storage',()=>{
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',{
            // event occurs before loading the URL   
            onBeforeLoad : function(window){ 
                    window.localStorage.setItem('token',Cypress.env('token'))
                }

            })
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Checkout').click()
        cy.get("[placeholder*='Country']").type('ind')
        cy.get('.ta-results button').each(($el,index,$list)=>{
            if($el.text() === ' India')
            {
              cy.wrap($el).click()  
            }
        })
        cy.get('.action__submit').click({force: true})
        cy.wait(2000)
        cy.get('.order-summary tbody tr:nth-child(4) button').click();
    })
    
})