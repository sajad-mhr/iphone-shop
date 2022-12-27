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
    screenTech: "Super Retina XDR OLED",
    size: 6.1,
    photoResulotion: 12,
    operationSysremIOS: 15,
    introduction:
      " بالاخره بعد از شایعات، شاهد رونمایی جدید‌ترین گوشی‌های هوشمند اپل در قالب خانواده آیفون 13 بودیم. آیفون 13 پرو مکس، آیفون 13 پرو، آیفون 13 و آیفون 13 مینی به‌عنوان جدید‌ترین گوشی‌های هوشمند این شرکت معرفی شدند. آیفون 13 پرو مکس بدون شک به مشخصات فنی قدرتمند‌تری به نسبت ما‌بقی اعضای این خانواده مجهز شده است. از نظر طراحی تفاوت چندانی با نسل قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ با عرض کمتری به نسبت نسل قبلی بهره برده است.",
    expertCheck:
      " گوشی‌های هوشمند خانواده آیفون 13 در قالب چهار گوشی هوشمند آیفون 13 پرو مکس، آیفون 13 پرو، آیفون 13‌ و آیفون 13 مینی معرفی شدند. پرچمداران جدید اپل این بار قدرتمند‌تر از همیشه پا به عرصه رقابت گذاشته اند تا در رقابتی بسیار جذاب، عملکردی بهتر به نسبت پرچمداران اندرویدی به نمایش بگذارد. از جمله اصلی‌ترین تغییرات در نظر گرفته شده برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده آیفون 12 می‌توانیم به سنسور‌های دوربین قدرتمند‌تر، پردازنده فوق العاده با عملکرد بهتر و خیره کننده به نسبت نسل قبلی، تنوع رنگی بالا، صفحه نمایش به‌مراتب با‌کیفیت‌تراشاره کنیم. در این بررسی به‌سراغ آیفون 13 پرو مکس به عنوان گل سرسبد گوشی های هوشمند این خانواده رفته ایم تا ببینیم چه مشخصاتی را با خودش به همراه داشته و به نسبت آیفون 12 پرو مکس چه تغییرات در مشخصات فنی در نظر گرفته شده دارد.",
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
    screenTech: "Super Retina XDR OLED",
    size: 6.1,
    photoResulotion: 12,
    operationSysremIOS: 14.1,
    introduction:"گوشی موبایل iPhone 12 A2402 MGHN3J/A پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است که دقیقاً با تراکم پیکسلی iPhone XS برابر است.",
    expertCheck:"اپل همواره در زمینه طراحی‌های گوشی‌های هوشمند خود موفق بوده و توانسته است محصولات با‌کیفیت و در عین حال زیبایی را روانه بازار کند. iPhone 12 هم یکی از پرچمداران قدرتمند این شرکت است که شاید به نسبت دو برادر بزرگترش، یعنی iPhone 12 pro و iPhone 12 pro max از مشخصات ضعیف‌تری بهره برده باشد، اما باز هم در جایگاه یک پرچمدار قدرتمند، عملکرد بسیار خوب و قابل قبولی دارد. در همان نگاه اول طراحی در نظر گرفته شده برای این گوشی تفاوت چندانی با iphone 11 ندارد. در نمای رو‌به‌رویی صفحه‌نمایش یکدستی را شاهد هستیم که همان حاشیه معروف در قسمت بالای و مرکزی صفحه‌نمایش، سنسور دوربین سلفی و تشخیص چهره سه‌بعدی را در خود جای داده است."
  },
];
let cart = [];
const $ = document;
const detailsContainer = $.getElementById("details-container");
const introduction = $.getElementById("introduction");
const expertCheck = $.getElementById("expert-check");
const Navbar = $.querySelector(".bar");
const cartQty = $.getElementById("cart-qty");

let locationSerach = location.search;
let getParams = new URLSearchParams(locationSerach);
let getIdProd = getParams.get("id");

let index = 0;

function renderProductDetails(data, wrapper) {
  wrapper.innerHTML = "";
  let getProduct = data.find(function (item) {
    return item.id === Number(getIdProd);
  });

  if (getProduct) {
    let images = getProduct.images;
    let getImages = images.map(function (item) {
      return item;
    });
    $.title = getProduct.name;
    let details = `
      <div class="image-container">
        <div class="image">
        <img id="prod-image" src="${getImages[index]}" alt="" />
        <div style="width:90%;display:flex;align-items:center;justify-content:space-between">
        <button onclick="nextItem()">
        <i class="fa fa-arrow-right"></i>
        </button>
        <button onclick="prevItem()">
        <i class="fa fa-arrow-left"></i>
        </button>
        </div>
        </div>
      </div>
      <div class="details">
        <span>${getProduct.name}</span
        >
        <p>ویژگی ها</p>
        <ul id="attributes-list">
        <li style="margin-top:10px">فناوری صفحه نمایش : ${
          getProduct.screenTech
        }</li>
        <li style="margin-top:10px">اندازه : ${getProduct.size}</li>
        <li style="margin-top:10px">رزولوشن عکس : ${
          getProduct.photoResulotion
        } مگاپیکسل</li>
        <li style="margin-top:10px">نسخه سیستم عامل : IOS ${
          getProduct.operationSysremIOS
        }</li>
        </ul>
      </div>
      <div class="add-to-cart-container">
        <span>قیمت فروشنده</span>
        <span style="font-size:22px">${getProduct.price.toLocaleString(
          "en-US"
        )} تومان</span>
        <button class="add-to-cart-btn show" onclick="addToCart(${
          getProduct.id
        })">افزودن به سبد خرید</button>
      <div class="quantity-container hidden">
        <button onclick="increase(${getProduct.id})"><span>+</span></button>
        <span id="quantity">1</span>
        <button onclick="decrease(${getProduct.id})">
        <span id="decrease-elem" class="show">-</span>
        <span id="trash" class="hidden">
        <i style="font-size:20px" class="fa fa-trash"></i>
        </span>
        </button>
      </div>
      </div>
      `;
    wrapper.insertAdjacentHTML("beforeend", details);
    introduction.innerHTML = getProduct.introduction;
    expertCheck.innerHTML = getProduct.expertCheck;
  } else {
    location.href = "../index.html";
  }
}
renderProductDetails(mobileData, detailsContainer);

const prodImage = $.getElementById("prod-image");
function nextItem() {
  prodImage.classList.remove("hidden");
  let getProduct = mobileData.find(function (item) {
    return item.id === Number(getIdProd);
  });
  let images = getProduct.images;
  let getImages = images.map(function (item) {
    return item;
  });
  index++;
  if (index > getImages.length - 1) {
    index = 0;
  }
  prodImage.src = getImages[index];
}

function prevItem() {
  prodImage.classList.remove("hidden");
  let getProduct = mobileData.find(function (item) {
    return item.id === Number(getIdProd);
  });
  let images = getProduct.images;
  let getImages = images.map(function (item) {
    return item;
  });
  index--;
  if (index < 0) {
    index = getImages.length - 1;
  }
  prodImage.src = getImages[index];
  prodImage.src = getImages[index];
}

function getFromLocalStorage() {
  let getCart = JSON.parse(localStorage.getItem("mehri-shop-cart"));
  if (getCart) {
    cart = getCart;
  } else {
    cart = [];
  }
  quantityCount(cart);
  let locationSearch = location.search;
  let locationSearchParams = new URLSearchParams(locationSearch);
  let prodId = locationSearchParams.get("id");
  const quantity = $.getElementById("quantity");
  const quantityContainer = $.querySelector(".quantity-container");
  const addToCartBtn = $.querySelector(".add-to-cart-btn");
  let toNumberID = Number(prodId);
  console.log(toNumberID);
  let isInCart = cart.some(function (item) {
    return item.productID === toNumberID;
  });
  console.log(isInCart);
  if (isInCart) {
    cart.forEach(function (item) {
      if (item.productID === toNumberID) {
        quantity.innerHTML = item.productQty;
      }
    });
    addToCartBtn.classList.remove("show");
    addToCartBtn.classList.add("hidden");
    quantityContainer.classList.remove("hidden");
    quantityContainer.classList.add("show");
  }
}

function setToLocalStorage(cart) {
  localStorage.setItem("mehri-shop-cart", JSON.stringify(cart));
}

function addToCart(prodID) {
  const quantityContainer = $.querySelector(".quantity-container");
  const addToCartBtn = $.querySelector(".add-to-cart-btn");
  const quantity = $.getElementById("quantity");
  quantityContainer.classList.remove("hidden");
  quantityContainer.classList.add("show");
  addToCartBtn.classList.remove("show");
  addToCartBtn.classList.add("hidden");

  quantity.innerHTML = 1;
  let findProduct = mobileData.filter(function (item) {
    return item.id === prodID;
  });

  let hasInCart = cart.some(function (item) {
    return item.productID === prodID;
  });
  console.log(hasInCart);

  if (hasInCart) {
    cart.forEach(function (item) {
      if (item.productID === prodID) {
        item.productQty++;
        quantity.innerHTML = item.productQty;
      }
    });
  } else {
    findProduct.forEach(function (item) {
      let productObject = {
        productID: item.id,
        productName: item.name,
        productPrice: item.price,
        productImage: item.images[0],
        productQty: 1,
      };
      cart.push(productObject);
    });
  }
  console.log(cart);
  setToLocalStorage(cart);
  quantityCount(cart);
}

function removeProduct(prodId) {
  let getCart = JSON.parse(localStorage.getItem("mehri-shop-cart"));
  cart = getCart;
  console.log(prodId);
  let findIndexProduct = cart.findIndex(function (item) {
    return item.productID === prodId;
  });
  console.log(findIndexProduct);
  cart.splice(findIndexProduct, 1);
  setToLocalStorage(cart);
}

function updateQuantity(qty, prodId) {
  const quantity = $.getElementById("quantity");
  const quantityContainer = $.querySelector(".quantity-container");
  const addToCartBtn = $.querySelector(".add-to-cart-btn");
  quantity.innerHTML = qty;
  if (qty === 0) {
    removeProduct(prodId);
    quantityContainer.classList.remove("show");
    quantityContainer.classList.add("hidden");
    addToCartBtn.classList.remove("hidden");
    addToCartBtn.classList.add("show");
  }
}

function increase(prodId) {
  cart.forEach(function (item) {
    if (item.productID === prodId) {
      item.productQty++;
      updateQuantity(item.productQty, prodId);
    }
  });
  setToLocalStorage(cart);
  quantityCount(cart);
}

function decrease(prodId) {
  cart.forEach(function (item) {
    if (item.productID === prodId) {
      item.productQty--;
      updateQuantity(item.productQty, prodId);
    }
  });
  setToLocalStorage(cart);
  quantityCount(cart);
}

function quantityCount(cart) {
  let allQty = 0;
  for (let i = 0; i < cart.length; i++) {
    allQty += cart[i].productQty;
  }
  cartQty.innerHTML = allQty;
  if (allQty === 0) {
    cartQty.style.display = "none"
  }else{
    cartQty.style.display = "flex"
  }
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    Navbar.classList.add("bar-fixed");
  } else {
    Navbar.classList.remove("bar-fixed");
  }
});

window.addEventListener("load", getFromLocalStorage);
