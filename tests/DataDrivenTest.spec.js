const { test, expect } = require('@playwright/test');

// Load the JSON test data directly
const testdata = require('../testdata.json'); // Ensure this path points correctly to your JSON file.

test.describe("Data Driven Login Page", () => {
  for (const data of testdata) {
    test(`Login with user ID: ${data.id}`, async ({ page }) => {
      // Navigate to the login page
      await page.goto("https://demoblaze.com/cart.html");

      // Open the sign-up dialog
      await page.locator("#signin2").click();

      // Fill in the sign-up form
      await page.locator("#sign-username").fill(data.username);
      await page.locator("#sign-password").fill(data.password);

      // Click the sign-up button
      await page.locator("//button[normalize-space()='Sign up']").click();

      // Validate successful sign-up (e.g., check for an alert or message)
      // Example:
      // const alertText = await page.locator("selector-for-alert").textContent();
      // expect(alertText).toContain("Sign up successful");
    });
  }
});
