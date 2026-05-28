import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Chatbot from '@/components/ui/chatbot';
import CookieBanner from '@/components/ui/CookieBanner';
import IntroScreen from '@/components/ui/IntroScreen';
// Top info bar height: ~32px on lg, 0 on mobile
// Main nav height: 64px (h-16)
// Total offset:  96px on desktop, 64px on mobile

export default function RootLayout() {
  const [introFinished, setIntroFinished] = useState(() => {
    return sessionStorage.getItem('hasSeenIntro') === 'true';
  });

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full relative">
      <IntroScreen onComplete={() => setIntroFinished(true)} />
      
      {/* 
        BRILLIANT TRICK: We always render the site so the browser pre-loads/caches 
        all images, fonts, and heavy assets in the background while the Intro plays.
        When introFinished becomes true, the 'key' changes, completely remounting 
        the component tree. This perfectly restarts all Framer Motion animations 
        exactly as the doors open!
      */}
      <div 
        key={introFinished ? 'app-ready' : 'app-loading'} 
        className="flex flex-col min-h-screen w-full"
      >
        <Navbar />
        {/* Spacer that equals the fixed navbar height (info bar + main nav) */}
        <div className="h-16 lg:h-[96px] shrink-0" aria-hidden="true" />
        <main className="flex-1 overflow-x-hidden w-full relative">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <CookieBanner />
      </div>
      
      <ScrollRestoration />
    </div>
  );
}
