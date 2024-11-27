const {test , expect } = require('@playwright/test')

test ("Soft and Hard Asserstions" ,async({page}) => {
      
      await page.goto("https://demoblaze.com/index.html");

      //(+tive case Hard Asserstion)
      await expect(page).toHaveTitle('STORE');
      await expect(page).toHaveURL('https://demoblaze.com/index.html');
      await expect(page.locator('#cat')).toBeVisible();

      
      //(-tive case Hard Asserstion)
      await expect(page).toHaveTitle('STORE123');
      await expect(page).toHaveURL('https://demoblaze.com/index.html');
      await expect(page.locator('#cat')).toBeVisible();

      //(-tive case Soft Asserstion)
      await expect.soft(page).toHaveTitle('STORE123');
      await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
      await expect.soft(page.locator('#cat')).toBeVisible();


})