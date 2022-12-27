const mobileData = [
  {
    id: 1,
    name: "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 1 ترابایت و رم 6 گیگابایت",
    price: 69400000,
    images: [
      "../assets/images/p_1.jpg",
      "../assets/images/p_1_2.jpg",
      "../assets/images/p_1_3.jpg",
    ],
  },
  {
    id: 2,
    name: "گوشی موبایل اپل مدل iPhone 12 A2402 MGHN3J/A تک سیم‌ کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت",
    price: 30000000,
    images: [
      "../assets/images/p_2_1.jpg",
      "../assets/images/p_2_2.jpg",
      "../assets/images/p_2_3.jpg",
    ],
  },
];
const $ = document;
const productList = $.getElementById("product-list");
const Navbar = $.querySelector(".bar");
const cartQty = $.getElementById("cart-qty");
let cart = [];

function getFromLocalStorage() {
  let getCart = JSON.parse(localStorage.getItem("mehri-shop-cart"));
  if (getCart) {
    cart = getCart;
  } else {
    cart = [];
  }
  quantityCount(cart)
}


function quantityCount(cart){
    let all = 0
    for(let i = 0;i< cart.length;i++){
      all += cart[i].productQty
    }
    cartQty.innerHTML = all
    if (all === 0) {
      cartQty.style.display = "none"
    }else{
      cartQty.style.display = "flex"
    }
}

function renderData(data, container) {
  container.innerHTML = "";
  data.forEach(function (item) {
    let cutName = item.name.slice(0, 50);
    let producCard = `
        <div onclick="location.href='screens/product.html?id=${
          item.id
        }';" class="card-product col-lg-3 col-md-4 col-sm-6 border">
          <img src="${item.images[0]}" alt="${item.name}" />
          <span class="name">${cutName}...</span>
          <span class="price">${item.price.toLocaleString("en-US")} تومان</span>
        </div>
        `;
    container.insertAdjacentHTML("beforeend", producCard);
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    Navbar.classList.add("bar-fixed");
  } else {
    Navbar.classList.remove("bar-fixed");
  }
  console.log("sajad");
});
window.addEventListener("load",getFromLocalStorage)
renderData(mobileData, productList);
