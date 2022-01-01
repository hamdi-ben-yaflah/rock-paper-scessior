describe("Game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display pages elements", () => {
    cy.get(`[data-cy='dashboard-page']`).should("exist");
    cy.get(`[data-cy='solo-button']`).should("exist");
    cy.get(`[data-cy='auto-play-button']`).should("exist");
    cy.get(`[data-cy='solo-button']`).click();
    cy.get(`[data-cy='game-page']`).should("exist");
    cy.get(`[data-cy='game-header']`).should("exist");
    cy.get(`[data-cy='username-label']`).should("exist");
    cy.get(`[data-cy='rock']`).should("exist");
    cy.get(`[data-cy='paper']`).should("exist");
    cy.get(`[data-cy='scissors']`).should("exist");
    cy.get(`[data-cy='switch-auto-mode']`).should("exist");
    cy.go("back");
    cy.get(`[data-cy='auto-play-button']`).click();
    cy.url().should("include", "/auto");
    cy.get(`[data-cy='auto-play-page']`).should("exist");
    cy.get(`[data-cy='auto-play-header']`).should("exist");
    cy.get(`[data-cy='start-button']`).should("exist");
    cy.get(`[data-cy='switch-solo-mode']`).should("exist");
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
    cy.get(`[data-cy='rock']`).click();
    cy.get(`[data-cy='result-popup']`).should("exist");
    cy.get(`[data-cy='play-again-button']`).click();
    cy.get(`[data-cy='result-popup']`).should("not.exist");
    cy.get(`[data-cy='paper']`).click();
    cy.get(`[data-cy='result-popup']`).should("exist");
    cy.get(`[data-cy='play-again-button']`).click();
    cy.get(`[data-cy='edit-username-button']`).click();
    cy.get(`[data-cy='username-popup']`).should("exist");
    cy.get(`[data-cy='username-input']`).type("new-username");
    cy.get(`[data-cy='save-button']`).click();
    cy.get(`[data-cy='username-label']`).should("contain.text", "new-username");
  });

  it("should redirect user to start auto play", () => {
    cy.get(`[data-cy='auto-play-button']`).click();
    cy.url().should("include", "/auto");
    cy.get(`[data-cy='score-banner']`).should("exist");
    cy.get(`[data-cy='start-button']`).click();
    cy.get(`[data-cy='result-popup']`).should("exist");
    cy.get(`[data-cy='play-again-button']`).click();
    cy.get(`[data-cy='result-popup']`).should("not.exist");
    cy.get(`[data-cy='start-button']`).click();
    cy.get(`[data-cy='result-popup']`).should("exist");
  });

  it("should be able to switch between solo and auto play mode", () => {
    cy.get(`[data-cy='auto-play-button']`).click();
    cy.url().should("include", "/auto");
    cy.get(`[data-cy='switch-solo-mode']`).click();
    cy.url().should("include", "/solo");
  });
});
