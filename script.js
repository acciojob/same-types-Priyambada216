function isSameType(value1, value2) {
  it("should return false for different types", () => {
  const value1 = "123"; // String type
  const value2 = 123;    // Number type

  cy.visit(baseUrl, {
    onBeforeLoad(win) {
      // Stub your functions here
      cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
    }
  });

  cy.on("window:alert", str => {
    expect(str.toString()).to.equal("false");
  });
});

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
