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
        description: "Adidas original Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "shoes"
    },
    {
        id: 2,
        img: "applewatch-product.jpg",
        name: "Apple Watch S8",
        price: 19000,
        description: "Apple Watch S8 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "technology"
    },
    {
        id: 3,
        img: "macbook-product.jpg",
        name: "Macbook Pro",
        price: 54000,
        description: "Macbook Pro Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "technology"

    },
    {
        id: 4,
        img: "necklace-product.jpg",
        name: "Dior Necklace",
        price: 103000,
        description: "Dior Necklace Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "accessories"

    },
    {
        id: 5,
        img: "nike-product.jpg",
        name: "Nike T-shirt",
        price: 1299,
        description: "Nike T-shirt Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "clothing"

    },
    {
        id: 6,
        img: "northface-product.jpg",
        name: "Northface Bag",
        price: 15600,
        description: "Northface Bag Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "bags"

    },
    {
        id: 7,
        img: "Samsung-product.jpg",
        name: "Samsung Galaxy S23",
        price: 43000,
        description: "Samsung Galaxy S23 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "technology"

    },
    {
        id: 8,
        img: "socks-product.jpg",
        name: "Nike Socker",
        price: 999,
        description: "Nike Socker Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
}
document.querySelector("#productCard").innerHTML = html;


// กด ตามหัวข้อ menuproduct จะได้ product ตามหัวข้อ menuproduct
function menuProduct(menu) {
    console.log(menu)
    // $(".product-card-component").css('display', 'none')
    // if (menu == 'all') {
    //     $(".product-card-component").css('display', 'block')
    // } else {
    //     $("."+menu).css('display', 'block')
    // }

    const cardComponent = document.querySelectorAll(".product-card-component");
    cardComponent.forEach(cardCompo => {
        console.log(cardCompo)
        cardCompo.style.display = 'none';
        if (menu == 'all') {
            cardCompo.style.display = "block";
        } else if (cardCompo.classList.contains(menu)) {
            cardCompo.style.display = "block";
        }
    });
}

// คลิ๊กที่ product จะไปอีก page

function productDetail(detail) { 
    console.log(detail);
    window.location.href = "productDetail.html";
}







// ทำลูกน้ำ หน่วยเงิน
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}









