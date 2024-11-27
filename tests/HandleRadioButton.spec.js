const {test , expect } = require ('@playwright/test')

test('handle radio button' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    //radio Button
    await page.locator('#male').check();

    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked).toBeTruthy();
    // await expect(await page.locator("//input[@id='female']").isChecked).toBeFalsy();


    


})