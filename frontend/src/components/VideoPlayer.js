import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { ArrowLeft, Lock, Play, ChevronRight, ChevronLeft } from 'lucide-react';
import PaymentModal from './PaymentModal';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { content } = useLanguage();
  const { isPurchased } = useUser();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentVideo = content.videos.find(v => v.id === parseInt(videoId));
  const currentIndex = content.videos.findIndex(v => v.id === parseInt(videoId));
  const nextVideo = currentIndex < content.videos.length - 1 ? content.videos[currentIndex + 1] : null;
  const prevVideo = currentIndex > 0 ? content.videos[currentIndex - 1] : null;

  useEffect(() => {
    if (!currentVideo) {
      navigate('/course');
      return;
    }

    // Check if user has access to this video
    if (!currentVideo.isFree && !isPurchased(currentVideo.id)) {
      setShowPaymentModal(true);
    }
  }, [currentVideo, isPurchased, navigate]);

  const hasAccess = currentVideo && (currentVideo.isFree || isPurchased(currentVideo.id));

  const handleNavigateVideo = (video) => {
    if (video.isFree || isPurchased(video.id)) {
      navigate(`/video/${video.id}`);
    } else {
      setShowPaymentModal(true);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    // Refresh the component to show the video
    window.location.reload();
  };

  if (!currentVideo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-large text-text-primary mb-4">
            {content.currentLanguage === 'ru' ? 'Видео не найдено' : 'Video nicht gefunden'}
          </h1>
          <button onClick={() => navigate('/course')} className="btn-primary">
            {content.currentLanguage === 'ru' ? 'Назад к курсу' : 'Zurück zum Kurs'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/90 backdrop-blur-sm p-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/course')}
          className="text-white hover:text-brand-primary transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="heading-medium text-white">
          {currentVideo.title}
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 gap-0 min-h-screen">
        {/* Main Video Player */}
        <div className="lg:col-span-3 bg-black flex items-center justify-center">
          <div className="w-full max-w-5xl aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
            {hasAccess ? (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                {/* Mock Video Player */}
                <div className="text-center">
                  {!isPlaying ? (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center hover-scale cursor-pointer mb-4"
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </button>
                  ) : (
                    <div className="text-white">
                      <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="body-large">
                        {content.currentLanguage === 'ru' 
                          ? 'Загрузка видео...' 
                          : 'Video wird geladen...'}
                      </p>
                    </div>
                  )}
                  
                  <p className="text-white body-standard mb-2">
                    {currentVideo.title}
                  </p>
                  <p className="text-gray-400 body-small">
                    {content.currentLanguage === 'ru' 
                      ? 'Продолжительность:' 
                      : 'Dauer:'} {currentVideo.duration}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center text-white">
                  <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="heading-medium mb-2">
                    {content.currentLanguage === 'ru' 
                      ? 'Содержимое заблокировано' 
                      : 'Inhalt gesperrt'}
                  </h3>
                  <p className="body-standard text-gray-400 mb-6">
                    {content.currentLanguage === 'ru'
                      ? 'Приобретите доступ к этому видео'
                      : 'Erwerben Sie Zugang zu diesem Video'}
                  </p>
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="btn-primary"
                  >
                    {content.currentLanguage === 'ru' 
                      ? `Купить за €${currentVideo.price}` 
                      : `Für €${currentVideo.price} kaufen`}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 bg-white border-l border-border-light">
          <div className="p-6">
            <h2 className="heading-medium text-text-primary mb-6">
              {content.currentLanguage === 'ru' ? 'Список уроков' : 'Lektionsliste'}
            </h2>
            
            <div className="space-y-3 mb-8">
              {content.videos.map((video, index) => {
                const isActive = video.id === currentVideo.id;
                const hasVideoAccess = video.isFree || isPurchased(video.id);
                
                return (
                  <div
                    key={video.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      isActive 
                        ? 'bg-brand-primary/10 border border-brand-primary' 
                        : 'bg-bg-light hover:bg-bg-subtle'
                    }`}
                    onClick={() => handleNavigateVideo(video)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="body-small text-text-muted mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="body-standard font-medium text-text-primary mb-1">
                          {video.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="body-small text-text-muted">
                            {video.duration}
                          </span>
                          
                          {video.isFree && (
                            <span className="body-small text-brand-primary">
                              {content.pricing.free}
                            </span>
                          )}
                          
                          {!hasVideoAccess && (
                            <Lock className="w-4 h-4 text-text-muted" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="border-t border-border-light pt-6">
              <div className="flex gap-2">
                {prevVideo && (
                  <button
                    onClick={() => handleNavigateVideo(prevVideo)}
                    className="btn-secondary flex-1 flex items-center gap-2 justify-center"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {content.currentLanguage === 'ru' ? 'Назад' : 'Zurück'}
                  </button>
                )}
                
                {nextVideo && (
                  <button
                    onClick={() => handleNavigateVideo(nextVideo)}
                    className="btn-primary flex-1 flex items-center gap-2 justify-center"
                  >
                    {content.currentLanguage === 'ru' ? 'Далее' : 'Weiter'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          video={currentVideo}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default VideoPlayer;