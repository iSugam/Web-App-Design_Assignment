const navIcon = document.querySelector(".nav-icon")
const navLinks = document.querySelector(".nav-items .links")

navIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})

/*============================= 
Form Validation with Javascript 
=============================*/

// const form = document.getElementById("form");
// const errmess = document.querySelectorAll(".errmess")
// const emailValue = document.getElementById("validationTooltip01").value;
// const passwordValue = document.getElementById("validationTooltip01").value;

// form.addEventListener("submit", e => {
//     let regXp = /^([A-Za-z0-9._]){3,}@([A-Za-z0-9]){2,}[.]{1}([A-Za-z.]){2,6}$/;
//     let errMessage = [];

//     if (!regXp.test(emailValue)) {
//         errMessage.pop();
//         errMessage.push("Email is invalid.")
//         errmess[0].innerText = errMessage.join(" ")
//     }
//     if (passwordValue.length < 5) {
//         errMessage.pop();
//         errMessage.push("Password should contain more than 5 characters.")
//         errmess[1].innerText = errMessage.join(" ")
//     }

//     if (errMessage.length > 0) {
//         e.preventDefault()
//     }

//     else errMessage.pop()
// })