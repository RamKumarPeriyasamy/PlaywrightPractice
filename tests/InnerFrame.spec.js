const{test,expect} = require("@playwright/test")

test('inner are nested frame' , async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    //frame3 Locator("input[name='mytext3']").fill("WELCOME");

    //nested frame 
    const childFrame = await frame3.childFrames();
    await childFrame[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check();
    await page.waitForTimeout(4000);

})