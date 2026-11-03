import React from 'react';
import { weddingConfig } from './config/weddingConfig';
import { Navigation } from './components/Navigation';
import { MusicPlayer } from './components/MusicPlayer';
import { DesktopWrapper } from './components/DesktopWrapper';
import { OpeningHero } from './components/OpeningHero';
import { CoupleSection } from './components/CoupleSection';
import { BlessingsSection } from './components/BlessingsSection';
import { EventsSection } from './components/EventsSection';
import { VenueSection } from './components/VenueSection';
import { GallerySection } from './components/GallerySection';
import { CountdownSection } from './components/CountdownSection';
import { FinalInvitationSection } from './components/FinalInvitationSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF6EF] text-[#6E3943]">
      {/* Floating Menu Drawer */}
      <Navigation />

      {/* Floating Wedding Music Player */}
      <MusicPlayer />

      {/* Desktop Centered Frame Presentation Wrapper */}
      <DesktopWrapper>
        {/* 1. OPENING HERO */}
        <OpeningHero />

        {/* 2. RAM & SITA COUPLE INTRODUCTION */}
        <CoupleSection />

        {/* 3. BLESSINGS SECTION */}
        <BlessingsSection />

        {/* 4. WEDDING EVENTS (HALDI, MEHENDI, MUHURTHAM, RECEPTION) */}
        <EventsSection />

        {/* 5. VENUE SECTION */}
        <VenueSection />

        {/* 6. PHOTO / MEMORIES GALLERY */}
        <GallerySection />

        {/* 7. LIVE COUNTDOWN */}
        <CountdownSection />

        {/* 8. FINAL EMOTIONAL INVITATION */}
        <FinalInvitationSection />

        {/* 10. FOOTER */}
        <Footer />
      </DesktopWrapper>
    </div>
  );
}

export default App;
