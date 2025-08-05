document.addEventListener('DOMContentLoaded', () => {
  // ===== Body visible on load =====
  document.body.classList.add('visible');

  // ===== Menu toggle =====
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
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




  const langData = {};
  let currentLang = 'en';
  
  // Load translations
  fetch('lang.json')
    .then(response => response.json())
    .then(data => {
      Object.assign(langData, data);
      translatePage(currentLang); // default language
    });
  
  // Switch Language
  document.getElementById("langOptions").addEventListener("click", (e) => {
    const lang = e.target.closest("div[data-value]");
    if (lang) {
      currentLang = lang.getAttribute("data-value");
      translatePage(currentLang);
      document.getElementById("selected").innerHTML = lang.innerHTML;
    }
  });
  
  function translatePage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = getValueFromKey(langData[lang], key);
      if (value) el.innerHTML = value;
    });
  
    const alts = document.querySelectorAll("[data-i18n-alt]");
    alts.forEach(el => {
      const key = el.getAttribute("data-i18n-alt");
      const value = getValueFromKey(langData[lang], key);
      if (value) el.alt = value;
    });
  
    const hrefs = document.querySelectorAll("[data-i18n-href]");
    hrefs.forEach(el => {
      const key = el.getAttribute("data-i18n-href");
      const value = getValueFromKey(langData[lang], key);
      if (value) el.href = value;
    });
  
    const numbers = document.querySelectorAll("[data-i18n-number]");
    numbers.forEach(el => {
      const key = el.getAttribute("data-i18n-number");
      const value = getValueFromKey(langData[lang], key);
      if (value) el.textContent = value;
    });
  }
  
  // Helper to support nested keys like "nav.home"
  function getValueFromKey(obj, key) {
    return key.split('.').reduce((o, k) => (o ? o[k] : null), obj);
  }
  










});
