describe('Portfolio Sections', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForAppLoad();
  });

  it('renders the main content wrapper', () => {
    cy.get('.page-wrapper-two').should('exist');
  });

  it('renders footer section', () => {
    cy.get('.rn-footer-area').scrollIntoView();
    cy.get('.rn-footer-area').should('be.visible');
  });

  it('footer contains a link to the user profile', () => {
    cy.get('.rn-footer-area a[target="_blank"]').should('exist');
  });
});
