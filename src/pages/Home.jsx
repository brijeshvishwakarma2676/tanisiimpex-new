import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowRight, Shield, Ship, FileText, Headphones, Tag, Globe,
  CheckCircle, Package, Star, Users, Award, Wheat, ShoppingBag,
  Factory, Leaf, Sprout, Search, TrendingUp, Clock, MapPin,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import ProductGrid from '@/components/ui/ProductGrid';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import CTABanner from '@/components/ui/CTABanner';
import GlobalMap from '@/components/ui/GlobalMap';

import { HeroSection as CustomHeroSection } from '@/components/ui/hero-section-2';

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <CustomHeroSection
      logo={{
        url: "/images/logo.png",
        alt: "Tanisii Impex Logo",
      }}
      slogan="MIRA ROAD, MUMBAI — INDIA"
      title={
        <>
          Your Trusted Partner in <br />
          <span className="text-gold-400">Global Trade</span>
        </>
      }
      subtitle="Premium Indian Exports — Delivered Worldwide with Reliability, Quality & Trust. Agricultural produce, FMCG, and organic goods shipped to 30+ countries."
      callToAction={{
        text: "EXPLORE PRODUCTS",
        href: "/products",
      }}
      backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop&q=80"
      contactInfo={{
        website: "www.tanisiiimpex.com",
        phone: "+91 91521 21077",
        address: "1403, A Wing, Vasudev Paradise, Kanakia Road, Near Unique Garden, Mira Road, Mumbai",
      }}
    />
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { Icon: Award, label: 'ISO 9001:2015 Certified' },
    { Icon: Globe, label: 'Exporting to 30+ Nations' },
    { Icon: Package, label: '10,000+ Shipments Delivered' },
    { Icon: CheckCircle, label: 'APEDA Registered' },
    { Icon: Star, label: 'FIEO Member' },
  ];
  return (
    <section className="bg-white border-b border-gray-100 py-5">
      <div className="section-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2.5 justify-center"
            >
              <Icon size={18} className="text-gold-500 shrink-0" />
              <span className="text-navy-700 text-sm font-body font-medium leading-tight">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Snapshot ───────────────────────────────────────────────────────────
function AboutSnapshot() {
  const iconBoxes = [
    { Icon: Wheat, label: 'Agricultural Exports', bg: 'bg-emerald-700' },
    { Icon: Ship, label: 'Global Logistics', bg: 'bg-navy-700' },
    { Icon: Leaf, label: 'Organic Products', bg: 'bg-green-700' },
    { Icon: Sprout, label: 'Spices & Condiments', bg: 'bg-slate-700' },
    { Icon: FileText, label: 'Export Documentation', bg: 'bg-indigo-700' },
    { Icon: Globe, label: 'Worldwide Markets', bg: 'bg-blue-700' },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Visual grid */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {iconBoxes.map(({ Icon, label, bg }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`${bg} rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center gap-2 text-white aspect-square shadow-sm`}
                >
                  <Icon size={24} className="opacity-90 md:w-7 md:h-7" />
                  <span className="text-[10px] md:text-xs font-body text-white/80 text-center leading-tight">{label}</span>
                </motion.div>
              ))}
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-5 right-4 sm:-right-5 bg-gold-gradient rounded-2xl p-4 shadow-gold text-center">
              <div className="font-heading font-bold text-navy-800 text-3xl">15+</div>
              <div className="text-navy-700 text-xs font-body font-semibold leading-tight mt-0.5">Years of<br />Excellence</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader align="left" label="About Tanisii Impex" heading="Rooted in India. Trusted Globally." />
            <div className="mt-6 space-y-4 text-gray-600 font-body leading-relaxed">
              <p>Founded in Mumbai — India's premier trade gateway — Tanisii Impex has grown into a globally trusted export house with presence in 30+ countries across five continents.</p>
              <p>We handle everything from farm-gate procurement to CIF delivery, ensuring our buyers experience zero friction throughout the trade cycle.</p>
              <p>With ISO 9001:2015 certification, APEDA registration, and a dedicated team of trade professionals, we deliver not just products — but peace of mind.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { value: 500, suffix: '+', label: 'Products' },
                { value: 30, suffix: '+', label: 'Countries' },
                { value: 15, suffix: '+', label: 'Years' },
                { value: 1000, suffix: '+', label: 'Clients' },
              ].map((s, i) => (
                <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
              ))}
            </div>
            <Link to="/about" className="btn-outline-navy mt-8 inline-flex">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const features = [
    { Icon: Shield, title: 'Quality Assurance', desc: 'Pre-shipment inspection, third-party lab testing, and full certificate documentation for every shipment.' },
    { Icon: Ship, title: 'End-to-End Logistics', desc: 'FOB, CIF, DDP Incoterms handled. Sea freight via JNPT Mumbai, Mundra & Chennai ports.' },
    { Icon: FileText, title: 'Complete Documentation', desc: 'COO, Phytosanitary, Fumigation, FSSAI, BL, and all export docs managed in-house.' },
    { Icon: Headphones, title: 'Dedicated Support', desc: 'Single point of contact (SPOC) for each buyer. Respond within 4 hours on WhatsApp and email.' },
    { Icon: Tag, title: 'Competitive Pricing', desc: 'Direct manufacturer relationships ensure FOB pricing 15–25% below market for bulk buyers.' },
    { Icon: Globe, title: 'Global Network', desc: 'Trusted by 1000+ buyers in UAE, UK, France, Nigeria, Singapore, Saudi Arabia and more.' },
  ];
  return (
    <section className="py-20 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="section-container relative z-10">
        <SectionHeader
          label="Why Choose Us"
          heading="Why Global Buyers Choose Tanisii Impex"
          subtext="From procurement to delivery, every aspect of the trade is handled with precision."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/6 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-400/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors">
                <Icon size={22} className="text-gold-400" />
              </div>
              <h3 className="font-heading font-semibold text-white text-xl mb-2">{title}</h3>
              <p className="text-white/55 text-sm font-body leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { n: '01', Icon: Search, title: 'Inquiry & Product Selection', desc: 'Share your requirements — product, quantity, destination. We respond within 4 hours.' },
    { n: '02', Icon: Package, title: 'Sample Dispatch & Approval', desc: 'We dispatch samples for your quality evaluation. Samples shipped within 5 working days.' },
    { n: '03', Icon: TrendingUp, title: 'Price Negotiation & PI', desc: 'Best FOB/CIF pricing quoted. Proforma Invoice issued within 24 hours of price agreement.' },
    { n: '04', Icon: Shield, title: 'Quality Inspection & Packaging', desc: 'Pre-shipment inspection, lab testing, and custom packaging per buyer specification.' },
    { n: '05', Icon: Ship, title: 'Shipment & Documentation', desc: 'Goods loaded; all documents (BL, COO, Phytosanitary) sent within 48 hours.' },
    { n: '06', Icon: Headphones, title: 'Delivery & After-Sales', desc: 'We track your shipment till delivery and stay on for the next order lifecycle.' },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <SectionHeader label="Our Process" heading="How It Works" subtext="A streamlined 6-step process from inquiry to doorstep delivery." />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ n, Icon, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className="bg-gold-gradient text-navy-800 font-heading font-bold text-xs px-3 py-1 rounded-full shadow-gold">
                  Step {n}
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mt-4 mb-4">
                <Icon size={20} className="text-navy-600" />
              </div>
              <h3 className="font-heading font-semibold text-navy-800 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Global Reach Teaser ──────────────────────────────────────────────────────
function GlobalReachTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Global Scale"
          heading="Interactive Trade Routes"
          subtext="Tracking live shipment corridors from India's primary ports to wholesale hubs across the globe."
        />
        <div className="mt-12">
          <GlobalMap />
        </div>
        <div className="text-center mt-10">
          <Link to="/global-reach" className="btn-outline-navy">
            Explore Global Footprint <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Export Logistics & Incoterms ─────────────────────────────────────────────
function LogisticsSection() {
  const incoterms = [
    { term: 'FOB', name: 'Free On Board', desc: 'We deliver goods to the port of origin (e.g. JNPT Mumbai).' },
    { term: 'CIF', name: 'Cost, Insurance & Freight', desc: 'We handle freight and insurance to your destination port.' },
    { term: 'DDP', name: 'Delivered Duty Paid', desc: 'End-to-end delivery right to your warehouse facility.' },
  ];
  const containers = [
    { type: '20ft Dry', desc: 'Ideal for heavy, non-perishable goods like spices and rice.' },
    { type: '40ft HC', desc: 'High Cube containers for maximum volume efficiency.' },
    { type: '40ft Reefer', desc: 'Temperature-controlled for fresh produce like onions and fruits.' },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="section-container">
        <SectionHeader 
          label="Shipping & Logistics" 
          heading="Export Grade Packaging & Logistics" 
          subtext="We ensure your cargo arrives in pristine condition with industry-standard maritime logistics." 
        />
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-16">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-gray-100 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-navy-50 rounded-full blur-3xl opacity-50" />
            <div className="flex items-center gap-3 md:gap-4 mb-6 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-navy-50 text-navy-600 rounded-xl flex items-center justify-center shrink-0">
                <Ship size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy-800 text-xl md:text-2xl">Supported Incoterms</h3>
            </div>
            <div className="space-y-4 md:space-y-5 relative z-10">
              {incoterms.map(term => (
                <div key={term.term} className="flex gap-3 md:gap-4 items-start">
                  <div className="w-14 md:w-16 shrink-0 font-heading font-bold text-base md:text-lg text-gold-500 bg-gold-50 text-center py-1 md:py-1.5 rounded-lg">{term.term}</div>
                  <div>
                    <div className="font-body font-semibold text-navy-800 text-sm mb-0.5 md:mb-1">{term.name}</div>
                    <div className="font-body text-gray-500 text-xs md:text-sm leading-relaxed">{term.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-gray-100 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50" />
            <div className="flex items-center gap-3 md:gap-4 mb-6 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <Package size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy-800 text-xl md:text-2xl">Container Capacities</h3>
            </div>
            <div className="space-y-4 md:space-y-5 relative z-10">
              {containers.map(cont => (
                <div key={cont.type} className="flex gap-3 md:gap-4 items-start">
                  <div className="w-20 md:w-24 shrink-0 font-heading font-bold text-xs md:text-sm text-emerald-600 bg-emerald-50 text-center py-2 md:py-2.5 rounded-lg">{cont.type}</div>
                  <div className="flex items-center mt-1 md:mt-0">
                    <div className="font-body text-gray-500 text-xs md:text-sm leading-relaxed">{cont.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Blog Teaser ──────────────────────────────────────────────────────────────
function BlogTeaser() {
  const posts = [
    { tag: 'Export Policy', title: "India's Agricultural Export Policy 2024: What Buyers Need to Know", excerpt: 'Key changes in APEDA regulations, minimum export price updates, and new phytosanitary protocols affecting fresh produce.', date: 'Nov 12, 2024', readTime: '4 min read', Icon: FileText },
    { tag: 'Market Insights', title: "Why Indian Onion is the World's Most Exported Vegetable", excerpt: "India's unique climate, volcanic soil, and extensive cold-chain infrastructure make it the global onion capital.", date: 'Oct 28, 2024', readTime: '5 min read', Icon: TrendingUp },
    { tag: 'Trade Finance', title: 'Understanding LC, DP, and TT Payment Terms for Indian Imports', excerpt: 'A practical guide for first-time importers on choosing the right payment structure for Indian export transactions.', date: 'Oct 5, 2024', readTime: '6 min read', Icon: Award },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <SectionHeader label="Trade Insights" heading="Latest from Tanisii Impex" subtext="Stay updated on India's export landscape, regulations, and commodity trends." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {posts.map(({ tag, title, excerpt, date, readTime, Icon: BlogIcon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                <BlogIcon size={18} className="text-navy-600" />
              </div>
              <span className="badge-gold mb-3">{tag}</span>
              <h3 className="font-heading font-semibold text-navy-800 text-lg mb-3 group-hover:text-gold-500 transition-colors leading-tight">
                {title}
              </h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed mb-4">{excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 font-body border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1"><Clock size={11} /> {date}</span>
                <span>{readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tanisii Impex | Premium Indian Exporter — Mira Road, Mumbai</title>
        <meta name="description" content="Tanisii Impex — leading Indian export company from Mumbai specializing in agricultural products, FMCG, spices, and organic products. Trusted in 30+ countries." />
      </Helmet>
      <HeroSection />
      <TrustBar />
      <AboutSnapshot />
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader label="Our Export Portfolio" heading="What We Export" subtext="From fertile farms of Maharashtra to global ports — our comprehensive product catalog." />
          <div className="mt-12"><ProductGrid limit={6} /></div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-outline-navy">View Full Product Catalog <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <GlobalReachTeaser />
      <ProcessSection />
      <LogisticsSection />
      <section className="py-20 bg-white">
        <div className="section-container">
          <SectionHeader label="Client Reviews" heading="What Our Global Clients Say" subtext="Trusted by buyers from UAE to UK, Nigeria to Singapore." />
          <div className="mt-12"><TestimonialCarousel /></div>
        </div>
      </section>
      <BlogTeaser />
      <CTABanner
        heading="Ready to Start Importing from India?"
        subtext="Join 1000+ satisfied buyers from 30+ countries. Get your custom quote today — we respond within 24 hours."
        buttonLabel="Send Us Your Requirements"
        buttonTo="/inquiry"
        secondaryLabel="Contact Our Team"
        secondaryTo="/contact"
      />
    </>
  );
}
