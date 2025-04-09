document.addEventListener("DOMContentLoaded", function() {
  // IP kopieren
  document.getElementById("copy-ip").addEventListener("click", function() {
    const ip = document.getElementById("server-ip").textContent;
    navigator.clipboard.writeText(ip).then(() => {
      this.textContent = "✔️ Kopiert!";
      setTimeout(() => {
        this.textContent = "🔗 IP Kopieren";
      }, 2000);
    });
  });

  // Scroll-Animation via Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // Sticky Header: Class "scrolled" ab 50px scrollen
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('nav ul');
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
