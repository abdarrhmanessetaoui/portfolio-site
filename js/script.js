document.addEventListener('DOMContentLoaded', () => {
  // ===== Body visible on load =====
  document.body.classList.add('visible');

  // ===== Menu toggle =====
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  
  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
  }

  // ===== Language Dropdown =====
  const dropdown = document.getElementById('langDropdown');
  const selected = document.getElementById('selected');
  const options = document.getElementById('langOptions');
  
  if (dropdown && selected && options) {
    const allOptions = [...options.querySelectorAll('div')];

    function updateOptionsDisplay(selectedValue) {
      allOptions.forEach(option => {
        option.style.display = (option.dataset.value === selectedValue) ? 'none' : 'flex';
      });
    }

    // Use in-memory storage instead of localStorage for compatibility
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
  }

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

  if (timelineItems.length > 0) {
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  }

  // ===== Dark/Light Theme Toggle =====
  const themeToggleBtn = document.querySelector('.mode-btn');
  
  if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Check saved theme
    let savedTheme = 'light'; // Default theme
    try {
      savedTheme = localStorage.getItem('theme') || 'light';
    } catch (e) {
      console.warn('localStorage not available, using default theme');
    }

    if (savedTheme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      if (themeIcon) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
      }
    } else {
      body.removeAttribute('data-theme');
      if (themeIcon) {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
      }
    }

    themeToggleBtn.addEventListener('click', () => {
      if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        try {
          localStorage.setItem('theme', 'light');
        } catch (e) {
          console.warn('localStorage not available');
        }
        if (themeIcon) {
          themeIcon.classList.remove('bx-sun');
          themeIcon.classList.add('bx-moon');
        }
      } else {
        body.setAttribute('data-theme', 'dark');
        try {
          localStorage.setItem('theme', 'dark');
        } catch (e) {
          console.warn('localStorage not available');
        }
        if (themeIcon) {
          themeIcon.classList.remove('bx-moon');
          themeIcon.classList.add('bx-sun');
        }
      }
    });
  } else {
    console.warn('Theme toggle button not found');
  }

  // Initialize translation system
  initializeTranslation();
});

// Complete Translation Object for Portfolio
const translations = {
  en: {
      // Meta and SEO
      'metaDescription': 'Portfolio of Abderrhman Settaoui, full stack developer specialized in modern web applications.',
      'logoAlt': 'Abderrhman Settaoui Logo',
      'profileAlt': 'Profile picture of Abderrhman Settaoui',
      
      // Navigation
      'nav.home': 'Home',
      'nav.resume': 'Resume',
      'nav.skills': 'Skills',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      
      // Language names
      'lang.english': 'English',
      'lang.french': 'Français',
      'lang.arabic': 'العربية',
      
      // Home Section
      'welcome': 'Hi, It\'s <span>Abderrhman</span>',
      'aboutHeadline': 'I\'m a <span>Junior Full Stack Web Developer</span>',
      'aboutText': 'From electricity to coding, I\'ve always been curious about how things work. I build websites with HTML, CSS, JavaScript, jQuery, and Bootstrap. I create web apps using PHP, Python, APIs, and MySQL. I\'m always learning and exploring frameworks like Laravel, React.js, Next.js, and Django. I love solving problems and making useful digital solutions.',
      'contactMe': 'Contact Me',
      'downloadCV': 'Download CV',
      
      // Resume Section
      'my': 'My',
      'resume': 'Resume',
      'educationTitle': 'Education',
      'certificatesTitle': 'Certificates',
      'experienceTitle': 'Experience',
      
      // Education
      'techDiploma': 'Technician Specialized in Full-Stack Web Development',
      'ofpptDesc': 'At OFPPT, I learned how to build dynamic websites and applications using technologies like HTML, CSS, JavaScript, and PHP, and I also worked with modern frameworks and tools such as Laravel, React, Node.js, and Git.',
      'hsdiploma': 'Technical Baccalaureate in Electrical Sciences',
      'hassan': 'Hassan II Qualifying High School',
      'hassanDesc': 'High school diploma specialized in electrical sciences, building a strong foundation in mathematics and applied sciences.',
      
      // Certificates
      'gitCert': 'Git & GitHub Certificate',
      'freePlatform': 'FreeCodeCamp / OpenClassrooms',
      'gitDesc': 'Successfully completed a free course covering version control using Git and collaboration through GitHub. Learned branching, commits, pull requests, and best practices for real-world projects.',
      'lifeCert': 'Life Skills Certificate',
      'rahalSchool': 'Rahal El Farouq High School',
      'lifeDesc': 'I earned this certificate during my life skills training, where I learned useful things like communication and problem-solving.',
      
      // Experience
      'freelancer': 'IT Freelancer',
      'independent': 'Independent Web Developer',
      'independentDesc': 'Creation and updating of web pages using HTML/CSS, developing custom web solutions for local and international clients.',
      'mobileTech': 'Mobile Technician',
      'samir': 'Samir Mobile',
      'samirDesc': 'Mobile phone repair, formatting and system maintenance, developing technical skills in hardware and software.',
      
      // Skills Section
      'skills': 'Skills',
      'technicalSkills': 'Technical Skills',
      'professionalSkills': 'Professional Skills',
      'languageSkills': 'Language Skills',
      
      // Technical Skills
      'frontend': 'Frontend',
      'backend': 'Backend',
      'databases': 'Databases',
      'tools': 'Tools & Others',
      'mysql': 'MySQL',
      'mongodb': 'MongoDB',
      
      // Professional Skills
      'problemSolving': 'Problem Solving',
      'teamwork': 'Teamwork',
      'communication': 'Communication',
      'planning': 'Planning',
      'adaptability': 'Adaptability',
      
      // Language Skills
      'arabic': 'Arabic',
      'french': 'French',
      'english': 'English',
      'deutsch': 'Deutsch',
      
      // Services Section
      'servicesHeadline': 'Services',
      'webDev': 'Web Development',
      'webDevDesc': 'I create modern and responsive websites and web applications using JavaScript, PHP, Laravel, React, and Node.js. My focus is on clean code, simple design, and great user experience.',
      'cybersecurity': 'Cybersecurity Basics',
      'cybersecurityDesc': 'I have knowledge of fundamental cybersecurity practices to help protect websites and applications from common threats, ensuring safer user data and secure environments.',
      'network': 'Network Fundamentals',
      'networkDesc': 'I understand basic networking concepts, which helps me optimize web performance and troubleshoot connectivity issues efficiently.',
      
      // Projects Section
      'projectsHeadline': 'Projects',
      'portfolio': 'Portfolio Website',
      'portfolioDesc': 'I built this personal portfolio from scratch using HTML, CSS, and JavaScript. It highlights my skills, showcases some of my projects, and gives a clear overview of my background. The design is clean, responsive, and easy to explore on any device.',
      'portfolioImgAlt': 'Portfolio project screenshot',
      'codeProject': 'View Source Code',
      'reviewProject': 'Live Demo',
      'sou9naTitle': 'Sou9na - Fruits & Veggies',
      'sou9naDesc': 'A fresh, fully responsive Moroccan-style online shop for fruits and vegetables. The design is clean, mobile-friendly, and highlights seasonal offers. It includes a local-market vibe with intuitive navigation and placeholder admin controls.',
      'sou9naImgAlt': 'Sou9na Fruits and Vegetables Website Preview',
      'inDev': 'In Development..',
      
      // Contact Section
      'contactHeadline': 'Contact Me',
      'contactName': 'Full Name',
      'contactEmail': 'Email',
      'phoneNumber': 'Phone Number',
      'subject': 'Subject',
      'contactMessage': 'Your Message',
      'contactSubmit': 'Send Message',
      
      // Footer
      'faq': 'FAQ',
      'footer': '© 2025 Abderrhman Settaoui. All rights reserved.'
  },
  
  fr: {
      // Meta and SEO
      'metaDescription': 'Portfolio d\'Abderrhman Settaoui, développeur full stack spécialisé dans les applications web modernes.',
      'logoAlt': 'Logo d\'Abderrhman Settaoui',
      'profileAlt': 'Photo de profil d\'Abderrhman Settaoui',
      
      // Navigation
      'nav.home': 'Accueil',
      'nav.resume': 'CV',
      'nav.skills': 'Compétences',
      'nav.services': 'Services',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      
      // Language names
      'lang.english': 'English',
      'lang.french': 'Français',
      'lang.arabic': 'العربية',
      
      // Home Section
      'welcome': 'Salut, C\'est <span>Abderrhman</span>',
      'aboutHeadline': 'Je suis un <span>Développeur Web Full Stack Junior</span>',
      'aboutText': 'De l\'électricité au codage, j\'ai toujours été curieux de savoir comment les choses fonctionnent. Je construis des sites web avec HTML, CSS, JavaScript, jQuery et Bootstrap. Je crée des applications web en utilisant PHP, Python, des APIs et MySQL. J\'apprends toujours et j\'explore des frameworks comme Laravel, React.js, Next.js et Django. J\'adore résoudre des problèmes et créer des solutions numériques utiles.',
      'contactMe': 'Me Contacter',
      'downloadCV': 'Télécharger CV',
      
      // Resume Section
      'my': 'Mon',
      'resume': 'CV',
      'educationTitle': 'Formation',
      'certificatesTitle': 'Certificats',
      'experienceTitle': 'Expérience',
      
      // Education
      'techDiploma': 'Technicien Spécialisé en Développement Web Full-Stack',
      'ofpptDesc': 'À l\'OFPPT, j\'ai appris à construire des sites web et applications dynamiques en utilisant des technologies comme HTML, CSS, JavaScript et PHP, et j\'ai aussi travaillé avec des frameworks et outils modernes comme Laravel, React, Node.js et Git.',
      'hsdiploma': 'Baccalauréat Technique en Sciences Électriques',
      'hassan': 'Lycée Qualifiant Hassan II',
      'hassanDesc': 'Diplôme d\'études secondaires spécialisé en sciences électriques, construisant une base solide en mathématiques et sciences appliquées.',
      
      // Certificates
      'gitCert': 'Certificat Git & GitHub',
      'freePlatform': 'FreeCodeCamp / OpenClassrooms',
      'gitDesc': 'J\'ai terminé avec succès un cours gratuit couvrant le contrôle de version avec Git et la collaboration via GitHub. J\'ai appris les branches, commits, pull requests et les meilleures pratiques pour des projets du monde réel.',
      'lifeCert': 'Certificat de Compétences de Vie',
      'rahalSchool': 'Lycée Rahal El Farouq',
      'lifeDesc': 'J\'ai obtenu ce certificat pendant ma formation aux compétences de vie, où j\'ai appris des choses utiles comme la communication et la résolution de problèmes.',
      
      // Experience
      'freelancer': 'Freelance IT',
      'independent': 'Développeur Web Indépendant',
      'independentDesc': 'Création et mise à jour de pages web en utilisant HTML/CSS, développement de solutions web personnalisées pour des clients locaux et internationaux.',
      'mobileTech': 'Technicien Mobile',
      'samir': 'Samir Mobile',
      'samirDesc': 'Réparation de téléphones mobiles, formatage et maintenance système, développement de compétences techniques en matériel et logiciel.',
      
      // Skills Section
      'skills': 'Compétences',
      'technicalSkills': 'Compétences Techniques',
      'professionalSkills': 'Compétences Professionnelles',
      'languageSkills': 'Compétences Linguistiques',
      
      // Technical Skills
      'frontend': 'Frontend',
      'backend': 'Backend',
      'databases': 'Bases de Données',
      'tools': 'Outils & Autres',
      'mysql': 'MySQL',
      'mongodb': 'MongoDB',
      
      // Professional Skills
      'problemSolving': 'Résolution de Problèmes',
      'teamwork': 'Travail d\'Équipe',
      'communication': 'Communication',
      'planning': 'Planification',
      'adaptability': 'Adaptabilité',
      
      // Language Skills
      'arabic': 'Arabe',
      'french': 'Français',
      'english': 'Anglais',
      'deutsch': 'Allemand',
      
      // Services Section
      'servicesHeadline': 'Services',
      'webDev': 'Développement Web',
      'webDevDesc': 'Je crée des sites web et applications web modernes et responsives en utilisant JavaScript, PHP, Laravel, React et Node.js. Je me concentre sur un code propre, un design simple et une excellente expérience utilisateur.',
      'cybersecurity': 'Bases de Cybersécurité',
      'cybersecurityDesc': 'J\'ai des connaissances en pratiques fondamentales de cybersécurité pour aider à protéger les sites web et applications des menaces communes, assurant des données utilisateur plus sûres et des environnements sécurisés.',
      'network': 'Fondamentaux Réseau',
      'networkDesc': 'Je comprends les concepts de base du réseau, ce qui m\'aide à optimiser les performances web et à résoudre efficacement les problèmes de connectivité.',
      
      // Projects Section
      'projectsHeadline': 'Projets',
      'portfolio': 'Site Portfolio',
      'portfolioDesc': 'J\'ai construit ce portfolio personnel à partir de zéro en utilisant HTML, CSS et JavaScript. Il met en évidence mes compétences, présente certains de mes projets et donne un aperçu clair de mon parcours. Le design est propre, responsive et facile à explorer sur tout appareil.',
      'portfolioImgAlt': 'Capture d\'écran du projet portfolio',
      'codeProject': 'Voir le Code Source',
      'reviewProject': 'Démo en Direct',
      'sou9naTitle': 'Sou9na - Fruits & Légumes',
      'sou9naDesc': 'Une boutique en ligne fraîche et entièrement responsive de style marocain pour fruits et légumes. Le design est propre, mobile-friendly et met en évidence les offres saisonnières. Il inclut une ambiance de marché local avec une navigation intuitive et des contrôles d\'administration provisoires.',
      'sou9naImgAlt': 'Aperçu du site Sou9na Fruits et Légumes',
      'inDev': 'En Développement..',
      
      // Contact Section
      'contactHeadline': 'Me Contacter',
      'contactName': 'Nom Complet',
      'contactEmail': 'Email',
      'phoneNumber': 'Numéro de Téléphone',
      'subject': 'Sujet',
      'contactMessage': 'Votre Message',
      'contactSubmit': 'Envoyer Message',
      
      // Footer
      'faq': 'FAQ',
      'footer': '© 2025 Abderrhman Settaoui. Tous droits réservés.'
  },
  
  ar: {
      // Meta and SEO
      'metaDescription': 'موقع عبد الرحمن ستاوي، مطور ويب متكامل متخصص في تطبيقات الويب الحديثة.',
      'logoAlt': 'شعار عبد الرحمن ستاوي',
      'profileAlt': 'صورة شخصية لعبد الرحمن ستاوي',
      
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.resume': 'السيرة الذاتية',
      'nav.skills': 'المهارات',
      'nav.services': 'الخدمات',
      'nav.projects': 'المشاريع',
      'nav.contact': 'اتصل بي',
      
      // Language names
      'lang.english': 'English',
      'lang.french': 'Français',
      'lang.arabic': 'العربية',
      
      // Home Section
      'welcome': 'مرحباً، أنا <span>عبد الرحمن</span>',
      'aboutHeadline': 'أنا <span>مطور ويب متكامل مبتدئ</span>',
      'aboutText': 'من الكهرباء إلى البرمجة، لطالما كنت فضولياً حول كيفية عمل الأشياء. أقوم ببناء مواقع الويب باستخدام HTML و CSS و JavaScript و jQuery و Bootstrap. أنشئ تطبيقات الويب باستخدام PHP و Python و APIs و MySQL. أتعلم دائماً وأستكشف أطر العمل مثل Laravel و React.js و Next.js و Django. أحب حل المشاكل وإنشاء حلول رقمية مفيدة.',
      'contactMe': 'اتصل بي',
      'downloadCV': 'تحميل السيرة الذاتية',
      
      // Resume Section
      'my': 'سيرتي',
      'resume': 'الذاتية',
      'educationTitle': 'التعليم',
      'certificatesTitle': 'الشهادات',
      'experienceTitle': 'الخبرة',
      
      // Education
      'techDiploma': 'تقني متخصص في تطوير الويب المتكامل',
      'ofpptDesc': 'في OFPPT، تعلمت كيفية بناء مواقع الويب والتطبيقات الديناميكية باستخدام تقنيات مثل HTML و CSS و JavaScript و PHP، كما عملت مع أطر العمل والأدوات الحديثة مثل Laravel و React و Node.js و Git.',
      'hsdiploma': 'بكالوريا تقنية في العلوم الكهربائية',
      'hassan': 'ثانوية الحسن الثاني التأهيلية',
      'hassanDesc': 'دبلوم الدراسة الثانوية متخصص في العلوم الكهربائية، بناء أساس قوي في الرياضيات والعلوم التطبيقية.',
      
      // Certificates
      'gitCert': 'شهادة Git و GitHub',
      'freePlatform': 'FreeCodeCamp / OpenClassrooms',
      'gitDesc': 'أكملت بنجاح دورة مجانية تغطي التحكم في الإصدارات باستخدام Git والتعاون من خلال GitHub. تعلمت التفرع والالتزامات وطلبات السحب وأفضل الممارسات للمشاريع الحقيقية.',
      'lifeCert': 'شهادة المهارات الحياتية',
      'rahalSchool': 'ثانوية رحال الفاروق',
      'lifeDesc': 'حصلت على هذه الشهادة خلال تدريبي على المهارات الحياتية، حيث تعلمت أشياء مفيدة مثل التواصل وحل المشاكل.',
      
      // Experience
      'freelancer': 'مستقل في تكنولوجيا المعلومات',
      'independent': 'مطور ويب مستقل',
      'independentDesc': 'إنشاء وتحديث صفحات الويب باستخدام HTML/CSS، تطوير حلول ويب مخصصة للعملاء المحليين والدوليين.',
      'mobileTech': 'فني الهواتف المحمولة',
      'samir': 'سمير موبايل',
      'samirDesc': 'إصلاح الهواتف المحمولة والتنسيق وصيانة النظام، تطوير المهارات التقنية في الأجهزة والبرمجيات.',
      
      // Skills Section
      'skills': 'المهارات',
      'technicalSkills': 'المهارات التقنية',
      'professionalSkills': 'المهارات المهنية',
      'languageSkills': 'المهارات اللغوية',
      
      // Technical Skills
      'frontend': 'الواجهة الأمامية',
      'backend': 'الواجهة الخلفية',
      'databases': 'قواعد البيانات',
      'tools': 'الأدوات وأخرى',
      'mysql': 'MySQL',
      'mongodb': 'MongoDB',
      
      // Professional Skills
      'problemSolving': 'حل المشاكل',
      'teamwork': 'العمل الجماعي',
      'communication': 'التواصل',
      'planning': 'التخطيط',
      'adaptability': 'القدرة على التكيف',
      
      // Language Skills
      'arabic': 'العربية',
      'french': 'الفرنسية',
      'english': 'الإنجليزية',
      'deutsch': 'الألمانية',
      
      // Services Section
      'servicesHeadline': 'الخدمات',
      'webDev': 'تطوير الويب',
      'webDevDesc': 'أنشئ مواقع ويب وتطبيقات ويب حديثة ومتجاوبة باستخدام JavaScript و PHP و Laravel و React و Node.js. تركيزي على الكود النظيف والتصميم البسيط وتجربة المستخدم الرائعة.',
      'cybersecurity': 'أساسيات الأمن السيبراني',
      'cybersecurityDesc': 'لدي معرفة بممارسات الأمن السيبراني الأساسية لمساعدة في حماية مواقع الويب والتطبيقات من التهديدات الشائعة، ضمان بيانات المستخدمين الآمنة والبيئات المؤمنة.',
      'network': 'أساسيات الشبكات',
      'networkDesc': 'أفهم مفاهيم الشبكات الأساسية، مما يساعدني على تحسين أداء الويب واستكشاف مشاكل الاتصال وإصلاحها بكفاءة.',
      
      // Projects Section
      'projectsHeadline': 'المشاريع',
      'portfolio': 'موقع المحفظة',
      'portfolioDesc': 'بنيت هذه المحفظة الشخصية من الصفر باستخدام HTML و CSS و JavaScript. تسلط الضوء على مهاراتي، تعرض بعض مشاريعي، وتعطي نظرة عامة واضحة عن خلفيتي. التصميم نظيف ومتجاوب وسهل الاستكشاف على أي جهاز.',
      'portfolioImgAlt': 'لقطة شاشة لمشروع المحفظة',
      'codeProject': 'عرض الكود المصدري',
      'reviewProject': 'العرض المباشر',
      'sou9naTitle': 'سوقنا - الفواكه والخضار',
      'sou9naDesc': 'متجر إلكتروني طازج ومتجاوب بالكامل بأسلوب مغربي للفواكه والخضار. التصميم نظيف وصديق للجوال ويسلط الضوء على العروض الموسمية. يتضمن أجواء السوق المحلي مع التنقل البديهي وضوابط الإدارة المؤقتة.',
      'sou9naImgAlt': 'معاينة موقع سوقنا للفواكه والخضار',
      'inDev': 'قيد التطوير..',
      
      // Contact Section
      'contactHeadline': 'اتصل بي',
      'contactName': 'الاسم الكامل',
      'contactEmail': 'البريد الإلكتروني',
      'phoneNumber': 'رقم الهاتف',
      'subject': 'الموضوع',
      'contactMessage': 'رسالتك',
      'contactSubmit': 'إرسال الرسالة',
      
      // Footer
      'faq': 'الأسئلة الشائعة',
      'footer': '© 2025 عبد الرحمن ستاوي. جميع الحقوق محفوظة.'
  }
};

// Language configuration with RTL support
const languageConfig = {
  en: { dir: 'ltr', flag: 'us' },
  fr: { dir: 'ltr', flag: 'fr' },
  ar: { dir: 'rtl', flag: 'sa' }
};

// Current language
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
}

// Toggle dropdown visibility
function toggleDropdown() {
  const dropdownList = document.getElementById('langOptions');
  if (dropdownList) {
    dropdownList.classList.toggle('show');
  }
}

// Close dropdown
function closeDropdown() {
  const dropdownList = document.getElementById('langOptions');
  if (dropdownList) {
    dropdownList.classList.remove('show');
  }
}

// Change language function
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

  // Update meta description
  updateMetaDescription(langCode);

  // Update all translatable elements
  updateTranslations(langCode);

  // Update placeholders
  updatePlaceholders(langCode);

  // Update alt attributes
  updateAltAttributes(langCode);

  // Update dropdown button
  updateDropdownButton(langCode);

  // Save preference
  try {
    localStorage.setItem('preferredLanguage', langCode);
  } catch (e) {
    console.warn('localStorage not available');
  }

  console.log(`Language changed to: ${langCode}`);
}

// Update meta description
function updateMetaDescription(langCode) {
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[langCode]['metaDescription']) {
      metaDesc.setAttribute('content', translations[langCode]['metaDescription']);
  }
}

// Update all translations on the page
function updateTranslations(langCode) {
  const elementsToTranslate = document.querySelectorAll('[data-i18n]');
  
  elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = translations[langCode][key];
      
      if (translation) {
          element.innerHTML = translation;
      } else {
          console.warn(`Translation missing for key: ${key} in language: ${langCode}`);
      }
  });
}

// Update placeholder attributes
function updatePlaceholders(langCode) {
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  
  placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = translations[langCode][key];
      
      if (translation) {
          element.setAttribute('placeholder', translation);
      }
  });
  
  // Update regular placeholders using data-i18n
  const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
  inputs.forEach(input => {
      const placeholder = input.getAttribute('placeholder');
      // Map common placeholders to translation keys
      const placeholderMap = {
          'Full Name': 'contactName',
          'Email': 'contactEmail',
          'Phone Number': 'phoneNumber',
          'Subject': 'subject',
          'Your Message': 'contactMessage'
      };
      
      const key = placeholderMap[placeholder];
      if (key && translations[langCode][key]) {
          input.setAttribute('placeholder', translations[langCode][key]);
      }
  });
}

// Update alt attributes
function updateAltAttributes(langCode) {
  const altElements = document.querySelectorAll('[data-i18n-alt]');
  
  altElements.forEach(element => {
      const key = element.getAttribute('data-i18n-alt');
      const translation = translations[langCode][key];
      
      if (translation) {
          element.setAttribute('alt', translation);
      }
  });
}

// Update dropdown button appearance
function updateDropdownButton(langCode) {
  const dropdownBtn = document.getElementById('selected');
  if (!dropdownBtn) return;

  const config = languageConfig[langCode];
  const flagImg = dropdownBtn.querySelector('.flag-icon');
  
  // Update flag
  if (flagImg) {
    flagImg.src = `https://flagcdn.com/w20/${config.flag}.png`;
  }
  
  // Update text - find the text content after the flag
  const langName = translations[langCode][`lang.${getLangName(langCode)}`];
  if (langName) {
      // Update the text content directly
      dropdownBtn.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
              node.textContent = ' ' + langName;
          }
      });
  }
}

// Helper function to get language name key
function getLangName(langCode) {
  const langMap = {
      'en': 'english',
      'fr': 'french',
      'ar': 'arabic'
  };
  return langMap[langCode] || 'english';
}

// Keyboard accessibility
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
            const selectedLang = e.currentTarget.getAttribute('data-value');
            changeLanguage(selectedLang);
            closeDropdown();
        }
    });
  });
}

// Initialize keyboard accessibility after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupKeyboardAccessibility();
  console.log('Portfolio translation system loaded! 🌍');
  console.log('Available languages: English, Français, العربية');
});