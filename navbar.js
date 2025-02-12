document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    let nav = document.querySelector("nav");
    let timeout;
    let menuToggle = document.querySelector(".menu-toggle");
    let navLinks = document.querySelector(".nav-links");
    let lastMovementTime = Date.now();

    // Function to show navbar
    const showNavbar = () => {
        nav.style.opacity = "1";
        nav.style.transform = "translateY(0)";
        lastMovementTime = Date.now();
    };

    // Function to hide navbar
    const hideNavbar = () => {
        if (Date.now() - lastMovementTime > 2000) { // Only hide after 2 seconds of no movement
            nav.style.opacity = "0";
            nav.style.transform = "translateY(100%)";
        }
    };

    // Show navbar on any mouse movement
    document.addEventListener("mousemove", () => {
        showNavbar();
    });

    // Show/Hide navbar on scroll
    window.addEventListener("scroll", () => {
        clearTimeout(timeout);

        if (Math.abs(window.scrollY - lastScrollY) > 10) {
            showNavbar();
        }

        lastScrollY = window.scrollY;

        timeout = setTimeout(hideNavbar, 2000);
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        // Show navbar when menu is toggled
        showNavbar();
    });

    // Hide menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains("nav-active")) {
            navLinks.classList.remove("nav-active");
        }
    });
});
