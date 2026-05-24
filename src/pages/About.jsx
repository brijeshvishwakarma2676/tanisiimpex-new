import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, Leaf, Handshake, Award, Zap, Wheat, Ship, Factory, Globe, FileText, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import CTABanner from '@/components/ui/CTABanner';

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
          <h1 className="font-heading text-white mt-4 mb-6">About Tanisii Impex</h1>
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
  const milestones = [
    { year: '2009', title: 'Company Founded', desc: 'Tanisii Impex established as a regional agricultural trading firm.' },
    { year: '2012', title: 'First International Export', desc: 'First container of premium fresh onions shipped to Dubai, UAE. Beginning of our global journey.' },
    { year: '2015', title: 'APEDA Registration', desc: 'Secured APEDA registration, enabling access to regulated export markets across Europe and Asia.' },
    { year: '2017', title: 'ISO 9001:2015 Certification', desc: 'Achieved ISO certification for quality management systems across all operations.' },
    { year: '2019', title: 'FMCG & Spices Division', desc: 'Expanded beyond fresh agriculture into processed FMCG consumer goods and premium Indian spices.' },
    { year: '2021', title: 'Organic Product Line', desc: 'Launched dedicated organic and natural products division with EU and USDA Organic certified supply.' },
    { year: '2024', title: '30+ Countries, 1000+ Clients', desc: 'Achieved milestone of serving buyers in 30+ countries with 10,000+ successful shipments.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Our Journey"
          heading="The Tanisii Impex Story"
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
  const values = [
    { icon: <ShieldCheck size={22} />, title: 'Integrity', desc: 'Transparent pricing, honest communication, and fair trade practices — always.' },
    { icon: <Award size={22} />, title: 'Quality', desc: 'We never compromise on product quality. Every shipment is inspected, tested, and certified.' },
    { icon: <Zap size={22} />, title: 'Reliability', desc: 'On-time delivery, accurate documentation, and consistent product specifications.' },
    { icon: <Zap size={22} />, title: 'Innovation', desc: 'Continuously improving our supply chain, processes, and product offerings.' },
    { icon: <Leaf size={22} />, title: 'Sustainability', desc: 'Environmentally conscious sourcing, supporting organic farming and fair trade practices.' },
    { icon: <Handshake size={22} />, title: 'Partnership', desc: 'We grow when our clients grow. Long-term relationships are at the heart of everything we do.' },
  ];

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
  const team = [
    { name: 'Rajesh Tanisii', role: 'Founder & Managing Director', bio: '20+ years in agricultural exports. Pioneer of Nashik onion exports to Middle East.', initial: 'R' },
    { name: 'Priya Sharma', role: 'Head of International Trade', bio: 'MBA in International Business. Manages buyer relationships across Europe and Asia.', initial: 'P' },
    { name: 'Amit Kulkarni', role: 'Quality & Compliance Manager', bio: 'Food technologist with 12 years in pre-shipment inspection and certification management.', initial: 'A' },
    { name: 'Sneha Patil', role: 'Logistics & Documentation', bio: 'Customs broker and logistics specialist. Ensures zero documentation errors across all shipments.', initial: 'S' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <SectionHeader
          label="Our Team"
          heading="The People Behind Tanisii Impex"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-navy-gradient flex items-center justify-center mx-auto mb-4
                              shadow-card group-hover:shadow-card-hover transition-shadow">
                <span className="font-heading font-bold text-white text-3xl">{m.initial}</span>
              </div>
              <h3 className="font-heading font-semibold text-navy-800 text-lg mb-1">{m.name}</h3>
              <div className="badge-gold mb-3">{m.role}</div>
              <p className="text-gray-500 text-sm font-body leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Certifications ───────────────────────────────────────────────────────────
function Certifications() {
  const certs = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { name: 'APEDA', desc: 'Agricultural Export Promotion' },
    { name: 'FIEO', desc: 'Federation of Indian Export' },
    { name: 'FSSAI', desc: 'Food Safety & Standards' },
    { name: 'Spices Board', desc: 'Indian Spices Certification' },
    { name: 'DGFT', desc: 'Directorate General of Foreign Trade' },
  ];

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
  const stats = [
    { value: 15, suffix: '+', label: 'Years in Business' },
    { value: 30, suffix: '+', label: 'Countries Served' },
    { value: 1000, suffix: '+', label: 'Global Clients' },
    { value: 10000, suffix: '+', label: 'Shipments Completed' },
  ];
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
      <Helmet>
        <title>About Us | Tanisii Impex — Indian Export Company</title>
        <meta name="description" content="Learn about Tanisii Impex — founded in Mira Road, Mumbai. Our story, mission, team, certifications, and 15 years of global export experience." />
      </Helmet>
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
