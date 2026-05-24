import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

/**
 * StatCard — animated number counter card shown when in viewport
 */
export default function StatCard({ value, suffix = '', label, icon, light = false, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col items-center text-center p-6 rounded-2xl ${
        light
          ? 'bg-white/8 border border-white/12'
          : 'bg-white border border-gray-100 shadow-card'
      }`}
    >
      {icon && (
        <span className="text-3xl mb-3 leading-none" aria-hidden="true">{icon}</span>
      )}
      <div className={`font-heading font-bold text-4xl leading-none mb-1 ${
        light ? 'text-gold-300' : 'text-navy-800'
      }`}>
        {inView ? (
          <CountUp
            start={0}
            end={value}
            duration={2}
            separator=","
            delay={delay}
          />
        ) : (
          <span>0</span>
        )}
        <span className="text-gold-400">{suffix}</span>
      </div>
      <div className={`text-sm font-body font-medium ${light ? 'text-white/65' : 'text-gray-500'}`}>
        {label}
      </div>
    </motion.div>
  );
}
