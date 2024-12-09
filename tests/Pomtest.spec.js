import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/Loginpage";
import { Homepage } from '../pages/homepage';
import { Cartpage } from '../pages/Cartpage';


test('test', async ({ page }) => {
    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('ramkumarp', 'R@mkumar.p.1');
    await page.waitForTimeout(2000);

    //Home
    const home = new Homepage(page);
    await home.addProductToCart("Samsung galaxy s7");
    await home.gotoCart();

    // // Cart
    const cart = new Cartpage(page);
    await page.waitForTimeout(2000);
    const status = await cart.checkProductInCart("Samsung galaxy s7");
    expect(await status).toBe(true);
});
