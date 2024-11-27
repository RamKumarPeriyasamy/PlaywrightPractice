const{test ,expect } = require('@playwright/test')

test('HandleHiddenItem',async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator(" input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM'])[1]").click();
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();
    // await page.locator("//span[normalize-space()='Automaton Tester']").click();//wrong method

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span")
    //await page.locator("//span[normalize-space()='Automaton Tester']").click();//wrong method
    
    for (let option of options)
    {
        const jobTitle = await option.textContent();
        // console.log(jobTitle);
        if(jobTitle.includes('QA Lead'))
        {
            await option.click();
            break;
        }
    }



    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]").click();
    await page.waitForTimeout(3000);

    const subUnit = await page.$$("//div[@role='listbox']//span");
    
    for(let option of subUnit)
    {
        const SubUnit = await option.textContent();
        // console.log(SubUnit);
        if(SubUnit.includes('TechOps'))
        {
            await option.click();
            break;
        }
    }
    
    await page.waitForTimeout(3000);





    
})