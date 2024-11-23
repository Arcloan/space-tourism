const hamburger = document.querySelector(".menuOpen");
const mobileNav = document.querySelector(".mobileNav");
const close = document.querySelector(".closeMenu");

hamburger.addEventListener("click", e => {
    mobileNav.setAttribute("data-navOpen", "");
    let currentPage = "." + hamburger.dataset.current;
    document.querySelector(currentPage).dataset.active = "";
})

close.addEventListener("click", e => {
    mobileNav.removeAttribute("data-navOpen");
})