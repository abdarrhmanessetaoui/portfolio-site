document.addEventListener('DOMContentLoaded', () => {
  // ===== Body visible on load =====
  document.body.classList.add('visible');

  // ===== Menu toggle =====
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    if (window.innerWidth <= 768) {
    if (navbar.classList.contains('active')) {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }}
  });

  // ===== Language Dropdown =====
  const dropdown = document.getElementById('langDropdown');
  const selected = document.getElementById('selected');
  const options = document.getElementById('langOptions');
  const allOptions = [...options.querySelectorAll('div')];

  function updateOptionsDisplay(selectedValue) {
    allOptions.forEach(option => {
      option.style.display = (option.dataset.value === selectedValue) ? 'none' : 'flex';
    });
  }

  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  const savedOption = allOptions.find(opt => opt.dataset.value === savedLang);
  if (savedOption) {
    selected.innerHTML = savedOption.innerHTML;
    updateOptionsDisplay(savedLang);
  }

  selected.addEventListener('click', (e) => {
    e.stopPropagation();
    options.style.display = (options.style.display === 'block') ? 'none' : 'block';
  });

  allOptions.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerHTML = option.innerHTML;
      options.style.display = 'none';
      const chosenValue = option.dataset.value;
      localStorage.setItem('selectedLanguage', chosenValue);
      updateOptionsDisplay(chosenValue);
    });
  });

  document.addEventListener('click', () => {
    options.style.display = 'none';
  });

  // ===== Fade-in Sections =====
  const allElements = document.body.querySelectorAll('section');
  allElements.forEach(el => el.classList.add('fade-in'));

  const faders = document.querySelectorAll('.fade-in');
  const observerOptions = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  faders.forEach(fader => observer.observe(fader));

  // ===== Timeline Animation =====
  const timelineItems = document.querySelectorAll('.timeline-item');

  function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
  }

  function animateOnScroll() {
    timelineItems.forEach(item => {
      if (isVisible(item)) item.classList.add('animate');
    });
  }

  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // ===== Dark/Light Theme Toggle =====
  const themeToggleBtn = document.querySelector('.mode-btn');
  if (!themeToggleBtn) {
    console.warn('Theme toggle button not found');
    return;
  }

  const themeIcon = themeToggleBtn.querySelector('i');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
  } else {
    body.removeAttribute('data-theme');
    themeIcon.classList.replace('bx-sun', 'bx-moon');
  }

  themeToggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
      body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeIcon.classList.replace('bx-sun', 'bx-moon');
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeIcon.classList.replace('bx-moon', 'bx-sun');
    }
  });






});
