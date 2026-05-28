import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Search, FlaskConical, Ship, FileText, Package, CreditCard, BarChart3 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';

import { servicesData as services } from '@/data/companyData';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Tanisii Impex — Export Management, Logistics, Quality Control</title>
        <meta name="description" content="Tanisii Impex offers end-to-end export services: product sourcing, quality control, logistics, documentation, custom packaging, and trade finance support." />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold-300">What We Do</span>
            <h1 className="font-heading text-white mt-4 mb-6">Our Services</h1>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Full-spectrum export services designed to make importing from India simple, secure, and profitable for global buyers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="space-y-20">
            {services.map(({ Icon, title, desc, bullets }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Visual side */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-navy-gradient rounded-3xl h-64 flex items-center justify-center shadow-card">
                    <Icon size={72} className="text-white/20" strokeWidth={1} />
                  </div>
                </div>

                {/* Content side */}
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-navy-700" />
                  </div>
                  <h2 className="font-heading text-navy-800 text-3xl mb-4">{title}</h2>
                  <p className="text-gray-600 font-body leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm font-body text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <ArrowRight size={10} className="text-green-600" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-outline-navy mt-6 inline-flex">
                    Enquire About This Service <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <SectionHeader label="Trade Terms" heading="Incoterms We Support" subtext="We're flexible on trade terms to match your logistics preferences and capabilities." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {[
              { term: 'FOB', desc: 'Free On Board' },
              { term: 'CIF', desc: 'Cost, Insurance & Freight' },
              { term: 'CFR', desc: 'Cost & Freight' },
              { term: 'DDP', desc: 'Delivered Duty Paid' },
              { term: 'EXW', desc: 'Ex Works' },
              { term: 'CPT', desc: 'Carriage Paid To' },
            ].map((inc) => (
              <motion.div
                key={inc.term}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-4 text-center hover:border-gold-300 hover:shadow-gold transition-all"
              >
                <div className="font-heading font-bold text-navy-800 text-2xl mb-1">{inc.term}</div>
                <div className="text-gray-500 text-xs font-body leading-tight">{inc.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Need a Custom Export Solution?" subtext="Every trade is unique. Our team will design a tailored solution for your specific requirements." buttonLabel="Talk to Our Export Team" buttonTo="/contact" />
    </>
  );
}
