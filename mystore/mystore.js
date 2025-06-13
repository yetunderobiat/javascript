

function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("openSidebarBtn").style.display = "none";
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("openSidebarBtn").style.display = "block";
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
}

function addToCart(name, price) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  saveCart();
  alert(`${name} added to cart!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  showCart();
}

function showCart() {
  const cartPanel = document.getElementById("cartPanel");
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  cartPanel.classList.add("show");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        ${item.name} x${item.quantity} - $${item.price * item.quantity}
        <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
      `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  totalPrice.textContent = `Total: $${total}`;
}
    
function closeCart() {
  document.getElementById("cartPanel").classList.remove("show");
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let summary = "🧾 Order Summary:\n\n";
  let total = 0;

  cart.forEach((item) => {
    summary += `${item.name} x${item.quantity} = $${
      item.price * item.quantity
    }\n`;
    total += item.price * item.quantity;
  });

  summary += `\nTotal: $${total}`;
  alert(summary);

  cart = [];
  saveCart();
  closeCart();
}

// Initialize badge count on load
window.addEventListener("load", updateCartCount);

function toggleSearch() {
  const searchField = document.getElementById("searchField");
  searchField.classList.toggle("show");

  const input = document.getElementById("searchInput");
  if (searchField.classList.contains("show")) {
    input.focus();
  } else {
    input.value = "";
  }
}

function handleEnter(event) {
  if (event.key === "Enter") {
    const input = event.target.value.trim().toLowerCase();
    const content = document.body;

    // Reset highlights
    content.innerHTML = content.innerHTML.replace(/<mark>(.*?)<\/mark>/g, "$1");

    if (!input) return;

    const regex = new RegExp(`(${input})`, "gi");
    content.innerHTML = content.innerHTML.replace(regex, "<mark>$1</mark>");

    const firstMatch = document.querySelector("mark");
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert("No matches found.");
    }

    // Hide input after search
    document.getElementById("searchField").classList.remove("show");
    event.target.value = "";
  }
}

var body = document.body;
var change = function () {
  body.classList.toggle("active");
};

function toggleMenu(button) {
  button.classList.toggle("active");
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleForm(type) {
  document.querySelector(".signin-form").style.display = "none";
  document.querySelector(".login-form-box").style.display = "none";

  if (type === "signin") {
    document.querySelector(".signin-form").style.display = "block";
  } else if (type === "login") {
    document.querySelector(".login-form-box").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.querySelector(".top");
  const navbar = document.querySelector(".navbar-section");

  topButton.addEventListener("click", function () {
    navbar.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollContainer = document.getElementById("scrollRow");
let scrollSpeed = 2.5; // Faster scroll
let paused = false;

function autoScroll() {
  if (!paused) {
    scrollContainer.scrollLeft += scrollSpeed;

    // Loop scroll
    if (
      scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      scrollContainer.scrollWidth
    ) {
      scrollContainer.scrollLeft = 0;
    }

    scaleCenterImage();
  }

  requestAnimationFrame(autoScroll);
}

// Pause on hover
scrollContainer.addEventListener("mouseenter", () => (paused = true));
scrollContainer.addEventListener("mouseleave", () => (paused = false));

function scaleCenterImage() {
  const viewportCenterX = window.innerWidth / 2;

  scrollContainer.querySelectorAll("img").forEach((img) => {
    const rect = img.getBoundingClientRect();
    const imgCenterX = rect.left + rect.width / 2;
    const distance = Math.abs(viewportCenterX - imgCenterX);

    const scale = Math.max(1, 1.5 - distance / 300);
    img.style.transform = `scale(${scale})`;
    img.style.filter = scale > 1.1 ? "brightness(1.3)" : "brightness(1)";
  });
}

autoScroll();
