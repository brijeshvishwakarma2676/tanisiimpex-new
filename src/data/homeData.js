import {
  Award, Globe, Package, CheckCircle, Star,
  Wheat, Ship, Leaf, Sprout, FileText,
  Shield, Headphones, Tag, Search, TrendingUp,
} from 'lucide-react';

export const trustBarItems = [
  { Icon: Award, label: 'ISO 9001:2015 Certified' },
  { Icon: Globe, label: 'Exporting to 30+ Nations' },
  { Icon: Package, label: '10,000+ Shipments Delivered' },
  { Icon: CheckCircle, label: 'APEDA Registered' },
  { Icon: Star, label: 'FIEO Member' },
];

export const aboutSnapshotIcons = [
  { Icon: Wheat, label: 'Agricultural Exports', bg: 'bg-emerald-700' },
  { Icon: Ship, label: 'Global Logistics', bg: 'bg-navy-700' },
  { Icon: Leaf, label: 'Organic Products', bg: 'bg-green-700' },
  { Icon: Sprout, label: 'Spices & Condiments', bg: 'bg-slate-700' },
  { Icon: FileText, label: 'Export Documentation', bg: 'bg-indigo-700' },
];

export const aboutSnapshotStats = [
  { value: 500, suffix: '+', label: 'Products' },
  { value: 30, suffix: '+', label: 'Countries' },
  { value: 15, suffix: '+', label: 'Years' },
  { value: 1000, suffix: '+', label: 'Clients' },
];

export const whyChooseUsFeatures = [
  { Icon: Shield, title: 'Quality Assurance', desc: 'Pre-shipment inspection, third-party lab testing, and full certificate documentation for every shipment.' },
  { Icon: Ship, title: 'End-to-End Logistics', desc: 'FOB, CIF, DDP Incoterms handled. Sea freight via JNPT Mumbai, Mundra & Chennai ports.' },
  { Icon: FileText, title: 'Complete Documentation', desc: 'COO, Phytosanitary, Fumigation, FSSAI, BL, and all export docs managed in-house.' },
  { Icon: Headphones, title: 'Dedicated Support', desc: 'Single point of contact (SPOC) for each buyer. Respond within 4 hours on WhatsApp and email.' },
  { Icon: Tag, title: 'Competitive Pricing', desc: 'Direct manufacturer relationships ensure FOB pricing 15–25% below market for bulk buyers.' },
  { Icon: Globe, title: 'Global Network', desc: 'Trusted by 1000+ buyers in UAE, UK, France, Nigeria, Singapore, Saudi Arabia and more.' },
];

export const processSteps = [
  { n: '01', Icon: Search, title: 'Inquiry & Product Selection', desc: 'Share your requirements — product, quantity, destination. We respond within 4 hours.' },
  { n: '02', Icon: Package, title: 'Sample Dispatch & Approval', desc: 'We dispatch samples for your quality evaluation. Samples shipped within 5 working days.' },
  { n: '03', Icon: TrendingUp, title: 'Price Negotiation & PI', desc: 'Best FOB/CIF pricing quoted. Proforma Invoice issued within 24 hours of price agreement.' },
  { n: '04', Icon: Shield, title: 'Quality Inspection & Packaging', desc: 'Pre-shipment inspection, lab testing, and custom packaging per buyer specification.' },
  { n: '05', Icon: Ship, title: 'Shipment & Documentation', desc: 'Goods loaded; all documents (BL, COO, Phytosanitary) sent within 48 hours.' },
  { n: '06', Icon: Headphones, title: 'Delivery & After-Sales', desc: 'We track your shipment till delivery and stay on for the next order lifecycle.' },
];

export const containerTypes = [
  { type: '20ft Dry', desc: 'Ideal for heavy, non-perishable goods like spices and rice.' },
  { type: '40ft HC', desc: 'High Cube containers for maximum volume efficiency.' },
  { type: '40ft Reefer', desc: 'Temperature-controlled for fresh produce like onions and fruits.' },
];

export const blogPosts = [
  { tag: 'Export Policy', title: "India's Agricultural Export Policy 2024: What Buyers Need to Know", excerpt: 'Key changes in APEDA regulations, minimum export price updates, and new phytosanitary protocols affecting fresh produce.', date: 'Nov 12, 2024', readTime: '4 min read', Icon: FileText },
  { tag: 'Market Insights', title: "Why Indian Onion is the World's Most Exported Vegetable", excerpt: "India's unique climate, volcanic soil, and extensive cold-chain infrastructure make it the global onion capital.", date: 'Oct 28, 2024', readTime: '5 min read', Icon: TrendingUp },
  { tag: 'Trade Finance', title: 'Understanding LC, DP, and TT Payment Terms for Indian Imports', excerpt: 'A practical guide for first-time importers on choosing the right payment structure for Indian export transactions.', date: 'Oct 5, 2024', readTime: '6 min read', Icon: Award },
];
