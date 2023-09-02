const tgModal = document.querySelector('.telegram-modal');
const closeBtn = document.querySelector('.close-btn');
const whiteBg = document.querySelector('.fixed-white-bg');

let tgModalClosed = localStorage.getItem('tgModalClosed')  === 'true';

window.addEventListener("scroll", () => {
    // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
    if (window.scrollY > 500 && !tgModalClosed) {
        // Add a class to hide the div
       tgModal.style.display = 'block';
       whiteBg.classList.add("active");
    } else {
        tgModal.style.display = 'none';
        whiteBg.classList.remove("active");
    }
});

closeBtn.addEventListener('click', () => {
    tgModal.classList.remove("show-modal");
    tgModalClosed = true;
    localStorage.setItem('tgModalClosed', 'true');
});