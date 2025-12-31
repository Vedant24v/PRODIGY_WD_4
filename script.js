// Developed by Vedant Vyawhare

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

// Only enable custom cursor logic on non-touch devices to save performance
if (window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("mousemove", (e) => {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
        setTimeout(() => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        }, 40); 
    });

    document.querySelectorAll('a, button, .project-card, .skill-card, .glass-card').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = "scale(2.5)";
            cursor.style.borderColor = "transparent";
            cursor.style.background = "rgba(0, 123, 255, 0.1)";
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = "scale(1)";
            cursor.style.borderColor = "var(--primary)";
            cursor.style.background = "transparent";
        });
    });
}

// --- MOBILE MENU TOGGLE ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu when clicking a link
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
    
    // Auto-close menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .section-title', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-grid, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .skills-wrapper', { origin: 'left' });
ScrollReveal().reveal('.about-text', { origin: 'right' });

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
