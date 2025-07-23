import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Mail, MessageCircle, Phone, MapPin } from 'lucide-react';
import { navigationLinks } from '../data/mock';

const Footer = () => {
  const navigate = useNavigate();
  const { content, currentLanguage } = useLanguage();
  const links = navigationLinks[currentLanguage];

  const handleContactClick = (type) => {
    if (type === 'email') {
      window.location.href = `mailto:${content.contact.email}`;
    } else if (type === 'telegram') {
      window.open(`https://t.me/${content.contact.telegram.replace('@', '')}`, '_blank');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-text-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="heading-medium font-semibold block">
                  Schneider Studios
                </span>
                <span className="body-small text-gray-400 -mt-1 block">
                  Education
                </span>
              </div>
            </div>
            <p className="body-standard text-gray-300 mb-6 max-w-md">
              {content.currentLanguage === 'ru'
                ? 'Ведущая образовательная платформа по изучению AI технологий. Практические курсы для начинающих и профессионалов в области искусственного интеллекта.'
                : 'Führende Bildungsplattform für AI-Technologie-Lernen. Praktische Kurse für Anfänger und Profis im Bereich künstliche Intelligenz.'}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary" />
                <button 
                  onClick={() => handleContactClick('email')}
                  className="contact-link text-gray-300 hover:text-white"
                >
                  {content.contact.email}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-brand-primary" />
                <button 
                  onClick={() => handleContactClick('telegram')}
                  className="contact-link text-gray-300 hover:text-white"
                >
                  {content.contact.telegram}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-primary" />
                <span className="text-gray-300">
                  {content.currentLanguage === 'ru' ? 'Германия' : 'Deutschland'}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <button 
                onClick={() => handleContactClick('email')}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleContactClick('telegram')}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-medium mb-4 text-white">
              {content.currentLanguage === 'ru' ? 'Навигация' : 'Navigation'}
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => { navigate('/'); scrollToTop(); }}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {content.currentLanguage === 'ru' ? 'Главная' : 'Startseite'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { navigate('/course'); scrollToTop(); }}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {links.courses}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { navigate('/video/1'); scrollToTop(); }}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {content.currentLanguage === 'ru' ? 'Бесплатный урок' : 'Kostenlose Lektion'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick('email')}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {links.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="heading-medium mb-4 text-white">
              {content.currentLanguage === 'ru' ? 'Поддержка и правовая информация' : 'Support & Legal'}
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleContactClick('email')}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {links.help}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick('telegram')}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {links.faq}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://schneider-studios.de/privacy', '_blank')}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {links.privacy}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://schneider-studios.de/terms', '_blank')}
                  className="body-standard text-gray-400 hover:text-white transition-colors text-left"
                >
                  {links.terms}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-gray-400">
            © 2025 Schneider Studios Education. {content.currentLanguage === 'ru' ? 'Все права защищены.' : 'Alle Rechte vorbehalten.'}
          </p>
          
          <div className="flex gap-6">
            <button 
              onClick={() => window.open('https://schneider-studios.de/privacy', '_blank')}
              className="body-small text-gray-400 hover:text-white transition-colors"
            >
              {links.privacy}
            </button>
            <button 
              onClick={() => window.open('https://schneider-studios.de/terms', '_blank')}
              className="body-small text-gray-400 hover:text-white transition-colors"
            >
              {links.terms}
            </button>
            <button 
              onClick={() => handleContactClick('email')}
              className="body-small text-gray-400 hover:text-white transition-colors"
            >
              {links.contact}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;