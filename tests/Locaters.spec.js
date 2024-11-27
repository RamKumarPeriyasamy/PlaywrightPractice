import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
   // Navigate to the login page
   await page.goto('https://demoblaze.com/index.html');

   // Click on login button
   await page.locator('id=login2').click();
  
   // Provide username (CSS selector)
   await page.fill('#loginusername', 'ramkumarp');

   // Provide password (Correct CSS selector for password field)
   await page.fill('#loginpassword', 'R@mkumar.p.1');

   // Click on login button (XPath selector)
   await page.click("//button[normalize-space()='Log in']");

   // Verify logout link presence (XPath selector)
   const logoutLink = await page.locator('#logout2');
   await expect(logoutLink).toBeVisible();
});
