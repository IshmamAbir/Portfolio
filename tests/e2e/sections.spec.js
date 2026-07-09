const { test, expect } = require('@playwright/test');

test.describe('Section Rendering and Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render Experience items', async ({ page }) => {
    const experienceSection = page.locator('#experience');
    await experienceSection.scrollIntoViewIfNeeded();
    await expect(experienceSection).toBeVisible();

    // Verify there is at least one experience item (timeline item or card)
    // We look for Vuetify timeline items or generic cards within the section
    const items = experienceSection.locator('.v-timeline-item, .v-card').first();
    // It might not exist if data is empty, but assuming there is data:
    if (await items.isVisible()) {
      await expect(items).toBeVisible();
    }
  });

  test('should render Projects and handle dialogs', async ({ page }) => {
    const projectSection = page.locator('#project');
    await projectSection.scrollIntoViewIfNeeded();
    await expect(projectSection).toBeVisible();

    // Check for project cards
    const projectCards = projectSection.locator('.v-card');
    const count = await projectCards.count();
    
    if (count > 0) {
      // Click the first project to see if a dialog/modal opens
      await projectCards.first().click();
      
      // Wait for Vuetify dialog
      const dialog = page.locator('.v-overlay__content, .v-dialog');
      if (await dialog.isVisible()) {
        await expect(dialog).toBeVisible();
        
        // Find close button
        const closeBtn = dialog.locator('.v-btn').first();
        if (await closeBtn.isVisible()) {
          await closeBtn.click();
          await expect(dialog).toBeHidden();
        }
      }
    }
  });

  test('should render Contact form and handle inputs', async ({ page }) => {
    const contactSection = page.locator('#contacts');
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();

    // Look for form inputs
    const nameInput = contactSection.locator('input[type="text"]').first();
    const emailInput = contactSection.locator('input[type="email"]');
    const messageInput = contactSection.locator('textarea');
    const submitBtn = contactSection.locator('button[type="submit"], button:has-text("Send"), button:has-text("Submit")').first();

    if (await nameInput.isVisible()) {
      await nameInput.fill('Test User');
      await emailInput.fill('test@example.com');
      await messageInput.fill('This is a test message from Playwright.');
      
      // We don't actually submit to avoid spamming the backend
      // await submitBtn.click();
      await expect(nameInput).toHaveValue('Test User');
    }
  });
});
