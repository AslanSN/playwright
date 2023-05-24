import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://develop.nominapress.net/');
  await page.getByPlaceholder('ID').click();
  await page.getByPlaceholder('ID').fill('admin');
  await page.getByPlaceholder('ID').press('Tab');
  await page.getByPlaceholder('Password').fill('supermegauserdevelop');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('button', { name: 'access' }).click();
});
