import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUser, mockFunctions } from '../data/mock';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);
  const [purchasedVideos, setPurchasedVideos] = useState([]);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    // Load purchased videos from localStorage
    const saved = localStorage.getItem('purchasedVideos');
    if (saved) {
      const parsed = JSON.parse(saved);
      setPurchasedVideos(parsed);
      setUser(prev => ({ ...prev, purchasedVideos: parsed }));
    }
  }, []);

  const purchaseVideo = async (videoId, price) => {
    setIsProcessingPayment(true);
    
    try {
      // Mock payment processing
      const result = await mockFunctions.processPayment(price, 'EUR');
      
      if (result.success) {
        const updatedPurchases = [...purchasedVideos, videoId];
        setPurchasedVideos(updatedPurchases);
        setUser(prev => ({ ...prev, purchasedVideos: updatedPurchases }));
        
        // Save to localStorage
        localStorage.setItem('purchasedVideos', JSON.stringify(updatedPurchases));
        
        return { success: true, transactionId: result.transactionId };
      } else {
        throw new Error('Payment failed');
      }
    } catch (error) {
      console.error('Purchase error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const isPurchased = (videoId) => {
    return purchasedVideos.includes(videoId);
  };

  const value = {
    user,
    purchasedVideos,
    isProcessingPayment,
    purchaseVideo,
    isPurchased
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};