describe("Mouse Hover Practice", () => { 
   it.only("Mouse Hover Scenario",() => { 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url().should('include','top') 
  })
  });