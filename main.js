const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

const checkbtn = document.querySelector(".checkbtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
        checkbtn.classList.add("active");
    } else {
        checkbtn.classList.remove("active");
    }
})