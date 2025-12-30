let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cartCount").innerText = cart.length;
}

document.getElementById("cartBtn").addEventListener("click", openCart);

function openCart() {
  document.getElementById("cartModal").style.display = "flex";
  renderCart();
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    list.appendChild(li);
  });

  document.getElementById("totalPrice").innerText = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you for your purchase!");
  cart = [];
  total = 0;
  document.getElementById("cartCount").innerText = 0;
  closeCart();
}

function scrollToDessert() {
  document.querySelector(".section-title").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToMap() {
  document.getElementById("mapSection").scrollIntoView({
    behavior: "smooth"
  });
}
