const{test ,expect } = require('@playwright/test')

test('table' ,async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    const table = await page.locator("//table[@id='productTable']");

    const columns = await table.locator("thead tr th")
    console.log('number of columns:' , await columns.count());
    expect(await columns.count()).toBeGreaterThanOrEqual(4);
    

    const rows = await table.locator("tbody tr td")
    console.log('number of rows:' , await rows.count());
    expect(await rows.count()).toBeGreaterThan(3);

    const tables = await page.locator("#taskTable");

    const columnss = await tables.locator("thead tr th")
    console.log('number of columns:' , await columnss.count());
    expect(await columnss.count()).toBeGreaterThanOrEqual(4);
    

    const rowss = await tables.locator("tbody tr td")
    console.log('number of rows:' , await rowss.count());
    expect(await rowss.count()).toBeGreaterThan(3);
   
     
  
     
    
})