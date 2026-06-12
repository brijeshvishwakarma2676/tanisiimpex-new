import React from 'react';
import { ShieldCheck, Award, Zap, Leaf, Handshake } from 'lucide-react';

export const milestones = [
  { year: '2009', title: 'Company Founded', desc: 'Tanisi Impex established as a regional agricultural trading firm.' },
  { year: '2012', title: 'First International Export', desc: 'First container of premium fresh onions shipped to Dubai, UAE. Beginning of our global journey.' },
  { year: '2015', title: 'APEDA Registration', desc: 'Secured APEDA registration, enabling access to regulated export markets across Europe and Asia.' },
  { year: '2017', title: 'ISO 9001:2015 Certification', desc: 'Achieved ISO certification for quality management systems across all operations.' },
  { year: '2019', title: 'FMCG & Spices Division', desc: 'Expanded beyond fresh agriculture into processed FMCG consumer goods and premium Indian spices.' },
  { year: '2021', title: 'Organic Product Line', desc: 'Launched dedicated organic and natural products division with EU and USDA Organic certified supply.' },
  { year: '2024', title: '30+ Countries, 1000+ Clients', desc: 'Achieved milestone of serving buyers in 30+ countries with 10,000+ successful shipments.' },
];

export const values = [
  { icon: <ShieldCheck size={22} />, title: 'Integrity', desc: 'Transparent pricing, honest communication, and fair trade practices — always.' },
  { icon: <Award size={22} />, title: 'Quality', desc: 'We never compromise on product quality. Every shipment is inspected, tested, and certified.' },
  { icon: <Zap size={22} />, title: 'Reliability', desc: 'On-time delivery, accurate documentation, and consistent product specifications.' },
  { icon: <Zap size={22} />, title: 'Innovation', desc: 'Continuously improving our supply chain, processes, and product offerings.' },
  { icon: <Leaf size={22} />, title: 'Sustainability', desc: 'Environmentally conscious sourcing, supporting organic farming and fair trade practices.' },
  { icon: <Handshake size={22} />, title: 'Partnership', desc: 'We grow when our clients grow. Long-term relationships are at the heart of everything we do.' },
];

export const team = [
  { 
    name: 'Vishakha M Agarwal', 
    role: 'DIRECTOR', 
    bio: 'Expert in brand positioning, international sourcing, and product curation. Vishakha leads client-centric strategy across agribusiness and global commodity logistics.', 
    image: '/images/team/vishakha.png' 
  },
  { 
    name: 'Manish K Agarwal', 
    role: 'MANAGING DIRECTOR', 
    bio: 'Expert in export-import compliance, documentation channels, and risk mitigation. Manish directs trade financial controls and operational administration cycles.', 
    image: '/images/team/Manish.png' 
  },
];

export const certs = [
  { name: 'ISO 9001:2015', desc: 'Quality Management System' },
  { name: 'APEDA', desc: 'Agricultural Export Promotion' },
  { name: 'FIEO', desc: 'Federation of Indian Export' },
  { name: 'FSSAI', desc: 'Food Safety & Standards' },
  { name: 'Spices Board', desc: 'Indian Spices Certification' },
  { name: 'DGFT', desc: 'Directorate General of Foreign Trade' },
];

export const stats = [
  { value: 15, suffix: '+', label: 'Years in Business' },
  { value: 30, suffix: '+', label: 'Countries Served' },
  { value: 1000, suffix: '+', label: 'Global Clients' },
  { value: 10000, suffix: '+', label: 'Shipments Completed' },
];
