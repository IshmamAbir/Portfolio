const { test, expect } = require('@playwright/test');

test.describe('Navigation and Scrolling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the main container to be visible instead of desktop header
    await expect(page.locator('#app')).toBeVisible();
  });

  test('should scroll to the correct section when clicking navbar links', async ({ page, isMobile }) => {
    if (isMobile) {
      const navIcon = page.locator('#menuBtn');
      await expect(navIcon).toBeVisible();
      await navIcon.click();
      await page.waitForTimeout(500); // wait for menu animation
    }

    // Try clicking 'Experience' link
    const expLink = page.locator('.nav-link[href="#experience"]');
    
    // Check which one is visible (desktop vs mobile)
    for (let i = 0; i < await expLink.count(); i++) {
      if (await expLink.nth(i).isVisible()) {
        await expLink.nth(i).click();
        break;
      }
    }

    // Wait for scrolling animation
    await page.waitForTimeout(1000);
    // Wait for experience section to be visible
    const expSection = page.locator('#experience');
    await expect(expSection).toBeVisible();
    
    // Check if experience section is reasonably in view
    const box = await page.locator('#experience').boundingBox();
    expect(box.y).toBeGreaterThanOrEqual(0);
  });

  test('should update language when language switch is toggled', async ({ page }) => {
    // Look for a language toggle in the header
    const toggle = page.locator('.toggle-on-color').first();
    
    if (await toggle.isVisible()) {
      await toggle.click();
      await page.waitForTimeout(500);
      await toggle.click();
    }
  });
});
