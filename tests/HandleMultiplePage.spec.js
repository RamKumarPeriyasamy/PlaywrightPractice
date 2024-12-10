const {test , expect, chromium } = require ('@playwright/test');

// test('Handle Pages/windows' , async () => {
 
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
  
//   const page1 = await context.newPage();
//   const page2 = await context.newPage();

//   const allpages = context.pages();
//   console.log("no of pages created :" , allpages.length)

//   await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//   await expect(page1).toHaveTitle("OrangeHRM");

//   await page2.goto("https://www.orangehrm.com");
//   await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM");
   
  //Main method 

  test('Handle multiple pages / windows' , async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");
    

    const pagePromise = context.waitForEvent('page'); 
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM");

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();
  })

// })