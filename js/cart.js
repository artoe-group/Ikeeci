// Array to hold cart items
let cartItems = [];

// Function to add item to cart
function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

// Function to remove item from cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Function to update cart UI
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let total = 0;

  // Clear current cart items
  cartItemsList.innerHTML = '';

  // Add each item to cart
  cartItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    const name = document.createElement('span');
    const price = document.createElement('span');
    const removeButton = document.createElement('button');

    name.textContent = item.name;
    price.textContent = `$${item.price}`;
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });

    listItem.appendChild(name);
    listItem.appendChild(price);
    listItem.appendChild(removeButton);

    cartItemsList.appendChild(listItem);

    total += item.price;
  });

  // Update total
  cartTotal.textContent = total;
}

// Add event listener to checkout button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
  // Implement checkout logic here
});
