exports.LoginPage = 
class LoginPage {
    constructor(page){
        this.page = page;
        this.LoginLink="//a[@id='login2']"
        this.usernameInput="//input[@id='loginusername']";
        this.passwordInput="//input[@id='loginpassword']";
        this.loginButton="//button[normalize-space()='Log in']";
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async Login(username,password){
        await this.page.locator(this.LoginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}