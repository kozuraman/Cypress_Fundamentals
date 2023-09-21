import { should } from "chai";
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("hooks practice", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("practice", function () {
    const homePage = new HomePage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");
    cy.pause();

    homePage.getShopTab().click();
    //cy.debug() - Test debugging
  });

  it.only("Validate", function () {
    Cypress.config("defaultCommandTimeout", 8000); // time out for this specific spec. It's overwrite
    const productPage = new ProductPage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(2) > .nav-link").click();

    cy.selectProduct("Blackberry");
    cy.selectProduct("Nokia Edge");
    productPage.checkOutButton().click();
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
    // this.data.productName.forEach((element) => {
    //   cy.selectProduct(element);
    // });
  });
});
