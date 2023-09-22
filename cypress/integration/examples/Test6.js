describe("Mouse Hover Practice", () => {
  it.only("Mouse Hover Scenario", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
