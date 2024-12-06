const {test , exepect } = require('@playwright/test')

test('ScreenShot Define by con file' , async ({page}) =>  {

    await page.goto("https://demoblaze.com/index.html");
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("ramkumarp");
    await page.locator("//input[@id='loginpassword']").fill("R@mkumar.p.1");
    await page.locator("//button[normalize-space()='Log in']").click();

})