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
        countdownElement.innerHTML = "<h2><i class='fas fa-check-circle'></i> 🎉 WIR SIND ONLINE! 🎉</h2><p>Tritt jetzt dem Server bei!</p>";
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

// Parallax effect for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    header.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
});

// Animation for gamemode cards
const gamemodeCards = document.querySelectorAll('.gamemode-card');

function checkIfInView() {
    gamemodeCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect();
        
        // Check if card is in viewport
        if(cardPosition.top < window.innerHeight && cardPosition.bottom >= 0) {
            card.classList.add('visible');
        }
    });
}

// Initial check
window.addEventListener('load', checkIfInView);
window.addEventListener('scroll', checkIfInView);

// Add visible class with animation in CSS
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .gamemode-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .gamemode-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Feature boxes hover effect
const featureBoxes = document.querySelectorAll('.feature-box');

featureBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.feature-icon');
        icon.classList.add('animate__animated', 'animate__rubberBand');
        
        // Remove the classes after animation completes
        setTimeout(() => {
            icon.classList.remove('animate__animated', 'animate__rubberBand');
        }, 1000);
    });
});

// Add fire particles for buttons on hover
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.classList.add('fire-effect');
    });
    
    button.addEventListener('mouseleave', function() {
        this.classList.remove('fire-effect');
    });
});

// Add fire effect styles
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .fire-effect {
            position: relative;
            overflow: hidden;
        }
        
        .fire-effect:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }
        
        .fire-effect:hover:before {
            opacity: 0.3;
        }
    `;
    document.head.appendChild(style);
});
