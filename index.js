// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// ===== About Section Fade-In =====
const aboutSection = document.querySelector(".about-content");

if (aboutSection) {
  const revealAbout = () => {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      aboutSection.style.opacity = "1";
      aboutSection.style.transform = "translateY(0)";
    }
  };

  window.addEventListener("scroll", revealAbout);
  window.addEventListener("load", revealAbout);
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

// ===== Netflix-style Project Card Sliders =====
// Each card only auto-plays through its images while the mouse is
// hovering it (like a Netflix preview). It resets to the first image
// and stops as soon as the mouse leaves. Manual prev/next still work
// at any time and reset the auto-play timer.
document.querySelectorAll(".project-card").forEach((card) => {
  const slider = card.querySelector(".slider");
  const slides = card.querySelector(".slides");
  const images = card.querySelectorAll(".slides img");
  const nextBtn = card.querySelector(".next");
  const prevBtn = card.querySelector(".prev");

  if (!slider || !slides || images.length === 0) return;

  let current = 0;
  let autoplayId = null;
  const AUTOPLAY_DELAY = 1200; // ms between slides while hovering

  const goTo = (index) => {
    current = (index + images.length) % images.length;
    slides.style.transform = `translateX(-${current * 100}%)`;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (images.length <= 1) return;
    autoplayId = setInterval(() => goTo(current + 1), AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  // Start cycling through images as soon as you hover the card,
  // reset back to the first image when you leave.
  card.addEventListener("mouseenter", startAutoplay);
  card.addEventListener("mouseleave", () => {
    stopAutoplay();
    goTo(0);
  });

  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    goTo(current + 1);
    startAutoplay(); // restart timer so it doesn't jump right after a manual click
  });

  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    goTo(current - 1);
    startAutoplay();
  });
});
