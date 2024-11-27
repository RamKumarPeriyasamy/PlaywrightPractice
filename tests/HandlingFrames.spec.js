const {test , exepect } = require('@playwright/test')

test('Handling frames' , async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');


    //Total Frames

    const allframes =await page.frames();
    console.log('number of frames',allframes.length);



//approach 1 : using name /URL
//const var = await page.frame('name');

// const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
// await frame1.fill("[name='mytext1']","Hello");

// await page.waitForTimeout(2000);


//approach 2 :  using frame locator 
const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
await inputbox.fill("Hello");

})