const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("-left-96");
  mobileMenu.classList.toggle("left-0");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});