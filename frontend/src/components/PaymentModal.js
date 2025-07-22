import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { X, CreditCard, Check, AlertCircle } from 'lucide-react';

const PaymentModal = ({ video, onClose, onSuccess }) => {
  const { content } = useLanguage();
  const { purchaseVideo, isProcessingPayment } = useUser();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle, processing, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handlePurchase = async () => {
    setPaymentStatus('processing');
    setErrorMessage('');

    try {
      const result = await purchaseVideo(video.id, video.price);
      
      if (result.success) {
        setPaymentStatus('success');
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setPaymentStatus('error');
        setErrorMessage(result.error || 'Payment failed');
      }
    } catch (error) {
      setPaymentStatus('error');
      setErrorMessage(error.message || 'An error occurred');
    }
  };

  if (paymentStatus === 'success') {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="heading-medium text-text-primary mb-2">
            {content.currentLanguage === 'ru' ? 'Оплата прошла успешно!' : 'Zahlung erfolgreich!'}
          </h3>
          <p className="body-standard text-text-secondary">
            {content.currentLanguage === 'ru' 
              ? 'Перенаправление к видео...' 
              : 'Weiterleitung zum Video...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light">
          <h2 className="heading-medium text-text-primary">
            {content.currentLanguage === 'ru' ? 'Покупка урока' : 'Lektion kaufen'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-bg-light"
          >
            <X className="w-5 h-5 text-text-muted" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Video Info */}
          <div className="bg-bg-light rounded-lg p-4 mb-6">
            <h3 className="body-standard font-medium text-text-primary mb-1">
              {video.title}
            </h3>
            <p className="body-small text-text-secondary mb-2">
              {video.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="body-small text-text-muted">
                {content.currentLanguage === 'ru' ? 'Продолжительность:' : 'Dauer:'} {video.duration}
              </span>
              <span className="heading-medium text-brand-primary">
                €{video.price}
              </span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <label className="body-standard text-text-primary mb-3 block">
              {content.currentLanguage === 'ru' ? 'Способ оплаты' : 'Zahlungsmethode'}
            </label>
            
            <div className="space-y-2">
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  paymentMethod === 'card' 
                    ? 'border-brand-primary bg-brand-primary/5' 
                    : 'border-border-medium hover:border-border-light'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-brand-primary" />
                  <span className="body-standard text-text-primary">
                    {content.currentLanguage === 'ru' ? 'Кредитная карта' : 'Kreditkarte'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {paymentStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="body-small text-red-700">
                  {errorMessage || (content.currentLanguage === 'ru' 
                    ? 'Произошла ошибка при обработке платежа' 
                    : 'Bei der Zahlungsabwicklung ist ein Fehler aufgetreten')}
                </p>
              </div>
            </div>
          )}

          {/* Purchase Button */}
          <button
            onClick={handlePurchase}
            disabled={paymentStatus === 'processing'}
            className={`btn-primary w-full ${
              paymentStatus === 'processing' 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover-scale'
            }`}
          >
            {paymentStatus === 'processing' ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {content.currentLanguage === 'ru' ? 'Обработка...' : 'Verarbeitung...'}
              </div>
            ) : (
              `${content.currentLanguage === 'ru' ? 'Купить за' : 'Kaufen für'} €${video.price}`
            )}
          </button>

          {/* Terms */}
          <p className="body-small text-text-muted text-center mt-4">
            {content.currentLanguage === 'ru'
              ? 'Нажимая "Купить", вы соглашаетесь с условиями использования'
              : 'Durch Klicken auf "Kaufen" stimmen Sie den Nutzungsbedingungen zu'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;