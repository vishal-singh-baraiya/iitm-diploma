import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/CurriculumPage';
import AdmissionPage from './pages/AdmissionPage';
import DashboardPage from './pages/DashboardPage';
import PlacementPage from './pages/PlacementPage';
import ContactPage from './pages/ContactPage';
import PartnershipsPage from './pages/PartnershipsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="admission" element={<AdmissionPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="placement" element={<PlacementPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="partnerships" element={<PartnershipsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;