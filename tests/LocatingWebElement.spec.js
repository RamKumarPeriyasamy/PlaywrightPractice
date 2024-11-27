const { test, expect } = require('@playwright/test');

test ('Build-inlocators',async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //page .getByAltText() - to locate an element , usually image, by its text alternative.
    const logo1 = await page.getByAltText("company-branding");
    await expect (logo1).toBeVisible();

    const logo2 = await page.locator("//div[@class='orangehrm-login-logo']");
    await expect (logo2).toBeVisible();


    //page.getByPlaceholder() -  to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //page.getByRoll() - to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button',{type: 'submit'}).click();

    //page.gteByText() - to locate by text content

    //1 st method
    //await expect(await page.getByText('hiren chotaliya')).toBeVisible();

    //2 nd method
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(name)).toBeVisible();
    

})