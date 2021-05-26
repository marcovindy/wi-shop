// Toggle Burger Menu

const burgerMenu = document.querySelector(".burger");
const navbarMenu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function () {
	navbarMenu.classList.toggle("active");
	burgerMenu.classList.toggle("active");
});

let slideIndex = 1;

