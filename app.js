const humburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLink = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")
})

hLink.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        humburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
    
})