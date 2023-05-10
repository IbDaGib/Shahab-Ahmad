// Get the current page URL
const url = window.location.href;

// Get all the links in the nav
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each link and check if it matches the current URL
navLinks.forEach(link => {
  if (link.href === url) {
    // Add the "active" class to the link if it matches the current URL
    link.classList.add('active');
  }
});
