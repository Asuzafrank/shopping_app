describe("Sign Up Page", () => {
  beforeEach(() => {
    cy.visit("/signup"); // Assuming your sign-up page is served at /signup
  });

  it("should sign up a new user", () => {
    const name = "John Doe";
    const email = "johndoe@example.com";
    const password = "password123";

    cy.get("#name-input").type(name);
    cy.get("#email-input").type(email);
    cy.get("#pass-input").type(password);

    cy.get("button").click();

    cy.url().should("include", "/login");
  });
});

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a list of products", () => {
    cy.get(".card").should("have.length", 4);
  });

  it("displays product details when a product is clicked", () => {
    cy.get(".card").first().click();
    cy.url().should("include", "/product-detail/");
    cy.get(".product-title").should("be.visible");
    cy.get(".product-description").should("be.visible");
    cy.get(".product-reviews").should("be.visible");
  });
});
