import { test, expect } from '@playwright/test';

test('mobile homepage looks good', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'verification/mobile_homepage.png', fullPage: true });
});

test('admin page can update content', async ({ page }) => {
  await page.goto('http://localhost:3000/admin');

  // Update title
  await page.fill('input[name="title"]', 'New Revolution. Tech Power');
  await page.click('button[type="submit"]');

  // Wait for navigation or success message (if any)
  await page.waitForTimeout(1000);

  // Go back to homepage and check
  await page.goto('http://localhost:3000');
  const title = page.locator('h1');
  await expect(title).toContainText('New Revolution');
});
