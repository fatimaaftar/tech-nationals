const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle navbar on hamburger click
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Optional: Close navbar when a link is clicked (for better UX)
navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
    hamburger.classList.remove('active');
  });
});