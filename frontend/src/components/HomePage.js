import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Play, Star, Users, Clock } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="gradient-overlay">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="display-hero text-text-primary mb-6 animate-slide-up">
                {content.heroText}
              </h1>
              <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
                {content.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
                <button
                  onClick={() => navigate('/course')}
                  className="btn-primary flex items-center gap-2 hover-scale"
                >
                  <Play className="w-5 h-5" />
                  {content.getStartedBtn}
                </button>
                
                <button
                  onClick={() => navigate('/video/1')}
                  className="btn-secondary flex items-center gap-2 hover-lift"
                >
                  <Star className="w-5 h-5" />
                  {content.freeTrialBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-large text-text-primary mb-4">
              {content.currentLanguage === 'ru' 
                ? 'Почему выбирают наш курс?' 
                : 'Warum unseren Kurs wählen?'}
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              {content.currentLanguage === 'ru'
                ? 'Изучайте AI технологии с экспертами и получайте практические навыки'
                : 'Lernen Sie AI-Technologien von Experten und erhalten Sie praktische Fähigkeiten'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {index === 0 && <Play className="w-6 h-6 text-brand-primary" />}
                  {index === 1 && <Clock className="w-6 h-6 text-brand-primary" />}
                  {index === 2 && <Users className="w-6 h-6 text-brand-primary" />}
                  {index === 3 && <Star className="w-6 h-6 text-brand-primary" />}
                </div>
                <h3 className="heading-medium text-text-primary mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-large text-text-primary mb-4">
              {content.currentLanguage === 'ru' 
                ? 'Предварительный просмотр курса' 
                : 'Kursvorschau'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.videos.slice(0, 3).map((video, index) => (
              <div 
                key={video.id} 
                className="bg-white rounded-2xl overflow-hidden hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-bg-subtle relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center cursor-pointer hover-scale">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg body-small">
                    {video.duration}
                  </div>
                  {video.isFree && (
                    <div className="absolute top-3 left-3 bg-brand-primary text-white px-2 py-1 rounded-lg body-small">
                      {content.pricing.free}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="heading-medium text-text-primary mb-2">
                    {video.title}
                  </h3>
                  <p className="body-standard text-text-secondary mb-4">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="body-small text-text-muted">
                      {video.duration}
                    </span>
                    {!video.isFree && (
                      <span className="body-standard font-medium text-brand-primary">
                        €{video.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/course')}
              className="btn-primary hover-scale"
            >
              {content.currentLanguage === 'ru' 
                ? 'Посмотреть все уроки' 
                : 'Alle Lektionen anzeigen'}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-waitlist">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="heading-large text-text-primary mb-4">
            {content.currentLanguage === 'ru'
              ? 'Готовы начать изучение AI?'
              : 'Bereit, AI zu lernen?'}
          </h2>
          <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
            {content.currentLanguage === 'ru'
              ? 'Присоединяйтесь к тысячам студентов, которые уже изучают AI технологии'
              : 'Schließen Sie sich Tausenden von Studenten an, die bereits AI-Technologien lernen'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/video/1')}
              className="btn-primary hover-scale"
            >
              {content.freeTrialBtn}
            </button>
            <button
              onClick={() => navigate('/course')}
              className="btn-secondary hover-lift"
            >
              {content.currentLanguage === 'ru' 
                ? 'Просмотр курса' 
                : 'Kurs ansehen'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;