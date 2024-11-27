import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('columnheader', { name: '' }).locator('i').click();
  await page.locator('span').filter({ hasText: 'Sachin T' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByText('Forgot your password?').click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('ramkumar');
  await page.getByRole('button', { name: 'Reset Password' }).click();
  await page.getByText('If the email does not arrive').click();
});