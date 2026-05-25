import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  const [showIntro, setShowIntro] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: loading, 1: brand reveal, 2: exiting

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem('hasSeenIntro', 'true');
    } else {
      if (onComplete) onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  useEffect(() => {
    if (showIntro) {
      // Progress simulation
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            return 100;
          }
          // Slow down near 100 for a realistic load feel
          const increment = p > 80 ? Math.random() * 5 : Math.random() * 20;
          return Math.min(p + increment, 100);
        });
      }, 80);

      const t1 = setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        setPhase(1); // Reveal Brand Sequence
      }, 1600);

      const t2 = setTimeout(() => {
        setPhase(2); // Start Exit Sequence (Doors open)
        window.introJustFinished = true;
        if (onComplete) onComplete(); // Trigger site render as doors open!
      }, 4000);

      const t3 = setTimeout(() => {
        setShowIntro(false); // Unmount entirely
      }, 5500);

      return () => {
        clearInterval(interval);
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto flex overflow-hidden">
          {/* Left Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={phase === 2 ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="w-1/2 h-full bg-navy-900 border-r border-navy-800/30 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
          />
          {/* Right Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={phase === 2 ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="w-1/2 h-full bg-navy-900 border-l border-navy-800/30 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
          />

          {/* Center Overlay Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={phase === 2 ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            <AnimatePresence mode="wait">
              {phase === 0 ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center w-full max-w-sm px-8"
                >
                  <div className="relative mb-12">
                    {/* Glowing radar/globe loader */}
                    <div className="w-20 h-20 bg-navy-900 rounded-full border border-navy-700 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.1)] relative">
                      <Globe size={32} className="text-navy-500" />
                      
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-t-2 border-gold-400"
                        style={{ filter: "drop-shadow(0 0 8px rgba(250,204,21,0.8))" }}
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 rounded-full border-b border-navy-500/50"
                      />
                    </div>
                  </div>
                  
                  {/* Progress Info */}
                  <div className="w-full flex justify-between items-end mb-3">
                    <div className="text-navy-400 text-[10px] tracking-[0.3em] font-body uppercase flex flex-col gap-1">
                      <span>System Boot</span>
                      <span className="text-white">Connecting Global Network</span>
                    </div>
                    <div className="font-mono text-gold-400 text-xl font-light">
                      {Math.floor(progress)}%
                    </div>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="w-full h-[1px] bg-navy-800 relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 bottom-0 bg-gold-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="brand"
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
                    className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mb-6 shadow-[0_0_50px_rgba(250,204,21,0.4)] flex items-center justify-center border border-gold-300 relative overflow-hidden"
                  >
                    {/* Inner glowing shine effect */}
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full -skew-x-12"
                    />
                    <img 
                      src="/images/logo.png" 
                      alt="Tanisii Impex Logo" 
                      className="w-16 h-16 object-contain relative z-10 brightness-[0.1] filter drop-shadow-md" 
                    />
                  </motion.div>
                  
                  <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg flex flex-wrap justify-center overflow-hidden">
                    {'TANISI'.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.2, 0.6, 0.3, 1] }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                    <span className="w-3 md:w-5" />
                    {'IMPEX'.split('').map((letter, i) => (
                      <motion.span
                        key={'i' + i}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        className="text-gold-400 inline-block"
                        transition={{ duration: 0.6, delay: 0.6 + (0.1 * i), ease: [0.2, 0.6, 0.3, 1] }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </h1>
                  
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-navy-500 to-transparent w-full max-w-[280px] md:max-w-sm mb-4"
                  />
                  
                  <motion.p
                    initial={{ opacity: 0, letterSpacing: "0em" }}
                    animate={{ opacity: 1, letterSpacing: "0.4em" }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="text-navy-300 font-body text-[10px] md:text-xs uppercase text-center"
                  >
                    Premium Export Solutions
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
