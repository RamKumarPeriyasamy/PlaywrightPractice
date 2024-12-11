const{test ,expect } = require("@playwright/test")

const testdata = require('../testdata.json')

test.describe('test data driven ' , () => {

    for (const data of testdata){

        test(`signin with user id : ${data.id}` ,async ({page}) => {

            await page.goto('https://demoblaze.com/cart.html');
            await page.locator("//a[@id='login2']").click();
            await page.locator("//input[@id='loginusername']").fill(data.username)
            await page.locator("//input[@id='loginpassword']").fill(data.password);
            await page.locator("//button[normalize-space()='Log in']").click();

        })
    }


})