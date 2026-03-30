import { test, expect } from '@playwright/test';
import testData from './fixtures/testData.json';

const URL = 'https://animated-gingersnap-8cf7f2.netlify.app/';

for (const { project, task, column, tags } of testData) {
  test(`[${project}] "${task}" is in "${column}" with tags ${tags}`, async ({ page }) => {
    // Login
    await page.goto(URL);
    await page.locator('input[name="username"], input[type="text"], input[placeholder*="user" i]').first().fill('admin');
    await page.locator('input[name="password"], input[type="password"]').first().fill('password123');
    await page.locator('button[type="submit"], button:has-text("Sign in"), button:has-text("Login")').first().click();
    await page.waitForURL('**/*', { waitUntil: 'networkidle' });

    // Navigate to project
    await page.locator('h2', { hasText: project }).first().click();

    // Find task card in the correct column
    const columnEl = page.locator(`[data-column="${column}"], :text("${column}")`).locator('..');
    const taskCard = columnEl.getByText(task);
    await expect(taskCard).toBeVisible();

    // Verify tags
    for (const tag of tags) {
        await expect(taskCard.locator('..').getByText(tag).first()).toBeVisible();
    }
  });
}