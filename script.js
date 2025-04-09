// Countdown Timer
const countdownDate = new Date("April 11, 2025 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        
        const countdownElement = document.querySelector(".countdown");
        countdownElement.innerHTML = "<h3><i class='fas fa-check-circle'></i> 🎉 WIR SIND ONLINE! 🎉</h3><p>Tritt jetzt dem Server bei!</p>";
    }
}, 1000);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header effect
const header = document.querySelector('header');
const logo = document.querySelector('.logo h1');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
    }
});

// Add scrolled styles
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        header.scrolled {
            padding: 0.7rem 5%;
            background-color: rgba(10, 10, 10, 0.95);
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
        }
        
        .logo h1.scrolled {
            font-size: 1.8rem;
        }
    `;
    document.head.appendChild(style);
});

// Scroll animation for sections
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.gamemode-card, .feature-box');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight -
