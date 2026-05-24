import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Tanisii Impex</title>
      </Helmet>
      <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-lg"
        >
          <div className="text-8xl mb-6">🌍</div>
          <div className="font-heading font-bold text-gold-300 text-8xl mb-4">404</div>
          <h1 className="font-heading text-white text-3xl mb-4">Page Not Found</h1>
          <p className="text-white/65 font-body mb-10 leading-relaxed">
            This page seems to have gone off-course. Let's get you back to the right port.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/products" className="btn-outline">
              <ArrowLeft size={18} /> View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
