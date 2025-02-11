document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    let nav = document.querySelector("nav");
    let timeout;

    window.addEventListener("scroll", () => {
        clearTimeout(timeout);
        
        if (Math.abs(window.scrollY - lastScrollY) > 10) {
            nav.style.opacity = "1"; // Show navbar when scrolling
        }
        
        lastScrollY = window.scrollY;
        
        timeout = setTimeout(() => {
            nav.style.opacity = "0"; // Hide navbar after 2s of inactivity
        }, 2000);
    });
});

