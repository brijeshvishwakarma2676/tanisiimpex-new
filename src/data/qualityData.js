import { Award, CheckCircle, ChevronDown, ChevronUp, Leaf, FlaskConical, Package, Microscope, ClipboardList, Sprout, Shield } from 'lucide-react';

export const qualitySteps = [
  { n: '01', Icon: Sprout,      title: 'Farm-Level Sourcing',         desc: 'Verified farms and manufacturers meeting our supplier qualification criteria.' },
  { n: '02', Icon: Microscope,  title: 'Pre-Production Audit',         desc: 'Field visits or factory audits to assess farming practices and production standards.' },
  { n: '03', Icon: FlaskConical,title: 'Lab Testing & Analysis',       desc: 'NABL-accredited labs for pesticide residue, microbiological, and heavy metal analysis.' },
  { n: '04', Icon: Package,     title: 'Packaging & Grading',          desc: 'Products graded, sorted, and packed to buyer specs and destination regulations.' },
  { n: '05', Icon: Shield,      title: 'Pre-Shipment Inspection',      desc: 'Final QC before loading — quantity, quality, packaging, and marking verification.' },
  { n: '06', Icon: ClipboardList,title: 'Certification & Dispatch',   desc: 'All certifications issued, documents compiled, goods dispatched with full paperwork.' },
];

export const statutoryLicenses = [
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

export const certifications = [
  { name: 'ISO 9001:2015', body: 'Bureau Veritas', category: 'Quality Management' },
  { name: 'APEDA', body: 'Govt. of India', category: 'Agricultural Export' },
  { name: 'FSSAI', body: 'Food Safety Authority', category: 'Food Safety' },
  { name: 'FIEO', body: 'Ministry of Commerce', category: 'Export Federation' },
  { name: 'Spices Board', body: 'Govt. of India', category: 'Spice Exports' },
  { name: 'Organic (NPOP)', body: 'APEDA', category: 'Organic Products' },
  { name: 'Halal', body: 'Halal India', category: 'Food Compliance' },
  { name: 'DGFT Registered', body: 'Commerce Ministry', category: 'Export License' },
];

export const qualityFaqs = [
  { q: 'Do you provide pre-shipment inspection reports?', a: 'Yes. Every shipment is accompanied by a pre-shipment inspection report conducted by our QC team or third-party inspector (SGS, Bureau Veritas, Intertek).' },
  { q: 'Which labs do you use for pesticide residue testing?', a: 'We use NABL-accredited labs including Eurofins, SGS Lab India, and government-approved testing centers.' },
  { q: 'Can products be tested against EU MRL standards?', a: 'Absolutely. We routinely test fresh produce against EU Maximum Residue Limits for products destined for European markets.' },
  { q: 'What certifications are available for organic products?', a: 'Organic products are certified under NPOP (recognized by EU, US NOP). USDA Organic certified products are also available.' },
  { q: 'Do you offer custom packaging for different markets?', a: 'Yes. Multi-language labels, country-specific nutrition formats, and eco-friendly materials — all tailored per destination.' },
  { q: 'How do you handle quality complaints?', a: 'Complaints must be raised within 7 days with photo/video evidence. Our team responds within 48 hours with a resolution plan.' },
];
