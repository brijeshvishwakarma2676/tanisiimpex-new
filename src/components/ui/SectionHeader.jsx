import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * SectionHeader — reusable heading block with label, heading, subtitle, and gold divider.
 * 
 * @param {string} label   - Small uppercase label (gold text)
 * @param {string} heading - Main section heading
 * @param {string} subtext - Optional paragraph beneath heading
 * @param {string} align   - 'left' | 'center' (default: 'center')
 * @param {boolean} light  - If true, renders white text (for dark backgrounds)
 */
export default function SectionHeader({ label, heading, subtext, align = 'center', light = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  const textAlign = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${textAlign} gap-3`}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className={`${light ? 'text-white' : 'text-navy-800'} leading-tight text-balance`}>
        {heading}
      </h2>
      {align === 'center' && <span className="gold-divider" />}
      {subtext && (
        <p className={`max-w-2xl text-base leading-relaxed font-body ${
          light ? 'text-white/70' : 'text-gray-500'
        } ${align === 'center' ? 'text-center' : ''}`}>
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
