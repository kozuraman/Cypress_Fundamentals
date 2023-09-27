describe("Mocking https request using intercept method ", () => {
  it.only("My FirstTest case", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=raman";
        req.continue((res) => {
          //expect(res.statusCode).to.equal(403);
        });
      }
    ).as("dummyUrl");

    cy.get(".btn-primary").click();

    cy.wait("@dummyUrl");

    //length of the response array = rows of the table
  });
});
