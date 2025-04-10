:root {
    --primary: #2d94f3; /* Primärfarbe - Blau */
    --secondary: #00c4ff; /* Sekundärfarbe - Hellblau */
    --accent: #ff4655; /* Akzentfarbe - Rot */
    --dark: #121212; /* Hintergrundfarbe - Dunkel */
    --darker: #0a0a0a; /* Noch dunklere Farbe */
    --light: #ffffff; /* Helle Textfarbe */
    --gray: #8e9297; /* Grau für weniger wichtigen Text */
    --discord: #5865F2; /* Discord-Farbe */
    --gradient: linear-gradient(135deg, var(--primary), var(--secondary));
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--dark);
    color: var(--light);
    line-height: 1.6;
    overflow-x: hidden;
    background-image: url('https://via.placeholder.com/1920x1080?text=Minecraft+Background');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 10, 10, 0.85);
    z-index: -1;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
}

/* Announcement Banner */
.announcement-banner {
    background: var(--accent);
    color: white;
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
}

.announcement-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px);
}

.server-ip {
    background: rgba(0,0,0,0.2);
    padding: 3px 10px;
    border-radius: 4px;
    margin-left: 10px;
    font-family: monospace;
    letter-spacing: 0;
}

/* Header */
header {
    background-color: rgba(10, 10, 10, 0.9);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    padding: 15px 0;
    border-bottom: 2px solid var(--primary);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    color: var(--primary);
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
}

.logo h1::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--gradient);
}

.slogan {
    color: var(--secondary);
    font-size: 0.9rem;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

nav ul li a {
    color: var(--light);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    position: relative;
    padding: 5px 0;
    transition: all 0.3s;
}

nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: var(--gradient);
    transition: width 0.3s;
}

nav ul li a:hover {
    color: var(--secondary);
}

nav ul li a:hover::after {
    width: 100%;
}

.discord-btn {
    background-color: var(--discord);
    padding: 8px 15px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.discord-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.discord-btn::after {
    display: none;
}

/* Hero Section */
.hero {
    padding: 80px 0;
    text-align: center;
    position: relative;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero h2 {
    font-size: 3rem;
    color: var(--light);
    margin-bottom: 1rem;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--gray);
}

.launch-announcement {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid var(--primary);
    border-radius: 8px;
    padding: 25px;
    margin: 30px 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.launch-announcement::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient);
}

.launch-header {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary);
    margin-bottom: 15px;
}

.server-address {
    font-family: monospace;
    background: rgba(0, 0, 0, 0.3);
    display: inline-block;
    padding: 8px 15px;
    border-radius: 4px;
    margin: 10px 0;
    font-size: 1.2rem;
    border-left: 3px solid var(--accent);
}

.server-address span {
    color: var(--gray);
    font-family: inherit;
}

.launch-description {
    margin-top: 15px;
    font-size: 1.1rem;
}

/* Buttons */
.hero-buttons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 15px;
}

.btn {
    display: inline-block;
    background: var(--gradient);
    color: var(--light);
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s;
    z-index: -1;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

.btn:hover::before {
    left: 100%;
}

.btn i {
    margin-right: 8px;
}

.btn-accent {
    background: linear-gradient(135deg, var(--accent), #ff7b85);
}

.btn-discord {
    background: linear-gradient(135deg, #4752c4, var(--discord));
}

/* Sections */
section {
    padding: 80px 0;
    position: relative;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    font-size: 2.2rem;
    color: var(--light);
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient);
}

.section-title p {
    max-width: 700px;
    margin: 15px auto 0;
    color: var(--gray);
}

/* Gamemodes */
.gamemodes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.gamemode-card {
    background: rgba(20, 20, 20, 0.8);
    border-radius: 8px;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.gamemode-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.gamemode-card:hover::before {
    transform: scaleX(1);
}

.gamemode-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    border-color: var(--primary);
}

.gamemode-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 20px;
    text-align: center;
}

.gamemode-content h3 {
    font-size: 1.8rem;
    color: var(--light);
    margin-bottom: 15px;
    text-align: center;
}

.gamemode-content p {
    color: var(--gray);
    margin-bottom: 20px;
    text-align: center;
}

.gamemode-features {
    list-style: none;
}

.gamemode-features li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;
    color: var(--light);
}

.gamemode-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: bold;
}

/* Features */
.features-section {
    background-color: rgba(10, 10, 10, 0.7);
    position: relative;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.feature-box {
    background: rgba(20, 20, 20, 0.7);
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.1);
    height: 100%;
    position: relative;
    overflow: hidden;
}

.feature-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(45, 148, 243, 0.1), rgba(0, 196, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
}

.feature-box:hover::before {
    opacity: 1;
}

.feature-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    border-color: var(--primary);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 20px;
    display: block;
}

.feature-box h3 {
    font-size: 1.5rem;
    color: var(--light);
    margin-bottom: 15px;
}

.feature-box p {
    color: var(--gray);
}

/* Discord Section */
.discord-section {
    background-color: var(--discord);
    text-align: center;
    padding: 60px 0;
    position: relative;
    overflow: hidden;
}

.discord-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://via.placeholder.com/1920x1080?text=Discord+Pattern');
    background-size: cover;
    opacity: 0.1;
}

.discord-content {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}

.discord-content h2 {
    font-size: 2.2rem;
    color: white;
    margin-bottom: 20px;
}

.discord-content p {
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
}

/* CTA */
.cta {
    text-align: center;
    padding: 80px 0;
    position: relative;
}

.cta h2 {
    font-size: 2.5rem;
    color: var(--light);
    margin-bottom: 20px;
}

.cta .server-address {
    font-size: 1.5rem;
    margin: 20px auto;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--gradient);
    border-radius: 50%;
    color: var(--light);
    font-size: 1.5rem;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.social-link:hover {
    transform: translateY(-5px) rotate(10deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

/* Footer */
footer {
    background-color: rgba(10, 10, 10, 0.9);
    padding: 60px 0 20px;
    border-top: 2px solid var(--primary);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.footer-logo h3 {
    color: var(--primary);
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.footer-logo p {
    color: var(--gray);
    font-family: monospace;
}

.footer-links h4, .footer-contact h4 {
    color: var(--light);
    margin-bottom: 20px;
    font-size: 1.2rem;
    position: relative;
    display: inline-block;
}

.footer-links h4::after, .footer-contact h4::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary);
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li {
    margin-bottom: 10px;
}

.footer-links ul li a {
    color: var(--gray);
    text-decoration: none;
    transition: all 0.3s;
}

.footer-links ul li a:hover {
    color: var(--secondary);
    padding-left: 5px;
}

.footer-contact p {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: var(--gray);
}

.footer-contact p i {
    margin-right: 10px;
    color: var(--primary);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--gray);
}

.footer-bottom p {
    margin-bottom: 10px;
}

/* Responsive */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        padding: 15px;
    }
    
    .logo {
        margin-bottom: 15px;
    }
    
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 300px;
        margin: 5px 0;
    }
    
    .social-links {
        flex-wrap: wrap;
    }
}
