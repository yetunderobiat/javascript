function toggleMenu(button) {
  button.classList.toggle("active");
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleForm(type){
    const signinForm=document.querySelector('.signin-form');
    const loginForm=document.querySelector('.login-form-box');

    if (type === 'signin'){
        signinForm.computedStyleMap.display=signinForm.computedStyleMap.display==='block'?'none':'block';
        loginForm.computedStyleMap.display='none';
    }
}