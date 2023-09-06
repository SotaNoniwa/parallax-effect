// parallax scroll
const parallaxElements = document.getElementsByClassName("parallax");

window.addEventListener("scroll", function () {
    let offset = window.scrollY;

    for (let i = 0; i < parallaxElements.length; i++) {
        parallaxElements[i].style.backgroundPositionY = offset * 0.7 + "px";
    }
});

