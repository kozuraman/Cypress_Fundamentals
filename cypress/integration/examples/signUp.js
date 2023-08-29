describe("programiz pro SignUP flow", () => {
  beforeEach(() => {
    cy.visit("https://staging.programiz.pro/signup");
    // cy.get('.mb-0 > a').click()
    cy.get(".btn--primary").click();
    // cy.url().should("include","https://staging.programiz.pro/signup")
  });

  // adfgr
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // index => 102
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength); // 2
      const character = characters.charAt(randomIndex);

      result += character;

      // result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `${result}@parewalabs.com`;
  }
  console.log(makeid(5));

  const generatedEmail = makeid(5);
  it("Positive Scenario", () => {
    cy.get("#exampleInputfullName1").type("raman");

    // Using the generated email
    cy.get("#inputEmailAddress2").type(generatedEmail);
    cy.get("#inputEmailAddress2").should("have.value", generatedEmail);

    cy.get("#inputPassword").type("Test@123");
    cy.get("#inputPassword").should("have.value", "Test@123");

    cy.get("#sign-up-with-email").click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // Verifying the URL
    cy.url().should("contain", "/verify-code");
  });
  it.only("Negative Scenario", () => {
    cy.get("#exampleInputfullName1").type("raman");

    // Using the generated email
    cy.get("#inputEmailAddress2").type(generatedEmail);
    cy.get("#inputEmailAddress2").should("have.value", generatedEmail);

    cy.get("#inputPassword").type("Test@123");
    cy.get("#inputPassword").should("have.value", "Test@123");

    cy.get("#sign-up-with-email").click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // Verifying the URL
    cy.url().should("not.be.an", "/");
  });
});


