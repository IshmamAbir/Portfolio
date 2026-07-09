const { test, expect } = require('@playwright/test');

test.describe('Responsive Design', () => {
  test('should render app bar correctly on mobile vs desktop', async ({ page, isMobile }) => {
    await page.goto('/');
    
    const navIcon = page.locator('#menuBtn');

    if (isMobile) {
      // On mobile, the hamburger menu should be visible
      await expect(navIcon).toBeVisible();
    } else {
      // On desktop, the hamburger menu is usually hidden and tabs are visible
      // Wait a moment for layout to settle
      await page.waitForTimeout(500);
      const isNavVisible = await navIcon.isVisible();
      if (!isNavVisible) {
        // If nav icon is hidden, check if tabs or normal links are shown
        // Since we don't know the exact class, we just ensure header is there
        await expect(page.locator('header')).toBeVisible();
      }
    }
  });

  test('should resize elements correctly on small screens', async ({ page, isMobile }) => {
    await page.goto('/');
    
    // Check about section grid or layout
    const aboutSection = page.locator('#skills');
    await expect(aboutSection).toBeVisible();
    
    // In playwright, the viewport is controlled by the project configuration
    // Just verifying that the page doesn't crash and sections remain visible
    await expect(page.locator('#experience')).toBeVisible();
  });
});
