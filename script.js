// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const icon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if(body.classList.contains('light-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Smooth Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

// Apply reveal class to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// Custom CSS for reveal
const style = document.createElement('style');
style.innerHTML = `
    .reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Simple Navbar effect on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "1rem 10%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.padding = "1.5rem 10%";
        navbar.style.boxShadow = "none";
    }
});