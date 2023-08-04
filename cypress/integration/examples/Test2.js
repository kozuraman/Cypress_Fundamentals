//Cypress -Spec


describe("programiz pro SignIn fow", () => {
//   beforeEach(() => {
//     cy.visit(`https://staging.programiz.pro/login?ref=nlib`);
//     cy.get(".sign__functions").contains("Sign In");
//   });

  it("Positive Scenario", () => {
    cy.get("#exampleInputEmail1").type("raman+test3@parewalabs.com");
    cy.get("#exampleInputEmail1").should(
      "have.value",
      "raman+test3@parewalabs.com"
    );
    cy.get("#exampleInputPassword1").type("Test@123");
    cy.get("#exampleInputPassword1").should("have.value", "Test@123");
    cy.get("form > .btn").contains("Sign In").click();
    cy.url().should("include", "https://app.staging.programiz.pro/");
  });
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
  cy.get(':nth-child(14)').click()
  })

});