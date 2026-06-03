export const worldMapDots = [
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 25.2048, lng: 55.2708, label: "UAE (Jebel Ali)" } },
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 51.5072, lng: -0.1276, label: "UK (London)" } },
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 1.3521, lng: 103.8198, label: "Singapore" } },
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 23.8859, lng: 45.0792, label: "Saudi Arabia" } },
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 46.2276, lng: 2.2137, label: "France" } },
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 9.0820, lng: 8.6753, label: "Nigeria" } },
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 37.0902, lng: -95.7129, label: "USA" } },
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai, India" }, end: { lat: 14.0583, lng: 108.2772, label: "Vietnam" } }
];

export const globalMarkets = [
  {
    region: 'Middle East',
    flag: '🌍',
    countries: ['UAE', 'Saudi Arabia', 'Kuwait', 'Bahrain', 'Qatar', 'Oman', 'Jordan', 'Iraq'],
    flagCodes: ['🇦🇪', '🇸🇦', '🇰🇼', '🇧🇭', '🇶🇦', '🇴🇲', '🇯🇴', '🇮🇶'],
    products: ['Fresh Onion', 'Pomegranate', 'Spices', 'Basmati Rice', 'Dates'],
    buyerType: 'Wholesale Traders, Supermarket Chains, Food Processors',
    color: '#D97706',
  },
  {
    region: 'Africa',
    flag: '🌍',
    countries: ['Nigeria', 'Kenya', 'Ethiopia', 'Ghana', 'Tanzania', 'Egypt', 'South Africa'],
    flagCodes: ['🇳🇬', '🇰🇪', '🇪🇹', '🇬🇭', '🇹🇿', '🇪🇬', '🇿🇦'],
    products: ['Spices', 'Pulses', 'Onion', 'FMCG Goods', 'Agri Chemicals'],
    buyerType: 'Importers, Distributors, Institutional Buyers',
    color: '#16A34A',
  },
  {
    region: 'Europe',
    flag: '🌍',
    countries: ['UK', 'France', 'Germany', 'Netherlands', 'Spain', 'Italy', 'Belgium'],
    flagCodes: ['🇬🇧', '🇫🇷', '🇩🇪', '🇳🇱', '🇪🇸', '🇮🇹', '🇧🇪'],
    products: ['Organic Spices', 'Pomegranate', 'Grapes', 'Basmati', 'Herbal Products'],
    buyerType: 'Organic Importers, Ethnic Food Retailers, Supermarkets',
    color: '#2563EB',
  },
  {
    region: 'Southeast Asia',
    flag: '🌏',
    countries: ['Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Vietnam', 'Philippines'],
    flagCodes: ['🇸🇬', '🇲🇾', '🇮🇩', '🇹🇭', '🇻🇳', '🇵🇭'],
    products: ['Spices', 'Alphonso Mango', 'FMCG', 'Rice', 'Coconut Oil'],
    buyerType: 'Specialty Food Importers, Restaurant Chains, Supermarkets',
    color: '#7C3AED',
  },
  {
    region: 'Americas',
    flag: '🌎',
    countries: ['USA', 'Canada', 'Brazil', 'Mexico'],
    flagCodes: ['🇺🇸', '🇨🇦', '🇧🇷', '🇲🇽'],
    products: ['Organic Products', 'Spices', 'Basmati Rice', 'Herbal Supplements'],
    buyerType: 'Organic Food Brands, Ethnic Grocery Chains, Distributors',
    color: '#DC2626',
  },
  {
    region: 'CIS Countries',
    flag: '🌍',
    countries: ['Russia', 'Kazakhstan', 'Uzbekistan', 'Ukraine', 'Georgia'],
    flagCodes: ['🇷🇺', '🇰🇿', '🇺🇿', '🇺🇦', '🇬🇪'],
    products: ['Onion', 'Pomegranate', 'Spices', 'Pulses', 'Steel Products'],
    buyerType: 'Wholesale Markets, Food Industry, Retail Chains',
    color: '#0891B2',
  },
];

export const exportStats = [
  { label: 'Countries Served', value: 30, suffix: '+', icon: '🌍' },
  { label: 'Shipments Delivered', value: 10000, suffix: '+', icon: '🚢' },
  { label: 'Products Available', value: 500, suffix: '+', icon: '📦' },
  { label: 'Years in Business', value: 15, suffix: '+', icon: '⭐' },
  { label: 'Satisfied Clients', value: 1000, suffix: '+', icon: '🤝' },
  { label: 'MT Exported/Year', value: 5000, suffix: '+', icon: '⚖️' },
];

export const incotermsList = [
  { term: 'FOB', name: 'Free On Board', description: 'Seller delivers goods on board the vessel at the named port.' },
  { term: 'CIF', name: 'Cost, Insurance & Freight', description: 'Seller pays for cost, insurance, and freight to destination port.' },
  { term: 'CFR', name: 'Cost & Freight', description: 'Seller pays cost and freight; buyer arranges insurance.' },
  { term: 'DDP', name: 'Delivered Duty Paid', description: 'Seller delivers goods cleared for import at destination.' },
  { term: 'EXW', name: 'Ex Works', description: 'Buyer picks up goods at seller\'s premises.' },
  { term: 'CPT', name: 'Carriage Paid To', description: 'Seller pays freight to named destination; risk transfers at dispatch.' },
];

export const portsList = [
  { name: 'JNPT Mumbai', code: 'INJNP', state: 'Maharashtra', type: 'Container Port', rank: '#1 in India' },
  { name: 'Mundra Port', code: 'INMUN', state: 'Gujarat', type: 'Container Port', rank: '#2 in India' },
  { name: 'Chennai Port', code: 'INMAS', state: 'Tamil Nadu', type: 'Container Port', rank: '#3 in India' },
  { name: 'Pipavav Port', code: 'INPAV', state: 'Gujarat', type: 'Multipurpose Port', rank: 'West Coast' },
];

export const paymentTermsList = [
  { term: 'LC at Sight', name: 'Letter of Credit at Sight', description: 'Payment is guaranteed by the buyer\'s bank upon presentation of compliant documents.' },
  { term: 'LC Usance', name: 'Letter of Credit Usance', description: 'Deferred payment letter of credit (30/60/90 days) allowing credit terms.' },
  { term: 'TT Advance', name: 'Telegraphic Transfer', description: 'Standard 30% advance via bank transfer, balance against BL scan copy.' },
  { term: 'DP', name: 'Documents against Payment', description: 'Buyer pays the collecting bank before shipping documents are released.' },
  { term: 'DA', name: 'Documents against Acceptance', description: 'Buyer accepts a time draft to receive documents, paying on a future date.' }
];
