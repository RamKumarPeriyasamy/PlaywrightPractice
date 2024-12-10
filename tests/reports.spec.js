const{test ,expect } = require ('@playwright/test')

test('report generation ' ,async ({page}) => {

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await expect(page).toHaveTitle("OrangeHRM")
})

test('report generation 2' ,async ({page}) => {

    await page.goto("https://www.orangehrm.com")
    await expect(page).toHaveTitle("Human Resources Management Software | OrangeHRM")
})

test('report generation 3' ,async ({page}) => {

    await page.goto("https://demoblaze.com/index.html")
    await expect(page).toHaveTitle("STORE")
})