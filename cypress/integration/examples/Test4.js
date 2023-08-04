//Cypress -Spec


describe("programiz pro SignIn fow", () => {
//   beforeEach(() => {
//     cy.visit(`https://staging.programiz.pro/login?ref=nlib`);
//     cy.get(".sign__functions").contains("Sign In");
//   });

  it("Positive Scenario", () => {
    cy.get("#exampleInputEmail1").type("raman+test3@parewalabs.com");
    cy.get("#exampleInputEmail1").should(
      "have.value",
      "raman+test3@parewalabs.com"
    );
    cy.get("#exampleInputPassword1").type("Test@123");
    cy.get("#exampleInputPassword1").should("have.value", "Test@123");
    cy.get("form > .btn").contains("Sign In").click();
    cy.url().should("include", "https://app.staging.programiz.pro/");
  });
  it("Checkbox Scenario", ()=>{
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //Concate assertion -- simply use and keyword
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
  cy.get('input[type="checkbox"]').check(['option2','option3'])

})
 it.only("Dropdown Scenario",() => {
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
  cy.get('#alertbtn').click()
  cy.get('[value="Confirm"]').click()
  //window:alert
  cy.on('window:alert',(str)=>
  {
      //Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
  })
   
  cy.on('window:confirm',(str)=>
  {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
  })
   
  cy.get('#opentab').invoke("attr", "target", "_self").click()
   cy.url().should('include','qaclickacademy')
  // cy.origin('https://www.qaclickacademy.com', () => {
  // cy.contains('Become a Competent Software Test Automation Engineer ')
   
  cy.go('back')
// })
  
 })
});