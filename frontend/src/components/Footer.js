import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="heading-medium font-balto-medium">
                AI Academy
              </span>
            </div>
            <p className="body-standard text-gray-400 mb-6 max-w-md">
              {content.currentLanguage === 'ru'
                ? 'Изучайте AI технологии с экспертами. Практические курсы для начинающих и профессионалов.'
                : 'Lernen Sie AI-Technologien von Experten. Praktische Kurse für Anfänger und Profis.'}
            </p>
            
            <div className="flex gap-4">
              <a href="mailto:support@ai-academy.com" className="hover:text-brand-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-medium mb-4">
              {content.currentLanguage === 'ru' ? 'Навигация' : 'Navigation'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="body-standard text-gray-400 hover:text-white transition-colors">
                  {content.currentLanguage === 'ru' ? 'Главная' : 'Startseite'}
                </a>
              </li>
              <li>
                <a href="/course" className="body-standard text-gray-400 hover:text-white transition-colors">
                  {content.currentLanguage === 'ru' ? 'Курсы' : 'Kurse'}
                </a>
              </li>
              <li>
                <a href="/video/1" className="body-standard text-gray-400 hover:text-white transition-colors">
                  {content.currentLanguage === 'ru' ? 'Бесплатный урок' : 'Kostenlose Lektion'}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="heading-medium mb-4">
              {content.currentLanguage === 'ru' ? 'Поддержка' : 'Support'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="body-standard text-gray-400 hover:text-white transition-colors">
                  {content.currentLanguage === 'ru' ? 'Помощь' : 'Hilfe'}
                </a>
              </li>
              <li>
                <a href="#" className="body-standard text-gray-400 hover:text-white transition-colors">
                  {content.currentLanguage === 'ru' ? 'Часто задаваемые вопросы' : 'FAQ'}
                </a>
              </li>
              <li>
                <a href="#" className="body-standard text-gray-400 hover:text-white transition-colors">
                  {content.currentLanguage === 'ru' ? 'Связаться с нами' : 'Kontakt'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-gray-400">
            © 2025 AI Academy. {content.currentLanguage === 'ru' ? 'Все права защищены.' : 'Alle Rechte vorbehalten.'}
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="body-small text-gray-400 hover:text-white transition-colors">
              {content.currentLanguage === 'ru' ? 'Конфиденциальность' : 'Datenschutz'}
            </a>
            <a href="#" className="body-small text-gray-400 hover:text-white transition-colors">
              {content.currentLanguage === 'ru' ? 'Условия использования' : 'Nutzungsbedingungen'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;