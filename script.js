// Smooth scrolling für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header-Effekt beim Scrollen
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animation für Gamemode Cards
const gamemodeCards = document.querySelectorAll('.gamemode-card');
let activeCard = null;

gamemodeCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Deaktiviere zuvor aktive Karte
        if (activeCard) {
            activeCard.classList.remove('active');
        }
        
        // Aktiviere neue Karte
        this.classList.add('active');
        activeCard = this;
        
        // Füge zusätzlichen CSS-Style für aktive Karte hinzu
        const style = document.createElement('style');
        style.textContent = `
            .gamemode-card.active {
                transform: translateY(-10px);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
                border-color: var(--primary);
            }
            
            .gamemode-card.active .gamemode-icon {
                transform: scale(1.1);
                color: var(--secondary);
            }
        `;
        document.head.appendChild(style);
    });
});

// Server-IP Hover-Effekt
const serverAddresses = document.querySelectorAll('.server-address, .server-ip');
serverAddresses.forEach(address => {
    address.addEventListener('click', function() {
        const text = this.textContent.trim();
        navigator.clipboard.writeText(text)
            .then(() => {
                // Erstelle temporäres Element für "Kopiert!" Benachrichtigung
                const notification = document.createElement('div');
                notification.textContent = 'IP kopiert!';
                notification.style.position = 'fixed';
                notification.style.left = '50%';
                notification.style.top = '20px';
                notification.style.transform = 'translateX(-50%)';
                notification.style.backgroundColor = 'var(--accent)';
                notification.style.color = 'white';
                notification.style.padding = '10px 20px';
                notification.style.borderRadius = '4px';
                notification.style.zIndex = '9999';
                notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                
                document.body.appendChild(notification);
                
                // Entferne die Benachrichtigung nach 2 Sekunden
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 500);
                }, 2000);
            });
    });
    
    // Zeige Cursor und Tooltip für bessere Benutzererfahrung
    address.style.cursor = 'pointer';
    address.setAttribute('title', 'Klicken zum Kopieren');
});

// Parallax-Effekt für Hintergrund
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    document.body.style.backgroundPosition = `center ${scrollPosition * 0.05}px`;
});

// Animation für Feature-Boxen
const featureBoxes = document.querySelectorAll('.feature-box');
window.addEventListener('scroll', function() {
    featureBoxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (boxPosition < screenPosition) {
            box.classList.add('animate');
            
            // Füge Animation mit CSS hinzu
            const style = document.createElement('style');
            style.textContent = `
                .feature-box.animate {
                    animation: fadeInUp 0.5s ease forwards;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    });
});

// Besonderer Effekt für die Launch-Ankündigung
const launchAnnouncement = document.querySelector('.launch-announcement');
if (launchAnnouncement) {
    // Füge einen pulsierenden Rand-Effekt hinzu
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulseBorder {
            0% {
                box-shadow: 0 0 0 0 rgba(45, 148, 243, 0.4);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(45, 148, 243, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(45, 148, 243, 0);
            }
        }
        
        .launch-announcement {
            animation: pulseBorder 2s infinite;
        }
    `;
    document.head.appendChild(style);
}

// Responsive Menu-Toggle für mobile Ansicht
const createResponsiveMenu = function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('nav ul');
    
    // Erstelle Toggle-Button
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Füge Toggle-Button zum Header hinzu
    header.appendChild(menuToggle);
    
    // Toggle-Funktionalität
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show-menu');
        
        // Wechsle Icon zwischen Bars und X
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Füge Styles für responsive Menu hinzu
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
                cursor: pointer;
                font-size: 1.5rem;
                color: var(--light);
                position: absolute;
                top: 15px;
                right: 20px;
                z-index: 101;
            }
            
            nav ul {
                position: fixed;
                top: 0;
                right: -100%;
                width: 250px;
                height: 100vh;
                background: var(--darker);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: right 0.3s ease;
                z-index: 100;
                box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
                padding: 40px 0;
            }
            
            nav ul.show-menu {
                right: 0;
            }
            
            nav ul li {
                margin: 15px 0;
            }
        }
    `;
    document.head.appendChild(style);
};

// Führe responsive Menu-Erstellung aus, wenn Bildschirm kleiner als 768px
if (window.innerWidth <= 768) {
    createResponsiveMenu();
}

// Auch bei Größenänderung des Fensters
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768 && !document.querySelector('.menu-toggle')) {
        createResponsiveMenu();
    }
});

// Easter Egg: Geheimer Klick-Kombo für ein verstecktes Feature
let clicks = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    clicks.push(e.key);
    clicks = clicks.slice(-10); // Behalte nur die letzten 10 Klicks
    
    if (clicks.join(',') === secretCode.join(',')) {
        // Easter Egg aktiviert!
        document.body.style.transition = 'transform 1s';
        document.body.style.transform = 'rotate(360deg)';
        
        setTimeout(() => {
            document.body.style.transform = 'none';
            
            // Zeige Überraschungsmeldung
            const surprise = document.createElement('div');
            surprise.innerHTML = `
                <h3>🎁 Geheimcode entdeckt! 🎁</h3>
                <p>Du bekommst einen speziellen Spielerrang bei Serverstart!</p>
                <p>Code: HIER IST NICHTS xD</p>
            `;
            
            surprise.style.position = 'fixed';
            surprise.style.top = '50%';
            surprise.style.left = '50%';
            surprise.style.transform = 'translate(-50%, -50%)';
            surprise.style.backgroundColor = 'var(--darker)';
            surprise.style.border = '2px solid var(--primary)';
            surprise.style.borderRadius = '8px';
            surprise.style.padding = '20px';
            surprise.style.zIndex = '9999';
            surprise.style.textAlign = 'center';
            surprise.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
            
            document.body.appendChild(surprise);
            
            // Schließen-Button
            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Schließen';
            closeBtn.style.padding = '8px 16px';
            closeBtn.style.marginTop = '15px';
            closeBtn.style.background = 'var(--gradient)';
            closeBtn.style.border = 'none';
            closeBtn.style.borderRadius = '4px';
            closeBtn.style.cursor = 'pointer';
            
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(surprise);
            });
            
            surprise.appendChild(closeBtn);
        }, 1000);
    }
});
