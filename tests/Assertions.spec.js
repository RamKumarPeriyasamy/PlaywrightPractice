const{test , expect } = require('@playwright/test')

test('Asserstion' ,async ({page}) => {

    // open app URL
    await page.goto('https://demo.nopcommerce.com/register');

    //1. expect(page).toHaveURL() -> page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2. expect(page).toHaveTitle() -> page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3. expect(locator).toBeVisible() -> element is visible
    const logoelement = await page.locator('.header-logo')
    await expect (logoelement).toBeVisible();

    //4. expect(locator).toBeEnable()  -> control is enabled 
    const SearchStoreBox = await page.locator('#small-searchterms')
    await expect (SearchStoreBox).toBeEnabled();

    //5. expect(locator).toBeChecked() -> radio/checkbox is checked
    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();
    
    //checkbox
    const newsletterCheckbox = await page.locator('#Newsletter')
    expect(newsletterCheckbox).toBeChecked();

    //6. expect(locator).toHaveAttribute()-> Element has Attribute
    const regButton = await page.locator('#ConfirmPassword');
    expect(regButton).toHaveAttribute('data-val','true');

    //7. expect(locator).toHaveText() -> Element Matches Text
    await expect (await page.locator('.page-title h1')).toHaveText('Register');

    //8. expect(locator).toContainsText() -> Element Contains Text
    await expect (await page.locator('.page-title h1')).toContainText('ister')

    //9. expect(locator).toHaveValue() -> Input has a value
    const havevalue = await page.locator('#FirstName')
    await havevalue.fill('Ram Kumar');
    await expect(havevalue).toHaveValue('Ram Kumar');
    
    //10. expect(locator).toHaveCount() -> list of Element has given length
    const option = await page.locator("select[name='DateOfBirthDay'] option");
    await expect(option).toHaveCount(32);
})