// Mock data for AI Course App

export const courseData = {
  ru: {
    title: "AI Курс для Начинающих",
    subtitle: "Изучите основы ChatGPT и AI технологий",
    description: "Полный курс для начинающих по использованию ChatGPT и других AI инструментов в повседневной жизни и работе в Германии.",
    heroText: "Освойте AI технологии уже сегодня",
    getStartedBtn: "Начать обучение",
    freeTrialBtn: "Бесплатный урок",
    videos: [
      {
        id: 1,
        title: "Введение в ChatGPT",
        duration: "12:30",
        description: "Базовое введение в ChatGPT и его возможности",
        isFree: true,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video1.mp4"
      },
      {
        id: 2,
        title: "Эффективные промпты для работы",
        duration: "18:45",
        description: "Как создавать эффективные запросы для получения лучших результатов",
        isFree: false,
        price: 9.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video2.mp4"
      },
      {
        id: 3,
        title: "ChatGPT для бизнеса в Германии",
        duration: "22:15",
        description: "Практическое использование AI в немецкой деловой среде",
        isFree: false,
        price: 14.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video3.mp4"
      },
      {
        id: 4,
        title: "AI инструменты для повседневной жизни",
        duration: "16:20",
        description: "Полезные AI приложения для жизни в Германии",
        isFree: false,
        price: 12.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video4.mp4"
      }
    ],
    pricing: {
      single: "Отдельные уроки от €9.99",
      bundle: "Полный курс за €29.99",
      free: "Бесплатный"
    },
    features: [
      "Практические примеры использования",
      "Пошаговые инструкции",
      "Актуальная информация для Германии",
      "Поддержка на русском языке"
    ]
  },
  de: {
    title: "AI Kurs für Anfänger",
    subtitle: "Lernen Sie die Grundlagen von ChatGPT und AI-Technologien",
    description: "Ein vollständiger Anfängerkurs zur Nutzung von ChatGPT und anderen AI-Tools im täglichen Leben und bei der Arbeit in Deutschland.",
    heroText: "Beherrschen Sie AI-Technologien noch heute",
    getStartedBtn: "Kurs beginnen",
    freeTrialBtn: "Kostenlose Lektion",
    videos: [
      {
        id: 1,
        title: "Einführung in ChatGPT",
        duration: "12:30",
        description: "Grundlegende Einführung in ChatGPT und seine Möglichkeiten",
        isFree: true,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video1.mp4"
      },
      {
        id: 2,
        title: "Effektive Prompts für die Arbeit",
        duration: "18:45",
        description: "Wie Sie effektive Anfragen für bessere Ergebnisse erstellen",
        isFree: false,
        price: 9.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video2.mp4"
      },
      {
        id: 3,
        title: "ChatGPT für Unternehmen in Deutschland",
        duration: "22:15",
        description: "Praktische Anwendung von AI in der deutschen Geschäftswelt",
        isFree: false,
        price: 14.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video3.mp4"
      },
      {
        id: 4,
        title: "AI-Tools für den Alltag",
        duration: "16:20",
        description: "Nützliche AI-Anwendungen für das Leben in Deutschland",
        isFree: false,
        price: 12.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "mock://video4.mp4"
      }
    ],
    pricing: {
      single: "Einzelne Lektionen ab €9,99",
      bundle: "Vollständiger Kurs für €29,99",
      free: "Kostenlos"
    },
    features: [
      "Praktische Anwendungsbeispiele",
      "Schritt-für-Schritt-Anleitungen",
      "Aktuelle Informationen für Deutschland",
      "Support auf Deutsch"
    ]
  }
};

export const mockUser = {
  id: null,
  purchasedVideos: []
};

// Mock payment status
export const mockPaymentStatus = {
  processing: false,
  success: false,
  error: null
};

// Mock video URLs (in real app these would be actual video URLs)
export const mockVideoUrls = {
  1: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
  2: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
  3: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
  4: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4"
};

// Mock functions for development
export const mockFunctions = {
  purchaseVideo: async (videoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockUser.purchasedVideos.push(videoId);
        resolve({ success: true, videoId });
      }, 2000);
    });
  },
  
  checkPurchaseStatus: (videoId) => {
    return mockUser.purchasedVideos.includes(videoId);
  },
  
  processPayment: async (amount, currency = 'EUR') => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: Math.random() > 0.1, // 90% success rate
          transactionId: `mock_${Date.now()}`,
          amount,
          currency
        });
      }, 3000);
    });
  }
};