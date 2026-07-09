const { test, expect } = require('@playwright/test');

test.describe('Home Page and Main View', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the main application structure', async ({ page }) => {
    // Wait for the app to be mounted
    const app = page.locator('#app');
    await expect(app).toBeVisible();

    // Verify main components are present
    await expect(page.locator('.rn-footer-area').first()).toBeVisible(); // AppFooter
    await expect(page.locator('main').first()).toBeVisible(); // Main content area
  });

  test('should render all sections on the home page', async ({ page }) => {
    // Wait for home-view wrapper
    await expect(page.locator('.page-wrapper-two').first()).toBeVisible();

    // Check that each key section exists by its ID
    const sections = ['#home', '#educations', '#experience', '#skills', '#project', '#blog', '#contacts'];
    
    for (const section of sections) {
      const el = page.locator(section);
      await expect(el).toHaveCount(1);
    }
  });

  test('should display the correct initial language content (English by default)', async ({ page }) => {
    // Assume English is default. We can check for a specific string from English locales
    // that would appear on the homepage (e.g., 'Contact' or 'Experience')
    await expect(page.locator('#home')).toContainText(/ISHMAM/i);
  });
});
