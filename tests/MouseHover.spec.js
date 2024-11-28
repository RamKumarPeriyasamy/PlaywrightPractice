const{test,expect} = require('@playwright/test')

test('Mouse Hover' ,async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com")


    const desktop = await page.locator("//button[normalize-space()='Point Me']");
    const laptops = await page.locator("//a[normalize-space()='Laptops']");

    await desktop.hover();
    await laptops.hover();


    await page.waitForTimeout(5000);
})