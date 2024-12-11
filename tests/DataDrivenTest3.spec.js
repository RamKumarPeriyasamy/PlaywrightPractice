const { test, expect } = require('@playwright/test');
const testdata = require('../testdata2.json');

test.describe('Data-driven file upload', () => {
    for (const data of testdata) {
        test(`Upload file ${data.id}`, async ({ page }) => {
            await page.goto('https://recruiter.foundit.in/create-profile-page/');

            // Trigger the popup for file upload
            await page.locator('#img-icon').click();

            // Handle the file input field dynamically
            await page.locator('#imgInp').setInputFiles(data.filePath);

            // Click on the upload button
            await page.getByRole('button', { name: 'Upload' }).click();

            // Assertion to verify upload success (example)
            //await expect(page.locator('text=Upload Successful')).toBeVisible();
            
            await browser.close();
        });
    }
});
