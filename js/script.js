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









  const translations = {
    en: {
      welcome: "Welcome",
      intro: "This is a sample website with language switch."
    },
    fr: {
      welcome: "Bienvenue",
      intro: "Ceci est un site d'exemple avec changement de langue."
    },
    ar: {
      welcome: "مرحبا",
      intro: "هذا موقع تجريبي يدعم تغيير اللغة."
    }
  };

  function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // Event listener for dropdown language options
  const langOptions = document.querySelectorAll('#langOptions div');
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedLang = option.getAttribute('data-value');
      setLanguage(selectedLang);

      // Change dropdown selected value
      const selected = document.getElementById('selected');
      selected.innerHTML = option.innerHTML;

      // Optional: Hide the dropdown list after selection
      document.getElementById('langOptions').style.display = 'none';
    });
  });

  // Toggle dropdown list on click
  document.getElementById('selected').addEventListener('click', () => {
    const langOptions = document.getElementById('langOptions');
    langOptions.style.display = langOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Default language
  setLanguage('en');











});
