import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import { when } from "cypress/types/jquery";
const homePage = new HomePage()
const productPage=new ProductPage()
//=> Annonymous function
Given('I open Ecommerce Page',() =>
{
    cy.visit(Cypress.env('url')+"/angularpractice/");
})

When('I add items to Cart',()=>{
homePage.getshopTab().click()

this.data.productName.array.forEach(function(element){
    cy.selectProduct(element)
});
productPage.checkOutButton().click()
})
//And Validate the total prices
And('Validate the total prices',()=>{
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        const amount = $el.text();
        var result = amount.split(" ");
        result = result[1].trim();
        sum = Number(sum) + Number(result);
      })
      .then(function () {
        cy.log(sum);
      });
    cy.get("h3 strong").then(function (element) {
      const amount = element.text();
      var result = amount.split(" ");
      var total = result[1].trim();
      expect(Number(total)).to.equal(sum);
    });
})
//Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou',()=>{
    cy.contains("Checkout").click();
    cy.get("#country").type("India");
    // cy.pause()
    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get(".ng-untouched > .btn").click();
    cy.get(".alert").then(function (element) {
      const actualText = element.text();
      var result = actualText.split(" ");
      result = result[1].trim();

      expect(actualText.includes("Success")).to.be.true;
    });
})


