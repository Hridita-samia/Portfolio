// Nav menu overlay open/close
const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-item');

menuOpenBtn.addEventListener('click', () => {
  navOverlay.classList.add('open');
});

menuCloseBtn.addEventListener('click', () => {
  navOverlay.classList.remove('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navOverlay.classList.remove('open');
  });
});

// Dynamic role switcher (Swaps every 2 seconds)
const roles = [
  "Visual Storyteller",
  "Student Developer",
  "Tech Enthusiast"
];

let currentRoleIndex = 0;
const roleElement = document.getElementById('typing-text');

setInterval(() => {
  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  if (roleElement) {
    roleElement.textContent = roles[currentRoleIndex];
  }
}, 2000);

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Theme switcher
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggleBtn.textContent = document.body.classList.contains('light-theme') ? 'DARK' : 'LIGHT';
});