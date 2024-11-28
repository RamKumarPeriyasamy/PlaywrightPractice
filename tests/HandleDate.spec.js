// const{test , expect } = require('@playwright/test')

// test('Handle Date', async({page}) => {

//     await page.goto('https://testautomationpractice.blogspot.com')

//     await page.fill('#datepicker','09/03/2024');
//     // await page.waitForTimeout(5000);
    
//     //date picker
//     const targetYear = "2024";
//     const targetMonth = "Mar";
//     const targetDate = "18";

//     await page.click('#txtDate');

//     while(true)
//     {
//         const currentYear = await page.locator('.ui-datepicker-year').textContent();
//         const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    

//           if(currentYear === targetYear && currentMonth === targetMonth){
//             break;
//           }

    
           

//         await page.click("(//span[@class='ui-icon ui-icon-circle-triangle-w'])");


//     }
//     //date
//     const dates = await page.$$("//a[@class='ui-state-default']")

//     for(const dt of dates){
//         if(await dt.textContent() ==  targetDate)
//             {
//                 await dt.click();
//                 break;
//             }
//     }
   
     
//     await page.waitForTimeout(9000);
        


// })

const { test, expect } = require('@playwright/test');

test('Handle Date', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    // Open the date picker
    await page.click('#txtDate');

    const targetYear = "2015";
    const targetMonth = "March"; // Correct case for month
    const targetDate = "18";

    while (true) {
        // Extract current year and month
        const currentYear = (await page.locator("//select[@aria-label='Select year']").textContent()).trim();
        const currentMonth = (await page.locator("//select[@aria-label='Select month']").textContent()).trim();

        console.log(`Current Year: ${currentYear}, Current Month: ${currentMonth}`);

        // Check if the desired year and month are displayed
        if (currentYear === targetYear && currentMonth === targetMonth) {
            break;
        }

        // Navigate to the previous month
        await page.click('.ui-datepicker-prev');
    }

    // Select the target date
    await page.click(`.ui-state-default:has-text("${targetDate}")`);

    // Observation delay
    await page.waitForTimeout(3000);
});


