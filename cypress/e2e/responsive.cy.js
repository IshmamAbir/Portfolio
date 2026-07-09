describe('Responsive Design', () => {
  const viewports = [
    { name: 'Desktop', width: 1280, height: 720 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 667 },
  ];

  viewports.forEach((viewport) => {
    describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
      beforeEach(() => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/');
        cy.waitForAppLoad();
      });

      it('loads the page without errors', () => {
        cy.get('.v-application').should('exist');
      });

      it('displays the main content', () => {
        cy.get('.page-wrapper-two').should('exist');
      });

      it('displays the footer', () => {
        cy.get('.rn-footer-area').should('exist');
      });
    });
  });
});
