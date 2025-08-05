document.addEventListener('DOMContentLoaded', () => {
  // ===== Body visible on load =====
  document.body.classList.add('visible');

  // ===== Menu toggle =====
  const initMenuToggle = () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon && navbar) {
      menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      });
    }
  };

  // ===== Language Dropdown =====
  const initLanguageDropdown = () => {
    const dropdown = document.getElementById('langDropdown');
    const selected = document.getElementById('selected');
    const options = document.getElementById('langOptions');
    
    if (!dropdown || !selected || !options) return;

    const allOptions = [...options.querySelectorAll('div')];

    function updateOptionsDisplay(selectedValue) {
      allOptions.forEach(option => {
        option.style.display = (option.dataset.value === selectedValue) ? 'none' : 'flex';
      });
    }

    // Use in-memory storage fallback if localStorage isn't available
    let savedLang = 'en'; // Default language
    try {
      savedLang = localStorage.getItem('selectedLanguage') || 'en';
    } catch (e) {
      console.warn('localStorage not available, using default language');
    }
    
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
        try {
          localStorage.setItem('selectedLanguage', chosenValue);
        } catch (e) {
          console.warn('localStorage not available');
        }
        updateOptionsDisplay(chosenValue);
      });
    });

    document.addEventListener('click', () => {
      options.style.display = 'none';
    });
  };

  // ===== Fade-in Sections =====
  const initFadeInSections = () => {
    const faders = document.querySelectorAll('.fade-in');
    if (!faders.length) return;

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    faders.forEach(fader => observer.observe(fader));
  };

  // ===== Timeline Animation =====
  const initTimelineAnimation = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (!timelineItems.length) return;

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
  };

  // ===== Dark/Light Theme Toggle =====
  const initThemeToggle = () => {
    const themeToggleBtn = document.querySelector('.mode-btn');
    if (!themeToggleBtn) {
      console.warn('Theme toggle button not found');
      return;
    }

    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Check saved theme with fallback
    let savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem('theme') || 'light';
    } catch (e) {
      console.warn('localStorage not available, using default theme');
    }

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        if (themeIcon) {
          themeIcon.classList.replace('bx-moon', 'bx-sun');
        }
      } else {
        body.removeAttribute('data-theme');
        if (themeIcon) {
          themeIcon.classList.replace('bx-sun', 'bx-moon');
        }
      }
    };

    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
      const isDark = body.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      
      applyTheme(newTheme);
      
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        console.warn('localStorage not available');
      }
    });
  };

  // ===== Initialize all components =====
  const initAll = () => {
    initMenuToggle();
    initLanguageDropdown();
    initFadeInSections();
    initTimelineAnimation();
    initThemeToggle();
    initializeTranslation();
  };

  initAll();
});

// ===== Translation System =====
const translations = {
  en: {
    // ... (keep your existing English translations)
  },
  fr: {
    // ... (keep your existing French translations)
  },
  ar: {
    // ... (keep your existing Arabic translations)
  }
};

// Language configuration with RTL support
const languageConfig = {
  en: { dir: 'ltr', flag: 'us' },
  fr: { dir: 'ltr', flag: 'fr' },
  ar: { dir: 'rtl', flag: 'sa' }
};

let currentLanguage = 'en';

// Initialize the translation system
function initializeTranslation() {
  // Get DOM elements
  const dropdown = document.getElementById('langDropdown');
  const dropdownBtn = document.getElementById('selected');
  const dropdownList = document.getElementById('langOptions');
  
  if (!dropdown || !dropdownBtn || !dropdownList) {
    console.warn('Language dropdown elements not found');
    return;
  }

  const langOptions = dropdownList.querySelectorAll('[data-value]');

  // Set up dropdown click handler
  dropdownBtn.addEventListener('click', toggleDropdown);
  
  // Set up language option click handlers
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-value');
      changeLanguage(selectedLang);
      closeDropdown();
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Load saved language or default to English
  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  } catch (e) {
    console.warn('localStorage not available, using default language');
  }
  changeLanguage(savedLanguage);
  
  // Set up keyboard accessibility
  setupKeyboardAccessibility();
}

function toggleDropdown() {
  const dropdownList = document.getElementById('langOptions');
  if (dropdownList) {
    dropdownList.classList.toggle('show');
  }
}

function closeDropdown() {
  const dropdownList = document.getElementById('langOptions');
  if (dropdownList) {
    dropdownList.classList.remove('show');
  }
}

function changeLanguage(langCode) {
  if (!translations[langCode]) {
    console.error(`Language ${langCode} not found`);
    return;
  }

  currentLanguage = langCode;
  const config = languageConfig[langCode];

  // Update HTML attributes
  document.documentElement.setAttribute('lang', langCode);
  document.documentElement.setAttribute('dir', config.dir);

  // Update all translations
  updateTranslations(langCode);
  
  // Update dropdown button
  updateDropdownButton(langCode);

  // Save preference
  try {
    localStorage.setItem('preferredLanguage', langCode);
  } catch (e) {
    console.warn('localStorage not available');
  }
}

function updateTranslations(langCode) {
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[langCode]['metaDescription']) {
    metaDesc.setAttribute('content', translations[langCode]['metaDescription']);
  }

  // Update all translatable elements
  const elementsToTranslate = document.querySelectorAll('[data-i18n]');
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[langCode][key]) {
      element.innerHTML = translations[langCode][key];
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[langCode][key]) {
      element.setAttribute('placeholder', translations[langCode][key]);
    }
  });

  // Update alt attributes
  const altElements = document.querySelectorAll('[data-i18n-alt]');
  altElements.forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    if (translations[langCode][key]) {
      element.setAttribute('alt', translations[langCode][key]);
    }
  });
}

function updateDropdownButton(langCode) {
  const dropdownBtn = document.getElementById('selected');
  if (!dropdownBtn) return;

  const config = languageConfig[langCode];
  const flagImg = dropdownBtn.querySelector('.flag-icon');
  
  // Update flag
  if (flagImg) {
    flagImg.src = `https://flagcdn.com/w20/${config.flag}.png`;
  }
  
  // Update text
  const langName = translations[langCode][`lang.${getLangName(langCode)}`];
  if (langName) {
    // Find the text node after the flag image
    const textNodes = Array.from(dropdownBtn.childNodes).filter(node => 
      node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );
    
    if (textNodes.length > 0) {
      textNodes[0].textContent = ' ' + langName;
    } else {
      // Create text node if it doesn't exist
      dropdownBtn.appendChild(document.createTextNode(' ' + langName));
    }
  }
}

function getLangName(langCode) {
  const langMap = {
    'en': 'english',
    'fr': 'french',
    'ar': 'arabic'
  };
  return langMap[langCode] || 'english';
}

function setupKeyboardAccessibility() {
  const dropdownBtn = document.getElementById('selected');
  const langOptions = document.querySelectorAll('#langOptions [data-value]');

  if (dropdownBtn) {
    dropdownBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown();
      }
    });
  }

  langOptions.forEach(option => {
    option.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const selectedLang = option.getAttribute('data-value');
        changeLanguage(selectedLang);
        closeDropdown();
      }
    });
  });




console.log('Portfolio translation system loaded! 🌍');