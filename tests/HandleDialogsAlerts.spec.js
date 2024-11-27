const {test ,expect } = require('@playwright/test')

test('Handle dialog or alerts' , async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com");


    //enabiling alert handler(alert)
    // page.on('dialog ' , async dialog => {

    //     expect(dialog.type()).toContain('alert');
    //     expect(dialog.message()).toContain("I am an alert box!");
    //     await dialog.accept();

    // })
    //  await page.click("#alertBtn");
    //  await age.waitForTimeout(2000);


    //enabiling alert handler(confrim)
    // page.on('dialog' , async dialog => {

    //     expect(dialog.type()).toContain('confirm');
    //     expect(dialog.message()).toContain("Press a button!");
    //     await dialog.accept();

    // })
    //  await page.click("#confirmBtn");
    //  await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

    //  await page.waitForTimeout(2000);


    //enabiling alert handler(prompt)
     page.on('dialog' ,async dialog => {
         expect(dialog.type()).toContain('prompt');
         expect(dialog.message()).toContain('Please enter your name:');
         expect(dialog.defaultValue()).toContain('Harry Potter');
         await dialog.accept('Amos');

    })
    
    await page.click("#promptBtn");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Amos! How are you today?');
    await page.waitForTimeout(3000);
})