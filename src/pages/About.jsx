import { Helmet } from 'react-helmet-async';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Target, Eye, Leaf, Handshake, Award, Zap, Wheat, Ship, Factory, Globe, FileText, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import CTABanner from '@/components/ui/CTABanner';
import { milestones, values, team, certs, stats } from '@/data/aboutData';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="relative bg-hero-gradient py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-navy-400 blur-2xl" />
      </div>
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label text-gold-300">Who We Are</span>
          <h1 className="font-heading text-white mt-4 mb-6">About Tanisi Impex</h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            A globally trusted Indian export house headquartered in Mira Road, Mumbai — connecting
            India's finest produce with buyers across 30+ countries since 2009.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Company Story / Timeline ─────────────────────────────────────────────────
function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Our Journey"
          heading="The Tanisi Impex Story"
          subtext="From a small trading desk in Mumbai to a globally recognized export house — 15 years of growth, trust, and excellence."
        />

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-300 to-gold-400/20" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`relative flex items-start gap-6 lg:gap-0 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Year badge (center on desktop) */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center z-10 shadow-gold lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  <span className="text-navy-800 font-heading font-bold text-xs">{m.year.slice(2)}</span>
                </div>

                {/* Card */}
                <div className={`lg:w-5/12 ml-6 lg:ml-0 ${i % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                  <div className="card p-5">
                    <div className="badge-gold mb-2">{m.year}</div>
                    <h3 className="font-heading font-semibold text-navy-800 text-lg mb-1">{m.title}</h3>
                    <p className="text-gray-500 text-sm font-body">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mission & Vision ─────────────────────────────────────────────────────────
function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              Icon: Target,
              title: 'Our Mission',
              text: 'To bridge the gap between India\'s abundant agricultural and industrial produce with global demand — delivering quality, reliability, and value to every buyer, every shipment, every time.',
              gradient: 'from-navy-800 to-navy-600',
            },
            {
              Icon: Eye,
              title: 'Our Vision',
              text: 'To become India\'s most trusted multi-category export house — known for uncompromising quality, transparent trade practices, and lasting partnerships that grow with our clients\' businesses.',
              gradient: 'from-gold-500 to-gold-400',
            },
          ].map(({ Icon, title, text, gradient }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${gradient} rounded-3xl p-8 text-white`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                <Icon size={26} className="text-white" />
              </div>
              <h2 className="font-heading font-bold text-2xl mb-4">{title}</h2>
              <p className="font-body text-white/80 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Core Values ──────────────────────────────────────────────────────────────
function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <SectionHeader
          label="What We Stand For"
          heading="Our Core Values"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4 text-navy-700
                              group-hover:bg-gold-400 group-hover:text-navy-800 transition-colors">
                {v.icon}
              </div>
              <h3 className="font-heading font-semibold text-navy-800 text-xl mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────


function Team() {
  return (
    <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background radial soft green gradient aura */}
      <div className="absolute inset-0 bg-radial-gradient opacity-10 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-label text-gold-300">Leadership Team</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3 mb-6">Our Team</h2>
          <p className="text-white/70 font-body leading-relaxed text-base sm:text-lg mb-4">
            At Tanisi Impex, our team is the cornerstone of global trade excellence. With deep expertise in export-import operations, sourcing, quality assurance, and brand positioning, we deliver innovative, client-centric solutions across markets.
          </p>
          <p className="text-white/60 font-body leading-relaxed text-sm">
            From curating premium gemstones and jewelry to managing agribusiness logistics, our professionals leverage strategic marketing, social media engagement, and robust customer relationship management to drive trust, visibility, and value for our global clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-navy-800/40 border border-white/5 rounded-3xl p-8 text-center group hover:border-gold-400/20 transition-all duration-300 shadow-xl"
            >
              {/* Profile icon container with a soft green neon glow ring */}
              <div className="w-28 h-28 rounded-full bg-navy-950 flex items-center justify-center mx-auto mb-6
                              shadow-lg group-hover:shadow-green-500/10 border-2 border-white/10 group-hover:border-gold-400/30 transition-all duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-white text-xl mb-1 group-hover:text-gold-300 transition-colors">{m.name}</h3>
              <div className="inline-block text-gold-400 font-heading font-semibold text-xs tracking-wider uppercase mb-4">{m.role}</div>
              <p className="text-white/60 text-sm font-body leading-relaxed max-w-sm mx-auto">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Certifications ───────────────────────────────────────────────────────────
function Certifications() {
  return (
    <section className="py-20 bg-navy-800">
      <div className="section-container">
        <SectionHeader
          label="Certifications & Memberships"
          heading="Internationally Recognized"
          subtext="Our certifications give global buyers the confidence to trade with us."
          light
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/8 border border-white/12 rounded-2xl p-5 text-center hover:border-gold-400/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mx-auto mb-3">
                <Award size={20} className="text-navy-800" />
              </div>
              <div className="font-heading font-bold text-white text-sm mb-1">{c.name}</div>
              <div className="text-white/45 text-xs font-body">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About Tanisi Impex — 15+ Years of Premium Indian Exports from Mumbai"
        description="Tanisi Impex is a trusted Indian export company founded in Mira Road, Mumbai with 15+ years of experience. ISO 9001:2015 & APEDA certified. Exporting Basmati rice, spices, FMCG, and organic products to 30+ countries. Meet our team and story."
        keywords="about Tanisi Impex, Indian export company history, Mumbai export house, APEDA certified exporter, ISO certified exporter India, Mira Road export company, agricultural exporter Mumbai"
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Tanisi Impex",
          "image": "https://www.tanisiimpex.com/images/logo.png",
          "url": "https://www.tanisiimpex.com",
          "telephone": "+91-91521-21077",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1403, A Wing, Vasudev Paradise, Kanakia Road",
            "addressLocality": "Mira Road",
            "addressRegion": "Maharashtra",
            "postalCode": "401107",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Sa 09:00-19:00",
          "priceRange": "$$"
        }}
      />
      <AboutHero />
      <StatsBar />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Team />
      <Certifications />
      <CTABanner />
    </>
  );
}
