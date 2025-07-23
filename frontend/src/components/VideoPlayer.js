import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { ArrowLeft, Lock, Play, ChevronRight, ChevronLeft, Clock, List } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center bg-bg-light">
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
    <div className="min-h-screen bg-bg-light">
      {/* Header */}
      <div className="bg-white border-b border-border-light p-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/course')}
          className="text-brand-primary hover:text-brand-secondary transition-colors p-2 rounded-lg hover:bg-bg-light"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <h1 className="heading-medium text-text-primary">
            {currentVideo.title}
          </h1>
          <p className="body-small text-text-muted flex items-center gap-2 mt-1">
            <Clock className="w-4 h-4" />
            {currentVideo.duration}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 p-6">
        {/* Main Video Player */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-light">
            <div className="aspect-video bg-gray-900 relative">
              {hasAccess ? (
                <div className="video-container">
                  <iframe
                    src={currentVideo.videoUrl}
                    title={currentVideo.title}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white p-8">
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
            
            {/* Video Info */}
            <div className="p-6">
              <h2 className="heading-large text-text-primary mb-2">
                {currentVideo.title}
              </h2>
              <p className="body-large text-text-secondary mb-4">
                {currentVideo.description}
              </p>
              
              {/* Topics Covered */}
              {currentVideo.content && currentVideo.content.topics && (
                <div className="bg-bg-light rounded-lg p-4">
                  <h3 className="heading-medium text-text-primary mb-3 flex items-center gap-2">
                    <List className="w-5 h-5" />
                    {content.currentLanguage === 'ru' ? 'Что вы изучите:' : 'Was Sie lernen werden:'}
                  </h3>
                  <ul className="space-y-2">
                    {currentVideo.content.topics.map((topic, index) => (
                      <li key={index} className="body-standard text-text-secondary flex items-start gap-2">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-light">
            <h2 className="heading-medium text-text-primary mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {content.currentLanguage === 'ru' ? 'Список уроков' : 'Lektionsliste'}
            </h2>
            
            <div className="space-y-3 mb-8">
              {content.videos.map((video, index) => {
                const isActive = video.id === currentVideo.id;
                const hasVideoAccess = video.isFree || isPurchased(video.id);
                
                return (
                  <div
                    key={video.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all card-hover ${
                      isActive 
                        ? 'bg-brand-light border-brand-primary' 
                        : 'bg-bg-light hover:bg-bg-subtle'
                    }`}
                    onClick={() => handleNavigateVideo(video)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="body-small text-text-muted mt-1 font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`body-standard font-medium mb-1 ${
                          isActive ? 'text-brand-primary' : 'text-text-primary'
                        }`}>
                          {video.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="body-small text-text-muted flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </span>
                          
                          {video.isFree && (
                            <span className="body-small text-brand-primary font-medium">
                              {content.pricing.free}
                            </span>
                          )}
                          
                          {!video.isFree && !hasVideoAccess && (
                            <div className="flex items-center gap-2">
                              <span className="body-small text-brand-primary font-medium">
                                €{video.price}
                              </span>
                              <Lock className="w-4 h-4 text-text-muted" />
                            </div>
                          )}
                          
                          {hasVideoAccess && (
                            <Play className="w-4 h-4 text-brand-primary" />
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