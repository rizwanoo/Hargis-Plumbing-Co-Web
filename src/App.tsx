import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutWorkPage } from './pages/AboutWorkPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  // Synchronize state with URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('services/')) {
        const parts = hash.split('/');
        setCurrentPage('services');
        setSelectedServiceId(parts[1]);
        return;
      }

      if (hash === 'services') {
        setCurrentPage('services');
        setSelectedServiceId(undefined);
        return;
      }

      if (hash === 'about' || hash === 'our-work') {
        setCurrentPage('about');
        return;
      }

      if (hash === 'contact' || hash === 'estimates') {
        setCurrentPage('contact');
        return;
      }

      setCurrentPage('home');
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page: PageId, serviceId?: string) => {
    setCurrentPage(page);
    setSelectedServiceId(serviceId);

    if (page === 'services' && serviceId) {
      window.location.hash = `services/${serviceId}`;
    } else if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = page;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#27343D] selection:bg-[#2457F5] selection:text-white">
      {/* Cinematic Transparent Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            selectedServiceId={selectedServiceId}
          />
        )}
        {currentPage === 'about' && <AboutWorkPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Premium Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
