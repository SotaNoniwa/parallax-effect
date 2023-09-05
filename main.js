// parallax scroll
const parallaxElements = document.getElementsByClassName("parallax");

window.addEventListener("scroll", function () {
    let offset = window.scrollY;

    for (let i = 0; i < parallaxElements.length; i++) {
        parallaxElements[i].style.backgroundPositionY = offset * 0.7 + "px";
    }
});


// Import GSAP
// gsap is now available globally
const { gsap } = window;

// Create a timeline
const timeline = gsap.timeline();

const path1 = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 200, y: 50 },
    ],
};

// Define your animation
timeline.to(".jellyfish-9", {
    duration: 1,
    motionPath: path1,
    ease: "power2.inOut", // Use the desired easing function
});

// Start the animation
timeline.play();
