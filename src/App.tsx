import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PixelPlayPage from './pages/PixelPlayPage';
import IllustrationPage from './pages/IllustrationPage';
import CommunicationDesignPage from './pages/CommunicationDesignPage';
import HRXPage from './pages/HRXPage';
import AlmondHousePage from './pages/AlmondHousePage';
import GappeVappePage from './pages/GappeVappePage';
import UIUXDesignPage from './pages/UIUXDesignPage';
import SriramEmaniPage from './pages/SriramEmaniPage';
import FortunaInsightPage from './pages/FortunaInsightPage';
import GoogleAssistantPage from './pages/GoogleAssistantPage';
import CulturalConnectPage from './pages/CulturalConnectPage';
import StyleAIPage from './pages/StyleAIPage';
import PromptcraftAIPage from './pages/PromptcraftAIPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/pixelplay" element={<PixelPlayPage />} />
          <Route path="/projects/illustration" element={<IllustrationPage />} />
          <Route path="/projects/communication-design" element={<CommunicationDesignPage />} />
          <Route path="/projects/communication-design/hrx" element={<HRXPage />} />
          <Route path="/projects/communication-design/almond-house" element={<AlmondHousePage />} />
          <Route path="/projects/communication-design/gappe-vappe" element={<GappeVappePage />} />
          <Route path="/projects/uiux-design" element={<UIUXDesignPage />} />
          <Route path="/projects/uiux-design/sriram-emani" element={<SriramEmaniPage />} />
          <Route path="/projects/uiux-design/fortuna-insight" element={<FortunaInsightPage />} />
          <Route path="/projects/uiux-design/google-assistant" element={<GoogleAssistantPage />} />
          <Route path="/projects/uiux-design/cultural-connect" element={<CulturalConnectPage />} />
          <Route path="/projects/uiux-design/styleai" element={<StyleAIPage />} />
          <Route path="/projects/uiux-design/promptcraft-ai" element={<PromptcraftAIPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;