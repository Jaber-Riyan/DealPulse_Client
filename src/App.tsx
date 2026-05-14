import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './app/AppContext';

// Pages
import { LandingPage } from './app/LandingPage';
import { LoginPage } from './app/LoginPage';
import { RegisterPage } from './app/RegisterPage';
import { MainFeedPage } from './app/MainFeedPage';
import { FollowingFeedPage } from './app/FollowingFeedPage';
import { ExplorePage } from './app/ExplorePage';
import { StoreProfilePage } from './app/StoreProfilePage';
import { SavedDealsPage } from './app/SavedDealsPage';
import { NotificationsPage } from './app/NotificationsPage';
import { AboutPage } from './app/AboutPage';
import { PrivacyPolicyPage } from './app/PrivacyPolicyPage';
import { ContactPage } from './app/ContactPage';
import { NotFoundPage } from './app/NotFoundPage';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feed" element={<MainFeedPage />} />
          <Route path="/following" element={<FollowingFeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/store/:handle" element={<StoreProfilePage />} />
          <Route path="/saved" element={<SavedDealsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
