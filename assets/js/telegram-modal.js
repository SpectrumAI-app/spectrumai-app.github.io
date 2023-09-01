const tgModal = document.querySelector('.telegram-modal');
const closeBtn = document.querySelector('.close-btn');

let tgModalClosed = localStorage.getItem('tgModalClosed')  === 'true';
window.addEventListener("scroll", () => {
    // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
    if (window.scrollY > 500 && !tgModalClosed) {
        // Add a class to hide the div
       tgModal.style.display = 'none';
    } else {
        tgModal.style.display = 'block';
    }
});

closeBtn.addEventListener('click', () => {
    tgModal.classList.remove("show-modal");
    tgModalClosed = true;
    localStorage.setItem('tgModalClosed', 'true');
});