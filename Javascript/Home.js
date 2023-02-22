// navbar
// ขนาดหน้าจอมือถือ กับ tablet จะมี icons menu เมื่อคลิ๊ก จะโชว์ เมนู navbar 
function openNavbar() {
    var navbar = document.querySelector("nav");

    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }

}


// slide image
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// สร้าง array เก็บข้อมูล รูปภาพ,ชื่อ,ราคา,ประเภทสินค้า 
var product = [
    {
        id: 1,
        img: "adidas-product.jpg",
        name: "Adidas original",
        price: 1250,
        type: "shoes"
    },
    {
        id: 2,
        img: "applewatch-product.jpg",
        name: "Apple Watch S8",
        price: 19000,
        type: "technology"
    },
    {
        id: 3,
        img: "macbook-product.jpg",
        name: "Macbook Pro",
        price: 54000,
        type: "technology"

    },
    {
        id: 4,
        img: "necklace-product.jpg",
        name: "Dior Necklace",
        price: 103000,
        type: "accessories"

    },
    {
        id: 5,
        img: "nike-product.jpg",
        name: "Nike T-shirt",
        price: 1299,
        type: "clothing"

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
        type: "technology"

    },
    {
        id: 8,
        img: "socks-product.jpg",
        name: "Nike Socker",
        price: 999,
        type: "accessories"

    }
];

var html = "";
for (let i = 0; i < product.length; i++) {
    html += `<div onclick="productDetail(${i})" class="product-card-component ${product[i].type}">
                <img src="/image/product/${product[i].img}" alt="">
                <div class="product-card-des">
                    <p class="name-product">${product[i].name}</p>
                    <p class="price-product">${numberWithCommas(product[i].price) + " ฿"}</p>
                </div>
            </div>`

    document.querySelector("#productCard").innerHTML = html;

}


function menuProduct(menu) {
    console.log(menu)
    document.querySelector(".product-card-component").style.display = "none";
    if (menu === 'all') {
        document.querySelector(".product-card-component").style.display = "block";
    } else {
        document.querySelector("." + menu).style.display = "block";
    }
}

// คลิ๊กที่ product จะไปอีก page
var productIndex = 0
function productDetail(detail) {
    productIndex = detail;
    console.log(productIndex);
    window.location.assign ("http://127.0.0.1:5500/HTML/sproduct.html") ;
    
}


// ทำลูกน้ำ หน่วยเงิน
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}









