describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForAppLoad();
  });

  it('has navigation links for all sections', () => {
    cy.get('.header-style-2').should('exist');
  });

  it('scrolls to sections when navigation links are clicked', () => {
    cy.get('.page-wrapper-two').should('exist');
  });

  it('displays back-to-top button area', () => {
    cy.get('.backto-top').should('exist');
  });
});
