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
  