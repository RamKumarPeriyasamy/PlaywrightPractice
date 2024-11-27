const { test, expect } = require('@playwright/test');

test('LocatingMultipleElement', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    // Locate all anchor tags on the page
    // const links = await page.$$('a');

    // // Loop through each link and print the text content
    // for (const link of links) {
    //     const linkText = await link.textContent();
    //     console.log(linkText?.trim()); // Trim whitespace for cleaner output


    //         //div[@id='tbodyid']

    // }

    const products = await page.$$("//div[@id='tbodyid']//div//h4//a")

    for (const product of products){
         const prodName = await product.textContent();
         console.log(prodName);
    }

});
