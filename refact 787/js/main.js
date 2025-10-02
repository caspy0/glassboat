/**
 * Aqaba Red Sea Boat - Main JavaScript File
 * Handles internationalization, UI interactions, and animations
 */

// ========== Global Variables ==========
let currentLanguage = 'en';
let translations = {};

// DOM Elements
const elements = {
  langToggle: null,
  langBtn: null,
  dashBtn: null,
  sidebar: null,
  sidebarOverlay: null,
  bookNowBtn: null,
  bookingModal: null,
  closeModal: null
};

// ========== Translation System ==========
const translationKeys = {
  // Navigation
  'nav.services': { en: 'Services', ar: 'الخدمات' },
  'nav.gallery': { en: 'Gallery', ar: 'معرض الصور' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },
  
  // Hero Section
  'hero.title': { en: 'Aqaba Red Sea Boat', ar: 'قارب البحر الأحمر العقبة' },
  'hero.subtitle': { en: 'Private boat tours & snorkeling adventures', ar: 'جولات بحرية خاصة ومغامرات الغوص' },
  'hero.badge': { en: 'From Aqaba Beach • Private Trips', ar: 'من شاطئ العقبة • رحلات خاصة' },
  'hero.headline': { 
    en: 'Discover the Red Sea — private trips, meals at sea, and unforgettable snorkeling.',
    ar: 'اكتشف البحر الأحمر - رحلات خاصة، وجبات على البحر، وغوص لا يُنسى.'
  },
  'hero.description': {
    en: 'Choose a relaxed family cruise, a romantic couple getaway, or dive into the underwater world to see the famous shipwreck and sunken plane.',
    ar: 'اختر رحلة عائلية مريحة، أو رحلة رومانسية للزوجين، أو اغوص في العالم تحت الماء لرؤية حطام السفينة والطائرة الغارقة الشهيرة.'
  },
  'hero.included': { en: "What's included", ar: 'ما المدرج' },
  'hero.included.details': {
    en: 'Safety gear, snorkel equipment, English & Arabic crew, bottled water',
    ar: 'معدات السلامة، معدات الغوص، طاقم يتحدث الإنجليزية والعربية، مياه معدنية'
  },
  'hero.tip': {
    en: 'Tip: For diving & snorkeling trips bring a towel, sunscreen, and your sense of adventure.',
    ar: 'نصيحة: بالنسبة لرحلات الغوص والسباحة، أحضر منشفة، واقي من الشمس، وحس المغامرة لديك.'
  },
  
  // Buttons
  'btn.book_now': { en: 'Book Now', ar: 'احجز الآن' },
  'btn.see_gallery': { en: 'See Gallery', ar: 'راجع المعرض' },
  'btn.change_language': { en: 'Change Language', ar: 'تغيير اللغة' },
  'btn.back_home': { en: 'Back to Home', ar: 'العودة للرئيسية' },
  'btn.ready_to_book': { en: 'Ready to book?', ar: 'مستعد للحجز؟' },
  'btn.see_all_services': { en: 'See all services', ar: 'راجع جميع الخدمات' },
  'btn.contact_us': { en: 'contact us', ar: 'اتصل بنا' },
  
  // Services
  'services.title': { en: 'Our Services', ar: 'خدماتنا' },
  'services.family_ride': { en: 'Family Ride', ar: 'رحلة عائلية' },
  'services.family_ride.desc': {
    en: 'Relaxing coastal cruise suitable for families with calm waters, snacks, and plenty of stops for photos and short swims.',
    ar: 'رحلة ساحلية مريحة مناسبة للعائلات بمياه هادئة، وجبات خفيفة، والعديد من التوقفات للصور والسباحة القصيرة.'
  },
  'services.breakfast_lunch': { en: 'Breakfast / Lunch at Sea', ar: 'فطور / غداء على البحر' },
  'services.breakfast_lunch.desc': {
    en: 'Enjoy a freshly prepared meal anchored over clear water. Choose breakfast or lunch — we serve local favorites and light continental dishes.',
    ar: 'استمتع بوجبة طازجة يتم تحضيرها مرساة فوق مياه صافية. اختر الفطور أو الغداء - نقدم الأطباق المحلية المفضلة والأطباق القارية الخفيفة.'
  },
  'services.diving_snorkeling': { en: 'Diving & Snorkeling Adventure', ar: 'مغامرة الغوص والسباحة' },
  'services.diving_snorkeling.desc': {
    en: 'Visit the famous underwater shipwreck and sunken airplane. Guided snorkeling for beginners and optional guided dives for certified divers.',
    ar: 'قم بزيارة حطام السفينة الشهير تحت الماء والطائرة الغارقة. غوص بإرشاد للمبتدئين وغوص موجه اختياري للغواصين المعتمدين.'
  },
  
  // Features
  'features.title': { en: 'Why guests love us', ar: 'لماذا يحبنا الضيوف' },
  'features.private': { en: 'Private & Comfortable', ar: 'خاص ومريح' },
  'features.private.desc': {
    en: 'Small groups, comfortable seating, shade, and a crew focused on your safety and enjoyment.',
    ar: 'مجموعات صغيرة، مقاعد مريحة، ظل، وطاقم يركز على سلامتك واستمتاعك.'
  },
  'features.local': { en: 'Local Knowledge', ar: 'المعرفة المحلية' },
  'features.local.desc': {
    en: 'Our crew knows the best snorkeling spots and the safest anchor points near the wrecks.',
    ar: 'طاقمنا يعرف أفضل مواقع الغوص وأكثر نقاط الرسو أمانًا بالقرب من الحطام.'
  },
  'features.bilingual': { en: 'English & Arabic Crew', ar: 'طاقم يتحدث الإنجليزية والعربية' },
  'features.bilingual.desc': {
    en: 'We speak both Arabic and English — we make reservations and tours easy for international visitors.',
    ar: 'نتحدث العربية والإنجليزية - نحن نجعل الحجوزات والجولات سهلة للزوار الدوليين.'
  },
  
  // Gallery
  'gallery.title': { en: 'Gallery', ar: 'معرض الصور' },
  
  // Contact
  'contact.title': { en: 'Contact Info', ar: 'معلومات الاتصال' },
  'contact.whatsapp': { en: 'WhatsApp', ar: 'واتساب' },
  'contact.instagram': { en: 'Instagram', ar: 'إنستغرام' },
  'contact.phone': { en: 'Call Us', ar: 'اتصل بنا' },
  'contact.book_whatsapp': { en: 'Book via WhatsApp', ar: 'احجز عبر واتساب' },
  'contact.book_phone': { en: 'Call to Book', ar: 'اتصل للحجز' },
  
  // Modal
  'modal.title': { en: 'Book Your Trip', ar: 'احجز رحلتك' },
  'modal.description': { en: 'Contact us to book your trip:', ar: 'اتصل بنا لحجز رحلتك:' },
  
  // Footer
  'footer.description': { en: 'Private boat tours, snorkeling, and meals at sea.', ar: 'جولات بحرية خاصة، غوص، ووجبات على البحر.' },
  'footer.copyright': { en: '© 2023 All rights reserved.', ar: '© 2023 جميع الحقوق محفوظة.' },
  
  // Service Pages
  'service.family_ride.title': { en: 'Family Ride', ar: 'رحلة عائلية' },
  'service.family_ride.desc': {
    en: 'Enjoy a relaxing coastal cruise suitable for families. Calm waters, snacks, and plenty of stops for photos and short swims. Our crew ensures a safe and memorable experience for all ages.',
    ar: 'استمتع برحلة ساحلية مريحة مناسبة للعائلات. مياه هادئة، وجبات خفيفة، والعديد من التوقفات للصور والسباحة القصيرة. طاقمنا يضمن تجربة آمنة وممتعة لجميع الأعمار.'
  },
  'service.family_ride.features': {
    en: [
      'Comfortable seating and shade',
      'Snacks and bottled water included',
      'Photo stops and short swim breaks',
      'English & Arabic speaking crew'
    ],
    ar: [
      'مقاعد مريحة وظل',
      'وجبات خفيفة ومياه معدنية مشمولة',
      'توقفات للصور واستراحات سباحة قصيرة',
      'طاقم يتحدث الإنجليزية والعربية'
    ]
  },
  
  'service.diving.title': { en: 'Diving & Snorkeling Adventure', ar: 'مغامرة الغوص والسباحة' },
  'service.diving.desc': {
    en: 'Visit the famous underwater shipwreck and sunken airplane. Guided snorkeling for beginners and optional guided dives for certified divers.',
    ar: 'قم بزيارة حطام السفينة الشهير تحت الماء والطائرة الغارقة. غوص بإرشاد للمبتدئين وغوص موجه اختياري للغواصين المعتمدين.'
  },
  'service.diving.features': {
    en: [
      'Guided snorkeling for all levels',
      'Optional guided dives for certified divers',
      'Visit shipwreck and sunken airplane',
      'All equipment provided'
    ],
    ar: [
      'غوص بإرشاد لجميع المستويات',
      'غوص موجه اختياري للغواصين المعتمدين',
      'زيارة حطام السفينة والطائرة الغارقة',
      'جميع المعدات متوفرة'
    ]
  },
  
  'service.breakfast.title': { en: 'Breakfast / Lunch at Sea', ar: 'فطور / غداء على البحر' },
  'service.breakfast.desc': {
    en: 'Enjoy a freshly prepared meal anchored over clear water. Choose breakfast or lunch — we serve local favorites and light continental dishes.',
    ar: 'استمتع بوجبة طازجة يتم تحضيرها مرساة فوق مياه صافية. اختر الفطور أو الغداء - نقدم الأطباق المحلية المفضلة والأطباق القارية الخفيفة.'
  },
  'service.breakfast.features': {
    en: [
      'Freshly prepared meals',
      'Local and continental options',
      'Anchored over clear water',
      'Breakfast or lunch available'
    ],
    ar: [
      'وجبات طازجة محضرة',
      'خيارات محلية وقارية',
      'مرساة فوق مياه صافية',
      'فطور أو غداء متاح'
    ]
  }
};

// ========== Utility Functions ==========
/**
 * Initialize the application
 */
function init() {
  try {
    initializeElements();
    loadLanguage();
    setupEventListeners();
    initializeAnimations();
    console.log('Aqaba Red Sea Boat - Application initialized');
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}

/**
 * Initialize DOM elements
 */
function initializeElements() {
  try {
    elements.langToggle = document.getElementById('langToggle');
    elements.langBtn = document.getElementById('langBtn');
    elements.dashBtn = document.getElementById('dashBtn');
    elements.sidebar = document.getElementById('sidebar');
    elements.sidebarOverlay = document.getElementById('sidebarOverlay');
    elements.bookNowBtn = document.getElementById('book-now');
    elements.bookingModal = document.getElementById('bookingModal');
    elements.closeModal = document.getElementById('closeModal');
    
    // Log missing elements for debugging
    Object.keys(elements).forEach(key => {
      if (!elements[key]) {
        console.warn(`Element ${key} not found on this page`);
      }
    });
  } catch (error) {
    console.error('Error initializing elements:', error);
  }
}

/**
 * Load language preference from localStorage or default to 'en'
 */
function loadLanguage() {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  currentLanguage = savedLanguage || 'en';
  updateLanguage();
}

/**
 * Save language preference to localStorage
 */
function saveLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
}

/**
 * Toggle between English and Arabic
 */
function toggleLanguage() {
  try {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    saveLanguage(currentLanguage);
    updateLanguage();
    console.log(`Language switched to: ${currentLanguage}`);
  } catch (error) {
    console.error('Error toggling language:', error);
  }
}

/**
 * Update all text content based on current language
 */
function updateLanguage() {
  try {
    // Update all elements with data attributes
    const translationElements = document.querySelectorAll('[data-en], [data-ar]');
    let updatedCount = 0;
    
    translationElements.forEach(element => {
      const key = element.getAttribute(`data-${currentLanguage}`);
      if (key) {
        element.textContent = key;
        updatedCount++;
      }
    });

    console.log(`Updated ${updatedCount} translation elements`);

    // Update language toggle button
    if (elements.langToggle) {
      const span = elements.langToggle.querySelector('span');
      if (span) {
        span.textContent = currentLanguage.toUpperCase();
      }
    }

    // Update document direction for RTL languages
    document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage);

    // Add language class to body for CSS targeting
    document.body.className = document.body.className.replace(/lang-\w+/g, '');
    document.body.classList.add(`lang-${currentLanguage}`);

    // Update page title based on current language
    updatePageTitle();
    
  } catch (error) {
    console.error('Error updating language:', error);
  }
}

/**
 * Update page title based on current language
 */
function updatePageTitle() {
  const titleElement = document.querySelector('title');
  if (titleElement) {
    const currentPath = window.location.pathname;
    let newTitle = '';
    
    if (currentPath.includes('family-ride')) {
      newTitle = currentLanguage === 'ar' 
        ? 'رحلة عائلية - قارب البحر الأحمر العقبة' 
        : 'Family Ride - Aqaba Red Sea Boat | Private Family Tours';
    } else if (currentPath.includes('diving-snorkeling-adventure')) {
      newTitle = currentLanguage === 'ar' 
        ? 'مغامرة الغوص والسباحة - قارب البحر الأحمر العقبة' 
        : 'Diving & Snorkeling Adventure - Aqaba Red Sea Boat | Underwater Tours';
    } else if (currentPath.includes('breakfast-lunch-at-sea')) {
      newTitle = currentLanguage === 'ar' 
        ? 'فطور وغداء على البحر - قارب البحر الأحمر العقبة' 
        : 'Breakfast & Lunch at Sea - Aqaba Red Sea Boat | Dining Tours';
    } else {
      newTitle = currentLanguage === 'ar' 
        ? 'قارب البحر الأحمر العقبة - جولات خاصة ومغامرات الغوص' 
        : 'Aqaba Red Sea Boat - Private Tours & Snorkeling Adventures';
    }
    
    titleElement.textContent = newTitle;
  }
}

/**
 * Get translation for a key
 */
function t(key) {
  return translationKeys[key]?.[currentLanguage] || key;
}

// ========== UI Interactions ==========
/**
 * Setup all event listeners
 */
function setupEventListeners() {
  try {
    // Language toggle
    if (elements.langToggle) {
      elements.langToggle.addEventListener('click', toggleLanguage);
    }
    if (elements.langBtn) {
      elements.langBtn.addEventListener('click', toggleLanguage);
    }

    // Sidebar toggle
    if (elements.dashBtn) {
      elements.dashBtn.addEventListener('click', openSidebar);
    }
    if (elements.sidebarOverlay) {
      elements.sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Modal interactions
    if (elements.bookNowBtn) {
      elements.bookNowBtn.addEventListener('click', openBookingModal);
    }
    if (elements.closeModal) {
      elements.closeModal.addEventListener('click', closeBookingModal);
    }
    if (elements.bookingModal) {
      elements.bookingModal.addEventListener('click', (e) => {
        if (e.target === elements.bookingModal) {
          closeBookingModal();
        }
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add translation event listener for dynamic content
    document.addEventListener('DOMContentLoaded', () => {
      updateLanguage();
    });

  } catch (error) {
    console.error('Error setting up event listeners:', error);
  }
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(e) {
  // Escape key closes modals and sidebar
  if (e.key === 'Escape') {
    closeSidebar();
    closeBookingModal();
  }
}

/**
 * Open sidebar
 */
function openSidebar() {
  if (elements.sidebar) {
    elements.sidebar.classList.add('open');
  }
  if (elements.sidebarOverlay) {
    elements.sidebarOverlay.classList.add('open');
  }
  document.body.style.overflow = 'hidden';
}

/**
 * Close sidebar
 */
function closeSidebar() {
  if (elements.sidebar) {
    elements.sidebar.classList.remove('open');
  }
  if (elements.sidebarOverlay) {
    elements.sidebarOverlay.classList.remove('open');
  }
  document.body.style.overflow = '';
}

/**
 * Open booking modal
 */
function openBookingModal() {
  if (elements.bookingModal) {
    elements.bookingModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close booking modal
 */
function closeBookingModal() {
  if (elements.bookingModal) {
    elements.bookingModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ========== Animations ==========
/**
 * Initialize scroll animations
 */
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.service-card, .feature, .gallery img').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Add loading animation to images
 */
function addImageLoadingAnimation() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    // Set initial opacity for loading effect
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });
}

// ========== Performance Optimizations ==========
/**
 * Lazy load images
 */
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

/**
 * Preload critical resources
 */
function preloadCriticalResources() {
  // Preload hero background image
  const heroBg = new Image();
  heroBg.src = 'images/marien1.jpeg';
}

// ========== Accessibility Enhancements ==========
/**
 * Add ARIA labels and improve accessibility
 */
function enhanceAccessibility() {
  // Add ARIA labels to buttons
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach(button => {
    if (!button.getAttribute('aria-label')) {
      button.setAttribute('aria-label', button.textContent || 'Button');
    }
  });

  // Add focus management for modals
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  });
}

// ========== Error Handling ==========
/**
 * Global error handler
 */
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
  // Could send error to analytics service here
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  // Could send error to analytics service here
});

// ========== Service Worker Registration ==========
/**
 * Register service worker for offline functionality
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// ========== Universal Translation Handler ==========
/**
 * Universal function to handle translations on any page
 */
function initializeTranslations() {
  // Check if translation elements exist
  const translationElements = document.querySelectorAll('[data-en], [data-ar]');
  
  if (translationElements.length === 0) {
    console.warn('No translation elements found on this page');
    return;
  }

  // Load saved language or default to English
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  currentLanguage = savedLanguage;
  
  // Update all translations
  updateLanguage();
  
  console.log(`Translations initialized for ${translationElements.length} elements in ${currentLanguage}`);
}

// ========== Initialize Application ==========
// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init();
    initializeTranslations();
  });
} else {
  init();
  initializeTranslations();
}

// Initialize additional features
addImageLoadingAnimation();
initializeLazyLoading();
preloadCriticalResources();
enhanceAccessibility();
registerServiceWorker();

// Export functions for external use
window.AqabaBoat = {
  toggleLanguage,
  updateLanguage,
  t,
  openSidebar,
  closeSidebar,
  openBookingModal,
  closeBookingModal
};
