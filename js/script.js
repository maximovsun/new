const btnBurger = document.querySelector(".header__burger-btn");
const menuBurger = document.querySelector(".header__menu");
const bodyLock = document.querySelector("body");
const loginBtn = document.querySelector(".header__login-btn--tap");
const loginForm = document.querySelector(".header__form");


btnBurger.addEventListener("click", function () {
	this.classList.toggle('active');
	menuBurger.classList.toggle('active');
	bodyLock.classList.toggle('lock');
});

loginBtn.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.toggle('active');
	loginForm.classList.toggle('active');
});

