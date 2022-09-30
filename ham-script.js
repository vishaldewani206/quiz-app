//Hamburger
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('nav-active');
});
