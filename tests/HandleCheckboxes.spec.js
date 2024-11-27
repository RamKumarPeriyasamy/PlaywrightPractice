const { test , expect } = require ('@playwright/test')

test('handle check boxes' , async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    await page.locator("//input[@id='sunday' and @type='checkbox']").check();
    expect (await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    expect (await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();


    //Multiple Checkboxes = inside of array  
    // [ "//input[@id='monday and @dffv" 
    //  "//input[@id='monday and @dffv"
    //   "//input[@id='monday and @dffv"
    //  ]


const  checkboxLocators = ["//input[@id='sunday' and @type='checkbox']"
    ,"//input[@id='monday' and @type='checkbox']" 
    , "//input[@id='friday' and @type='checkbox']"];
 
     for (const locator of checkboxLocators)
     {
        await page.locator(locator).check();

     }

     await page.waitForTimeout(5000);
     
    for (const locator of checkboxLocators)
    {
         if (await page.locator(locator).isChecked())
         {
            await page.locator(locator).uncheck()
         }
    }
 


    await page.waitForTimeout(3000);
      
})