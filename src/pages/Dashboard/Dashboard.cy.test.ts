describe("Dashboard Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display dashboard page element", () => {
    cy.get(`[data-cy='dashboard-page']`).should("exist");
    cy.get(`[data-cy='solo-button']`).should("exist");
    cy.get(`[data-cy='auto-play-button']`).should("exist");
  });

  it("should redirect user to start play solo", () => {
    cy.get(`[data-cy='solo-button']`).click();
    cy.url().should("include", "/solo");
    cy.get(`[data-cy='score-banner']`).should("exist");
    cy.get(`[data-cy='username-popup']`).should("exist");
    cy.get(`[data-cy='username-input']`).type("random-username");
    cy.get(`[data-cy='save-button']`).click();
    cy.get(`[data-cy='username-label']`).should(
      "contain.text",
      "random-username"
    );
  });

  it("should redirect user to start auto play", () => {
    cy.get(`[data-cy='auto-play-button']`).click();
    cy.url().should("include", "/auto");
    cy.get(`[data-cy='score-banner']`).should("exist");
  });
});
