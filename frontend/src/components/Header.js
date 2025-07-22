import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Home, BookOpen } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
  };

  return (
    <header className="bg-white border-b border-border-light sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover-scale"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="heading-medium text-text-primary font-balto-medium">
              AI Academy
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate('/')}
              className={`body-standard transition-colors ${
                location.pathname === '/' 
                  ? 'text-brand-primary' 
                  : 'text-text-secondary hover:text-brand-primary'
              }`}
            >
              <Home className="w-5 h-5 inline mr-2" />
              {currentLanguage === 'ru' ? 'Главная' : 'Startseite'}
            </button>
            
            <button
              onClick={() => navigate('/course')}
              className={`body-standard transition-colors ${
                location.pathname === '/course' 
                  ? 'text-brand-primary' 
                  : 'text-text-secondary hover:text-brand-primary'
              }`}
            >
              <BookOpen className="w-5 h-5 inline mr-2" />
              {currentLanguage === 'ru' ? 'Курсы' : 'Kurse'}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="relative">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-text-muted" />
              <select
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="body-standard bg-transparent border border-border-medium rounded-lg px-3 py-2 cursor-pointer focus:outline-none focus:border-brand-primary"
              >
                {availableLanguages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-text-primary"></span>
              <span className="w-full h-0.5 bg-text-primary"></span>
              <span className="w-full h-0.5 bg-text-primary"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;