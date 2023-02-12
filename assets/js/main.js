//?Para agregar una clase dentro de una etiqueta (swicht)/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu__visible")
})
//?Remover una clase/
const home = document.querySelector(".home")
const aboutme = document.querySelector(".aboutme")
const services = document.querySelector(".services")
const skills = document.querySelector(".skills")
const portfolio = document.querySelector(".portfolio")
const contact = document.querySelector(".contact")

home.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
aboutme.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
services.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
skills.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
portfolio.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
contact.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})