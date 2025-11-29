import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, SiteContent } from '../types';
import { TRANSLATIONS, PORTFOLIO_ITEMS_EN, PORTFOLIO_ITEMS_BG } from '../translations';
import { MosaicItem } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: SiteContent;
  portfolioItems: MosaicItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Simple persistence
  useEffect(() => {
    const savedLang = localStorage.getItem('mosaic-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'bg')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('mosaic-lang', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'bg' : 'en';
    handleSetLanguage(newLang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    toggleLanguage,
    t: TRANSLATIONS[language],
    portfolioItems: language === 'en' ? PORTFOLIO_ITEMS_EN : PORTFOLIO_ITEMS_BG
  };

  return (
    <LanguageContext.Provider value={value}>
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
