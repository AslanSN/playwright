import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://develop.nominapress.net/');
  await page.getByPlaceholder("ID").click();
  await page.getByPlaceholder("ID").fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('supermegauserdevelop');
  await page.getByLabel('keep your session open').check();
  await page.getByRole('button', { name: 'access' }).click();
});