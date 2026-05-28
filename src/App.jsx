import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';

// Page loader
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-3 border-gold-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm font-body">Loading...</p>
      </div>
    </div>
  );
}

// Lazy pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const ProductCategory = lazy(() => import('@/pages/ProductCategory'));
const Services = lazy(() => import('@/pages/Services'));
const GlobalReach = lazy(() => import('@/pages/GlobalReach'));
const Quality = lazy(() => import('@/pages/Quality'));
const Contact = lazy(() => import('@/pages/Contact'));
const Inquiry = lazy(() => import('@/pages/Inquiry'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function S({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true,                  element: <S><Home /></S> },
      { path: 'about',                element: <S><About /></S> },
      { path: 'products',             element: <S><Products /></S> },
      { path: 'products/:category',   element: <S><ProductCategory /></S> },
      { path: 'services',             element: <S><Services /></S> },
      { path: 'global-reach',         element: <S><GlobalReach /></S> },
      { path: 'quality',              element: <S><Quality /></S> },
      { path: 'contact',              element: <S><Contact /></S> },
      { path: 'inquiry',              element: <S><Inquiry /></S> },
      { path: 'faq',                  element: <S><FAQ /></S> },
      { path: '*',                    element: <S><NotFound /></S> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
