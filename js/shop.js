/* Some sections of this code for adding and removing items from the shopping cart were adapted from:
Web Dev Creative, 'Ecommerce Side Cart tutorial', 2021 [Online]
Available: "https://www.youtube.com/watch?v=fnh-Ux4Jj5E" [Accessed: September 2023] */

// Open and close the shopping cart on the side of the page
const openCartButton = document.getElementById("open-cart-btn");
const closeCartButton = document.getElementById("close-cart-btn");
const shoppingCart = document.getElementById("shopping-cart");

openCartButton.addEventListener("click", function () {
  shoppingCart.classList.toggle("open");
});

closeCartButton.addEventListener("click", function () {
  shoppingCart.classList.toggle("open");
});

// Get the section in the HTML code where the cart items will be added
const cartItemsSection = document.getElementById("cart-items");

// Create an empty array that will hold the items in the shopping cart
let cartItems = [];

displayProducts();
updateCart();

// Function to add products to the page
function displayProducts() {
  // Get the section on the page where the products will be added
  const productsSection = document.getElementById("products");

  /* Create a product HTML item for each product in products.js and
add them to the products section
*/
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<img src=${product.image} || "./images/productImages/product1.jpg" alt=${product.title}>
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
        <button class="add-to-cart" id=${product.id}>ADD TO CART</button>`;
    productsSection.appendChild(productDiv);
  });
}

// Get the buttons for adding an item to the shopping cart
const addToCartButtons = document.getElementsByClassName("add-to-cart");

// Variable to hold the number of items in the cart
let numberOfCartItems = 0;

/*This code was adapted from:
Stack Overflow, 'How to add event listeners to an array of objects', [Online]
Available: "https://stackoverflow.com/questions/17981437/how-to-add-event-listeners-to-an-array-of-objects" [Accessed: September 2023] */
/* Add a click event listener to each 'add to cart' button that
runs the addProductToCart() function when clicked */
for (let i = 0; i < addToCartButtons.length; i++) {
  const id = addToCartButtons[i].getAttribute("id");
  addToCartButtons[i].addEventListener("click", () => {
    addProductToCart(id);
  });
}

// Function to add a product to the cartItems array
function addProductToCart(productId) {
  const product = products.find((product) => product.id == productId);
  const productInCart = cartItems.find((product) => product.id == productId);
  if (productInCart) {
    productInCart.quantity++;
  } else {
    cartItems.push(product);
  }
  updateCart();
  numberOfCartItems++;
  // Update the number on the page showing the number of items in the cart
  document.getElementById("items-in-cart").innerHTML = numberOfCartItems;
}

// Function to show cart items on the side of the page
function showShoppingCartItems() {
  cartItemsSection.innerHTML = "";
  cartItems.forEach((item) => {
    const { id, image, title, price, quantity } = item;
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `<div class="item-image">
            <img src=${image} alt=${title}></div>
            <div class="item-details">
                <p>${title}</p>
                <p class="price">$${price}</p>
                <div class="change-quantity">
                    <span id="subtract-quantity">-</span>
                    <strong>${quantity}</strong>
                    <span id="add-quantity">+</span>
                </div>
            </div>
            <div class="remove-item">
              <button class="remove-item-icon" id=${id}>&times;</button>
            </div>`;

    cartItemsSection.appendChild(cartItemDiv);
  });
  const removeFromCartIcons = document.getElementsByClassName("remove-item-icon");

  /* Add a click event listener to each 'remove from cart' icon that
runs the removeProductFromCart() function when clicked */
  for (let i = 0; i < removeFromCartIcons.length; i++) {
    const id = removeFromCartIcons[i].getAttribute("id");
    removeFromCartIcons[i].addEventListener("click", () => {
      removeProductFromCart(id);
    });
  }
}

// Function to update shopping cart
function updateCart() {
  showShoppingCartItems();
}

// Function to remove a product from the cartItems array
function removeProductFromCart(productId) {
  cartItems = cartItems.filter((item) => item.id != productId);
  updateCart();
  numberOfCartItems--;
  // Update the number on the page showing the number of items in the cart
  document.getElementById("items-in-cart").innerHTML = numberOfCartItems;
}
