// ===============================
// CBUS Homepage Enhancements
// ===============================
/*
// 1. Live Date & Time
function updateDateTime() {
    let now = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[now.getDay()];
    let date = now.toLocaleDateString();

    let h = String(now.getHours()).padStart(2,'0');
    let m = String(now.getMinutes()).padStart(2,'0');
    let s = String(now.getSeconds()).padStart(2,'0');

    let time = h + ":" + m + ":" + s;

    document.getElementById("liveDateTime").innerHTML =
        day + " | " + date + " | " + time;
}
setInterval(updateDateTime,1000);
updateDateTime();*/

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

// 3. Hero Text Float-in (on load)
window.addEventListener('load', () => {
  document.querySelector('.hero h1').classList.add('float-in');
  document.querySelector('.hero p').classList.add('float-in');
});

// 4. Navbar Active Highlight
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});
// 5. Announcement Ticker Pause on Hover
const ticker = document.querySelector('.ticker-content');
ticker.addEventListener('mouseenter', () => {
  ticker.style.animationPlayState = 'paused';
});
ticker.addEventListener('mouseleave', () => {
  ticker.style.animationPlayState = 'running';
});

// 6. Stats Counter Animation
function animateCounter(element, target) {
  let count = 0;
  const speed = target / 100; 
  const interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    element.textContent = Math.floor(count);
  }, 20);
}
document.querySelectorAll('.stat-card h3').forEach(stat => {
  const target = parseInt(stat.textContent);
  stat.textContent = "0";
  animateCounter(stat, target);
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
document.addEventListener("DOMContentLoaded", function() {
  const text = "Welcome to CBUS";
  const speed = 150; // typing speed in ms
  let i = 0;
  const target = document.getElementById("welcome-text");

  // Clear initial text
  target.textContent = "";

  function typeWriter() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Trigger underline expansion
      target.classList.add("underline-show");
    }
  }

  typeWriter();
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

function updateDateTime() {
  const el = document.getElementById("liveDateTime");
  let now = new Date();
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[now.getDay()];
  let date = now.toLocaleDateString();
  let h = String(now.getHours()).padStart(2,'0');
  let m = String(now.getMinutes()).padStart(2,'0');
  let s = String(now.getSeconds()).padStart(2,'0');

  el.innerHTML = `
    <span class="date">${day} | ${date}</span>
    <span class="separator">|</span>
    <span class="time">${h}:${m}:${s}</span>
  `;

}

setInterval(updateDateTime,1000);
updateDateTime();

