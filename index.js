<<<<<<< HEAD
// ===== Toggle Menu =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// ===== About Section Fade-In (Fixed) =====
const aboutSection = document.querySelector(".about-content");

if (aboutSection) {
  function revealAbout() {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      aboutSection.style.opacity = "1";
      aboutSection.style.transform = "translateY(0)";
    }
  }

  // Check on load and scroll
  window.addEventListener("scroll", revealAbout);
  window.addEventListener("load", revealAbout);
  // Run immediately in case already in view
  revealAbout();
}

// ===== Particles.js Background =====
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#a020f0" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#a020f0",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100 },
      },
    },
    retina_detect: true,
  });
} else {
  console.warn("particles.js library not loaded");
}
=======
// ===== Toggle Menu =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// ===== About Section Fade-In (Fixed) =====
const aboutSection = document.querySelector(".about-content");

if (aboutSection) {
  function revealAbout() {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      aboutSection.style.opacity = "1";
      aboutSection.style.transform = "translateY(0)";
    }
  }

  // Check on load and scroll
  window.addEventListener("scroll", revealAbout);
  window.addEventListener("load", revealAbout);
  // Run immediately in case already in view
  revealAbout();
}

// ===== Particles.js Background =====
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#a020f0" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#a020f0",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100 },
      },
    },
    retina_detect: true,
  });
} else {
  console.warn("particles.js library not loaded");
}
>>>>>>> 3e25e5a2c2e971d59bd75ee5ab05d651db474a2b
