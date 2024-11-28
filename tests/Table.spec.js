const { test } = require('@playwright/test');

test('Print table rows', async ({ page }) => {
  // Navigate to the page
  await page.goto("https://testautomationpractice.blogspot.com");

  // Locate the table rows
  const column = await page.locator("//table[@id='productTable']/thead/tr/th")
  const rows = await page.locator("//table[@id='productTable']/tbody/tr");
  
  // Print the number of rows
  console.log('number column :' , await column.count());
  console.log('Number of rows:', await rows.count());

  // Loop through each row and print its text content
//   for (let i = 0; i < await rows.count(); i++) {
//     const rowText = await rows.nth(i).innerText(); // Get text of the row
//     console.log(`Row ${i + 1}: ${rowText}`);
//   }

//   for(let j =0; j < await column.count(); j++ ){
//     const columnText = await column.nth(j).innerText();
//     console.log(`Column ${j + 1}: ${columnText}`)
//   }

//   const machedrow = rows.filter({
//         has: page.locator('td'),
//         hasText: 'Laptop'
//     })

//     await machedrow.locator('input').check();
//     await page.waitForTimeout(5000);




    //3)select multiple products by re-useable function
      await selectProduct(rows,page,'Smartphone');
      await selectProduct(rows,page,'Tablet');
      await selectProduct(rows,page,'Smartwatch	');


      async function selectProduct(rows,page,name)
      {
        const machedrow = rows.filter({
            has:page.locator('td'),
            hasText: name 
        })

        await machedrow.locator('input').check()
        await page.waitForTimeout(5000);
        
      }

});
