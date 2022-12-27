const $ = document;
const cartList = $.getElementById("list-cart");
const cartQty = $.getElementById("cart-qty");
const totalprice = $.getElementById("total-price");
const emptyContainer = $.querySelector(".empty-container");
const purchaseContainer = $.querySelector(".purchase-container");
let cart = [];

function getFromLocalStorage() {
  let getCart = JSON.parse(localStorage.getItem("mehri-shop-cart"));
  if (getCart) {
    cart = getCart;
  } else {
    cart = [];
  }
  createCartItems(cart);
  quantityCount(cart);
  priceCalculateInCart(cart);
  if (cart.length === 0) {
    cartList.classList.remove("show");
    cartList.classList.add("hidden");
    emptyContainer.classList.remove("hidden");
    emptyContainer.classList.add("show");
    purchaseContainer.classList.remove("show");
    purchaseContainer.classList.add("hidden");
  } else {
    cartList.classList.remove("hidden");
    cartList.style.display = "block";
    emptyContainer.classList.remove("show");
    emptyContainer.classList.add("hidden");
    purchaseContainer.classList.remove("hidden");
    purchaseContainer.classList.add("show");
  }
}

function createCartItems(cart) {

  cartList.innerHTML = "";
  cart.forEach(function (item) {
    let cartElem = `
      <div class="cart-item-container">
      <div style="justify-content: space-between;height: 200px;display:flex;flex-direction:column;align-items:center;margin-left:10px">
      <img src="${item.productImage}" alt="" />
      <div class="quantity-container-in-cart show">
      <button onclick="increase(${item.productID})"><span>+</span></button>
      <span id="quantity">${item.productQty}</span>
      <button onclick="decrease(${item.productID})">
      <span id="decrease-elem" class="show">-</span>
      <span id="trash" class="hidden">
      <i style="font-size:20px" class="fa fa-trash"></i>
      </span>
      </button>
      </div>
      </div>
      <div style="display: flex; flex-direction: column; line-height: 40px">
      <span id="prod-name">${item.productName}</span>
      <span id="prod-price">${item.productPrice.toLocaleString("en-US")} تومان</span>
      
      </div>
      </div>
      `;
    cartList.insertAdjacentHTML("beforeend", cartElem);
  });
}

function priceCalculateInCart(cart) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].productPrice * cart[i].productQty;
  }
  totalprice.innerHTML = totalPrice.toLocaleString("en-US") + " تومان ";
  createCartItems(cart);
  if(totalPrice === 0){
    $.title = "سبد خرید خالی است"
  }else{
    $.title = " مجموع سبد خرید " + totalPrice.toLocaleString("en-US") + " تومان "
  }
}

function setToLocalStorage(cart) {
  localStorage.setItem("mehri-shop-cart", JSON.stringify(cart));
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
  priceCalculateInCart(cart);
  createCartItems(cart);
}

function updateQuantity(qty, prodId) {
  const quantity = $.getElementById("quantity");
  quantity.innerHTML = qty;
  if (qty === 0) {
    removeProduct(prodId);
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
  priceCalculateInCart(cart);
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
  priceCalculateInCart(cart);
  if (cart.length === 0) {
    cartList.classList.remove("show");
    cartList.classList.add("hidden");
    cartList.style.display = "none";
    emptyContainer.classList.remove("hidden");
    emptyContainer.classList.add("show");
    purchaseContainer.classList.remove("show");
    purchaseContainer.classList.add("hidden");
  }
}

function quantityCount(cart) {
  let all = 0;
  for (let i = 0; i < cart.length; i++) {
    all += cart[i].productQty;
  }
  cartQty.innerHTML = all;
  if (all === 0) {
    cartQty.style.display = "none"
  }else{
    cartQty.style.display = "flex"
  }
}

window.addEventListener("load", getFromLocalStorage);
