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
  
  const translations = {
    en: {
      //traduction for header
      "nav.home": "Home",
      "nav.resume": "Resume",
      "nav.skills": "Skills",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      //traduction for home
      welcome: "Hi, It's <span>Abderrhman</span>",
      aboutHeadline: "I'm a <span>Junior Full Stack Web Developer</span>",
      aboutText: `From electricity to coding, I've always been curious about how things work.
        I build websites with HTML, CSS, JavaScript, jQuery, and Bootstrap.
        I create web apps using PHP, Python, APIs, and MySQL.
        I'm always learning and exploring frameworks like Laravel, React.js, Next.js, and Django.
        I love solving problems and making useful digital solutions.`,
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      profileAlt: "Profile picture"
    },
    fr: {
      //traduction for header
      "nav.home": "Accueil",
      "nav.resume": "CV",
      "nav.skills": "Compétences",
      "nav.services": "Services",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      //traduction for home
      welcome: "Salut, c'est <span>Abderrhman</span>",
      aboutHeadline: "Je suis un <span>Développeur Web Full Stack Junior</span>",
      aboutText: `De l'électricité au codage, j'ai toujours été curieux de savoir comment les choses fonctionnent.
        Je crée des sites avec HTML, CSS, JavaScript, jQuery et Bootstrap.
        Je développe des applications web avec PHP, Python, des APIs et MySQL.
        J'apprends en permanence les frameworks comme Laravel, React.js, Next.js et Django.
        J'adore résoudre des problèmes et créer des solutions numériques utiles.`,
      contactMe: "Me Contacter",
      downloadCV: "Télécharger le CV",
      profileAlt: "Photo de profil"
    },
    ar: {
      //traduction for header
      "nav.home": "الرئيسية",
      "nav.resume": "السيرة الذاتية",
      "nav.skills": "المهارات",
      "nav.services": "الخدمات",
      "nav.projects": "المشاريع",
      "nav.contact": "اتصل",
      //traduction for home
      welcome: "مرحبًا، أنا <span>عبد الرحمن</span>",
      aboutHeadline: "أنا <span>مطور ويب متكامل مبتدئ</span>",
      aboutText: `من الكهرباء إلى البرمجة، لطالما كنت فضوليًا لمعرفة كيفية عمل الأشياء.
        أبني مواقع باستخدام HTML، CSS، JavaScript، jQuery، وBootstrap.
        أطور تطبيقات ويب باستخدام PHP، Python، APIs، وMySQL.
        أتعلم دائمًا وأستكشف أطر العمل مثل Laravel، React.js، Next.js، وDjango.
        أحب حل المشكلات وإنشاء حلول رقمية مفيدة.`,
      contactMe: "اتصل بي",
      downloadCV: "تحميل السيرة الذاتية",
      profileAlt: "صورة الملف الشخصي"
    }
  };

  function updateOptionsDisplay(selectedValue) {
    allOptions.forEach(option => {
      option.style.display = (option.dataset.value === selectedValue) ? 'none' : 'flex';
    });
  }
  
  function applyTranslation(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  
    // ALT attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('alt', translations[lang][key]);
      }
    });
  
    // HREF attributes
    document.querySelectorAll('[data-i18n-href]').forEach(el => {
      const key = el.getAttribute('data-i18n-href');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('href', translations[lang][key]);
      }
    });
  
    // Direction RTL/LTR
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Styling adjustments for Arabic
const aboutParagraph = document.querySelector('[data-i18n="aboutText"]');
// Adjust dropdown direction and padding for Arabic
const dropdown = document.getElementById('langDropdown');
if (dropdown) {
  if (lang === 'ar') {
    dropdown.style.textAlign = 'right';
    dropdown.style.marginRight = '2rem';
    dropdown.style.paddingLeft = '0';
  } else {
    dropdown.style.textAlign = 'left';
    dropdown.style.paddingLeft = '1rem';
    dropdown.style.paddingRight = '0';
  }
}


if (lang === 'ar') {
  aboutParagraph.style.textAlign = 'right';
  aboutParagraph.style.paddingLeft = '0';
  aboutParagraph.style.paddingRight = '0rem';
} else {
  aboutParagraph.style.textAlign = 'left';
  aboutParagraph.style.paddingRight = '0';
  aboutParagraph.style.paddingLeft = '2rem';
}
  }
  
  
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  const savedOption = allOptions.find(opt => opt.dataset.value === savedLang);
  if (savedOption) {
    selected.innerHTML = savedOption.innerHTML;
    updateOptionsDisplay(savedLang);
    applyTranslation(savedLang);
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
      applyTranslation(chosenValue);
    });
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
