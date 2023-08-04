describe("programiz pro SignUP flow", () => {
  beforeEach(() => {
    cy.visit("https://staging.programiz.pro/signup");
    // cy.get('.mb-0 > a').click()
    cy.get(".btn--primary").click();
    // cy.url().should("include","https://staging.programiz.pro/signup")
  });

  it("Positive Scenario", () => {
    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return `${result}@parewalabs.com`;
    }
    console.log(makeid(5));

    const generatedEmail = makeid(5);
    cy.get("#exampleInputfullName1").type("raman");
    cy.wait(4000);
    // cy.get("#exampleInputfullName1").should("have.value", "raman");
    cy.get("#exampleInputEmail1", {
      timeout: 10000,
    }).type(generatedEmail);

    cy.get("#exampleInputEmail1").should("have.value", generatedEmail);
    cy.get("#exampleInputPassword1").type("Test@123");
    cy.get("#exampleInputPassword1").should("have.value", "Test@123");
    cy.get("#sign-up-with-email").click();
    cy.url().should("include", "https://app.staging.programiz.pro/verify-code");
  });
});
