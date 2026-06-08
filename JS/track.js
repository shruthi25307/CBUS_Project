// select form
let form = document.querySelector(".tracking-form");

// select existing map box
let mapBox = document.querySelector(".map-placeholder");

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const routeNumber = urlParams.get("route");

  if (routeNumber) {
    // Pre-select the bus in dropdown
    const busSelect = document.getElementById("busNo");
    busSelect.value = routeNumber;

    // Load the correct map immediately
    loadMap(routeNumber);

    // Optional: show toast notification
    showToast(`🚍 Tracking started for Route ${routeNumber}`);
  }
});
// ===============================
// TRACK BUS WITH POPUP MESSAGE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".tracking-form");
  const mapBox = document.querySelector(".map-placeholder");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const bus = document.getElementById("busNo").value;

    if (bus === "") {
      showToast("⚠️ Please select a bus number");
      return;
    }

    let mapURL = "";

    switch (bus) {
      case "1":
        mapURL = "https://www.google.com/maps?q=Prince%20School%20Chennai&output=embed";
        break;
      case "2":
        mapURL = "https://www.google.com/maps?q=Thiruvotriyur%20Chennai&output=embed";
        break;
      case "3":
        mapURL = "https://www.google.com/maps?q=Teynampet%20Chennai&output=embed";
        break;
      case "4":
        mapURL = "https://www.google.com/maps?q=Chengalpattu%20Tamil%20Nadu&output=embed";
        break;
      case "5":
        mapURL = "https://www.google.com/maps?q=Kundrathur%20Chennai&output=embed";
        break;
      case "6":
        mapURL = "https://www.google.com/maps?q=Pattabiram%20Chennai&output=embed";
        break;
      case "7":
        mapURL = "https://www.google.com/maps?q=Red%20Hills%20Chennai&output=embed";
        break;
    }

    if (mapURL !== "") {
      mapBox.innerHTML = `
        <iframe
          width="100%"
          height="100%"
          style="border:0;border-radius:12px;"
          loading="lazy"
          allowfullscreen
          src="${mapURL}">
        </iframe>
      `;

      // ✅ Show popup message
      showToast("🚍 Tracking Route " + bus);
    }

  });

});


// ===============================
// TOAST POPUP FUNCTION
// ===============================
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "track-toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 2000);
}
// Function to load Google Maps iframe based on route number
function loadMap(bus) {
  const mapBox = document.querySelector(".map-placeholder");
  let mapURL = "";

  switch (bus) {
    case "1":
      mapURL = "https://www.google.com/maps?q=Prince%20School%20Chennai&output=embed";
      break;
    case "2":
      mapURL = "https://www.google.com/maps?q=Thiruvotriyur%20Chennai&output=embed";
      break;
    case "3":
      mapURL = "https://www.google.com/maps?q=Teynampet%20Chennai&output=embed";
      break;
    case "4":
      mapURL = "https://www.google.com/maps?q=Chengalpattu%20Tamil%20Nadu&output=embed";
      break;
    case "5":
      mapURL = "https://www.google.com/maps?q=Kundrathur%20Chennai&output=embed";
      break;
    case "6":
      mapURL = "https://www.google.com/maps?q=Pattabiram%20Chennai&output=embed";
      break;
    case "7":
      mapURL = "https://www.google.com/maps?q=Red%20Hills%20Chennai&output=embed";
      break;
  }

  if (mapURL) {
    mapBox.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        style="border:0;border-radius:12px;"
        loading="lazy"
        allowfullscreen
        src="${mapURL}">
      </iframe>`;
  }
}

// Toast popup function (already in your code)
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "track-toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 600);
  }, 2000);
}
// =========================
// THEME LOAD ON START (Track Page)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const toggleText = document.getElementById("themeToggle");

  if (savedTheme === "night-theme") {
    document.body.classList.add("night-theme");
    if (toggleText) toggleText.textContent = "Light Theme";
  } else {
    document.body.classList.add("light-theme");
    if (toggleText) toggleText.textContent = "Dark Theme";
  }
});

// =========================
// THEME TOGGLE FUNCTION (Track Page)
// =========================
function toggleTheme() {
  const toggleText = document.getElementById("themeToggle");

  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("night-theme");
    localStorage.setItem("theme", "night-theme");
    if (toggleText) toggleText.textContent = "Light Theme";
  } else {
    document.body.classList.remove("night-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme");
    if (toggleText) toggleText.textContent = "Dark Theme";
  }
}



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
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("night-theme");
  let toggle = document.getElementById("themeToggle");
  if (document.body.classList.contains("night-theme")) {
    toggle.textContent = "Light Theme";
  } else {
    toggle.textContent = "Dark Theme";
  }
});

// 8. Smooth scroll for nav links
document.querySelectorAll
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


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".tracking-form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const bus = document.getElementById("busNo").value;

      if (!bus) {
        showToast("⚠️ Please select a bus");
        return;
      }

      loadMap(bus);  // Load map here
      showToast(`🚍 Tracking started for Route ${bus}`);
    });
  }
});
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
