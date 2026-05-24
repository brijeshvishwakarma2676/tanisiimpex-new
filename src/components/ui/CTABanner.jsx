import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * CTABanner — full-width gold gradient banner with heading, subtext, and CTA button
 */
export default function CTABanner({
  heading = 'Ready to Start Importing from India?',
  subtext = 'Join 1000+ satisfied buyers from 30+ countries. Get your custom quote today.',
  buttonLabel = 'Send Us Your Requirements',
  buttonTo = '/inquiry',
  secondaryLabel = null,
  secondaryTo = '/contact',
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20">
      {/* Gold accent */}
      <div className="absolute inset-0 bg-gold-gradient opacity-10" />
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="section-label mb-3 text-gold-300">Take the Next Step</div>
          <h2 className="font-heading text-white mb-5 leading-tight">{heading}</h2>
          <p className="text-white/65 text-lg font-body mb-8">{subtext}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={buttonTo} className="btn-primary">
              {buttonLabel}
              <ArrowRight size={16} />
            </Link>
            {secondaryLabel && (
              <Link to={secondaryTo} className="btn-outline">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
