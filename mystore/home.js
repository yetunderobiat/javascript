document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.querySelector(".top");
  const navbar = document.querySelector(".navbar-section");

  topButton.addEventListener("click", function () {
    navbar.scrollIntoView({
      behavior: "smooth",
    });
  });
});
