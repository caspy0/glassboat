/**
 * Aqaba Red Sea Boat - Translation System
 * Centralized translation management
 */

// Translation data structure
const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Aqaba Red Sea Boat',
    'hero.subtitle': 'Private boat tours & snorkeling adventures',
    'hero.badge': 'From Aqaba Beach • Private Trips',
    'hero.headline': 'Discover the Red Sea — private trips, meals at sea, and unforgettable snorkeling.',
    'hero.description': 'Choose a relaxed family cruise, a romantic couple getaway, or dive into the underwater world to see the famous shipwreck and sunken plane.',
    'hero.included': "What's included",
    'hero.included.details': 'Safety gear, snorkel equipment, English & Arabic crew, bottled water',
    'hero.tip': 'Tip: For diving & snorkeling trips bring a towel, sunscreen, and your sense of adventure.',
    
    // Buttons
    'btn.book_now': 'Book Now',
    'btn.see_gallery': 'See Gallery',
    'btn.change_language': 'Change Language',
    'btn.back_home': 'Back to Home',
    'btn.ready_to_book': 'Ready to book?',
    'btn.see_all_services': 'See all services',
    'btn.contact_us': 'contact us',
    
    // Services
    'services.title': 'Our Services',
    'services.family_ride': 'Family Ride',
    'services.family_ride.desc': 'Relaxing coastal cruise suitable for families with calm waters, snacks, and plenty of stops for photos and short swims.',
    'services.breakfast_lunch': 'Breakfast / Lunch at Sea',
    'services.breakfast_lunch.desc': 'Enjoy a freshly prepared meal anchored over clear water. Choose breakfast or lunch — we serve local favorites and light continental dishes.',
    'services.diving_snorkeling': 'Diving & Snorkeling Adventure',
    'services.diving_snorkeling.desc': 'Visit the famous underwater shipwreck and sunken airplane. Guided snorkeling for beginners and optional guided dives for certified divers.',
    
    // Features
    'features.title': 'Why guests love us',
    'features.private': 'Private & Comfortable',
    'features.private.desc': 'Small groups, comfortable seating, shade, and a crew focused on your safety and enjoyment.',
    'features.local': 'Local Knowledge',
    'features.local.desc': 'Our crew knows the best snorkeling spots and the safest anchor points near the wrecks.',
    'features.bilingual': 'English & Arabic Crew',
    'features.bilingual.desc': 'We speak both Arabic and English — we make reservations and tours easy for international visitors.',
    
    // Gallery
    'gallery.title': 'Gallery',
    
    // Contact
    'contact.title': 'Contact Info',
    'contact.whatsapp': 'WhatsApp',
    'contact.instagram': 'Instagram',
    'contact.phone': 'Call Us',
    'contact.book_whatsapp': 'Book via WhatsApp',
    'contact.book_phone': 'Call to Book',
    
    // Modal
    'modal.title': 'Book Your Trip',
    'modal.description': 'Contact us to book your trip:',
    
    // Footer
    'footer.description': 'Private boat tours, snorkeling, and meals at sea.',
    'footer.copyright': '© 2023 All rights reserved.',
    
    // Service Pages
    'service.family_ride.title': 'Family Ride',
    'service.family_ride.desc': 'Enjoy a relaxing coastal cruise suitable for families. Calm waters, snacks, and plenty of stops for photos and short swims. Our crew ensures a safe and memorable experience for all ages.',
    'service.family_ride.features': [
      'Comfortable seating and shade',
      'Snacks and bottled water included',
      'Photo stops and short swim breaks',
      'English & Arabic speaking crew'
    ],
    
    'service.diving.title': 'Diving & Snorkeling Adventure',
    'service.diving.desc': 'Visit the famous underwater shipwreck and sunken airplane. Guided snorkeling for beginners and optional guided dives for certified divers.',
    'service.diving.features': [
      'Guided snorkeling for all levels',
      'Optional guided dives for certified divers',
      'Visit shipwreck and sunken airplane',
      'All equipment provided'
    ],
    
    'service.breakfast.title': 'Breakfast / Lunch at Sea',
    'service.breakfast.desc': 'Enjoy a freshly prepared meal anchored over clear water. Choose breakfast or lunch — we serve local favorites and light continental dishes.',
    'service.breakfast.features': [
      'Freshly prepared meals',
      'Local and continental options',
      'Anchored over clear water',
      'Breakfast or lunch available'
    ]
  },
  
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.gallery': 'معرض الصور',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'قارب البحر الأحمر العقبة',
    'hero.subtitle': 'جولات بحرية خاصة ومغامرات الغوص',
    'hero.badge': 'من شاطئ العقبة • رحلات خاصة',
    'hero.headline': 'اكتشف البحر الأحمر - رحلات خاصة، وجبات على البحر، وغوص لا يُنسى.',
    'hero.description': 'اختر رحلة عائلية مريحة، أو رحلة رومانسية للزوجين، أو اغوص في العالم تحت الماء لرؤية حطام السفينة والطائرة الغارقة الشهيرة.',
    'hero.included': 'ما المدرج',
    'hero.included.details': 'معدات السلامة، معدات الغوص، طاقم يتحدث الإنجليزية والعربية، مياه معدنية',
    'hero.tip': 'نصيحة: بالنسبة لرحلات الغوص والسباحة، أحضر منشفة، واقي من الشمس، وحس المغامرة لديك.',
    
    // Buttons
    'btn.book_now': 'احجز الآن',
    'btn.see_gallery': 'راجع المعرض',
    'btn.change_language': 'تغيير اللغة',
    'btn.back_home': 'العودة للرئيسية',
    'btn.ready_to_book': 'مستعد للحجز؟',
    'btn.see_all_services': 'راجع جميع الخدمات',
    'btn.contact_us': 'اتصل بنا',
    
    // Services
    'services.title': 'خدماتنا',
    'services.family_ride': 'رحلة عائلية',
    'services.family_ride.desc': 'رحلة ساحلية مريحة مناسبة للعائلات بمياه هادئة، وجبات خفيفة، والعديد من التوقفات للصور والسباحة القصيرة.',
    'services.breakfast_lunch': 'فطور / غداء على البحر',
    'services.breakfast_lunch.desc': 'استمتع بوجبة طازجة يتم تحضيرها مرساة فوق مياه صافية. اختر الفطور أو الغداء - نقدم الأطباق المحلية المفضلة والأطباق القارية الخفيفة.',
    'services.diving_snorkeling': 'مغامرة الغوص والسباحة',
    'services.diving_snorkeling.desc': 'قم بزيارة حطام السفينة الشهير تحت الماء والطائرة الغارقة. غوص بإرشاد للمبتدئين وغوص موجه اختياري للغواصين المعتمدين.',
    
    // Features
    'features.title': 'لماذا يحبنا الضيوف',
    'features.private': 'خاص ومريح',
    'features.private.desc': 'مجموعات صغيرة، مقاعد مريحة، ظل، وطاقم يركز على سلامتك واستمتاعك.',
    'features.local': 'المعرفة المحلية',
    'features.local.desc': 'طاقمنا يعرف أفضل مواقع الغوص وأكثر نقاط الرسو أمانًا بالقرب من الحطام.',
    'features.bilingual': 'طاقم يتحدث الإنجليزية والعربية',
    'features.bilingual.desc': 'نتحدث العربية والإنجليزية - نحن نجعل الحجوزات والجولات سهلة للزوار الدوليين.',
    
    // Gallery
    'gallery.title': 'معرض الصور',
    
    // Contact
    'contact.title': 'معلومات الاتصال',
    'contact.whatsapp': 'واتساب',
    'contact.instagram': 'إنستغرام',
    'contact.phone': 'اتصل بنا',
    'contact.book_whatsapp': 'احجز عبر واتساب',
    'contact.book_phone': 'اتصل للحجز',
    
    // Modal
    'modal.title': 'احجز رحلتك',
    'modal.description': 'اتصل بنا لحجز رحلتك:',
    
    // Footer
    'footer.description': 'جولات بحرية خاصة، غوص، ووجبات على البحر.',
    'footer.copyright': '© 2023 جميع الحقوق محفوظة.',
    
    // Service Pages
    'service.family_ride.title': 'رحلة عائلية',
    'service.family_ride.desc': 'استمتع برحلة ساحلية مريحة مناسبة للعائلات. مياه هادئة، وجبات خفيفة، والعديد من التوقفات للصور والسباحة القصيرة. طاقمنا يضمن تجربة آمنة وممتعة لجميع الأعمار.',
    'service.family_ride.features': [
      'مقاعد مريحة وظل',
      'وجبات خفيفة ومياه معدنية مشمولة',
      'توقفات للصور واستراحات سباحة قصيرة',
      'طاقم يتحدث الإنجليزية والعربية'
    ],
    
    'service.diving.title': 'مغامرة الغوص والسباحة',
    'service.diving.desc': 'قم بزيارة حطام السفينة الشهير تحت الماء والطائرة الغارقة. غوص بإرشاد للمبتدئين وغوص موجه اختياري للغواصين المعتمدين.',
    'service.diving.features': [
      'غوص بإرشاد لجميع المستويات',
      'غوص موجه اختياري للغواصين المعتمدين',
      'زيارة حطام السفينة والطائرة الغارقة',
      'جميع المعدات متوفرة'
    ],
    
    'service.breakfast.title': 'فطور / غداء على البحر',
    'service.breakfast.desc': 'استمتع بوجبة طازجة يتم تحضيرها مرساة فوق مياه صافية. اختر الفطور أو الغداء - نقدم الأطباق المحلية المفضلة والأطباق القارية الخفيفة.',
    'service.breakfast.features': [
      'وجبات طازجة محضرة',
      'خيارات محلية وقارية',
      'مرساة فوق مياه صافية',
      'فطور أو غداء متاح'
    ]
  }
};

// Export translations for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
} else {
  window.translations = translations;
}
