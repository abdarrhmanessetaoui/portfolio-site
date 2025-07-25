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

  // ====== Language Translation Logic ======
  const translations = {
    en: {
      nav: {
        home: "Home",
        resume: "Resume",
        skills: "Skills",
        services: "Services",
        projects: "Projects",
        contact: "Contact"
      },
      my: "My",
      resume: "Resume",
      educationTitle: "Education",
      digitalDev: "Digital Development",
      ofppt: "OFPPT NTIC Syba",
      ofpptDesc: "Specialized training in web development and digital technologies, covering both frontend and backend aspects of modern development.",
      hsdiploma: "Technical Baccalaureate in Electrical Sciences",
      hassan: "Hassan II Qualifying High School",
      hassanDesc: "High school diploma specialized in electrical sciences, building a strong foundation in mathematics and applied sciences.",
      certificatesTitle: "Certificates",
      'frontendCert': "Frontend Development Certificate",
      coursera: "Coursera / Meta",
      courseraDesc: "Completion of a professional certification in frontend technologies (HTML, CSS, JavaScript, React) focusing on practical applications and projects.",
      responsiveWeb: "Responsive Web Design",
      freecodecamp: "freeCodeCamp",
      freecodecampDesc: "Mastery of responsive web design principles, mobile-first approach, and CSS frameworks.",
      experienceTitle: "Experience",
      freelancer: "IT Freelancer",
      independent: "Independent Web Developer",
      independentDesc: "Creation and updating of web pages using HTML/CSS, developing custom web solutions for local and international clients.",
      mobileTech: "Mobile Technician",
      samir: "Samir Mobile",
      samirDesc: "Mobile phone repair, formatting and system maintenance, developing technical skills in hardware and software.",
      skillsHeadline: "Skills",
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
      languageSkills: "Languages Skills",
      arabic: "Arabic",
      french: "French",
      english: "English",
      deutsch: "Deutsch",
      servicesHeadline: "Services",
      webDev: "Web Development",
      webDevDesc: "I create modern and responsive websites and web applications using JavaScript, PHP, Laravel, React, and Node.js. My focus is on clean code, simple design, and great user experience.",
      cybersecurity: "Cybersecurity Basics",
      cybersecurityDesc: "I have knowledge of fundamental cybersecurity practices to help protect websites and applications from common threats, ensuring safer user data and secure environments.",
      network: "Network Fundamentals",
      networkDesc: "I understand basic networking concepts, which helps me optimize web performance and troubleshoot connectivity issues efficiently.",
      portfolio: "Portfolio Website",
      portfolioDesc: "I designed and built a personal portfolio website to showcase skills, projects, and experience with a clean and modern design. It is fully responsive and easy to navigate.",
      ecommerce: "E-commerce Website",
      ecommerceDesc: "I developed a full-featured online store where users can browse products, add items to their cart, and securely complete purchases. The site includes an admin panel for easy product management.",
      reviewProject: "Review Project",
      inDev: "In Development..",
      taskApp: "Task Management App",
      taskAppDesc: "This web application helps users organize their daily tasks with features like task creation, editing, and status tracking. It uses React for a smooth user experience.",
      faq: "FAQ",
      welcome: "Hi, It's <span>Abderrhman</span>",
      aboutHeadline: "I'm a <span>Junior Full Stack Web Developer</span>",
      aboutText: "From electricity to coding, I've always been curious about how things work. I build websites with HTML, CSS, JavaScript, jQuery, and Bootstrap. I create web apps using PHP, Python, APIs, and MySQL. I'm always learning and exploring frameworks like Laravel, React.js, Next.js, and Django. I love solving problems and making useful digital solutions.",
      projectsHeadline: "Projects",
      contactHeadline: "Contact <span>Me</span>",
      contactName: "Full Name",
      contactEmail: "Email",
      contactMessage: "Your Message",
      contactSubmit: "Send Message",
      footer: "© 2025 Abderrhman Settaoui. All rights reserved.",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      phoneNumber: "Phone Number",
      subject: "Subject",
      metaDescription: "Portfolio of Abderrhaman Settaoui, full stack developer specialized in modern web applications.",
      logoAlt: "Logo of Abderrhman Settaoui",
      profileAlt: "Profile picture of Abderrhman Settaoui",
      portfolioImgAlt: "Screenshot of portfolio project",
      ecommerceImgAlt: "Screenshot of e-commerce project",
      taskImgAlt: "Screenshot of task management app",
    },
    fr: {
      nav: {
        home: "Accueil",
        resume: "Parcours",
        skills: "Compétences",
        services: "Services",
        projects: "Projets",
        contact: "Contact"
      },
      my: "Mes",
      resume: "Parcours",
      educationTitle: "Éducation",
      digitalDev: "Développement numérique",
      ofppt: "OFPPT NTIC Syba",
      ofpptDesc: "Formation spécialisée en développement web et technologies numériques, couvrant les aspects frontend et backend du développement moderne.",
      hsdiploma: "Baccalauréat technique en sciences électriques",
      hassan: "Lycée Qualifiant Hassan II",
      hassanDesc: "Baccalauréat spécialisé en sciences électriques, construisant une base solide en mathématiques et sciences appliquées.",
      certificatesTitle: "Certificats",
      frontendCert: "Certificat de développement Frontend",
      coursera: "Coursera / Meta",
      courseraDesc: "Obtention d'une certification professionnelle en technologies frontend (HTML, CSS, JavaScript, React) axée sur des applications et projets pratiques.",
      responsiveWeb: "Web Design Responsive",
      freecodecamp: "freeCodeCamp",
      freecodecampDesc: "Maîtrise des principes du web design responsive, approche mobile-first et frameworks CSS.",
      experienceTitle: "Expérience",
      freelancer: "Freelance IT",
      independent: "Développeur Web Indépendant",
      independentDesc: "Création et mise à jour de pages web en HTML/CSS, développement de solutions web sur mesure pour des clients locaux et internationaux.",
      mobileTech: "Technicien Mobile",
      samir: "Samir Mobile",
      samirDesc: "Réparation de téléphones, formatage et maintenance système, développement de compétences techniques matérielles et logicielles.",
      skillsHeadline: "Mes Compétences",
      skills: "Compétences",
      technicalSkills: "Compétences techniques",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de données",
      tools: "Outils & Autres",
      professionalSkills: "Compétences professionnelles",
      problemSolving: "Résolution de problèmes",
      teamwork: "Travail d'équipe",
      communication: "Communication",
      planning: "Planification",
      adaptability: "Adaptabilité",
      languageSkills: "Compétences linguistiques",
      arabic: "Arabe",
      french: "Français",
      english: "Anglais",
      deutsch: "Allemand",
      servicesHeadline: "Services",
      webDev: "Développement Web",
      webDevDesc: "Je crée des sites web et applications modernes et responsives avec JavaScript, PHP, Laravel, React et Node.js. Je privilégie un code propre, un design simple et une excellente expérience utilisateur.",
      cybersecurity: "Bases de la cybersécurité",
      cybersecurityDesc: "Je possède des connaissances fondamentales en cybersécurité pour protéger les sites et applications contre les menaces courantes, assurant la sécurité des données utilisateurs.",
      network: "Notions de réseau",
      networkDesc: "Je comprends les concepts de base du réseau, ce qui m'aide à optimiser les performances web et à résoudre efficacement les problèmes de connectivité.",
      portfolio: "Site Portfolio",
      portfolioDesc: "J'ai conçu et développé un site portfolio personnel pour présenter mes compétences, projets et expériences avec un design moderne et épuré. Il est entièrement responsive et facile à naviguer.",
      ecommerce: "Site E-commerce",
      ecommerceDesc: "J'ai développé une boutique en ligne complète où les utilisateurs peuvent parcourir les produits, ajouter au panier et finaliser leurs achats en toute sécurité. Le site comprend un panneau d'administration pour la gestion des produits.",
      reviewProject: "Voir le projet",
      inDev: "En développement..",
      taskApp: "Application de gestion de tâches",
      taskAppDesc: "Cette application web aide les utilisateurs à organiser leurs tâches quotidiennes avec des fonctionnalités de création, édition et suivi. Elle utilise React pour une expérience fluide.",
      faq: "FAQ",
      welcome: "Salut, c'est <span>Abderrhman</span>",
      aboutHeadline: "Je suis <span>Développeur Full Stack Junior</span>",
      aboutText: "De l'électricité au codage, j'ai toujours été curieux de savoir comment les choses fonctionnent. Je crée des sites web avec HTML, CSS, JavaScript, jQuery et Bootstrap. Je développe des applications web avec PHP, Python, APIs et MySQL. J'apprends et explore toujours des frameworks comme Laravel, React.js, Next.js et Django. J'aime résoudre des problèmes et créer des solutions numériques utiles.",
      projectsHeadline: "Projets",
      contactHeadline: "Contact <span>Moi</span>",
      contactName: "Nom complet",
      contactEmail: "E-mail",
      contactMessage: "Votre message",
      contactSubmit: "Envoyer le message",
      footer: "© 2025 Abderrhman Settaoui. Tous droits réservés.",
      contactMe: "Contactez-moi",
      downloadCV: "Télécharger le CV",
      phoneNumber: "Numéro de téléphone",
      subject: "Sujet",
      metaDescription: "Portfolio d'Abderrhaman Settaoui, développeur full stack spécialisé dans les applications web modernes.",
      logoAlt: "Logo d'Abderrhman Settaoui",
      profileAlt: "Photo de profil d'Abderrhman Settaoui",
      portfolioImgAlt: "Capture d'écran du projet portfolio",
      ecommerceImgAlt: "Capture d'écran du projet e-commerce",
      taskImgAlt: "Capture d'écran de l'application de gestion de tâches",
    },
    ar: {
      nav: {
        home: "الرئيسية",
        resume: "السيرة الذاتية",
        skills: "المهارات",
        services: "الخدمات",
        projects: "المشاريع",
        contact: "اتصل"
      },
      faq: "الأسئلة الشائعة",
      my: "من",
      resume: "السيرة الذاتية",
      educationTitle: "التعليم",
      digitalDev: "تطوير رقمي",
      ofppt: "OFPPT NTIC Syba",
      ofpptDesc: "تدريب متخصص في تطوير الويب والتكنولوجيا الرقمية، مغطاة كلاً من الجانب الأمامي والخلفي للتطوير الحديث.",
      hsdiploma: "شهادة إعدادية في العلوم الكهربائية",
      hassan: "المدرسة الثانوية الإعدادية لحسن الثاني",
      hassanDesc: "شهادة إعدادية متخصصة في العلوم الكهربائية، بناء قاعدة قوية في الرياضيات والعلوم التطبيقية.",
      certificatesTitle: "الشهادات",
      frontendCert: "شهادة تطوير الواجهة الأمامية",
      coursera: "كورسيرا / ميتا",
      courseraDesc: "الحصول على شهادة إعدادية مهنية في تكنولوجيا الواجهة الأمامية (HTML، CSS، JavaScript، React) متمركز على تطبيقات ومشاريع عملية.",
      responsiveWeb: "تصميم ويب متجاوب",
      freecodecamp: "freeCodeCamp",
      freecodecampDesc: "الإتقان من مبادئ تصميم الويب المتجاوب، التقريب المتجاوب للجوال، وأطر CSS.",
      experienceTitle: "الخبرة",
      freelancer: "مستقل IT",
      independent: "مطور ويب مستقل",
      independentDesc: "إنشاء وتحديث صفحات الويب باستخدام HTML/CSS، تطوير حلول ويب مخصصة لعملاء محليين وعالميين.",
      mobileTech: "فني موبايل",
      samir: "سامير موبايل",
      samirDesc: "إصلاح الهواتف، تنظيف وصيانة النظام، تطوير مهارات فنية في الأجهزة والبرمجيات.",
      skillsHeadline: "المهارات",
      skills: "المهارات",
      technicalSkills: "المهارات الفنية",
      frontend: "الواجهة الأمامية",
      backend: "الجانب الخلفي",
      databases: "قواعد البيانات",
      tools: "أدوات وغيرها",
      professionalSkills: "المهارات المهنية",
      problemSolving: "حل المشاكل",
      teamwork: "العمل في الفريق",
      communication: "التواصل",
      planning: "التخطيط",
      adaptability: "التكيف",
      languageSkills: "المهارات اللغوية",
      arabic: "العربية",
      french: "الفرنسية",
      english: "الإنجليزية",
      deutsch: "الألمانية",
      servicesHeadline: "الخدمات",
      webDev: "تطوير الويب",
      webDevDesc: "أنا أنشأ مواقع وتطبيقات ويب حديثة ومتجاوبة مع JavaScript، PHP، Laravel، React، و Node.js. أهتم بالكود النظيف، التصميم البسيط، والتجربة المستخدم الممتازة.",
      cybersecurity: "أساسيات الأمان الرقمي",
      cybersecurityDesc: "لدي خبرة في الممارسات الأساسية للأمان الرقمي لمساعدتي على حماية المواقع والتطبيقات من التهديدات الشائعة، مضمونة أمان بيانات المستخدمين.",
      network: "أساسيات الشبكة",
      networkDesc: "أفهم مفاهيم الشبكة الأساسية، مما يساعدني على تحسين أداء الويب وحل المشاكل المتعلقة بالاتصال بكفاءة.",
      portfolio: "موقع السيرة الذاتية",
      portfolioDesc: "قمت بتصميم وبناء موقع سيرتي الذاتية الشخصي لعرض مهاراتي، المشاريع، والخبرة بتصميم حديث وبسيط. إنه متجاوب بالكامل وسهل التنقل.",
      ecommerce: "موقع التجارة الإلكترونية",
      ecommerceDesc: "قمت بتطوير متجر إلكتروني كامل حيث يمكن للمستخدمين تصفح المنتجات، إضافتها إلى سلة التسوق، وإكمال عمليات الشراء بأمان. يشمل الموقع لوحة الإدارة لإدارة المنتجات.",
      reviewProject: "مراجعة المشروع",
      inDev: "في التطوير..",
      taskApp: "تطبيق إدارة المهام",
      taskAppDesc: "هذا التطبيق الويب يساعد المستخدمين في تنظيم مهامهم اليومية باستخدام ميزات مثل إنشاء المهام، تحريرها، وتتبع حالتها. يستخدم React لتجربة مستخدم سلسة.",
      faq: "الأسئلة الشائعة",
      welcome: "مرحبًا، أنا <span>عبد الرحمن</span>",
      aboutHeadline: "أنا <span>مطور ويب متكامل مبتدئ</span>",
      aboutText: "من الكهرباء إلى البرمجة، كنت دائمًا فضوليًا لمعرفة كيف تعمل الأشياء. أبني مواقع إلكترونية باستخدام HTML وCSS وJavaScript وjQuery وBootstrap. أنشئ تطبيقات ويب باستخدام PHP وPython وAPIs وMySQL. أتعلم دائمًا وأستكشف أطر العمل مثل Laravel وReact.js وNext.js وDjango. أحب حل المشكلات وصنع حلول رقمية مفيدة.",
      projectsHeadline: "المشاريع",
      contactHeadline: "اتصل <span>بي</span>",
      contactName: "الاسم الكامل",
      contactEmail: "البريد الإلكتروني",
      contactMessage: "رسالتك",
      contactSubmit: "إرسال الرسالة",
      footer: "© 2025 عبد الرحمن ستاوي. جميع الحقوق محفوظة.",
      contactMe: "اتصل بي",
      downloadCV: "تحميل السيرة الذاتية",
      phoneNumber: "رقم الهاتف",
      subject: "الموضوع",
      metaDescription: "ملف عبد الرحمن سطاوي، مطور ويب متكامل متخصص في تطبيقات الويب الحديثة.",
      logoAlt: "شعار عبد الرحمن سطاوي",
      profileAlt: "صورة الملف الشخصي لعبد الرحمن سطاوي",
      portfolioImgAlt: "لقطة شاشة لمشروع السيرة الذاتية",
      ecommerceImgAlt: "لقطة شاشة لمشروع التجارة الإلكترونية",
      taskImgAlt: "لقطة شاشة لتطبيق إدارة المهام",
    }
  };

  const translationMap = {
    'nav.home': '[data-i18n="nav.home"]',
    'nav.resume': '[data-i18n="nav.resume"]',
    'nav.skills': '[data-i18n="nav.skills"]',
    'nav.services': '[data-i18n="nav.services"]',
    'nav.projects': '[data-i18n="nav.projects"]',
    'nav.contact': '[data-i18n="nav.contact"]',
    'my': '[data-i18n="my"]',
    'resume': '[data-i18n="resume"]',
    'educationTitle': '[data-i18n="educationTitle"]',
    'digitalDev': '[data-i18n="digitalDev"]',
    'ofppt': '[data-i18n="ofppt"]',
    'ofpptDesc': '[data-i18n="ofpptDesc"]',
    'hsdiploma': '[data-i18n="hsdiploma"]',
    'hassan': '[data-i18n="hassan"]',
    'hassanDesc': '[data-i18n="hassanDesc"]',
    'certificatesTitle': '[data-i18n="certificatesTitle"]',
    'frontendCert': '[data-i18n="frontendCert"]',
    'coursera': '[data-i18n="coursera"]',
    'courseraDesc': '[data-i18n="courseraDesc"]',
    'responsiveWeb': '[data-i18n="responsiveWeb"]',
    'freecodecamp': '[data-i18n="freecodecamp"]',
    'freecodecampDesc': '[data-i18n="freecodecampDesc"]',
    'experienceTitle': '[data-i18n="experienceTitle"]',
    'freelancer': '[data-i18n="freelancer"]',
    'independent': '[data-i18n="independent"]',
    'independentDesc': '[data-i18n="independentDesc"]',
    'mobileTech': '[data-i18n="mobileTech"]',
    'samir': '[data-i18n="samir"]',
    'samirDesc': '[data-i18n="samirDesc"]',
    'skillsHeadline': '[data-i18n="skillsHeadline"]',
    'skills': '[data-i18n="skills"]',
    'technicalSkills': '[data-i18n="technicalSkills"]',
    'frontend': '[data-i18n="frontend"]',
    'backend': '[data-i18n="backend"]',
    'databases': '[data-i18n="databases"]',
    'tools': '[data-i18n="tools"]',
    'professionalSkills': '[data-i18n="professionalSkills"]',
    'problemSolving': '[data-i18n="problemSolving"]',
    'teamwork': '[data-i18n="teamwork"]',
    'communication': '[data-i18n="communication"]',
    'planning': '[data-i18n="planning"]',
    'adaptability': '[data-i18n="adaptability"]',
    'languageSkills': '[data-i18n="languageSkills"]',
    'arabic': '[data-i18n="arabic"]',
    'french': '[data-i18n="french"]',
    'english': '[data-i18n="english"]',
    'deutsch': '[data-i18n="deutsch"]',
    'servicesHeadline': '[data-i18n="servicesHeadline"]',
    'webDev': '[data-i18n="webDev"]',
    'webDevDesc': '[data-i18n="webDevDesc"]',
    'cybersecurity': '[data-i18n="cybersecurity"]',
    'cybersecurityDesc': '[data-i18n="cybersecurityDesc"]',
    'network': '[data-i18n="network"]',
    'networkDesc': '[data-i18n="networkDesc"]',
    'portfolio': '[data-i18n="portfolio"]',
    'portfolioDesc': '[data-i18n="portfolioDesc"]',
    'ecommerce': '[data-i18n="ecommerce"]',
    'ecommerceDesc': '[data-i18n="ecommerceDesc"]',
    'reviewProject': '[data-i18n="reviewProject"]',
    'inDev': '[data-i18n="inDev"]',
    'taskApp': '[data-i18n="taskApp"]',
    'taskAppDesc': '[data-i18n="taskAppDesc"]',
    'faq': '[data-i18n="faq"]',
    'welcome': '[data-i18n="welcome"]',
    'aboutHeadline': '[data-i18n="aboutHeadline"]',
    'aboutText': '[data-i18n="aboutText"]',
    'projectsHeadline': '[data-i18n="projectsHeadline"]',
    'contactHeadline': '[data-i18n="contactHeadline"]',
    'contactName': '[data-i18n="contactName"]',
    'contactEmail': '[data-i18n="contactEmail"]',
    'contactMessage': '[data-i18n="contactMessage"]',
    'contactSubmit': '[data-i18n="contactSubmit"]',
    'footer': '[data-i18n="footer"]',
    'contactMe': '[data-i18n="contactMe"]',
    'downloadCV': '[data-i18n="downloadCV"]',
    'phoneNumber': '[data-i18n="phoneNumber"]',
    'subject': '[data-i18n="subject"]',
    'metaDescription': '[data-i18n-content="metaDescription"]',
    'logoAlt': '[data-i18n-alt="logoAlt"]',
    'profileAlt': '[data-i18n-alt="profileAlt"]',
    'portfolioImgAlt': '[data-i18n-alt="portfolioImgAlt"]',
    'ecommerceImgAlt': '[data-i18n-alt="ecommerceImgAlt"]',
    'taskImgAlt': '[data-i18n-alt="taskImgAlt"]'
  };

  function getTranslation(lang, key) {
    // Support nested keys like nav.resume
    if (key.includes('.')) {
      return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : null, translations[lang]);
    }
    return translations[lang][key] !== undefined ? translations[lang][key] : null;
  }

  function toArabicNumerals(str) {
    // Convert Western digits to Arabic-Indic digits
    return str.replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
  }

  function translatePage(lang) {
    Object.entries(translationMap).forEach(([key, selector]) => {
      const el = document.querySelector(selector);
      if (!el) return;
      let value = getTranslation(lang, key);
      if (value === null) return;
      // Handle alt, title, content, href
      if (selector.includes('[data-i18n-alt')) {
        el.alt = value;
      } else if (selector.includes('[data-i18n-title')) {
        el.title = value;
      } else if (selector.includes('[data-i18n-content')) {
        el.content = value;
      } else if (selector.includes('[data-i18n-href')) {
        el.href = value;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.type === 'submit' || el.type === 'button') {
          el.value = value;
        } else {
          el.placeholder = value;
        }
      } else if (el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'DIV') {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
    // Update all <a class="faa"> in the footer
    document.querySelectorAll('footer .faa[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      let value = getTranslation(lang, key);
      if (value !== null) el.textContent = value;
    });
    // Convert numbers to Arabic-Indic if Arabic
    if (lang === 'ar') {
      document.querySelectorAll('[data-i18n-number]').forEach(el => {
        if (el.value !== undefined) {
          el.value = toArabicNumerals(el.value);
        } else if (el.placeholder !== undefined) {
          el.placeholder = toArabicNumerals(el.placeholder);
        } else {
          el.textContent = toArabicNumerals(el.textContent);
        }
      });
    }
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.body.style.textAlign = (lang === 'ar') ? 'right' : 'left';
  }

  // Hook translation to custom dropdown
  allOptions.forEach(option => {
    option.addEventListener('click', () => {
      const chosenValue = option.dataset.value;
      localStorage.setItem('selectedLanguage', chosenValue);
      translatePage(chosenValue);
    });
  });

  // Initial language on page load
  translatePage(savedLang);

  // Language switcher event
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('change', function (e) {
      const lang = e.target.value;
      localStorage.setItem('selectedLanguage', lang);
      translatePage(lang);
    });
    // Initial language
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    langSwitcher.value = storedLang;
    translatePage(storedLang);
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
