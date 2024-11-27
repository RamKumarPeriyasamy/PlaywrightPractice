const{ test , expect } = require('@playwright/test');
// const { console } = require('inspector/promises');

test('Handle Dropdown',  async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    // await page.locator('#country').selectOption('usa'); //visible text
    // await page.locator('#country').selectOption({value : "usa"}); //By using value
    // await page.locator('#country').selectOption({label : "usa"}); //By using label
    // const ramidea = await page.locator('#country').selectOption({index: 2}); //By using index
    // console.log(ramidea);
    // await page.selectOption("#country" , 'canada'); //By text

    //asserstions
    //1) check number of options in dropdrown
    // const option = await page.locator("//select[@id='country']");
    // await expect(option).toHaveCount(10);

    // //2) check number of option in dropdown -Approch 2
    // const option =await page.$$("#country option");
    // console.log ("Number of options" , option.length )
    // await expect (option.length).toBe(10);

    //3) check presence of value in the dropdown
    // const contents = await page.locator('#country').textContent();
    // await expect (contents.includes('India')).toBeTruthy();

    //4) check presence of value in dropdown -Approch 2 -using looping
    // const options = await page.$$("#country options");
    // let status=false;
    // for (const option of options )
    // {
    //     console.log(await option.textContent())
    // }
    
    //4) a) Approch 3
    // const options = await page.$$('#country option')
    // let status=false; 

    // for (const option of options )
    // {
    
    //      let value= await option.textContent();
    //      if (value.includes('India')){
    //         status = true 
    //         break ;
    //      }
    // }
    // expect (status).toBeTruthy();

    //4) a) Approch 3
    // const options = await page.$$('#country option');

    // for (const option of options )
    // {
    
    //      let value= await option.textContent();
         
    //      if (value.includes('India'))
    //         {
    //         await page.selectOption("#country" , value);
    //         break ;
    //          }




    const options = await page.$$('#country option');

    for (const option of options) {
        const text = await option.textContent(); // Get the visible text content
        if (text.includes('India')) {
            const value = await option.getAttribute('value'); // Extract the value attribute
            await page.selectOption('#country', value);// Use the value to select the option
            
            break;
        }
    }
                
    







})