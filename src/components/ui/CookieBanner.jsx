import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Package, Check } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'packing' | 'flying'
  const [isRendered, setIsRendered] = useState(true);
  const [planeSrc, setPlaneSrc] = useState('/images/cargo_plane.png'); // Fallback

  useEffect(() => {
    // Dynamically remove white background to create a clear PNG
    const img = new Image();
    img.src = '/images/cargo_plane.png';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        const whiteness = (r + g + b) / 3;
        
        // Remove white and near-white pixels
        if (whiteness > 230) {
          if (whiteness > 245) {
            data[i+3] = 0; // Fully transparent
          } else {
            // Anti-aliasing edge softening
            data[i+3] = 255 - ((whiteness - 230) * 10);
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setPlaneSrc(canvas.toDataURL('image/png'));
    };

    const consentStr = localStorage.getItem('cookieConsent');
    let isValidConsent = false;
    
    if (consentStr) {
      try {
        // Support for new TTL format
        if (consentStr.startsWith('{')) {
          const consent = JSON.parse(consentStr);
          const now = new Date().getTime();
          const ONE_DAY = 24 * 60 * 60 * 1000; // 24 hours in ms
          
          if (consent.timestamp && (now - consent.timestamp < ONE_DAY)) {
            isValidConsent = true;
          } else {
            localStorage.removeItem('cookieConsent'); // Expired
          }
        } else {
          // Legacy plain string format handling (optional clean up)
          localStorage.removeItem('cookieConsent'); 
        }
      } catch (e) {
        localStorage.removeItem('cookieConsent');
      }
    }

    if (!isValidConsent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsRendered(false);
    }
  }, []);

  const handleConsent = (type) => {
    const consentData = {
      type,
      timestamp: new Date().getTime()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    
    setStatus('packing');
    
    setTimeout(() => {
      setStatus('flying');
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setIsRendered(false), 1000);
      }, 1500); 
    }, 1000); 
  };

  if (!isRendered) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-none flex items-end">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={
              status === 'flying'
                ? { x: '120vw', y: -400, opacity: 0, scale: 0.5, rotate: 15 }
                : { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }
            }
            exit={{ opacity: 0, scale: 0.8 }}
            transition={
              status === 'flying'
                ? { duration: 1.5, ease: [0.5, -0.1, 0.1, 1] } 
                : { type: 'spring', damping: 25, stiffness: 200 }
            }
            className={`relative pointer-events-auto flex items-center ${
              status === 'idle' ? 'w-[340px]' : 'w-16 h-16 justify-center'
            }`}
          >
            {/* The Cargo Plane */}
            <AnimatePresence>
              {(status === 'packing' || status === 'flying') && (
                <motion.div
                  initial={{ x: -150, y: 100, opacity: 0, rotate: 10 }}
                  animate={
                    status === 'flying' 
                      ? { x: -30, y: 15, opacity: 1, rotate: 10 } 
                      : { x: -45, y: 35, opacity: 1, rotate: 10 }
                  }
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
                  className="absolute z-30 drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]"
                >
                  <img 
                    src={planeSrc}
                    alt="A400M 3D Cargo Plane" 
                    className="w-[180px] h-auto object-contain drop-shadow-xl" 
                  />
                  
                  {/* High-speed Vapor Trail effect behind plane */}
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={status === 'flying' ? { width: 400, opacity: 1 } : { width: 0, opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="absolute top-[50%] right-[70%] h-[3px] bg-gradient-to-r from-transparent via-navy-400/50 to-navy-800 -translate-y-1/2 origin-right rounded-full blur-[1px]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Container */}
            <motion.div
              layout
              className={`backdrop-blur-xl shadow-2xl relative z-20 overflow-hidden flex flex-col justify-center ${
                status === 'idle' 
                  ? 'bg-navy-900/95 border border-navy-700/50 rounded-3xl p-6 w-full' 
                  : 'bg-gold-400 border-2 border-gold-300 rounded-xl p-0 w-16 h-16'
              }`}
              transition={{ layout: { type: 'spring', damping: 20, stiffness: 180 } }}
            >
              <AnimatePresence mode="wait">
                {status === 'idle' ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-3 rounded-2xl border border-navy-700 shadow-inner">
                        <Cookie size={24} className="text-gold-400 drop-shadow-md" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-white text-lg tracking-wide">
                          Cookie Policy
                        </h3>
                        <div className="text-xs text-navy-300 font-body">Tanisii Impex</div>
                      </div>
                    </div>
                    
                    <p className="text-navy-200 font-body text-sm leading-relaxed">
                      We use essential cookies to ensure smooth sailing on our platform. 
                      Accept to optimize your premium trade experience.
                    </p>
                    
                    <div className="flex flex-col gap-2.5 mt-2">
                      <button
                        onClick={() => handleConsent('accepted')}
                        className="w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-heading font-semibold text-sm py-3 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Check size={18} strokeWidth={2.5} /> Accept Cookies
                      </button>
                      <button
                        onClick={() => handleConsent('rejected')}
                        className="w-full bg-navy-800/50 hover:bg-navy-800 text-navy-300 hover:text-white font-heading font-medium text-xs py-2.5 px-4 rounded-xl transition-colors active:scale-95"
                      >
                        Decline Optional Cookies
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="box"
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', delay: 0.3, damping: 15 }}
                    className="text-navy-900 flex items-center justify-center w-full h-full"
                  >
                    <Package size={32} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
