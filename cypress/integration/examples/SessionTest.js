//Save the login tokens in the browser local storage using cypress
const neatCSV = require('neat-csv')
let productName
describe('JWT Session',() =>{
    it('Is logged in through local storage',async()=>{
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',{
            // event occurs before loading the URL   
            onBeforeLoad : function(window){ 
                    window.localStorage.setItem('token',Cypress.env('token'))
                }

            })
        })
        cy.get('.card-body b').eq(1).then(function(ele){
            productName = ele.text();
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

       //covert file to the text
       // gives the path of the project
       cy.readFile(Cypress.config('fileServerFolder') +`/cypress/downloads/order-invoice_kozuraman.csv`) 
       .then(async(text)=>{
        const csv = await neatCSV(text)
        console.log(csv)
        const actualProductCSV = csv[0]["Product Name"] //follow this steps where there is space in the property
        expect(productName).to.equal(actualProductCSV)
       })
       
    })
    
})