import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { Play, Lock, Check, Clock } from 'lucide-react';
import PaymentModal from './PaymentModal';

const CoursePage = () => {
  const navigate = useNavigate();
  const { content } = useLanguage();
  const { isPurchased } = useUser();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleVideoClick = (video) => {
    if (video.isFree || isPurchased(video.id)) {
      navigate(`/video/${video.id}`);
    } else {
      setSelectedVideo(video);
      setShowPaymentModal(true);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    if (selectedVideo) {
      navigate(`/video/${selectedVideo.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-hero text-text-primary mb-6">
              {content.title}
            </h1>
            <p className="body-large text-text-secondary mb-8">
              {content.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-primary" />
                <span className="body-standard text-text-secondary">
                  {content.videos.length} {content.currentLanguage === 'ru' ? 'уроков' : 'Lektionen'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-brand-primary" />
                <span className="body-standard text-text-secondary">
                  1 {content.currentLanguage === 'ru' ? 'бесплатный урок' : 'kostenlose Lektion'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-large text-text-primary mb-8">
              {content.currentLanguage === 'ru' ? 'Содержание курса' : 'Kursinhalte'}
            </h2>
            
            <div className="space-y-4">
              {content.videos.map((video, index) => {
                const isOwned = video.isFree || isPurchased(video.id);
                
                return (
                  <div
                    key={video.id}
                    className={`bg-white rounded-2xl p-6 transition-all duration-200 hover-lift ${
                      isOwned ? 'cursor-pointer' : 'cursor-pointer'
                    }`}
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Video Number */}
                      <div className="flex-shrink-0 w-12 h-12 bg-bg-subtle rounded-xl flex items-center justify-center">
                        <span className="body-standard font-medium text-text-primary">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="heading-medium text-text-primary">
                            {video.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {video.isFree && (
                              <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full body-small">
                                {content.pricing.free}
                              </span>
                            )}
                            
                            {!video.isFree && !isPurchased(video.id) && (
                              <span className="text-brand-primary body-standard font-medium">
                                €{video.price}
                              </span>
                            )}
                            
                            {isPurchased(video.id) && (
                              <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <p className="body-standard text-text-secondary mb-3">
                          {video.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="body-small text-text-muted flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {video.duration}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {isOwned ? (
                              <Play className="w-5 h-5 text-brand-primary" />
                            ) : (
                              <Lock className="w-5 h-5 text-text-muted" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-large text-text-primary mb-8">
            {content.currentLanguage === 'ru' ? 'Цены' : 'Preise'}
          </h2>
          
          <div className="max-w-md mx-auto bg-bg-light rounded-2xl p-8">
            <h3 className="heading-medium text-text-primary mb-4">
              {content.currentLanguage === 'ru' ? 'Полный доступ' : 'Vollzugriff'}
            </h3>
            <div className="mb-6">
              <span className="display-hero text-brand-primary">€29.99</span>
              <span className="body-standard text-text-muted ml-2">
                {content.currentLanguage === 'ru' ? 'за весь курс' : 'für den gesamten Kurs'}
              </span>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-primary" />
                <span className="body-standard text-text-secondary">
                  {content.currentLanguage === 'ru' ? 'Все видео уроки' : 'Alle Video-Lektionen'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-primary" />
                <span className="body-standard text-text-secondary">
                  {content.currentLanguage === 'ru' ? 'Пожизненный доступ' : 'Lebenslanger Zugang'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-primary" />
                <span className="body-standard text-text-secondary">
                  {content.currentLanguage === 'ru' ? 'Поддержка 24/7' : '24/7 Support'}
                </span>
              </li>
            </ul>
            
            <button className="btn-primary w-full hover-scale">
              {content.currentLanguage === 'ru' ? 'Купить курс' : 'Kurs kaufen'}
            </button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && selectedVideo && (
        <PaymentModal
          video={selectedVideo}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default CoursePage;