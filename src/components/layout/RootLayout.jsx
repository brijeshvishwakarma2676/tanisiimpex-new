import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import CookieBanner from '@/components/ui/CookieBanner';

// Top info bar height: ~32px on lg, 0 on mobile
// Main nav height: 64px (h-16)
// Total offset:  96px on desktop, 64px on mobile

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full relative">
      <Navbar />
      {/* Spacer that equals the fixed navbar height (info bar + main nav) */}
      <div className="h-16 lg:h-[96px] shrink-0" aria-hidden="true" />
      <main className="flex-1 overflow-x-hidden w-full relative">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <ScrollRestoration />
    </div>
  );
}
