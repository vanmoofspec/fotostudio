import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Inspiration } from './components/Inspiration';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
import { TermsModal, PrivacyModal } from './components/LegalModals';
import { ImageGuideModal } from './components/ImageGuideModal';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isImageGuideOpen, setIsImageGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Pricing />
        <Inspiration />
      </main>
      <Contact 
        onOpenTerms={() => setIsTermsOpen(true)} 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenImageGuide={() => setIsImageGuideOpen(true)}
      />
      
      {/* Floating Action Buttons */}
      <WhatsAppButton />

      {/* Modals */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <ImageGuideModal isOpen={isImageGuideOpen} onClose={() => setIsImageGuideOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;