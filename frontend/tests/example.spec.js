import { test, expect } from '@playwright/test';

test('my site test', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.getByTestId('page-title')).toHaveText(["Home"])
  await expect(page.getByTestId('heading-path')).toHaveText([".Home"])
})