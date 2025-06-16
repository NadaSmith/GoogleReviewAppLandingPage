// Blur effect on navigation bar //
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Toggle feature for FAQs //
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const currentItem = btn.parentElement;

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('open');
      }
    });

    // Toggle the current one
    currentItem.classList.toggle('open');
  });
});

// Toggle feature for mobile view //
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.classList.toggle('open'); // if you want the hamburger animation
});