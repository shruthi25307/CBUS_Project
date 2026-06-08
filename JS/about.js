// ===============================
// CBUS Routes Page Enhancements
// ===============================

// =========================
// 1. THEME LOAD ON START
// =========================
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add("light-theme");
  }
});

// =========================
// 2. HAMBURGER MENU
// =========================
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.querySelector(".overlay");
  const btn = document.querySelector(".hamburger");

  menu.classList.toggle("open");
  overlay.classList.toggle("show");

  if (menu.classList.contains("open")) {
    btn.innerHTML = "✕";
  } else {
    btn.innerHTML = "&#9776;";
  }
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
  document.querySelector(".overlay").classList.remove("show");
  document.querySelector(".hamburger").innerHTML = "&#9776;";
}

// =========================
// 3. THEME TOGGLE
// =========================
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

// =========================
// 4. NAVBAR ACTIVE HIGHLIGHT
// =========================
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// =========================
// 5. NAVBAR HIDE ON SCROLL
// =========================
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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter form");

  form.addEventListener("submit", e => {
    e.preventDefault(); // prevent default submission

    // Step 1: Confirmation alert
    const confirmSubmit = confirm("Are you sure you want to submit? Please check your email.");
    if (!confirmSubmit) return;

    // Step 2: Show success popup
    showSuccessPopup("Successfully subscribed to the newsletter!✅");
  });
});

// Function to create and show popup
function showSuccessPopup(message) {
  // Create popup element
  const popup = document.createElement("div");
  popup.className = "success-popup";
  popup.textContent = message;

  // Append to body
  document.body.appendChild(popup);

  // Trigger animation
  setTimeout(() => popup.classList.add("show"), 10);

  // Remove after 2 seconds
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 500);
  }, 2000);
}
