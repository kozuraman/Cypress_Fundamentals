//Cypress -Spec

describe("Table Practice", () => { 
  it("Checkbox Scenario", ()=>{
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //Concate assertion -- simply use and keyword
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
  cy.get('input[type="checkbox"]').check(['option2','option3'])

})
 it.only("Table Scenario",() => {
  // cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  // cy.get('#alertbtn').click()
  // cy.get('[value="Confirm"]').click()
  // //window:alert
  // cy.on('window:alert',(str)=>{
  //   //Mocha
  //   expect(str).to.equal('Hello , share this practice page and share your knowledge')
  // })
  // //window:confirm
  // cy.on('window:confirm',(str)=>{
  //   //Mocha
  //   expect(str).to.equal('Hello , Are you sure you want to confirm?')
  // })
  // //browser event and jquery method or function
  // cy.log("ahhsd",cy.get('#opentab')) 
  // cy.get('#opentab').invoke('removeAttr','target').click() //jquery function - removing the target so that it can open in own page
  
  
  //  cy.url().should('include',"rahulshettyacademy")
  
  // cy.go('back')
  
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
  const text = $el.text()  
  if(text.includes("Python"))
  {
    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) //.next - exactly goes to the next sibling
    {
      const priceText = price.text()
      expect(priceText).to.equal('25')
    })
  }
  
  })

})
});