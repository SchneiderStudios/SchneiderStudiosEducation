import React, { createContext, useContext, useState, useEffect } from 'react';
import { courseData } from '../data/mock';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('de'); // Default to German
  const [content, setContent] = useState(courseData.de);

  useEffect(() => {
    // Check if language is stored in localStorage
    const savedLanguage = localStorage.getItem('courseLanguage');
    if (savedLanguage && courseData[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
      setContent(courseData[savedLanguage]);
    }
  }, []);

  const changeLanguage = (language) => {
    if (courseData[language]) {
      setCurrentLanguage(language);
      setContent(courseData[language]);
      localStorage.setItem('courseLanguage', language);
    }
  };

  const value = {
    currentLanguage,
    content,
    changeLanguage,
    availableLanguages: [
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};