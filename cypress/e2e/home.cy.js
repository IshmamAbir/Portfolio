describe('Portfolio Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForAppLoad();
  });

  it('loads the home page successfully', () => {
    cy.get('.page-wrapper-two').should('exist');
  });

  it('displays the header navigation', () => {
    cy.get('.header-style-2').should('exist');
  });

  it('displays the footer with copyright', () => {
    cy.get('.rn-footer-area').should('exist');
    cy.get('.rn-footer-area').should('contain.text', 'All rights reserved');
  });

  it('displays the current year in footer', () => {
    const currentYear = new Date().getFullYear();
    cy.get('.rn-footer-area').should('contain.text', currentYear.toString());
  });
});
