import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Globe, MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import { globalMarkets, exportStats, incotermsList, portsList } from '@/data/globalData';
import CTABanner from '@/components/ui/CTABanner';

// Simple SVG world map placeholder with country dots
function WorldMapSection() {
  const exportedCountries = [
    { name: 'UAE', cx: '58%', cy: '42%' },
    { name: 'Saudi Arabia', cx: '56%', cy: '44%' },
    { name: 'UK', cx: '46%', cy: '27%' },
    { name: 'France', cx: '47%', cy: '29%' },
    { name: 'Germany', cx: '49%', cy: '27%' },
    { name: 'Nigeria', cx: '48%', cy: '52%' },
    { name: 'Singapore', cx: '74%', cy: '55%' },
    { name: 'USA', cx: '22%', cy: '36%' },
    { name: 'Russia', cx: '62%', cy: '22%' },
    { name: 'Kenya', cx: '55%', cy: '55%' },
    { name: 'Malaysia', cx: '73%', cy: '52%' },
    { name: 'Japan', cx: '82%', cy: '32%' },
  ];

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Simplified world map grid lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 120} x2="1200" y2={i * 120} stroke="#D4A017" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <line key={`v${i}`} x1={i * 120} y1="0" x2={i * 120} y2="600" stroke="#D4A017" strokeWidth="0.5" />
          ))}
          <ellipse cx="600" cy="300" rx="560" ry="260" fill="none" stroke="#D4A017" strokeWidth="1" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <SectionHeader
          label="Global Footprint"
          heading="From Nashik to the World"
          subtext="Our products reach buyers in 30+ countries across six continents."
          light
        />

        {/* Map with dots */}
        <div className="mt-10 relative bg-navy-800/50 rounded-3xl border border-white/10 overflow-hidden h-80">
          <svg viewBox="0 0 100 50" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* India (source) */}
            <circle cx="65" cy="45" r="1.2" fill="#D4A017" />
            <circle cx="65" cy="45" r="2.5" fill="none" stroke="#D4A017" strokeWidth="0.5" opacity="0.6">
              <animate attributeName="r" from="1.5" to="4" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="66" y="44" fontSize="1.5" fill="#F0C040" fontFamily="sans-serif">Nashik</text>

            {/* Export destination dots */}
            {exportedCountries.map((c) => (
              <g key={c.name}>
                <circle
                  cx={parseFloat(c.cx)}
                  cy={parseFloat(c.cy)}
                  r="0.8"
                  fill="#16A34A"
                />
                <circle
                  cx={parseFloat(c.cx)}
                  cy={parseFloat(c.cy)}
                  r="1.8"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="0.3"
                  opacity="0.5"
                />
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex items-center gap-6 text-xs font-body text-white/60">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-gold-400" /> Origin (Nashik)
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" /> Export Destinations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GlobalReach() {
  return (
    <>
      <Helmet>
        <title>Global Reach | Tanisii Impex — Exports to 30+ Countries</title>
        <meta name="description" content="Tanisii Impex exports to 30+ countries — Middle East, Africa, Europe, Southeast Asia, Americas, CIS. Discover our global markets and logistics capabilities." />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold-300">Our Global Footprint</span>
            <h1 className="font-heading text-white mt-4 mb-6">Connecting India to the World</h1>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Tanisii Impex products reach buyers in 30+ countries across six global regions — from
              the souks of Dubai to the supermarkets of London.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Export Stats */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {exportStats.map((s, i) => (
              <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} icon={s.icon} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <WorldMapSection />

      {/* Region Cards */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            label="Export Markets"
            heading="Markets We Serve"
            subtext="Six global regions, each with specialized product mixes and buyer profiles."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {globalMarkets.map((m, i) => (
              <motion.div
                key={m.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6"
                style={{ borderTop: `3px solid ${m.color}` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                    <Globe size={20} className="text-navy-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-800 text-xl">{m.region}</h3>
                    <p className="text-gray-400 text-xs font-body">{m.buyerType}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {m.countries.slice(0, 5).map((country) => (
                    <span key={country} className="badge bg-navy-50 text-navy-600 text-[10px] font-semibold">
                      <MapPin size={8} className="shrink-0" /> {country}
                    </span>
                  ))}
                  {m.countries.length > 5 && (
                    <span className="badge bg-navy-50 text-navy-400 text-[10px]">+{m.countries.length - 5} more</span>
                  )}
                </div>
                {/* Top products */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xs text-gray-400 font-body mb-2">Key Products Exported:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.products.slice(0, 4).map((p) => (
                      <span key={p} className="badge bg-navy-50 text-navy-700 text-[10px]">{p}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports & Logistics */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <SectionHeader
            label="Logistics"
            heading="Ports of Loading"
            subtext="We ship from India's top container ports with competitive freight rates."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {portsList.map((port, i) => (
              <motion.div
                key={port.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card p-5"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  <Anchor size={22} className="text-navy-700" />
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-lg mb-1">{port.name}</h3>
                <div className="text-xs text-gray-400 font-body space-y-1">
                  <div>Code: <span className="text-navy-700 font-semibold">{port.code}</span></div>
                  <div>State: <span className="text-navy-700">{port.state}</span></div>
                  <div>Type: <span className="text-navy-700">{port.type}</span></div>
                  <div className="badge-gold mt-2">{port.rank}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            label="Trade Terms"
            heading="Incoterms We Support"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {incotermsList.map((inc, i) => (
              <motion.div
                key={inc.term}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card p-4 text-center group hover:border-gold-300 hover:shadow-gold"
              >
                <div className="font-heading font-bold text-navy-800 text-2xl mb-1">{inc.term}</div>
                <div className="text-gray-500 text-xs font-body leading-tight">{inc.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Import from India?"
        subtext="Our logistics team will map out the most cost-effective shipping route to your port of destination."
        buttonLabel="Get Freight Quote"
        buttonTo="/inquiry"
      />
    </>
  );
}
