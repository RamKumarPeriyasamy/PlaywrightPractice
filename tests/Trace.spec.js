import { test, expect } from '@playwright/test';

test('Handle File Upload with Popup', async ({ page }) => {
  // Navigate to the target URL
  await page.goto('https://recruiter.foundit.in/create-profile-page/');

  // Trigger the popup for file upload
  await page.locator('#img-icon').click();

  // Handle the file input field directly (even if the popup is triggered)
  const filePath = 'tests/IMG_20241108_121519.jpg';
  await page.locator('#imgInp').setInputFiles(filePath);

  // Click on the upload button after setting the file
  await page.getByRole('button', { name: 'Upload' }).click();

  await page.type("//input[@placeholder='First Name']", "Ram Kumar");
  await page.type("//input[@placeholder='Last Name']", "Periyasamy");
  await page.type("//input[@id='email_id']", "amosrajkumar1803@gmail.com");
  await page.type("//input[@placeholder='Enter mobile number with country code']", "91 9080067941");
  //await page.waitForTimeout(2000);

  // Select location using the refined locator
  await page.locator('select[name="current_location"]').selectOption({ label: 'Chennai' });
  await page.locator("//textarea[@placeholder='Description']").fill("Successfully automated testing workflows, enhancing efficiency and ensuring product quality.")
  await page.locator("//select[@name='year_of_achievement_one']").selectOption("2021");
 
  //Professtional Details
  await page.locator("//input[@placeholder='Current Company Name']").fill("HEXR FACTORY");
  await page.locator("//input[@placeholder='Current Designation']").fill("SDET Intern");
  await page.locator("//select[@name='current_company_from']").selectOption("2024");
  await page.locator("//select[@name='current_company_to']").selectOption("2024");
  //await page.waitForTimeout(2000)

  //Company Address
  await page.locator("//input[@id='address1']").fill("17/1A, Periyar Rd, Darmapuram,");
  await page.locator("//input[@id='address2']").fill("T. Nagar,");
  await page.locator("//input[@id='city']").fill("Chennai");
  await page.locator("//input[@id='state']").fill("TAMILNADU");
  await page.locator("//input[@id='country']").fill("INDIA");
  await page.locator("//input[@id='zip-code']").fill("600017");
  //await page.waitForTimeout(2000)

  //Hiring Preferences
  await page.locator("//select[@id='total_experience_id']").selectOption("2+ Year");
  
  await page.locator('#get_selected_list').click();
  await page.getByLabel('Junior Level').check();
  await page.getByLabel('Mid Level').check();

  //await page.locator("//input[@name='referral_code']").fill("RamP1101");

  await page.locator("#get_industry_list").click();
  await page.getByLabel('Advertising/PR/Events').check();
  await page.getByLabel('Automotive/Automobile/Ancillaries').check();
  await page.getByLabel('Fertilizers/Pesticides/Agro chemicals').check();
  await page.getByLabel('Investment Banking/Venture Capital/Private Equity').check();
  //await page.waitForTimeout(2000)

  // await page.locator("//button[@id='get_category_list']").click();
  // await page.getByLabel('Banking').check();
  // await page.getByLabel('Customer Service/Call Centre/BPO').check();
  // await page.getByLabel("Finance & Accounts").check();


  
  await page.locator('#get_category_list').click();
  await page.getByLabel('Banking', { exact: true }).check();
  await page.getByLabel('Customer Service/Call Centre/').check();
  await page.getByLabel('Export/Import').check();
  await page.getByLabel('Advertising/Entertainment/').check();


  await page.locator("//input[@placeholder='Skills I hire for']").fill("Proficiency in verbal and written communication,Clarity, fluency, and grammar in the chosen language (often English)")

  await page.getByRole('button', { name: 'Accept All Cookies' }).click();

  const checkboxLocator = page.locator("//div[@class='field checkbox']//input[@type='checkbox']");

// Check if the checkbox is checked
const isChecked = await checkboxLocator.isChecked();

if (isChecked) {
  console.log("Checkbox is checked.");
} else {
  console.log("Checkbox is not checked.");
}

// Assertion (if you're testing)
expect(isChecked).toBe(true); // Verifies that the checkbox is checked

  await page.waitForTimeout(5000); // Wait to observe the effect or for the page to update

  await page.close();
});
