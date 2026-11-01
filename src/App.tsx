import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CoverageMapSection } from './components/CoverageMapSection';
import { WorkshopAppointments } from './components/WorkshopAppointments';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { FinalContactSection } from './components/FinalContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  // Handle URL changes, browser back/forward and redirects
  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname;

      // Handle redirect: "/contacto" -> "/#contacto"
      if (pathname === '/contacto' || pathname.startsWith('/contacto')) {
        window.history.replaceState(null, '', '/#contacto');
        setCurrentPath('/');
        setTimeout(() => {
          const contactElement = document.getElementById('contacto');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return;
      }

      setCurrentPath(pathname);
    };

    // Initial check for /contacto
    if (window.location.pathname === '/contacto') {
      handleLocationChange();
    }

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (path === '/contacto') {
      window.history.pushState(null, '', '/#contacto');
      setCurrentPath('/');
      setTimeout(() => {
        const contactElement = document.getElementById('contacto');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    window.history.pushState(null, '', path);
    setCurrentPath(path);
  };

  if (currentPath === '/aviso-de-privacidad') {
    return (
      <div className="min-h-screen bg-[#F7F5F0] flex flex-col font-body selection:bg-[#F2B632] selection:text-[#12151C]">
        <Header onNavigate={navigateTo} />
        <PrivacyPolicy onNavigateHome={() => navigateTo('/')} />
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0] flex flex-col font-body selection:bg-[#F2B632] selection:text-[#12151C]">
      {/* Top Bar Navigation */}
      <Header onNavigate={navigateTo} />

      <main className="flex-1">
        {/* 1. Hero with Situation Selector */}
        <Hero />

        {/* 2. Services by situation */}
        <ServicesSection />

        {/* 3. Coverage and How to arrive */}
        <CoverageMapSection />

        {/* 4. Workshop and Appointments */}
        <WorkshopAppointments />

        {/* 5. Trust (Verified physical location & media) */}
        <TrustSection />

        {/* 6. Frequently Asked Questions */}
        <FaqSection />

        {/* 7. Final Contact Section */}
        <FinalContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Fixed Bottom Action Bar for Mobile */}
      <MobileStickyBar />
    </div>
  );
}
