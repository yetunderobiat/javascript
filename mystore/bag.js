function toggleMenu(button) {
  button.classList.toggle("active");
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleForm(type) {
  const signinForm = document.querySelector(".signin-form");
  const loginForm = document.querySelector(".login-form-box");

  if (type === "signin") {
    if (signinForm.style.display === "block") {
      signinForm.style.display = "none";
    } else {
      signinForm.style.display = "block";
    }
    loginForm.style.display = "none";
  }

  if (type === "login") {
    if (loginForm.style.display === "block") {
      loginForm.style.display = "none";
    } else {
      loginForm.style.display = "block";
    }
    signinForm.style.display = "none";
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
