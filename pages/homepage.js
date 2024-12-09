exports.Homepage = 
class Homepage {
    constructor(page) {
        this.page = page;
        this.productList = "//*[@id='tbodyid']/div/div/div/h4/a"; // Adjusted XPath
        this.addToCartbtn = "//a[normalize-space()='Add to cart']";
        this.cart = "#cartur";
    }

    async addProductToCart(productName) {
        // Wait for modal to close (if still visible)
        //await this.page.locator('#logInModal').waitFor({ state: 'hidden' });

        // Wait for product list to load
        await this.page.waitForSelector(this.productList);

        const productList = await this.page.$$(this.productList);
        for (const product of productList) {
            const name = await product.textContent();
            if (name && name.trim() === productName) {
                await product.click(); // Click to open product details
                break;
            }
        }

        // Attach dialog handler for "Product added."
        this.page.on('dialog', async (dialog) => {
            if (dialog.message().includes("added")) {
                await dialog.accept();
            }
        });

        // Click "Add to Cart"
        await this.page.locator(this.addToCartbtn).click();
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
};
