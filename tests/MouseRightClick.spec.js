const {test , expect } = require ('@playwright/test')

test ('mouse right click' , async ({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    
    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
 
     //right click button

    await button.click({button : 'right'});


    const edit = await page.locator("//span[normalize-space()='Edit']")

    await edit.hover();
    await edit.click();
    

    await page.waitForTimeout(3000);

})