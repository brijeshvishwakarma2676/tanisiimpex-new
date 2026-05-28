import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello! I'm interested in importing from Tanisi Impex. Please share your product catalog and pricing.");

  return (
    <motion.a
      href={`https://wa.me/919152121077?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-5 z-40 flex items-center gap-2 group"
    >
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden sm:block bg-navy-900 text-white text-xs font-body px-3 py-1.5 rounded-lg shadow-lg
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
      >
        Chat with us on WhatsApp
      </motion.span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/40
                      flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
        <FaWhatsapp size={28} className="text-white" />
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </div>
    </motion.a>
  );
}
