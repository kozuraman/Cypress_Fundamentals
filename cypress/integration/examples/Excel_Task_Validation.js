let productName;
describe("JWT Session", () => {
  it("Is logged in through local storage", async () => {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        // event occurs before loading the URL
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    cy.get(".card-body b")
      .eq(1)
      .then(function (ele) {
        productName = ele.text();
      });
    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get(":nth-child(4) > .btn").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country']").type("ind");
    cy.get(".ta-results button").each(($el, index, $list) => {
      if ($el.text() === " India") {
        cy.wrap($el).click();
      }
    });
    cy.get(".action__submit").click({ force: true });
    cy.wait(2000);
    cy.get(".order-summary tbody tr:nth-child(5) button").click();

    const fileName =
      Cypress.config("fileServerFolder") +
      `/cypress/downloads/order-invoice_kozuraman.xlsx`;
    cy.task("excelToJson", fileName).then(function (result) {
      cy.log(result.data[1].A);
      expect(productName).to.equal(result.data[1].B);
    });

    //Browser(Engine) -JS Code -> Client side Environment (Front end) - Cypress

    //Node (Engine) -JS Code ->Back End applications/Environment
    //Accessing file - fs,Database {Browser doesn't care about it}

    //Task - (Files,DB) -> Config.js, (ExcelToJson) ->cy.task(ExcelToJson)
  });
});
