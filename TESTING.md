# Portfolio Testing Guide

This document outlines the testing infrastructure, strategies, and instructions for running and writing tests in the Portfolio project.

## 🧪 Tech Stack

- **[Vitest](https://vitest.dev/)**: Blazing fast unit test framework powered by Vite.
- **[Vue Test Utils](https://test-utils.vuejs.org/)**: Official testing utility for Vue.js.
- **[Cypress](https://www.cypress.io/)**: Next-generation front end testing tool built for the modern web (End-to-End).

---

## 🚀 Running Tests

### Unit & Component Tests (Vitest)

Unit tests focus on isolated parts of the application: models, stores, services, and individual Vue components.

- **Run all unit tests:**
  ```bash
  npm run test:unit
  ```
- **Run unit tests in watch mode** (great during development):
  ```bash
  npm run test:unit:watch
  ```
- **Generate Test Coverage Report:**
  ```bash
  npm run test:unit:coverage
  ```
  *(This will generate a `coverage/` folder. Open `coverage/index.html` in your browser to view the detailed report).*

### End-to-End (E2E) Tests (Cypress)

E2E tests simulate a real user interacting with your application in a real browser.

- **Run E2E tests in the terminal (headless mode):**
  ```bash
  npm run test:e2e
  ```
- **Open the Cypress UI (Interactive Mode):**
  ```bash
  npm run test:e2e:open
  ```

### Run Everything
- **Run both Unit and E2E tests sequentially:**
  ```bash
  npm run test
  ```

---

## 🏗️ Directory Structure

```text
/
├── tests/
│   └── unit/                  # Vitest Unit & Component Tests
│       ├── components/        # Tests for UI components (e.g., AppFooter.spec.js)
│       ├── models/            # Tests for data models (e.g., UserInfo.spec.js)
│       ├── services/          # Tests for API/Service layer
│       ├── stores/            # Tests for Pinia stores
│       ├── helpers.js         # Centralized test helpers (Mounting utilities)
│       └── setup.js           # Global Vitest configuration (Vuetify, i18n stubs)
└── cypress/                   # Cypress E2E Tests
    ├── e2e/                   # Spec files for different user flows
    │   ├── home.cy.js         # Main page loading and rendering
    │   ├── navigation.cy.js   # Router and scrolling navigation
    │   ├── responsive.cy.js   # Mobile, Tablet, and Desktop views
    │   └── sections.cy.js     # Specific sections (Experience, Projects, etc.)
    ├── support/               # Cypress custom commands and overrides
    └── fixtures/              # Mock data for E2E tests
```

---

## ✍️ Writing Tests

### 1. Writing Unit Tests for Models / Logic

Place files in `tests/unit/models/`. Use the `.spec.js` extension.

```javascript
import { describe, it, expect } from 'vitest';
import { BaseModel } from '@/model/BaseModel';

describe('BaseModel', () => {
  it('stores raw data on construction', () => {
    const data = { foo: 'bar' };
    const model = new BaseModel(data);
    expect(model.rawData).toEqual(data);
  });
});
```

### 2. Writing Component Tests

When testing Vue components, always use the helper functions from `tests/unit/helpers.js`. These helpers automatically inject `Vuetify`, `i18n`, `Pinia`, and Vue Router stubs so your components render without errors.

```javascript
import { describe, it, expect } from 'vitest';
import { mountWithPlugins } from '../helpers';
import AppFooter from '@/components/AppFooter.vue';

describe('AppFooter.vue', () => {
  it('renders correctly', () => {
    const wrapper = mountWithPlugins(AppFooter);
    expect(wrapper.exists()).toBe(true);
  });
});
```

### 3. Writing End-to-End Tests

Place your Cypress tests in `cypress/e2e/`. Use the `.cy.js` extension.

```javascript
describe('Contact Section', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/');
  });

  it('should display the contact form', () => {
    // Scroll to the contact section
    cy.get('#contact').scrollIntoView();
    
    // Assert that specific elements are visible
    cy.get('form').should('be.visible');
    cy.get('input[type="email"]').should('exist');
  });
});
```

---

## 🛠️ Troubleshooting

- **Vuetify missing CSS error in Vitest:**
  If you see `TypeError: Unknown file extension ".css"`, ensure that your `vite.config.js` has `css: true` and `server.deps.inline: ['vuetify']` within the `test` configuration block. This has already been configured for you.
- **i18n warnings in Component Tests:**
  Use `vi.mock('@/includes/i18n', ...)` as seen in existing model tests to isolate translation logic without loading the full Vue plugin.
- **Cypress not finding elements:**
  Ensure that your components use unique `id` attributes (like `id="about"`) so that Cypress can easily target them with `cy.get('#about')`.
