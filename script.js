'use strict';

// Smooth scrolling for navigation links
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active menu highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const navLink = document.querySelector(`nav a[href='#${entry.target.id}']`);
        if (entry.isIntersecting) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}, { threshold: 0.7 });

sections.forEach(section => {
    observer.observe(section);
});

// Add interactivity to elements
const interactiveElements = document.querySelectorAll('.interactive');

interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
        // Additional interactive behavior can be added here
    });
});
