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
  it("Dropdown Scenario", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    //window:alert - event
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      //Mocha - assertion
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });

  //handling child tab with combination of cypress and Jquery commands
  it.only("Should handle child window'", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //cy.get("#opentab").invoke("removeAttr", "target").click();
    //cy.get("#opentab").invoke("attr", "target", "_self").click();
    
    //cy.origin('https://www.qaclickacademy.com',() => {
      //cy.get("navbarSupportedContent a[href*='about']").click();
      cy.get("#opentab").click();
      cy.window().then((newTab) => {
        // Check if the new tab has loaded the expected URL
        //expect(newTab.location.href,'https://www.qaclickacademy.com/')
      cy.expect(newTab.location.href).to.have.text('ABOUT US')
    
  });
});
});
