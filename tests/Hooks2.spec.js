const{test , expect } = require ('@playwright/test')

let page;

test .beforeAll(async({browser}) => {

    page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("ramkumarp");
    await page.locator("//input[@id='loginpassword']").fill("R@mkumar.p.1");
    await page.locator("//button[normalize-space()='Log in']").click();

});

test.afterAll(async() => {
    await page.locator("//a[@id='logout2']").click();
});

test('Home Page test' , async () => {
    const product = await page.$$(".hrefch");
    expect (product).toHaveLength(9);
    
})

test('ADD to Cart ' , async () => {
    await page.locator("//a[normalize-space()='Nokia lumia 1520']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    await page.waitForTimeout(3000);

     page.on('dialog ' , async dialog => {

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();

    })

})