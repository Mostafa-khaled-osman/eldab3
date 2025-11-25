import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الشركة',
    'nav.services': 'خدماتنا',
    'nav.projects': 'المشاريع',
    'nav.suppliers': 'الموردون',
    'nav.contact': 'التواصل',
    
    // Hero Section
    'hero.title': 'الضبع امان على الطريق',
    'hero.subtitle': 'الضبع لقطع غيار النقل الثقيل',
    'hero.cta': 'اكتشف خدماتنا',
    'hero.contact': 'تواصل معنا',
    
    // About Section
    'about.title': 'عن شركة الضبع',
    'about.subtitle': 'خبرة وجودة في استيراد قطع الغيار',
    'about.description': 'شركة الضبع هي إحدى الشركات الرائدة في مجال استيراد وتوريد قطع غيار المعدات الثقيلة ومركبات النقل. نفخر بتقديم أفضل المنتجات من موردين عالميين موثوقين، مع ضمان الجودة والأسعار التنافسية.',
    'about.experience': 'سنوات من الخبرة',
    'about.partners': 'شريك عالمي',
    'about.products': 'منتج متوفر',
    'about.clients': 'عميل راضٍ',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة لاحتياجات المعدات الثقيلة',
    'services.import.title': 'استيراد قطع الغيار',
    'services.import.desc': 'استيراد مباشر من أفضل المصانع العالمية بأسعار تنافسية',
    'services.supply.title': 'التوريد السريع',
    'services.supply.desc': 'شبكة توريد فعالة تضمن وصول المنتجات في الوقت المحدد',
    'services.quality.title': 'ضمان الجودة',
    'services.quality.desc': 'فحص دقيق لجميع المنتجات لضمان أعلى معايير الجودة',
    'services.support.title': 'الدعم الفني',
    'services.support.desc': 'فريق متخصص لمساعدتك في اختيار القطع المناسبة',
    
    // Projects
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'نفخر بإنجازاتنا مع عملائنا',
    
    // Suppliers
    'suppliers.title': 'شركاؤنا العالميون',
    'suppliers.subtitle': 'نتعاون مع أفضل الموردين في العالم',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نسعد بالرد على استفساراتكم',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'contact.info': 'معلومات التواصل',
    'contact.address': 'العنوان',
    'contact.hours': 'ساعات العمل',
    'contact.hours.value': 'السبت - الخميس: 9:00 ص - 6:00 م',
    
    // Footer
    'footer.about': 'عن الشركة',
    'footer.about.text': 'شركة الضبع رائدة في مجال استيراد قطع غيار النقل الثقيل، نقدم أفضل المنتجات بأعلى معايير الجودة.',
    'footer.links': 'روابط سريعة',
    'footer.rights': 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.suppliers': 'Suppliers',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Al-Dabba is safety on the road',
    'hero.subtitle': 'Al-Dabaa Heavy Transport Spare Parts',
    'hero.cta': 'Discover Our Services',
    'hero.contact': 'Contact Us',
    
    // About Section
    'about.title': 'About Al-Dabaa',
    'about.subtitle': 'Experience and Quality in Spare Parts Import',
    'about.description': 'Al-Dabaa is a leading company in importing and supplying spare parts for heavy equipment and transport vehicles. We pride ourselves on providing the best products from trusted global suppliers, with quality assurance and competitive prices.',
    'about.experience': 'Years of Experience',
    'about.partners': 'Global Partners',
    'about.products': 'Products Available',
    'about.clients': 'Satisfied Clients',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Solutions for Heavy Equipment Needs',
    'services.import.title': 'Spare Parts Import',
    'services.import.desc': 'Direct import from the best global factories at competitive prices',
    'services.supply.title': 'Fast Delivery',
    'services.supply.desc': 'Efficient supply network ensuring timely product delivery',
    'services.quality.title': 'Quality Assurance',
    'services.quality.desc': 'Thorough inspection of all products to ensure highest quality standards',
    'services.support.title': 'Technical Support',
    'services.support.desc': 'Specialized team to help you choose the right parts',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'We take pride in our achievements with our clients',
    
    // Suppliers
    'suppliers.title': 'Our Global Partners',
    'suppliers.subtitle': 'We collaborate with the best suppliers worldwide',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are happy to answer your inquiries',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Saturday - Thursday: 9:00 AM - 6:00 PM',
    
    // Footer
    'footer.about': 'About Company',
    'footer.about.text': 'Al-Dabaa is a leader in importing heavy transport spare parts, offering the best products with highest quality standards.',
    'footer.links': 'Quick Links',
    'footer.rights': 'All Rights Reserved',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
    
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
