//Cypress -Spec


describe("My first test case", () => {
//   beforeEach(() => {
//     cy.visit(`https://staging.programiz.pro/login?ref=nlib`);
//     cy.get(".sign__functions").contains("Sign In");
//   });

  
  it.only("My FirstTest case", ()=>{
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  cy.get(".search-keyword").type('ca');
  cy.wait(4000)
  
  //parent child chaining
  cy.get('.products').as('productLocator')


  
  cy.get('@productLocator').find('.product').each(($el, index, $list) => {
   const testVeg = $el.find('h4.product-name').text()
   if (testVeg.includes('Cashews')){
    cy.wrap($el).find('button').click()
   }


  })
  cy.get('.cart-icon > img').click()
  cy.contains('PROCEED TO CHECKOUT').click()
  cy.contains('Place Order')
  })

});