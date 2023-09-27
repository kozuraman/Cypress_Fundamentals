describe("Mocking https response using intercept method ", () => {
  it.only("My FirstTest case", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookretrievals");
    cy.get(".btn-primary").click();
    cy.wait("@bookretrievals").then (({request,response})=>{ //Assert the response body
        // Use cy.then() for assertions inside the callback
        cy.get('tr').should('have.length',response.body.length+1)
    })
    // Assertions outside the callback
    cy.get('p').should('have.text','Oops only 1 Book available')

    //length of the response array = rows of the table

  });
});
