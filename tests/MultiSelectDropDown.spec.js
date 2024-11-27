const { test , expect } = require('@playwright/test');

test('MultiSelectDropDown ', async({page}) => {


    await page.goto('https://testautomationpractice.blogspot.com');

    //0) select number of options from multi Select DropDown
    // await page.selectOption('#colors',['Blue','Red','Green']);
    
    //1) check number of options in DropDown 
    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    //2) check number of options in DropDown in JS 
    // const options = await page.$$('#colors option');
    // console.log("Drop Down Colors are :" ,options.length)
    // await expect (option.length).toBe(5);
    
    //3) check Presence of the value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect (content.includes ('Red')).toBeTruthy();
    await expect (content.includes('Black')).toBeFalsy();

    

    await page.waitForTimeout(4000);


})
