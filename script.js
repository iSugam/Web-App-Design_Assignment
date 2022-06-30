const navIcon = document.querySelector(".nav-icon")
const navLinks = document.querySelector(".nav-items .links")

navIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})