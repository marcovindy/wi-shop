"use strict";

// Toggle Burger Menu
var burgerMenu = document.querySelector(".burger");
var navbarMenu = document.querySelector(".menu");
burgerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
var slideIndex = 1;
window.addEventListener("load", function () {
  showSlides(slideIndex);
});