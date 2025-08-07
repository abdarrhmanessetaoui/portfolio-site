document.addEventListener('DOMContentLoaded', () => {

  // ===== Body visible on load =====
  document.body.classList.add('visible');

  // ===== Menu toggle =====
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  const dropdown = document.getElementById('langDropdown');
  const selected = document.getElementById('selected');
  const options = document.getElementById('langOptions');
  const allOptions = [...options.querySelectorAll('div')];
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
      profileAlt: "Profile picture",
      //cv
      my: "My",
      resume: "Resume",
      educationTitle: "<i class='bx bxs-graduation'></i>Education",
      ofpptTitle: "Technician Specialized in Full-Stack Web Development",
      ofpptSchool: "OFPPT - ISTA NTIC SYBA, Marrakech",
      ofpptDesc: "At OFPPT, I learned how to build dynamic websites and applications using technologies like HTML, CSS, JavaScript, and PHP, and I also worked with modern frameworks and tools such as Laravel, React, Node.js, and Git.",
      hsdiploma: "Technical Baccalaureate in Electrical Sciences",
      hassan: "Hassan II Qualifying High School, Marrakech",
      hassanDesc: "High school diploma specialized in electrical sciences, building a strong foundation in mathematics and applied sciences.",
      certificatesTitle: "<i class='bx bxs-certification'></i>Certificates",
      gitCert: "Git & GitHub Certificate",
      freePlatform: "Udemy",
      gitDesc: "Successfully completed a free course covering version control using Git and collaboration through GitHub. Learned branching, commits, pull requests, and best practices for real-world projects.",
      lifeCert: "Life Skills Certificate",
      rahal: "Rahal El Farouq High School",
      lifeDesc: "I earned this certificate during my life skills training, where I learned useful things like communication and problem-solving.",
      experienceTitle: "Experience",
      freelancer: "IT Freelancer",
      independent: "Independent Web Developer",
      independentDesc: "Creation and updating of web pages using HTML/CSS, developing custom web solutions for local and international clients.",
      PCTech: "PC Technician",
      samir: "Samir Computer",
      samirDesc: "Computer repair, system maintenance and formatting; along with developing technical skills in hardware and software.",
      //skills
      my2: "My",
      skills: "Skills",
      technicalSkills: "Technical Skills",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools & Others",
      professionalSkills: "Professional Skills",
      problemSolving: "Problem Solving",
      teamwork: "Teamwork",
      communication: "Communication",
      planning: "Planning",
      adaptability: "Adaptability",
      languageSkills: "Language Skills",
      arabic: "Arabic",
      french: "French",
      english: "English",
      deutsch: "Deutsch",
      //services
      servicesHeadline: "<span>Services</span>",
      webDev: "Web Development",
      webDevDesc: "I create modern and responsive websites and web applications using JavaScript, PHP, Laravel, React, and Node.js. My focus is on clean code, simple design, and great user experience.",
      cybersecurity: "Cybersecurity Basics",
      cybersecurityDesc: "I have knowledge of fundamental cybersecurity practices to help protect websites and applications from common threats, ensuring safer user data and secure environments.",
      network: "Network Fundamentals",
      networkDesc: "I understand basic networking concepts, which helps me optimize web performance and troubleshoot connectivity issues efficiently.",
      //projects
      "projectsHeadline": "Projects",
      "portfolio": "Portfolio Website",
      "portfolioDesc": "I built this personal portfolio from scratch using HTML, CSS, and JavaScript. It highlights my skills, showcases some of my projects, and gives a clear overview of my background. The design is clean, responsive, and easy to explore on any device.",
      "codeProject": "View Source Code",
      "reviewProject": "Live Demo",
      "portfolioImgAlt": "Portfolio project screenshot",
      "sou9naTitle": "Sou9na - Fruits & Veggies",
      "sou9naDesc": "A fresh, fully responsive Moroccan-style online shop for fruits and vegetables. The design is clean, mobile-friendly, and highlights seasonal offers. It includes a local-market vibe with intuitive navigation and placeholder admin controls.",
      "sou9naImgAlt": "Sou9na Fruits and Vegetables Website Preview",
      "inDev": "In Development..",
      //contact
      contactHeadline: "Contact Me",
      contactName: "Full Name",
      contactEmail: "Email",
      contactPhone: "Phone Number",
      contactSubject: "Subject",
      contactMessage: "Your Message",
      contactSubmit: "Send Message",
      //footer
      "faq": "Home",
      "nav.resume": "Resume",
      "nav.skills": "Skills",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "footer": "&copy; <span data-i18n-number>2025</span> Abderrhman Settaoui. All rights reserved.",
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
      profileAlt: "Photo de profil",
      //cv
      my: "Mon",
      resume: "CV",
      educationTitle: "<i class='bx bxs-graduation'></i>Éducation",
      ofpptTitle: "Technicien Spécialisé en Développement Web Full-Stack",
      ofpptSchool: "OFPPT - ISTA NTIC SYBA, Marrakech",
      ofpptDesc: `À l'OFPPT, j'ai appris à créer des sites web et des applications dynamiques avec des technologies comme HTML, CSS, JavaScript et PHP.
      J'ai également travaillé avec des frameworks et outils modernes tels que Laravel, React, Node.js et Git.`,
      hsdiploma: "Baccalauréat Technique en Sciences Électriques",
      hassan: "Lycée Qualifiant Hassan II, Marrakech",
      hassanDesc: "Baccalauréat spécialisé en sciences électriques, avec une base solide en mathématiques et sciences appliquées.",
      certificatesTitle: "<i class='bx bxs-certification'></i>Certificats",
      gitCert: "Certificat Git & GitHub",
      freePlatform: "Udemy",
      gitDesc: "Cours gratuit complété sur le contrôle de version avec Git et la collaboration via GitHub. Apprentissage des branches, commits, pull requests et meilleures pratiques.",
      lifeCert: "Certificat de Compétences de Vie",
      rahal: "Lycée Rahal El Farouq",
      lifeDesc: "J'ai obtenu ce certificat lors de ma formation aux compétences de vie, où j'ai appris des choses utiles comme la communication et la résolution de problèmes.",
      experienceTitle: "<i class='bx bxs-briefcase'></i>Expérience",
      freelancer: "Freelance en informatique",
      independent: "Développeur Web Indépendant",
      independentDesc: "Création et mise à jour de pages web en HTML/CSS, développement de solutions personnalisées pour des clients locaux et internationaux.",
      PCTech: "Technicien PC",
      samir: "Samir Informatique",
      samirDesc: "Réparation d'ordinateurs, maintenance système et formatage ; développement des compétences techniques en matériel et logiciel.",
      //skills
      my2: "Mon",
      skills: "Compétences",
      technicalSkills: "Compétences techniques",
      frontend: " Partie frontale",
      backend: "Partie serveur",
      databases: "Bases de données",
      tools: "Outils & autres",
      professionalSkills: "Compétences professionnelles",
      problemSolving: "Résolution de problèmes",
      teamwork: "Travail en équipe",
      communication: "Communication",
      planning: "Planification",
      adaptability: "Adaptabilité",
      languageSkills: "Compétences linguistiques",
      arabic: "Arabe",
      french: "Français",
      english: "Anglais",
      deutsch: "Allemand",
      //services
      "servicesHeadline": "Services",
      "webDev": "Développement Web",
      "webDevDesc": "Je crée des sites web et des applications web modernes et responsives en utilisant JavaScript, PHP, Laravel, React et Node.js. Je me concentre sur un code propre, un design simple et une excellente expérience utilisateur.",
      "cybersecurity": "Notions de Cybersécurité",
      "cybersecurityDesc": "J'ai des connaissances fondamentales en cybersécurité pour aider à protéger les sites et les applications contre les menaces courantes, assurant la sécurité des données utilisateurs.",
      "network": "Bases des Réseaux",
      "networkDesc": "Je comprends les concepts fondamentaux des réseaux, ce qui m'aide à optimiser les performances web et à résoudre efficacement les problèmes de connectivité.",
      //projects
      "projectsHeadline": "Projets",
      "portfolio": "Site Portfolio",
      "portfolioDesc": "J'ai créé ce portfolio personnel de zéro avec HTML, CSS et JavaScript. Il met en valeur mes compétences, présente certains de mes projets, et offre un aperçu clair de mon parcours. Le design est épuré, responsive, et facile à consulter sur tous les appareils.",
      "codeProject": "Voir le Code Source",
      "reviewProject": "Démo en Ligne",
      "portfolioImgAlt": "Capture d'écran du projet portfolio",
      "sou9naTitle": "Sou9na - Fruits & Légumes",
      "sou9naDesc": "Une boutique en ligne marocaine fraîche et entièrement responsive pour fruits et légumes. Le design est clair, adapté aux mobiles, et met en avant les offres saisonnières. Elle propose une ambiance de marché local avec une navigation intuitive et des contrôles admin fictifs.",
      "sou9naImgAlt": "Aperçu du site Sou9na Fruits et Légumes",
      "inDev": "En développement..",
      //contact
      contactHeadline: "Me Contacter",
      contactName: "Nom Complet",
      contactEmail: "Email",
      contactPhone: "Numéro de Téléphone",
      contactSubject: "Sujet",
      contactMessage: "Votre Message",
      contactSubmit: "Envoyer le Message",
      //footer
      "faq": "Accueil",
      "nav.resume": "CV",
      "nav.skills": "Compétences",
      "nav.services": "Services",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "footer": "&copy; <span data-i18n-number>2025</span> Abderrhman Settaoui. Tous droits réservés.",
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
      welcome: "مرحبًا، أنا <span>عبد الرحمان</span>",
      aboutHeadline: "أنا <span>مطور ويب متكامل مبتدئ</span>",
      aboutText: `من الكهرباء إلى البرمجة، لطالما كنت فضوليًا لمعرفة كيفية عمل الأشياء.
        أبني مواقع باستخدام HTML، CSS، JavaScript، jQuery، وBootstrap.
        أطور تطبيقات ويب باستخدام PHP، Python، APIs، وMySQL.
        أتعلم دائمًا وأستكشف أطر العمل مثل Laravel، React.js، Next.js، وDjango.
        أحب حل المشكلات وإنشاء حلول رقمية مفيدة.`,
      contactMe: "اتصل بي",
      downloadCV: "تحميل السيرة الذاتية",
      profileAlt: "صورة الملف الشخصي",
      //cv
      my: "السيرة",
      resume: "الذاتية",
      educationTitle: "<i class='bx bxs-graduation'></i>التعليم",
      ofpptTitle: "تقني متخصص في تطوير الويب الكامل (Full-Stack)",
      ofpptSchool: "مكتب التكوين المهني - ISTA NTIC السبا، مراكش",
      ofpptDesc: `في OFPPT، تعلمت كيفية إنشاء مواقع وتطبيقات ويب ديناميكية باستخدام تقنيات مثل HTML، CSS، JavaScript و PHP.
كما اشتغلت على أطر وأدوات حديثة مثل Laravel، React، Node.js و Git.`,
      hsdiploma: "البكالوريا التقنية في العلوم الكهربائية",
      hassan: "ثانوية الحسن الثاني التأهيلية، مراكش",
      hassanDesc: "شهادة البكالوريا تخصص العلوم الكهربائية، مع أساس قوي في الرياضيات والعلوم التطبيقية.",
      certificatesTitle: "<i class='bx bxs-certification'></i>الشهادات",
      gitCert: "شهادة Git و GitHub",
      freePlatform: "أوديمي",
      gitDesc: "أكملت دورة مجانية حول التحكم في الإصدارات باستخدام Git والتعاون عبر GitHub. تعلمت الفروع، والـ commits، وطلبات السحب، وأفضل الممارسات.",
      lifeCert: "شهادة المهارات الحياتية",
      rahal: "ثانوية رحال الفاروق",
      lifeDesc: "حصلت على هذه الشهادة خلال تدريبي على المهارات الحياتية، حيث تعلمت أشياء مفيدة مثل التواصل وحل المشكلات.",
      experienceTitle: "<i class='bx bxs-briefcase'></i>الخبرة",
      freelancer: "مطور حر",
      independent: "مطور ويب مستقل",
      independentDesc: "إنشاء وتحديث صفحات الويب باستخدام HTML/CSS، وتطوير حلول ويب مخصصة للعملاء المحليين والدوليين.",
      PCTech: " صيانة حواسيب ",
      samir: "سمّير كمبيوتر",
      samirDesc: "إصلاح الحواسيب، وتحديث النظام، وصيانة الأجهزة والبرمجيات، وتطوير المهارات التقنية.",
      //skills
      my2: " ",
      skills: "المهارات",
      technicalSkills: "المهارات التقنية",
      frontend: "	الواجهة الأمامية",
      backend: "	الواجهة الخلفية",
      databases: "قواعد البيانات",
      tools: "الأدوات وغيرها",
      professionalSkills: "المهارات المهنية",
      problemSolving: "حل المشكلات",
      teamwork: "العمل الجماعي",
      communication: "التواصل",
      planning: "التخطيط",
      adaptability: "التكيف",
      languageSkills: "مهارات اللغة",
      arabic: "العربية",
      french: "الفرنسية",
      english: "الإنجليزية",
      deutsch: "الألمانية",
      //services
      "servicesHeadline": "الخدمات",
      "webDev": "تطوير الويب",
      "webDevDesc": "كنطوّر مواقع وتطبيقات ويب عصرية ومتجاوبة باستخدام JavaScript، PHP، Laravel، React وNode.js. كنركّز على كود نقي، تصميم بسيط وتجربة مستخدم ممتازة.",
      "cybersecurity": "أمن المعلومات",
      "cybersecurityDesc": "عندي دراية بأساسيات الأمن السيبراني، وكنستعملها باش نحمي المواقع والتطبيقات من التهديدات الشائعة ونأمن بيانات المستخدمين.",
      "network": "الشبكات",
      "networkDesc": "عندي فهم جيد للمفاهيم الأساسية ديال الشبكات، وهادشي كيساعدني نحسّن الأداء ونتعامل مزيان مع مشاكل الاتصال.",  
      //projects
      "projectsHeadline": "المشاريع",
      "portfolio": "موقع البورتفوليو",
      "portfolioDesc": "صممت هذا الموقع الشخصي من البداية باستخدام HTML وCSS وJavaScript. يعرض مهاراتي، ويعرض بعض مشاريعي، ويوضح خلفيتي بشكل واضح. التصميم نظيف ومتجاوب وسهل الاستخدام على كل الأجهزة.",
      "codeProject": "عرض الكود البرمجي",
      "reviewProject": "عرض مباشر",
      "portfolioImgAlt": "صورة لمشروع البورتفوليو",
      "sou9naTitle": "سوقنا - الفواكه والخضروات",
      "sou9naDesc": "متجر إلكتروني مغربي حديث ومتجاوب مخصص للفواكه والخضروات. التصميم بسيط ومتوافق مع الهواتف، ويبرز العروض الموسمية. يحتوي على أجواء السوق المحلي مع تنقل سهل ووظائف إدارية تجريبية.",
      "sou9naImgAlt": "معاينة موقع سوقنا للفواكه والخضروات",
      "inDev": "قيد التطوير...",
      //contact
      contactHeadline: "اتصل بي",
      contactName: "الاسم الكامل",
      contactEmail: "البريد الإلكتروني",
      contactPhone: "رقم الهاتف",
      contactSubject: "الموضوع",
      contactMessage: "رسالتك",
      contactSubmit: "أرسل الرسالة",
      //footer
      "faq": "الرئيسية",
      "nav.resume": "السيرة الذاتية",
      "nav.skills": "المهارات",
      "nav.services": "الخدمات",
      "nav.projects": "المشاريع",
      "nav.contact": "اتصل بي",
      "footer": "&copy; <span data-i18n-number>2025</span> عبد الرحمان الستاوي. جميع الحقوق محفوظة.",
    }
  };

  function updateOptionsDisplay(selectedValue) {
    allOptions.forEach(option => {
      option.style.display = (option.dataset.value === selectedValue) ? 'none' : 'flex';
    });
  }

  function toArabicNumbers(str) {
    const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return str.replace(/\d/g, d => arabicDigits[d]).replace('%', '\u00A0٪');
  }
  function fromArabicNumbers(str) {
    const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    const englishDigits = ['0','1','2','3','4','5','6','7','8','9'];
  
    return str.replace(/[\u0660-\u0669]/g, d => englishDigits[arabicDigits.indexOf(d)]).replace('\u00A0٪', '%');
  }
  function convertNumbersByLang(str, lang) {
    if (lang === 'ar') {
      return toArabicNumbers(str);
    } else {
      return fromArabicNumbers(str);
    }
  }
  
  

  function applyTranslation(lang) {
    
   // Translate placeholder attributes
   document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  //change de logo 
  const logoImg = document.querySelector('.logo img');
  if (lang === 'ar') {
    logoImg.src = 'img/logoarb.png';
  } else if (lang === 'fr') {
    logoImg.src = 'img/logohd_nobg.png';
  } else {
    logoImg.src = 'img/logohd_nobg.png';
  }

// Translate input `value` attributes (like buttons)
document.querySelectorAll('input[data-i18n-value]').forEach(el => {
  const key = el.getAttribute('data-i18n-value');
  if (translations[lang] && translations[lang][key]) {
    el.setAttribute('value', translations[lang][key]);
  }
});

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
      
    });

    

    const elements2 = document.querySelectorAll('[data-i18n-number]');
    elements2.forEach(el => {
      if (lang === 'ar') {
        el.style.marginRight = '0';
        el.style.marginLeft = '10px';
      } else {
        el.style.marginLeft = '6px';
        el.style.marginRight = '0';
      }
      const raw = el.textContent.trim();
      let value = convertNumbersByLang(raw, lang);
      el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('alt', translations[lang][key]);
      }
    });

    document.querySelectorAll('[data-i18n-href]').forEach(el => {
      const key = el.getAttribute('data-i18n-href');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('href', translations[lang][key]);
      }
    });

    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    

    const aboutParagraph = document.querySelector('[data-i18n="aboutText"]');
    const flagIcons = document.querySelectorAll('.flag-icon');

    flagIcons.forEach(icon => {
      if (lang === 'ar') {
        icon.style.marginLeft = '8px';
        icon.style.marginRight = '0';
      } else {
        icon.style.marginRight = '8px';
        icon.style.marginLeft = '0';
      }
    });

    if (aboutParagraph) {
      if (lang === 'ar') {
        aboutParagraph.style.textAlign = 'right';
        aboutParagraph.style.paddingLeft = '0';
        aboutParagraph.style.paddingRight = '0rem';
      } else {
        aboutParagraph.style.textAlign = 'left';
        aboutParagraph.style.paddingRight = '0';
        aboutParagraph.style.paddingLeft = '0rem';
      }
    }
  }

  // Load saved language
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  const savedOption = Array.from(allOptions).find(opt => opt.dataset.value === savedLang);
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

  // Close options menu on click outside
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
    return rect.top <= window.innerHeight * 1 && rect.bottom >= 0;
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




//contact

const form = document.getElementById('contact-form');
const alertBox = document.getElementById('alert-box');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('..php/contact.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if(data.success) {
      showAlert(data.message, 'success');
      form.reset();
    } else {
      showAlert(data.error || 'An error occurred', 'error');
    }
  })
  .catch(() => {
    showAlert('Network error', 'error');
  });
});

function showAlert(message, type) {
  alertBox.textContent = message;
  alertBox.className = 'alert visible ' + type;

  setTimeout(() => {
    alertBox.classList.remove('visible');
  }, 3500);
}







});
