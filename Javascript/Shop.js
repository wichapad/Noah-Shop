// navbar
// ขนาดหน้าจอมือถือ กับ tablet จะมี icons menu เมื่อคลิ๊ก จะโชว์ เมนู navbar 
function openNavbar() {
    const navbar = document.querySelector("nav");

    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }

}


// สร้าง array ข้อมูล รูปภาพ,ชื่อ,ราคา,ประเภทสินค้า 
const product = [{
    id: 1,
    img: "adidas-product.jpg",
    name: "Adidas original",
    price: 1250,
    type: "Clothing"
},
{
    id: 2,
    img: "applewatch-product.jpg",
    name: "Apple Watch S8",
    price: 19000,
    type: "Technology"
},
{
    id: 3,
    img: "macbook-product.jpg",
    name: "Macbook Pro",
    price: 54000,
    type: "Technology"
    
},
{
    id: 4,
    img: "necklace-product.jpg",
    name: "Dior Necklace",
    price: 103000,
    type: "Accessories"
    
},
{
    id: 5,
    img: "nike-product.jpg",
    name: "Nike T-shirt",
    price: 1299,
    type: "Clothing"
    
},
{
    id: 6,
    img: "northface-product.jpg",
    name: "Northface Bag",
    price: 15600,
    type: "bags"
    
},
{
    id: 7,
    img: "Samsung-product.jpg",
    name: "Samsung Galaxy S23",
    price: 43000,
    type: "Technology"
    
},
{
    id: 8,
    img: "socks-product.jpg",
    name: "Nike Socker",
    price: 999,
    type: "Accessories"
    
}];

const productCart =document.querySelector("#productCard");

for (let i = 0; i < product.length; i++) {
    const div = document.createElement("div");
    div.className = `product-card-component ${product[i].type}`;

    const imageProduct = document.createElement("img");
    imageProduct.src = `/image/product/${product[i].img}`;

    const divDes = document.createElement("div");
    divDes.className = "product-card-des";

    const nameProduct = document.createElement("p");
    nameProduct.className = "name-product";
    nameProduct.textContent = product[i].name;

    const priceProduct = document.createElement("p");
    priceProduct.className = "price-product";
    priceProduct.textContent = numberWithCommas(product[i].price) + " ฿";

    div.appendChild(imageProduct);
    div.appendChild(divDes);
    divDes.appendChild(nameProduct);
    divDes.appendChild(priceProduct);

    productCart.appendChild(div);
    
}

// ทำลูกน้ำ หน่วยเงิน
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}