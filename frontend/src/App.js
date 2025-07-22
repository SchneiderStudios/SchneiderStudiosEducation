import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import VideoPlayer from "./components/VideoPlayer";

// Context
import { LanguageProvider } from "./context/LanguageContext";
import { UserProvider } from "./context/UserContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const healthCheck = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log("Backend connected:", response.data.message);
    } catch (e) {
      console.error("Backend connection error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    healthCheck();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <UserProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter>
            <Header />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/course" element={<CoursePage />} />
                <Route path="/video/:videoId" element={<VideoPlayer />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </UserProvider>
  );
}

export default App;