const{test,expect } = require("@playwright/test")

test("Keyboard actions" ,async ({page}) => {

   await page.goto("https://gotranscript.com/text-compare")

//    await page.locator("[name='text1']").click();
//    await page.fill('Welcome to HexrFactory');

   await page.type("[name='text1']","Welcome to HexrFactory");

   await page.keyboard.press("Control+A");

   await page.keyboard.press("Control+C");

   await page.keyboard.down("Tab");
   await page.keyboard.up("Tab");

   await page.keyboard.press("Control+V");


   await page.waitForTimeout(4000);
})


//method 2
// const { test, expect } = require("@playwright/test");

// test("Keyboard actions", async ({ page }) => {
//   await page.goto("https://gotranscript.com/text-compare");

//   // Click the first text area and fill it
//   //await page.locator("[name='text1']").click();
//   await page.type("[name='text1']", "Welcome to HexrFactory");

//   // Select all text and copy it
//   await page.keyboard.press("Control+A");
//   await page.keyboard.press("Control+C");

//   // Navigate to the second text area
//   await page.press("[name='text1']", "Tab");

//   // Paste the copied text
//   await page.keyboard.press("Control+V");

//   // Wait for 4 seconds to observe the result
//   await page.waitForTimeout(4000);
// });
