const { test , expect } = require('@playwright/test')

test ('handle inputbox' , async ({page}) => {

   await page.goto("https://testautomationpractice.blogspot.com");

   await expect(await page.locator("//input[@id='name']")).toBeVisible();
   await expect(await page.locator("//input[@id='name']")).toBeEmpty();
   await expect(await page.locator("//input[@id='name']")).toBeEditable();
   await expect(await page.locator("//input[@id='name']")).toBeEnabled();

  //await page.locator("").fill('');

  await page.locator ('#name').fill('ramkumar');
  await page.fill("#email",'amosrajkumar@gmail.com');

  await page.waitForTimeout(6000);

})