const {test,expect} = require('@playwright/test')


test('Drog and Drop' , async ({page}) => {

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const rome = await page.locator("#box6");
    const itay = await page.locator("#box106");
   

    //Approch 1
    await rome.hover();
    await page.mouse.down();

    await itay.hover();
    await page.mouse.down();

    const seol = await page.locator("#box5");
    const southkorea = await page.locator("#box105");

    //Approach 2 
    await seol.dragTo(southkorea);

    await page.waitForTimeout(3000);



})