const{test , expect } = require ("@playwright/test")

//only
//test.only('test 1' , async ({page})
  test ('test 1' , async ({page}) => {
  console.log('this my test 1');    
  })

  test ('test 2' , async ({page}) => {
    console.log('this my test 2');    
  })

//skip
//test.skip ('test 3' , async ({page})
  test.skip ('test 3' , async ({page}) => {
    console.log('this my test 3');    
  });

//specific browser 
  test('test 4 - Chromium', async ({ page, browserName }) => {
    console.log('this is my test 4 for Chromium');
    if (browserName === 'chromium') {
        test.skip('Skipping this test for Chromium browser');
    }
 });

  test.skip ('test 5' , async ({page}) => {
    test.fixme();
    console.log('this my test 5');    
  });

 //fail
  test('test 6' , async ({page}) => {
    test.fail();//expecting
    console.log('this my test 6');
    expect(1).toBe(2); //actual   
  });

  test('test 7 - Chromium', async ({ page, browserName }) => {
    console.log('this is my test 7 for Chromium');
    if (browserName === 'firefox') {
       test.fail()
    }
  });

  test('ScreenShort' ,async ({page}) => {
     
    test.slow() // this key use for slow the test in 3time then comparely normally
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.screenshot({path : 'test-results/ScreenShort'+ Date.now() + 'HomePage.png'})

 });
 