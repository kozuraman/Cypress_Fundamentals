//Cypress -Spec

describe("Clicking on the windows popup", () => {
  it("Checkbox Scenario", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1"); //Concate assertion -- simply use and keyword
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });
  it.only("Dropdown Scenario", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    //window:alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    cy.get("#opentab").invoke("attr", "target", "_self").click();
    cy.url().should("include", "qaclickacademy");
    // cy.origin('https://www.qaclickacademy.com', () => {
    // cy.contains('Become a Competent Software Test Automation Engineer ')

    cy.go("back");
    // })
  });
});
