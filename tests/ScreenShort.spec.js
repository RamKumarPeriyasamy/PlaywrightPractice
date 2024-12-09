const{test,expect } = require('@playwright/test')

test('ScreenShort' ,async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   
    await page.screenshot({path : 'test-results/ScreenShort'+ Date.now() + 'HomePage.png'})

});

test('FullPageSchreenSchot' ,async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(1000)
    await page.screenshot({path : 'test-results/ScreenShort'+Date.now() + 'FullPage.png',fullPage:true})
});

test('Product Screen Short' ,async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//div[@class='orangehrm-login-slot']").screenshot({path : 'test-results/ScreenShort'+ Date.now() + 'AppleCinema.png'})
});

