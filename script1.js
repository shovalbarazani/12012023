class Product {
    price;
    productName;
    expDate;
    constructor(inputPrice, inputProductName, inputExpDate) {
        this.price = inputPrice;
        this.productName = inputProductName;
        this.expDate = inputExpDate;
    }
}

class Shop {
    products;
    constructor() {
        this.products = [];
        this.readMethod();
    }
    addProduct(product) {

            this.products.push(product);
            this.saveCreateArray();
    }
    saveCreateArray() {
        localStorage.setItem('products',JSON.stringify(this.products));
    }
    readMethod() {
        if (localStorage.getItem('products') != null) {
            this.products = JSON.parse(localStorage.getItem('products'));
        } else {
            this.saveCreateArray();
        }
    }
}

let vegShop = new Shop();
document.getElementById('addProduct').addEventListener('click',()=>{
    let price = document.getElementById('price').value;
    let productName = document.getElementById('productName').value;
    let expDate = document.getElementById('expDate').value;
    let newProduct = new Product(price, productName, expDate);
    vegShop.addProduct(newProduct);
});