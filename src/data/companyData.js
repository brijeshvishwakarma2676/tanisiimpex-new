import { MapPin, Phone, Mail, Clock, Globe, Search, FlaskConical, Ship, FileText, Package, CreditCard, BarChart3 } from 'lucide-react';

export const contactInfo = [
  { Icon: MapPin, label: 'Address', value: '1403, A Wing, Vasudev Paradise,\nKanakia Road, Near Unique Garden,\nMira Road, Mumbai - 401107, India' },
  { Icon: Phone, label: 'Phone / WhatsApp', value: '+91 91521 21077', href: 'tel:+919152121077' },
  { Icon: Mail, label: 'Email', value: 'info@tanisiimpex.com', href: 'mailto:info@tanisiimpex.com' },
  { Icon: Clock, label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM IST' },
];

export const productOptions = [
  'Fresh Onion', 'Pomegranate', 'Grapes', 'Alphonso Mango', 'Spices', 'Basmati Rice',
  'FMCG Products', 'Organic Products', 'Custom Sourcing',
];

export const servicesData = [
  { Icon: Globe,        title: 'Export Management',        desc: 'End-to-end handling of your export order — from product sourcing and quality inspection to freight booking and final delivery.', bullets: ['Procurement & quality control', 'Freight & insurance coordination', 'Complete documentation', 'After-delivery support'], image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80' },
  { Icon: Search,       title: 'Product Sourcing',         desc: "Access India's vast manufacturing and farming ecosystem through our pan-India vendor network of 500+ verified suppliers.", bullets: ['Pan-India supplier network', 'Price benchmarking', 'Vendor due diligence', 'Factory audits'], image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80' },
  { Icon: FlaskConical, title: 'Quality Control',          desc: 'Our in-house QC team and accredited third-party labs perform pre-shipment inspection, sampling, and testing.', bullets: ['Pre-shipment inspection', 'Third-party lab testing', 'Pesticide residue analysis', 'Microbiological testing'], image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { Icon: Ship,         title: 'Logistics & Freight',      desc: 'We coordinate sea and air freight, customs clearance, inland transport, and cold-chain logistics.', bullets: ['FCL & LCL sea freight', 'Air cargo for perishables', 'Cold-chain logistics', 'Customs clearance support'], image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80' },
  { Icon: FileText,     title: 'Documentation',            desc: 'Our documentation team handles it all — ensuring zero errors, timely submission, and full regulatory compliance.', bullets: ['Certificate of Origin (COO)', 'Phytosanitary Certificate', 'Fumigation Certificate', 'BL, Packing List, Invoice'], image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80' },
  { Icon: Package,      title: 'Custom Packaging',         desc: 'Private label packaging under your brand. Custom artwork, multiple packaging formats, and destination-compliant materials.', bullets: ['Private label design', 'Multi-language labeling', 'Retail & bulk formats', 'Eco-friendly options'], image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=800&q=80' },
  { Icon: CreditCard,   title: 'Trade Finance Assistance', desc: 'Guidance on the best payment instruments — LC, DP, DA, and advance payment terms that protect both buyer and seller.', bullets: ['LC at Sight & Usance', 'DP & DA terms', 'Advance payment guidance', 'Bank reference on request'], image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80' },
  { Icon: BarChart3,    title: 'Market Intelligence',      desc: 'Commodity price trends, seasonal availability reports, import regulations, and competitor pricing insights.', bullets: ['Commodity price reports', 'Seasonal availability guides', 'Regulatory compliance info', 'Tariff & duty consultation'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
];

export const inquiryProductList = ['Fresh Onion', 'Pomegranate', 'Grapes', 'Alphonso Mango', 'Red Chilli', 'Cumin Seeds', 'Turmeric Powder', 'Basmati Rice', 'Organic Honey', 'Virgin Coconut Oil', 'Organic Products', 'Custom Sourcing'];
export const inquiryIncoterms = ['FOB', 'CIF', 'CFR', 'DDP', 'EXW', 'CPT'];
export const inquiryPaymentTerms = ['LC at Sight', 'LC Usance 30/60/90 Days', 'TT Advance', 'DP (Documents against Payment)', 'DA (Documents against Acceptance)'];
