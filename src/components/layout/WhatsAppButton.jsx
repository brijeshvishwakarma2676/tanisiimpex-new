import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '919152121077';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in importing products from Tanisii Impex. Please share details about your products and pricing."
);

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-card-hover border border-gray-100 p-4 w-64"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-heading font-semibold text-navy-800 text-sm">Chat with Us</div>
                <div className="text-xs text-gray-500 font-body">Typically replies within 1 hour</div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600 p-0.5"
              >
                <X size={14} />
              </button>
            </div>
            <p className="text-sm text-gray-600 font-body mb-3">
              Hi! 👋 How can we help you with your import requirements today?
            </p>
            <button
              onClick={handleClick}
              className="w-full bg-green-500 text-white text-sm font-semibold py-2.5 rounded-xl
                         hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={16} />
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring */}
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        <motion.button
          onClick={() => setShowTooltip(!showTooltip)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg
                     flex items-center justify-center text-white transition-colors"
          aria-label="Chat on WhatsApp"
        >
          {showTooltip ? <X size={22} /> : <FaWhatsapp size={26} />}
        </motion.button>
      </div>
    </div>
  );
}
