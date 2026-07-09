# Portfolio Testing Guide

This document outlines the testing infrastructure, strategies, and instructions for running and writing tests in the Portfolio project.

## 🧪 Tech Stack

- **[Vitest](https://vitest.dev/)**: Blazing fast unit test framework powered by Vite.
- **[Vue Test Utils](https://test-utils.vuejs.org/)**: Official testing utility for Vue.js.
- **[Playwright](https://playwright.dev/)**: Microsoft's fast and reliable framework for End-to-End testing.

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

### End-to-End (E2E) Tests (Playwright)

E2E tests simulate a real user interacting with your application in a real browser.

- **Run E2E tests in the terminal (headless mode):**
  ```bash
  npm run test:e2e
  ```
- **Open the Playwright UI (Interactive Mode):**
  ```bash
  npm run test:e2e:ui
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
└── tests/
    └── e2e/                   # Playwright E2E Tests
        ├── home.spec.js       # Main page loading and rendering
        ├── navigation.spec.js # Router and scrolling navigation
        ├── responsive.spec.js # Mobile, Tablet, and Desktop views
        └── sections.spec.js   # Specific sections (Experience, Projects, etc.)
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

Place your Playwright tests in `tests/e2e/`. Use the `.spec.js` extension.

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    // Visit the home page before each test
    await page.goto('/');
  });

  test('should display the contact form', async ({ page }) => {
    // Scroll to the contact section
    const contactSection = page.locator('#contacts');
    await contactSection.scrollIntoViewIfNeeded();
    
    // Assert that specific elements are visible
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });
});
```

---

## 🛠️ Troubleshooting

- **Vuetify missing CSS error in Vitest:**
  If you see `TypeError: Unknown file extension ".css"`, ensure that your `vite.config.js` has `css: true` and `server.deps.inline: ['vuetify']` within the `test` configuration block. This has already been configured for you.
- **i18n warnings in Component Tests:**
  Use `vi.mock('@/includes/i18n', ...)` as seen in existing model tests to isolate translation logic without loading the full Vue plugin.
- **Playwright not finding elements:**
  Ensure that your components use unique `id` attributes (like `id="skills"`) so that Playwright can easily target them with `page.locator('#skills')`.
