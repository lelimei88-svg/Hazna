import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisionMissionSection } from './components/VisionMissionSection';
import { HomeProductPreview } from './components/HomeProductPreview';
import { ProductShowcase } from './components/ProductShowcase';
import { GallerySection } from './components/GallerySection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PartnerPortalModal } from './components/PartnerPortalModal';
import { AuthProvider } from './context/AuthContext';
import { COMPANY_INFO } from './data/franchiseData';

function AppContent() {
  const [activePage, setActivePage] = useState<'home' | 'product' | 'career' | 'gallery' | 'contact'>('home');
  const [contactPackageInterest] = useState<string>('Konsultasi Kemitraan & Paket Gerobak');
  const [portalOpen, setPortalOpen] = useState<boolean>(false);

  const handleOpenWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg ||
        'Halo CV Hazna Berkah Indonesia, saya berminat konsultasi kemitraan. Mohon info selengkapnya.'
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleInquireProduct = (productName: string) => {
    handleOpenWhatsApp(`Halo CV Hazna Berkah Indonesia, saya tertarik dengan varian menu ${productName}. Mohon info resep & bahan bakunya.`);
  };

  const handleApplyCareer = (positionTitle: string) => {
    handleOpenWhatsApp(`Halo HRD CV Hazna Berkah Indonesia, saya tertarik melamar untuk posisi ${positionTitle}. Mohon petunjuk pengiriman dokumen CV & portofolio.`);
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0] text-[#1A1A1A] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#FF9F73]/30">
      
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenPortal={() => setPortalOpen(true)}
      />

      <main className="flex-1">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-300">
            <Hero onNavigate={setActivePage} onOpenWhatsApp={handleOpenWhatsApp} />
            <VisionMissionSection />
            <HomeProductPreview onNavigate={setActivePage} />
          </div>
        )}

        {activePage === 'product' && (
          <div className="animate-in fade-in duration-300 space-y-12 py-6">
            <ProductShowcase onInquireProduct={handleInquireProduct} />
          </div>
        )}

        {activePage === 'career' && (
          <div className="animate-in fade-in duration-300 py-6">
            <CareersSection onApplyCareer={handleApplyCareer} onNavigate={setActivePage} />
          </div>
        )}

        {activePage === 'gallery' && (
          <div className="animate-in fade-in duration-300 py-6">
            <GallerySection onNavigate={setActivePage} />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="animate-in fade-in duration-300 py-6">
            <ContactSection initialPackage={contactPackageInterest} onNavigate={setActivePage} />
          </div>
        )}
      </main>

      <FloatingWhatsApp />
      <PartnerPortalModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}