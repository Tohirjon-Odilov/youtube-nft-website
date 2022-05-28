const menu = document.querySelector("#navbar__menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})
let name = "Tohirjon"
