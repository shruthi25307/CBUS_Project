// ===============================
// CBUS Homepage Enhancements
// ===============================

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
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// 7. Right-side Hamburger Menu + Theme Toggle
const menuBtn = document.createElement("div");
menuBtn.classList.add("hamburger");
menuBtn.innerHTML = "&#9776;"; // three lines
document.body.appendChild(menuBtn);

const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);
overlay.addEventListener("click", closeMenu);

const sideMenu = document.createElement("div");
sideMenu.classList.add("side-menu");
sideMenu.innerHTML = `
  <h3>Menu</h3>
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="routes.html">Routes</a></li>
    <li><a href="announcements.html">Announcements</a></li>
    <li><a href="track.html">Track</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact Us</a></li>
    <li id="themeToggle">Dark Theme</li>
  </ul>
`;
document.body.appendChild(sideMenu);

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
  menuBtn.innerHTML = "✕";   // change to close icon
}

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
  menuBtn.innerHTML = "&#9776;";  // change back to hamburger
}

menuBtn.addEventListener("click", () => {
  if (sideMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const phoneLinks = document.querySelectorAll(".contact-table a");

  phoneLinks.forEach(link => {
    link.addEventListener("click", () => {
      showToast(`📞 Calling ${link.textContent}...`);
    });
  });
});

// Toast popup function
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "contact-toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 600);
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  // Fade-in rows on load
  const rows = document.querySelectorAll(".table-row");
  rows.forEach((row, i) => {
    row.style.opacity = 0;
    row.style.transform = "translateY(10px)";
    setTimeout(() => {
      row.style.transition = "all 0.5s ease";
      row.style.opacity = 1;
      row.style.transform = "translateY(0)";
    }, i * 120);
  });

  // Ripple effect on phone number click
  const phoneLinks = document.querySelectorAll(".contact-table a");
  phoneLinks.forEach(link => {
    link.addEventListener("click", e => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = e.offsetX + "px";
      ripple.style.top = e.offsetY + "px";
      link.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".table-row");
  rows.forEach((row, i) => {
    row.style.opacity = 0;
    row.style.transform = "translateY(10px)";
    setTimeout(() => {
      row.style.transition = "all 0.5s ease";
      row.style.opacity = 1;
      row.style.transform = "translateY(0)";
    }, i * 120);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".table-container");

  // Start hidden
  container.style.opacity = 0;
  container.style.transform = "translateY(30px)";

  // Animate in
  setTimeout(() => {
    container.style.transition = "all 1.2s ease";
    container.style.opacity = 1;
    container.style.transform = "translateY(0)";
  }, 150); // slight delay for smoothness
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resetBtn = document.querySelector(".reset-btn");

  // Handle feedback submission
  form.addEventListener("submit", e => {
    e.preventDefault(); // prevent actual form submission for demo
    showSuccessPopup("Thanks for submitting your feedback!");
    form.reset(); // clear form after showing message
  });

  // Handle reset confirmation
  resetBtn.addEventListener("click", e => {
    e.preventDefault(); // stop default reset
    const confirmReset = confirm("Are you sure you want to reset?");
    if (confirmReset) {
      form.reset();
    }
  });
});

// Success popup function
function showSuccessPopup(message) {
  const popup = document.createElement("div");
  popup.className = "success-popup";
  popup.textContent = message;

  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("show"), 10);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 500);
  }, 2500);
}

// ===============================
// Theme Load + Toggle (FIXED)
// ===============================

document.addEventListener("DOMContentLoaded", function() {

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add("light-theme");
  }

  // Theme toggle using event delegation (important for dynamic menus)
  document.body.addEventListener("click", function(e) {
    if (e.target && e.target.id === "themeToggle") {

      if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("night-theme");
        localStorage.setItem("theme", "night-theme");
        e.target.textContent = "Light Theme";
      } 
      else {
        document.body.classList.remove("night-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
        e.target.textContent = "Dark Theme";
      }
    }
  });

  // Set initial toggle text
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.textContent = document.body.classList.contains("night-theme") 
      ? "Light Theme" 
      : "Dark Theme";
  }

});