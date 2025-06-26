document.addEventListener("DOMContentLoaded", function () {
  // Highlight animated text
  const multiText = document.querySelector('.multiple-text');
  if (multiText) multiText.style.color = '#0ef';

  // Navbar toggle
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  }

 // Email sending
  function sendEmail(e) {
    e.preventDefault(); // prevent page reload
    const templateParams = {
      name: document.querySelector("#name")?.value || '',
      email: document.querySelector("#email")?.value || '',
      subject: document.querySelector("#subject")?.value || '',
      message: document.querySelector("#message")?.value || '',
      number: document.querySelector("#number")?.value || '',  
    };

    emailjs.send("service_e2kp116", "template_dz7m1bu", templateParams)
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Email failed to send."));
  }

  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", sendEmail);
  }


  // Scroll section active link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (targetLink) targetLink.classList.add('active');
      }
    });

    // Sticky header
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 100);
    }

    // Close navbar on scroll
    if (menuIcon && navbar) {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    }
  };

  // ScrollReveal animations
  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 300
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .certificates-content, .contact form, .skill-box, .header-h1, .blog-container, .skills-section', { origin: "bottom" });
  ScrollReveal().reveal('.home-content h1, .about-img, .skill-title', { origin: "left" });
  ScrollReveal().reveal('.home-content p, .about-content, .skill-title', { origin: "right" });

  // Typed.js effect
  new Typed('.multiple-text', {
    strings: ['Web Developer', 'Graphic Designer', 'Data Analyst', 'Backend Developer', 'Content Creator'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
});
