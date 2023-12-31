//Cypress -Spec


describe("Automation Practice", () => {
//   beforeEach(() => {
//     cy.visit(`https://staging.programiz.pro/login?ref=nlib`);
//     cy.get(".sign__functions").contains("Sign In");
//   });

  it("Checkbox Scenario", ()=>{
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //Concate assertion -- simply use and keyword
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
  cy.get('input[type="checkbox"]').check(['option2','option3'])

})
 it.only("Dropdown Scenario",() => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

  //dynamic dropdown
  cy.get('#autocomplete').type('ind')
  cy.get('.ui-menu-item div').each(($el, index, $list) => {
   if($el.text()=="India")
   {
    cy.wrap($el).click()
   }
 
   
   })
   //autocomplete
   cy.get('#autocomplete').should('have.value','India')
   //visible and invisible
   cy.get('#displayed-text').should('be.visible')
   cy.wait(4000)
   cy.get('#hide-textbox').click()
   cy.get('#displayed-text').should('not.be.visible')
   cy.get('#show-textbox').click()
   cy.get('#displayed-text').should('be.visible')

   cy.get('input[value="radio1"]').check().should('have.value','radio1')
 })
});