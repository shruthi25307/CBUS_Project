// ===============================
// CBUS Homepage Enhancements
// ===============================
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// 2. Fade-in on Scroll (trigger earlier)
const cards = document.querySelectorAll('.card, .stat-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, {
  threshold: 0.2   // triggers when 20% is visible (smooth)
});

cards.forEach(card => {
  observer.observe(card);
});

// 4. Navbar Active Highlight
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Check saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add("light-theme"); // default
  }

  // Toggle button logic
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function() {
      if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("night-theme");
        localStorage.setItem("theme", "night-theme");
      } else {
        document.body.classList.remove("night-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
      }
    });
  }
});
// ========== HAMBURGER MENU TOGGLE ==========
const hamburger = document.querySelector(".hamburger");
const sideMenu = document.getElementById("sideMenu"); // make sure you have <div id="sideMenu"> in HTML
const overlay = document.querySelector(".overlay");

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
  hamburger.innerHTML = "✕";
}

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
  hamburger.innerHTML = "&#9776;";
}

function toggleMenu() {
  if (sideMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
}
function toggleTheme() {
  const toggleText = document.getElementById("themeToggle");

  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("night-theme");
    localStorage.setItem("theme", "night-theme");
    toggleText.textContent = "Light Theme";
  } else {
    document.body.classList.remove("night-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme");
    toggleText.textContent = "Dark Theme";
  }
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

// Close menu when a link is clicked
if (sideMenu) {
  sideMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});


// ===============================
// ANNOUNCEMENT CARD CLICK → TRACK PAGE
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".announcement-card");

  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      const routeNumber = index + 1;
      window.location.href = "track.html?route=" + routeNumber;
    });
  });

});