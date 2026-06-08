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

// =========================
// 6. ROUTE POPUP MODAL
// =========================

// Route data
const routeStops = {
  route1: [
    "Madipakkam Keat Road",
    "Independence Day Park",
    "Karumari Amman Kovil",
    "Kakkan Bridge",
    "Veeramani Nagar"
  ],
  route2: [
    "Manali Market",
    "Periyar Nagar",
    "Beach Station",
    "Ratna Cafe",
    "Adyar Signal",
    "Semmanchery Arch",
    "Sithalapakkam Junction"
  ],
  route3: [
    "Teynampet Metro",
    "Velachery Check Post",
    "Velachery Grt",
    "Taramani",
    "Thuraipakkam",
    "Sholinganallur"
  ],
  route4: [
    "Chengalpattu New Bus Stop",
    "Kattankulattur Bus Stop",
    "Guduvanchery E.B. Office",
    "Mannivakkam Koot Road",
    "Vandalur Zoo"
  ],
  route5: [
    "Kovur",
    "Pammal",
    "Chorempet Bus Stop",
    "Varadharaja Theatre",
    "Indira Nagar",
    "Bharath College",
    "Als Nagar"
  ],
  route6: [
    "Avadi",
    "Karaiyanchavadi",
    "Iyyappanthangal",
    "Chormpet Mit",
    "Mcc",
    "Anna Nagar"
  ],
  route7: [
    "Oragadam",
    "Vavin Mogappair",
    "Mmm Hospital",
    "Arumbakkam",
    "Vadapalani",
    "Pallavaram Bus Stop"
  ]
};
// Popup logic
function initRoutePopup() {
  const viewItems = document.querySelectorAll(".view-item");
  const popupBox = document.getElementById("popupBox");
  const popupContent = document.getElementById("popupContent");

  viewItems.forEach(item => {
    // clicking on any route item will open the central popup
    item.addEventListener("click", () => {
      const routeKey = item.getAttribute("data-route");
      const stops = routeStops[routeKey] || [];

      // Clear previous list
      popupContent.innerHTML = "";

      // populate with stops
      stops.forEach(stop => {
        const div = document.createElement("div");
        div.textContent = stop;
        popupContent.appendChild(div);
      });

      // display the modal/popup box
      popupBox.classList.add("show");
    });
  });
}

// run initialization – if DOM is already loaded the call executes immediately
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRoutePopup);
} else {
  initRoutePopup();
}

// Close popup manually
function closePopup() {
  document.getElementById("popupBox").classList.remove("show");
}
// Form submit handler
const form = document.querySelector(".tracking-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const bus = document.getElementById("busNo").value;

    if (!bus) {
      showToast("⚠️ Please select a bus");
      return;
    }

    // Show toast notification
    showToast(`🚍 Tracking started for Route ${bus}`);
  });
}

// Toast popup function
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "track-toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  // Fade in
  setTimeout(() => toast.classList.add("show"), 10);

  // Fade out after 2 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 600); // remove after transition
  }, 2000);
}
