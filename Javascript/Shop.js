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

// 
const product = [{
    id: 1,
    img: "adidas-product.jpg",
    name: "Adidas original",
    price: 1250,
    type: "Clothing"
},
{
    id: 2,
    img: "necklace-product.jpg",
    name: "Dior Necklace",
    price: 80000,
    type: "Accessories"
},
{
    id: 3,
    img: "northface-product.jpg",
    name: "Northface Bag",
    price: 15600,
    type: "bags"
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

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}