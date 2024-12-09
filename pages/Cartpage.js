exports .Cartpage =
class Cartpage{
    constructor(page) {
        this.page = page
        this.noOfProducts ="//tbody[@id='tbodyid']/tr/td"
    }

    async checkProductInCart(productName){
 
        const ProductInCart = await this.page.$$(this.noOfProducts)

        for (const product of ProductInCart){
            console.log(await product.textContent())
            if(productName === await product.textContent()){
                return true;
                break;
            }
        }
    }
    
}