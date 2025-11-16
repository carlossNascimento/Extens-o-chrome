const { test, expect } = require('@playwright/test');

const BASE = process.env.E2E_BASE_URL || 'http://localhost:8080';

test('PWA loads and can call API', async ({ page }) => {
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/Hello/);
  // Click button to call API and wait for result
  await page.click('#fetchApi');
  await page.waitForSelector('[data-testid="api-ok"]');
  const txt = await page.textContent('[data-testid="api-ok"]');
  expect(txt).toMatch(/Hello/);
});
