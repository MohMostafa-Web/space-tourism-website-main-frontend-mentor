const toggleBtn = document.querySelector("header .toggle-menu");
const closeBtn = document.querySelector("header .close");
const navUl = document.querySelector("nav ul");
const navUlLinks = document.querySelectorAll("nav ul li a");

toggleBtn.onclick = function () {
  menuToggle(this, closeBtn);
  document.querySelector("body").classList.add("scroll-locked");
}

closeBtn.onclick = function () {
  menuToggle(this, toggleBtn);
  document.querySelector("body").classList.remove("scroll-locked");
}

navUlLinks.forEach(link => {
  link.onclick = function () {
    if (navUl.classList.contains("menu-show")) {
      menuToggle(closeBtn, toggleBtn);
    }
  }
});

// Create Function to Toggle Mobile Nav Menu
function menuToggle(btnOne, btnTwo) {
  btnOne.classList.remove("active");
  btnTwo.classList.add("active");
  navUl.classList.toggle("menu-show");
}
