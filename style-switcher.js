
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler"); // Fix typo in class name
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style-switcher on scroll
window.addEventListener("scroll", () => {
    console.log("Scroll event fired!");
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});


const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => { // Fix syntax error in the forEach loop
        if (color === styleSwitcherToggle.getAttribute("title")) {
            style.removeAttribute("disabled"); // Fix typo in removeAttribute
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* =========== theme light nd dark mode ========== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})



