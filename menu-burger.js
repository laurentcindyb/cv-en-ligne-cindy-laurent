// script.js
document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.getElementById("burger-btn");
    const menu = document.getElementById("menu");

    burgerBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
