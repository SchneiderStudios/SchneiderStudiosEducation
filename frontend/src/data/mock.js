// Mock data for Schneider Studios Education AI Course App

export const courseData = {
  ru: {
    title: "AI Курс для Начинающих",
    subtitle: "Изучите основы ChatGPT и AI технологий с Schneider Studios Education",
    description: "Полный курс для начинающих по использованию ChatGPT и других AI инструментов в повседневной жизни и работе в Германии.",
    heroText: "Освойте AI технологии уже сегодня",
    getStartedBtn: "Начать обучение",
    freeTrialBtn: "Бесплатный урок",
    companyName: "Schneider Studios Education",
    videos: [
      {
        id: 1,
        title: "Что такое ChatGPT и как им пользоваться",
        duration: "15:24",
        description: "Полное введение в ChatGPT - что это такое, как зарегистрироваться и начать использовать для повседневных задач",
        isFree: true,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/JTxsNm9IdYU",
        content: {
          topics: [
            "Что такое искусственный интеллект",
            "Регистрация в ChatGPT",
            "Первые шаги с ChatGPT",
            "Основные возможности"
          ]
        }
      },
      {
        id: 2,
        title: "Эффективные промпты для работы",
        duration: "22:18",
        description: "Как создавать эффективные запросы для получения лучших результатов от ChatGPT в профессиональной деятельности",
        isFree: false,
        price: 12.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/hvaPdeNDRO0",
        content: {
          topics: [
            "Принципы написания промптов",
            "Техники для бизнес-задач",
            "Примеры успешных промптов",
            "Ошибки в промптах"
          ]
        }
      },
      {
        id: 3,
        title: "ChatGPT для бизнеса в Германии",
        duration: "28:45",
        description: "Практическое использование AI в немецкой деловой среде, соблюдение GDPR и местных норм",
        isFree: false,
        price: 19.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/bSvTVREwSNw",
        content: {
          topics: [
            "AI в немецком бизнесе",
            "Соблюдение GDPR",
            "Автоматизация процессов",
            "Кейсы из практики"
          ]
        }
      },
      {
        id: 4,
        title: "AI инструменты для повседневной жизни",
        duration: "18:32",
        description: "Обзор полезных AI приложений для жизни в Германии: от планирования до изучения языка",
        isFree: false,
        price: 14.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/VMj-3S1tku0",
        content: {
          topics: [
            "AI для изучения немецкого",
            "Планирование с AI",
            "AI помощники в быту",
            "Полезные приложения"
          ]
        }
      }
    ],
    pricing: {
      single: "Отдельные уроки от €12.99",
      bundle: "Полный курс за €39.99",
      free: "Бесплатный"
    },
    features: [
      "Практические примеры использования",
      "Пошаговые инструкции",
      "Актуальная информация для Германии",
      "Поддержка на русском языке"
    ],
    contact: {
      email: "info@schneiderstudios.education",
      telegram: "@SchneiderStudiosEdu"
    }
  },
  de: {
    title: "AI Kurs für Anfänger",
    subtitle: "Lernen Sie die Grundlagen von ChatGPT und AI-Technologien mit Schneider Studios Education",
    description: "Ein vollständiger Anfängerkurs zur Nutzung von ChatGPT und anderen AI-Tools im täglichen Leben und bei der Arbeit in Deutschland.",
    heroText: "Beherrschen Sie AI-Technologien noch heute",
    getStartedBtn: "Kurs beginnen",
    freeTrialBtn: "Kostenlose Lektion",
    companyName: "Schneider Studios Education",
    videos: [
      {
        id: 1,
        title: "Was ist ChatGPT und wie nutzt man es",
        duration: "15:24",
        description: "Vollständige Einführung in ChatGPT - was es ist, wie man sich registriert und es für alltägliche Aufgaben nutzt",
        isFree: true,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/JTxsNm9IdYU",
        content: {
          topics: [
            "Was ist künstliche Intelligenz",
            "ChatGPT Registrierung",
            "Erste Schritte mit ChatGPT",
            "Grundlegende Funktionen"
          ]
        }
      },
      {
        id: 2,
        title: "Effektive Prompts für die Arbeit",
        duration: "22:18",
        description: "Wie Sie effektive Anfragen erstellen, um bessere Ergebnisse von ChatGPT in der Berufstätigkeit zu erhalten",
        isFree: false,
        price: 12.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/hvaPdeNDRO0",
        content: {
          topics: [
            "Grundlagen des Prompt-Schreibens",
            "Techniken für Geschäftsaufgaben",
            "Beispiele erfolgreicher Prompts",
            "Häufige Prompt-Fehler"
          ]
        }
      },
      {
        id: 3,
        title: "ChatGPT für Unternehmen in Deutschland",
        duration: "28:45",
        description: "Praktische Anwendung von AI in der deutschen Geschäftswelt, DSGVO-Konformität und lokale Normen",
        isFree: false,
        price: 19.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/bSvTVREwSNw",
        content: {
          topics: [
            "AI im deutschen Business",
            "DSGVO-Konformität",
            "Prozessautomatisierung",
            "Praxisbeispiele"
          ]
        }
      },
      {
        id: 4,
        title: "AI-Tools für den Alltag",
        duration: "18:32",
        description: "Überblick über nützliche AI-Anwendungen für das Leben in Deutschland: von Planung bis Sprachenlernen",
        isFree: false,
        price: 14.99,
        thumbnail: "/api/placeholder/400/225",
        videoUrl: "https://www.youtube.com/embed/VMj-3S1tku0",
        content: {
          topics: [
            "AI für Deutschlernen",
            "Planung mit AI",
            "AI-Assistenten im Haushalt",
            "Nützliche Anwendungen"
          ]
        }
      }
    ],
    pricing: {
      single: "Einzelne Lektionen ab €12,99",
      bundle: "Vollständiger Kurs für €39,99",
      free: "Kostenlos"
    },
    features: [
      "Praktische Anwendungsbeispiele",
      "Schritt-für-Schritt-Anleitungen",
      "Aktuelle Informationen für Deutschland",
      "Support auf Deutsch"
    ],
    contact: {
      email: "info@schneiderstudios.education",
      telegram: "@SchneiderStudiosEdu"
    }
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

// Navigation links
export const navigationLinks = {
  ru: {
    about: "О нас",
    courses: "Курсы", 
    contact: "Контакты",
    help: "Помощь",
    faq: "Часто задаваемые вопросы",
    privacy: "Конфиденциальность",
    terms: "Условия использования"
  },
  de: {
    about: "Über uns",
    courses: "Kurse",
    contact: "Kontakt", 
    help: "Hilfe",
    faq: "FAQ",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen"
  }
};