import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, useRouteError, Link } from 'react-router-dom';
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
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Services = lazy(() => import('@/pages/Services'));
const GlobalReach = lazy(() => import('@/pages/GlobalReach'));
const Quality = lazy(() => import('@/pages/Quality'));
const Contact = lazy(() => import('@/pages/Contact'));
const Inquiry = lazy(() => import('@/pages/Inquiry'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('@/pages/TermsOfUse'));

function S({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

function GlobalErrorBoundary() {
  const error = useRouteError();
  console.error("Application Error:", error);

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="font-heading font-bold text-navy-800 text-2xl mb-3">Something went wrong</h1>
        <p className="text-gray-500 font-body mb-8">
          {error?.statusText || error?.message || "An unexpected application error occurred. Our team has been notified."}
        </p>
        <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gold-400 text-navy-900 font-semibold font-body hover:bg-gold-500 transition-colors w-full">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <GlobalErrorBoundary />,
    children: [
      { index: true,                  element: <S><Home /></S> },
      { path: 'about',                element: <S><About /></S> },
      { path: 'products',             element: <S><Products /></S> },
      { path: 'products/:category',   element: <S><ProductCategory /></S> },
      { path: 'products/:category/:product', element: <S><ProductDetail /></S> },
      { path: 'services',             element: <S><Services /></S> },
      { path: 'global-reach',         element: <S><GlobalReach /></S> },
      { path: 'quality',              element: <S><Quality /></S> },
      { path: 'contact',              element: <S><Contact /></S> },
      { path: 'inquiry',              element: <S><Inquiry /></S> },
      { path: 'faq',                  element: <S><FAQ /></S> },
      { path: 'privacy-policy',        element: <S><PrivacyPolicy /></S> },
      { path: 'terms',                 element: <S><TermsOfUse /></S> },
      { path: '*',                     element: <S><NotFound /></S> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
