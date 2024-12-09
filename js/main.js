// open & close nav menu
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

// Function to check if in mobile view
const isMobile = () => window.innerWidth <= 768;

// open sidebar
menuBtn.addEventListener('click', () => {
  menu.classList.add('open');
  menuBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
});

// close sidebar
closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  menuBtn.classList.remove('hidden');
  closeBtn.classList.add('hidden');
});

// close sidebar on clicking outside
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target) && !closeBtn.contains(event.target)) {
    menu.classList.remove('open');
    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  }
});

// Adjust menu visibility on resize
window.addEventListener('resize', () => {
  if (!isMobile()) {
    menu.classList.remove('open');
    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  }
});

// change active class to clicked nav item
const navItems = document.querySelectorAll('nav ul li');

// remove active class from other items
const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  });
};

// add active class to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active');
  });
});

// show/hide FAQs
const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.icon i');
    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  });
});
