// ADD PRODUCTS TO PAGE
const productsSection = document.getElementById("products");

/* Create a product HTML item for each product in products.js and
add them to the products section
*/
products.forEach((product) => {
  let productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `<img src=${product.image} || "./images/productImages/product1.jpg" alt=${product.title}>
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
        <button class="add-to-cart" id=${product.id}>ADD TO CART</button>`;
  productsSection.appendChild(productDiv);
});

/* Clicking on the 'ADD TO CART' button runs a function that searches for the
product and adds it to the cart
*/
const cartItemsSection = document.getElementById("cart-items");
const addToCartButtons = document.getElementsByClassName("add-to-cart");
let cartItems = [];

for (let i = 0; i < addToCartButtons.length; i++) {
  const id = addToCartButtons[i].getAttribute("id");
  addToCartButtons[i].addEventListener("click", () => {
    addProductToCart(id);
  });
}

function addProductToCart(productId) {
  const product = products.find((product) => product.id == productId);
  cartItems.push(product);
  updateShoppingCart(product);
}

function updateShoppingCart(item) {
  const { image, title, price } = item;
  console.log(typeof price);
  let cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart-item");
  cartItemDiv.innerHTML = `<div class="item-image">
            <img src=${image} alt=${title}></div>
            <div class="item-details">
                <p>${title}</p>
                <p class="price">$${price}</p>
                <div class="change-quantity">
                    <span id="subtract-quantity">-</span>
                    <strong>1</strong>
                    <span id="add-quantity">+</span>
                </div>
            </div>
            <div class="remove-item"><span>&times;</span></div>`;
  cartItemsSection.appendChild(cartItemDiv);
}

// OPEN AND CLOSE THE SHOPPING CART
const openCartButton = document.getElementById("open-cart-btn");
const closeCartButton = document.getElementById("close-cart-btn");
const shoppingCart = document.getElementById("shopping-cart");

openCartButton.addEventListener("click", function () {
  shoppingCart.classList.toggle("open");
});

closeCartButton.addEventListener("click", function () {
  shoppingCart.classList.toggle("open");
});
