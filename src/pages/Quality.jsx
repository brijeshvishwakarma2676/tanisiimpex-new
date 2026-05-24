import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ChevronDown, ChevronUp, Leaf, FlaskConical, Package, Microscope, ClipboardList, Sprout, Shield } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';

const qualitySteps = [
  { n: '01', Icon: Sprout,      title: 'Farm-Level Sourcing',         desc: 'Verified farms and manufacturers meeting our supplier qualification criteria.' },
  { n: '02', Icon: Microscope,  title: 'Pre-Production Audit',         desc: 'Field visits or factory audits to assess farming practices and production standards.' },
  { n: '03', Icon: FlaskConical,title: 'Lab Testing & Analysis',       desc: 'NABL-accredited labs for pesticide residue, microbiological, and heavy metal analysis.' },
  { n: '04', Icon: Package,     title: 'Packaging & Grading',          desc: 'Products graded, sorted, and packed to buyer specs and destination regulations.' },
  { n: '05', Icon: Shield,      title: 'Pre-Shipment Inspection',      desc: 'Final QC before loading — quantity, quality, packaging, and marking verification.' },
  { n: '06', Icon: ClipboardList,title: 'Certification & Dispatch',   desc: 'All certifications issued, documents compiled, goods dispatched with full paperwork.' },
];

const statutoryLicenses = [
  {
    name: 'APEDA RCMC',
    full: 'Agricultural & Processed Food Products Export Development Authority',
    authority: 'Ministry of Commerce & Industry, Government of India',
    status: 'Active & Verified',
    number: 'RCMC/APEDA/25809/2025-2026',
    desc: 'Mandatory statutory license authorizing Tanisi Impex Private Limited to process and export premium Indian agricultural commodities including spices, grains, and fresh produce globally.',
  },
  {
    name: 'Import Export Code (IEC)',
    full: 'Primary Global Trade Authorization License',
    authority: 'Directorate General of Foreign Trade (DGFT), Government of India',
    status: 'Active & Compliant',
    number: 'AAMCT5095R',
    desc: 'The fundamental legal code issued by DGFT Mumbai to conduct commercial shipping cargo, logistics distribution, and custom clearance worldwide.',
  },
  {
    name: 'FSSAI Central License',
    full: 'Food Safety & Standards Authority of India',
    authority: 'Ministry of Health & Family Welfare, Government of India',
    status: 'Compliant Food Handler',
    number: '11526998000056',
    desc: 'Central category food safety regulatory license ensuring all processing, import, trading, and merchant export standards strictly adhere to hygienic parameters.',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', body: 'Bureau Veritas', category: 'Quality Management' },
  { name: 'APEDA', body: 'Govt. of India', category: 'Agricultural Export' },
  { name: 'FSSAI', body: 'Food Safety Authority', category: 'Food Safety' },
  { name: 'FIEO', body: 'Ministry of Commerce', category: 'Export Federation' },
  { name: 'Spices Board', body: 'Govt. of India', category: 'Spice Exports' },
  { name: 'Organic (NPOP)', body: 'APEDA', category: 'Organic Products' },
  { name: 'Halal', body: 'Halal India', category: 'Food Compliance' },
  { name: 'DGFT Registered', body: 'Commerce Ministry', category: 'Export License' },
];

const faqs = [
  { q: 'Do you provide pre-shipment inspection reports?', a: 'Yes. Every shipment is accompanied by a pre-shipment inspection report conducted by our QC team or third-party inspector (SGS, Bureau Veritas, Intertek).' },
  { q: 'Which labs do you use for pesticide residue testing?', a: 'We use NABL-accredited labs including Eurofins, SGS Lab India, and government-approved testing centers.' },
  { q: 'Can products be tested against EU MRL standards?', a: 'Absolutely. We routinely test fresh produce against EU Maximum Residue Limits for products destined for European markets.' },
  { q: 'What certifications are available for organic products?', a: 'Organic products are certified under NPOP (recognized by EU, US NOP). USDA Organic certified products are also available.' },
  { q: 'Do you offer custom packaging for different markets?', a: 'Yes. Multi-language labels, country-specific nutrition formats, and eco-friendly materials — all tailored per destination.' },
  { q: 'How do you handle quality complaints?', a: 'Complaints must be raised within 7 days with photo/video evidence. Our team responds within 48 hours with a resolution plan.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl transition-all duration-200 ${open ? 'border-gold-300 shadow-gold' : 'border-gray-200'}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-body font-semibold text-navy-800 text-sm pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gold-500 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-sm text-gray-600 font-body leading-relaxed border-t border-gray-100 pt-4">{a}</div>}
    </div>
  );
}

export default function Quality() {
  return (
    <>
      <Helmet>
        <title>Quality & Compliance Certifications | Tanisii Impex</title>
        <meta name="description" content="ISO 9001:2015 certified. APEDA, FSSAI, FIEO registered. Pre-shipment inspection, lab testing, and full compliance documentation for all Tanisii Impex products." />
      </Helmet>

      <section className="bg-hero-gradient py-28 relative overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold-300">Quality Assurance</span>
            <h1 className="font-heading text-white mt-4 mb-6">Quality You Can Trust</h1>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Every product. Every shipment. Every time. Our multi-stage quality assurance process ensures what you ordered is exactly what you receive.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <SectionHeader label="Our Quality Process" heading="6-Stage Quality Assurance" subtext="From farm to final delivery, quality is monitored at every stage." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {qualitySteps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6 relative">
                <div className="absolute -top-4 left-6">
                  <div className="bg-gold-gradient text-navy-800 font-heading font-bold text-xs px-3 py-1 rounded-full shadow-gold">Step {s.n}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mt-4 mb-4">
                  <s.Icon size={22} className="text-navy-700" />
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Verified Statutory Licenses --- */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="section-container">
          <SectionHeader 
            label="Compliance & Trust" 
            heading="Verified Statutory Licenses" 
            subtext="Our operations are fully registered and monitored by primary Indian export authorities, giving global buyers absolute confidence." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {statutoryLicenses.map((lic, i) => (
              <motion.div
                key={lic.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-gray-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-800 font-bold group-hover:bg-navy-800 group-hover:text-gold-300 transition-all duration-300">
                      <Award size={20} className="text-navy-700 group-hover:text-gold-200" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[10px] font-bold uppercase tracking-wider font-body">
                      Active & Verified
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-navy-800 text-lg mb-1 group-hover:text-gold-500 transition-colors duration-300">
                    {lic.name}
                  </h3>
                  <p className="text-[10px] font-body font-bold uppercase tracking-wider text-gray-400 mb-4">
                    {lic.authority}
                  </p>
                  
                  <div className="inline-block px-3 py-1.5 rounded-xl bg-gold-100/50 border border-gold-300/20 text-navy-900 text-[11px] font-mono tracking-wide mb-4 font-bold select-all">
                    Lic No: {lic.number}
                  </div>

                  <p className="text-gray-500 font-body text-xs leading-relaxed">
                    {lic.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[10px] font-bold font-body uppercase tracking-wider text-gray-400">
                  Registered Entity: Tanisi Impex Private Limited
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Trade Confidentiality Policy --- */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
        
        <div className="section-container relative z-10 max-w-3xl text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
            <Shield size={20} className="text-gold-300 animate-pulse" />
          </div>

          <h2 className="text-2xl font-heading font-bold text-white mb-3">
            Trade Confidentiality & Security Policy
          </h2>
          <p className="text-white/60 font-body text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            To safeguard commercial sensitivity, proprietary logistics routing, and secure fiscal compliance records, select business documents—including state tax registrations (GSTIN), custom bond receipts, bank invoices, and private incorporation certificates—are kept strictly confidential and withheld from the public domain.
          </p>

          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold-300 font-body bg-white/5 px-5 py-2.5 rounded-full border border-gold-300/10">
            Verified importers can request certified copies of shipping bonds during order negotiation.
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-800">
        <div className="section-container">
          <SectionHeader label="Our Certifications" heading="Internationally Recognized" light />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
            {certifications.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white/8 border border-white/12 rounded-2xl p-5 text-center hover:border-gold-400/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mx-auto mb-3">
                  <Award size={20} className="text-navy-800" />
                </div>
                <div className="font-heading font-bold text-white mb-1">{c.name}</div>
                <div className="text-white/45 text-xs font-body mb-1">{c.body}</div>
                <span className="badge bg-white/10 text-white/60 text-[10px]">{c.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader label="Packaging" heading="Packaging Standards" subtext="Compliant with destination country regulations." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {['Food-grade PP/PE bags and cartons', 'Multi-language labeling (Arabic, French, English)', 'Country-specific nutrition declaration formats', 'Fumigated wood pallets (ISPM 15 compliant)', 'Temperature-controlled packaging for perishables', 'Custom branding and private label options'].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 text-sm font-body text-gray-700">
                <CheckCircle size={18} className="text-green-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl">
          <SectionHeader label="FAQ" heading="Quality FAQs" />
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      <CTABanner heading="Questions About Our Quality Standards?" subtext="Our quality team is happy to answer detailed questions about certifications, testing, and inspection." buttonLabel="Contact Quality Team" buttonTo="/contact" />
    </>
  );
}
