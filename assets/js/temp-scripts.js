const scrollDIV = document.querySelector('.animate');

window.addEventListener("scroll", () => {
    // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
    if (window.scrollY > 100) {
        // Add a class to hide the div
        scrollDIV.classList.add("scroll-hidden");
    } else {
        scrollDIV.classList.remove("scroll-hidden");
    }
});