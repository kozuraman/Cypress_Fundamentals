describe("hooks practice", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("practice", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get("input[name='name']:nth-child(2)").type(this.data.name);
    cy.get("select", { timeout: 2000 }).select(this.data.gender);
    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.data.name
    );
    cy.get("input[name='name']:nth-child(2)").should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#inlineRadio3").should("be.disabled");
  });
  it.only("Validate", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(2) > .nav-link").click();
    console.log("cy", cy);

    cy.selectProduct("Blackberry");

    // this.data.productName.forEach((element) => {
    //   cy.selectProduct(element);
    // });
  });
});
