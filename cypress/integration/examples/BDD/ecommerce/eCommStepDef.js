import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import { when } from "cypress/types/jquery";
// import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../../../support/pageObjects/HomePage";
import ProductPage from "../../../../support/pageObjects/ProductPage";

const homePage = new HomePage();
const productPage = new ProductPage();
let name;

//=> Annonymous function
Given("I open Ecommerce Page", function () {
  cy.visit(Cypress.env("url") + "/angularpractice/");
  //   cy.visit("https://rahulshettyacademy.com/angularpractice/");
});

When("I add items to Cart", function () {
  homePage.getShopTab().click();

  this.data.productName.array.forEach(function (element) {
    cy.selectProduct(element);
  });
  productPage.checkOutButton().click();
});
//And Validate the total prices
When("Validate the total prices", () => {
  var sum = 0;
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
});
//Then select the country submit and verify Thankyou
Then("select the country submit and verify Thankyou", () => {
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
});

//When I fill the form details
When("I fill the form details", function (dataTable) {
  name = dataTable.rawTable[1][0];
  homePage.getEditBox().type(dataTable.rawTable[1][0]); //Converted datatable into array by rawTable [bobz, Male]
  homePage.getGender().select(dataTable.rawTable[1][1]);
});

//Then Validate the form behaviour
Then("Validate the form behaviour", function () {
  homePage.getTwoWayDataBinding().should("have.value", name);
  homePage.getEditBox().should("have.attr", "minlength", "2");
  homePage.getEntrepreneaur().should("be.disabled");
});

//And select the Shop Page
Then("select the Shop Page", () => {
  homePage.getShopTab().click();
});
