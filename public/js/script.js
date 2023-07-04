// script.js

// Get the menu toggle button and mobile menu element
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the mobile menu element
  mobileMenu.classList.toggle('active');
});
