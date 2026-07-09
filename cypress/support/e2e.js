// ***********************************************************
// This file is processed and loaded automatically before your test files.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Custom command to check if an element is visible in the viewport
Cypress.Commands.add('isInViewport', { prevSubject: true }, (subject) => {
  const rect = subject[0].getBoundingClientRect();
  expect(rect.top).to.be.greaterThan(-1);
  expect(rect.bottom).to.be.lessThan(Cypress.config('viewportHeight') + 1);
  return subject;
});

// Custom command to wait for the app to fully load
Cypress.Commands.add('waitForAppLoad', () => {
  cy.get('.v-application', { timeout: 15000 }).should('exist');
});
