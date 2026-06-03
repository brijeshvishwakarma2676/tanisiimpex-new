// ─── Product Catalog Data ───────────────────────────────────────────────────

export const productCategories = [
  {
    id: 'fresh-fruits',
    name: 'Fresh Fruits',
    slug: 'fresh-fruits',
    icon: '🍇',
    image: 'https://plus.unsplash.com/premium_photo-1663040589382-88caf6b2bc60?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
    color: '#D946EF',
    description:
      'Export-grade fresh fruits sourced from GlobalG.A.P certified farms in Maharashtra — cold-chain packed for international wholesale markets.',
    longDescription:
      'Tanisi Impex exports farm-fresh fruits with meticulous quality control. Our cold-chain shipping and grading processes ensure pomegranates, grapes, and bananas reach international buyers in pristine, ready-to-sell condition. All produce is APEDA certified and compliant with EU/Gulf phytosanitary requirements.',
    tags: ['Pomegranate', 'Grapes', 'Banana', 'Mango'],
    products: [
      {
        name: 'Pomegranate (Bhagwa)',
        hsCode: '0810.90',
        origin: 'Nashik / Solapur, Maharashtra',
        moq: '500 KG',
        season: 'Sep–Feb',
        certifications: ['APEDA', 'GlobalG.A.P'],
        image: 'https://images.unsplash.com/photo-1580636521086-7b0c742dd567?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1580636521086-7b0c742dd567?q=80&w=1170&auto=format&fit=crop&w=800&q=80'
        ],
        description: 'Ruby-red Bhagwa pomegranates with high ARILS and sweetness. Export-grade packaging.',
      },
      {
        name: 'Grapes (Thompson Seedless)',
        hsCode: '0806.10',
        origin: 'Nashik, Maharashtra',
        moq: '1 MT',
        season: 'Jan–May',
        certifications: ['APEDA', 'EurepGAP'],
        image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'Seedless green & red table grapes. EU-compliant residue levels.',
      },
      {
        name: 'Banana (Cavendish)',
        hsCode: '0803.90',
        origin: 'Jalgaon, Maharashtra',
        moq: '1 MT',
        season: 'Year-round',
        certifications: ['APEDA', 'GlobalG.A.P'],
        image: 'https://images.unsplash.com/photo-1619995750009-5256e91437b0?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1619995750009-5256e91437b0?q=80&w=1170&auto=format&fit=crop&w=800&q=80'
        ],
        description: 'Premium Cavendish bananas selected for spotless skin and optimal size.',
      },
    ],
  },
  {
    id: 'fresh-vegetables',
    name: 'Fresh Vegetables',
    slug: 'fresh-vegetables',
    icon: '🧅',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
    color: '#16A34A',
    description:
      'Farm-fresh vegetables from certified farms in Maharashtra and Andhra Pradesh — sorted, graded, and packed to export standards.',
    longDescription:
      'Tanisi Impex exports premium-grade vegetables directly from growing belts in Maharashtra and AP. Strict sorting, grading, and phytosanitary compliance ensure onions, green chillies, and other produce arrive at international ports in perfect condition for wholesale and retail distribution.',
    tags: ['Onion', 'Green Chilli', 'Tomato', 'Ginger Fresh'],
    products: [
      {
        name: 'Fresh Onion',
        hsCode: '0703.10',
        origin: 'Nashik, Maharashtra',
        moq: '1 MT',
        season: 'Oct–Mar',
        certifications: ['APEDA', 'Phytosanitary'],
        image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?q=80&w=1170&auto=format&fit=crop&w=800&q=80'
        ],
        description: 'Premium Red & White onions — medium, large, and jumbo grades available.',
      },
      {
        name: 'Green Chillies',
        hsCode: '0709.60',
        origin: 'Maharashtra / AP',
        moq: '500 KG',
        season: 'Year-round',
        certifications: ['APEDA', 'Phytosanitary'],
        image: 'https://images.unsplash.com/photo-1576763595295-c0371a32af78?auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1576763595295-c0371a32af78?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'Vibrant green chillies with high pungency, packed in ventilated export cartons.',
      },
    ],
  },
  {
    id: 'spices',
    name: 'Premium Spices',
    slug: 'spices',
    icon: '🌶️',
    image: '/spice_pages/cover.png',
    color: '#DC2626',
    description:
      'High-purity, single-origin Indian spices — whole, crushed, and powder forms — certified by the Spices Board of India, FSSAI, ASTA, and international compliance bodies.',
    longDescription:
      'India is the spice bowl of the world, and Tanisi Impex delivers that authentic rich aroma directly to your shores. We supply 20+ premium single-origin spices in whole, crushed, and powder forms — meticulously tested for aflatoxins, pesticide residues, and moisture. Compliant with ASTA (USA), ESA (Europe), FSSAI, ISO 22000, HACCP, GSO, and FDA standards.',
    tags: ['Cardamom', 'Black Pepper', 'Turmeric', 'Cumin Seeds', 'Red Chilli', 'Cinnamon', 'Cloves', 'Star Anise', 'Ginger', 'Coriander', 'Fennel', 'Bay Leaves'],
    products: [
      {
        name: 'Green Cardamom & Powder',
        hsCode: '0908.31 / 0908.32',
        origin: 'Kerala / Tamil Nadu',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP', 'Spices Board', 'Organic'],
        image: '/spice_pages/green_cardamom.png',
        images: [
          '/spice_pages/green_cardamom.png'
        ],
        description: 'Premium AGEB, AGB, AGS, AGL grade green cardamom. Essential oil min 3.5%. Whole pods (6–8.5mm) or fine powder (60–100 mesh). Vacuum packed.',
      },
      {
        name: 'Black Cardamom & Powder',
        hsCode: '0908.31 / 0908.32',
        origin: 'Sikkim / Darjeeling',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP', 'Spices Board', 'Organic'],
        image: '/spice_pages/black_cardamom.png',
        images: [
          '/spice_pages/black_cardamom.png'
        ],
        description: 'Smoky Extra Bold, Bold, and Medium black cardamom pods (3–5cm). Essential oil min 1.5%, moisture max 12%. Whole pods or coarse powder (10–30 mesh).',
      },
      {
        name: 'Black Pepper & Powder',
        hsCode: '0904.11 / 0904.12',
        origin: 'Kerala',
        moq: '50 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP'],
        image: '/spice_pages/black_pepper.png',
        images: [
          '/spice_pages/black_pepper.png'
        ],
        description: 'Tellicherry Garbled Extra Bold (TGEB) and TGSEB grades. Piperine min 4.0%, bolt density 550–600 g/L. Whole or ground/powder. Salmonella negative.',
      },
      {
        name: 'Red Chilli & Powder',
        hsCode: '0904.21 / 0904.22',
        origin: 'Andhra Pradesh / Rajasthan',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP'],
        image: '/spice_pages/red_chilli.png',
        images: [
          '/spice_pages/red_chilli.png'
        ],
        description: 'Teja (S-17), Byadgi (S-12), Guntur Sannam (S-4), and Kashmiri varieties. Heat 20k–90k SHU, color 60–160 ASTA units. Aflatoxin max 10ppb, Sudan dye negative.',
      },
      {
        name: 'Turmeric & Powder',
        hsCode: '0910.30',
        origin: 'Andhra Pradesh / Tamil Nadu',
        moq: '50 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP', 'Organic'],
        image: '/spice_pages/turmeric.png',
        images: [
          '/spice_pages/turmeric.png'
        ],
        description: 'High-curcumin Alleppey, bright Madras, and Nizamabad varieties. Curcumin min 2.5–5%. Whole fingers (5–8cm), sliced/kibbled, or fine powder (60–100 mesh).',
      },
      {
        name: 'Cumin Seeds & Powder',
        hsCode: '0909.31 / 0909.32',
        origin: 'Rajasthan / Gujarat',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP', 'Spices Board', 'Organic'],
        image: '/spice_pages/cumin_seeds.png',
        images: [
          '/spice_pages/cumin_seeds.png'
        ],
        description: 'European quality and Singapore quality cumin. Essential oil min 2.5%, aflatoxin max 10ppb. Whole seeds (4–6mm) or fine powder (60–100 mesh).',
      },
      {
        name: 'Coriander Seeds & Powder',
        hsCode: '0909.21 / 0909.22',
        origin: 'Rajasthan / Madhya Pradesh',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP'],
        image: '/spice_pages/coriander_seeds.png',
        images: [
          '/spice_pages/coriander_seeds.png'
        ],
        description: 'Eagle, Scooter, Indori, and Badami variety coriander. Volatile oil min 0.3–1.0%, light brown to greenish color. Whole seeds (3–5mm) or powder. Salmonella negative.',
      },
      {
        name: 'Cinnamon & Powder',
        hsCode: '0906.11 / 0906.20',
        origin: 'Kerala / Tamil Nadu',
        moq: '10 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'GSO'],
        image: '/spice_pages/cinnamon.png',
        images: [
          '/spice_pages/cinnamon.png'
        ],
        description: 'Premium Cinnamomum verum and Cassia cinnamon quills (6–10cm), uniform rolled sticks. Moisture max 12%. Vacuum packed in 5kg/10kg food-grade packs.',
      },
      {
        name: 'Cloves & Powder',
        hsCode: '0907.10 / 0907.20',
        origin: 'Kerala / Tamil Nadu',
        moq: '10 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'GSO'],
        image: '/spice_pages/cloves.png',
        images: [
          '/spice_pages/cloves.png'
        ],
        description: 'Premium export grade Syzygium aromaticum — whole buds with stems, well-dried and uniform. Moisture max 12%. Available whole or as ground powder. Vacuum packed.',
      },
      {
        name: 'Star Anise & Powder',
        hsCode: '0909.61 / 0909.62',
        origin: 'Tamil Nadu / Kerala',
        moq: '10 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO', 'HACCP', 'GSO', 'FDA'],
        image: '/spice_pages/star_anise.png',
        images: [
          '/spice_pages/star_anise.png'
        ],
        description: 'Superior whole star anise (2.5cm+ diameter), volatile oil min 8%. Available as whole stars, seeds, or powder (60–100 mesh). Moisture max 12%.',
      },
      {
        name: 'Nutmeg & Mace',
        hsCode: '0908.11 / 0908.12 / 0908.21 / 0908.22',
        origin: 'Kerala',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'GSO', 'FDA', 'CFIA'],
        image: '/spice_pages/nutmeg_mace.png',
        images: [
          '/spice_pages/nutmeg_mace.png'
        ],
        description: 'ABCD grade whole nutmeg (Sound, 60–80/lb) and whole/broken mace arils. Volatile oil: Nutmeg min 5%, Mace min 10%. Vacuum packed in 10kg/25kg cartons.',
      },
      {
        name: 'Ginger (Dry) & Powder',
        hsCode: '0910.11 / 0910.12',
        origin: 'Kerala / Meghalaya',
        moq: '50 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO 22000', 'HACCP'],
        image: '/spice_pages/ginger.png',
        images: [
          '/spice_pages/ginger.png'
        ],
        description: 'Cochin, Calicut, Bleached & Unbleached dry ginger varieties. Volatile oil min 1.5%, pale brown/cream color. Moisture max 12%. Salmonella negative.',
      },
      {
        name: 'Fenugreek (Methi) Seeds & Powder',
        hsCode: '0910.99 / 0910.99',
        origin: 'Rajasthan / Madhya Pradesh',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'FDA', 'APEDA', 'Organic'],
        image: '/spice_pages/fenugreek.png',
        images: [
          '/spice_pages/fenugreek.png'
        ],
        description: 'Premium Bold fenugreek seeds — machine cleaned, sortex cleaned. Purity 98–99.9%, whole seeds (2–5mm, Bold/Large) or fine powder. Salmonella absent.',
      },
      {
        name: 'Mustard Seeds (Yellow, White & Brown)',
        hsCode: '1207.50 / 1207.50',
        origin: 'Rajasthan / Uttar Pradesh',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'FDA', 'APEDA'],
        image: '/spice_pages/mustard_seeds.png',
        images: [
          '/spice_pages/mustard_seeds.png'
        ],
        description: 'Bold, micro, sortex-cleaned yellow, white, and brown mustard. Purity 99–99.9%, oil content min 30–40%. Whole seeds (1–3mm), splits, or powder (60–80 mesh).',
      },
      {
        name: 'Carom Seeds (Ajwain) & Powder',
        hsCode: '0910.99',
        origin: 'Rajasthan / Gujarat',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'FDA'],
        image: '/spice_pages/carom_seeds.png',
        images: [
          '/spice_pages/carom_seeds.png'
        ],
        description: 'A-Grade carom seeds (ajwain) with pungent aroma, volatile oil min 2.5%. Whole seeds (1–3mm), crushed, or powder (60–80 mesh). Moisture max 10%.',
      },
      {
        name: 'Fennel & Aniseed — Whole & Powder',
        hsCode: '0909.61 / 0909.62',
        origin: 'Rajasthan / Gujarat',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'FDA'],
        image: '/spice_pages/fennel_aniseed.png',
        images: [
          '/spice_pages/fennel_aniseed.png'
        ],
        description: 'A-Grade, European quality standard fennel and aniseed. Purity 99–99.5%, volatile oil min 1.5%, moisture max 10%. Whole seeds (3–6mm) or powder (40–80 mesh).',
      },
      {
        name: 'Bay Leaves — Whole & Powder',
        hsCode: '0910.99',
        origin: 'Uttarakhand / Himachal Pradesh',
        moq: '10 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ASTA', 'ISO', 'HACCP', 'FDA'],
        image: '/spice_pages/bay_leaves.png',
        images: [
          '/spice_pages/bay_leaves.png'
        ],
        description: 'A-Grade hand-selected whole bay leaves (4–7cm). Volatile oil min 1.5%, moisture max 10%. Available whole, crushed, or as powder (60–80 mesh).',
      },
      {
        name: 'Curry Leaves — Whole & Powder',
        hsCode: '0910.99',
        origin: 'Tamil Nadu / Karnataka',
        moq: '10 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ISO', 'HACCP', 'FDA'],
        image: '/spice_pages/curry_leaves.png',
        images: [
          '/spice_pages/curry_leaves.png'
        ],
        description: 'A-Grade dried curry leaves (3–5cm), natural color and aroma. No artificial color, pesticide-free per MRLs. Available whole or as powder (60–80 mesh).',
      },
      {
        name: 'Nigella Seeds (Kalonji)',
        hsCode: '0909.31 / 0909.32',
        origin: 'Rajasthan / Madhya Pradesh',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI'],
        image: '/spice_pages/nigella_seeds.png',
        images: [
          '/spice_pages/nigella_seeds.png'
        ],
        description: 'Premium Nigella Seeds — purity 99.5% min, thymoquinone content min 30%. Machine/sortex cleaned, free of pesticide residues and aflatoxin. Moisture max 8%.',
      },
      {
        name: 'Celery Seeds — Whole & Powder',
        hsCode: '0910.99',
        origin: 'India',
        moq: '25 KG',
        season: 'Year-round',
        certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'FDA', 'APEDA', 'Organic'],
        image: '/spice_pages/celery_seeds.png',
        images: [
          '/spice_pages/celery_seeds.png'
        ],
        description: 'Premium export grade celery seeds — machine cleaned, sortex cleaned. Purity 99–99.9%, volatile oil min 1.5–3%. Whole seeds (1–2mm) or fine powder. Salmonella absent.',
      },
    ],
  },
  {
    id: 'agricultural',
    name: 'Grains & Commodities',
    slug: 'agricultural',
    icon: '🌾',
    image: 'https://cpimg.tistatic.com/02007474/b/4/Agro-Commodities.jpg',
    color: '#D97706',
    description:
      'Bulk agricultural food grains, oilseeds, and pulses sourced directly for wholesale commodity markets.',
    longDescription:
      'Our commodity division handles large-scale international exports of grains and feeds. We handle procurement, warehousing, container stuffing, and strict independent inspections (like SGS) to guarantee strict grade matching.',
    tags: ['Basmati Rice', 'Soymeal', 'Pulses'],
    products: [
      {
        name: 'Basmati Rice (1121 Extra Long)',
        hsCode: '1006.30',
        origin: 'Punjab / Haryana',
        moq: '2 MT',
        season: 'Year-round',
        certifications: ['APEDA', 'FSSAI'],
        image: 'https://images.unsplash.com/photo-1723475158232-819e29803f4d?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1723475158232-819e29803f4d?q=80&w=1170&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1170&auto=format&fit=crop&w=800&q=80'
        ],
        description: 'Premium 1121 extra-long grain basmati with 8mm+ grain length and aromatic profile.',
      },
    ],
  },
  // {
  //   id: 'fmcg',
  //   name: 'FMCG & Consumer Goods',
  //   slug: 'fmcg',
  //   icon: '🧴',
  //   image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
  //   color: '#2563EB',
  //   description:
  //     'Retail-ready consumer goods, herbal products, and private label food packaging lines.',
  //   longDescription:
  //     'We supply finished consumer packaged goods designed with multi-lingual label compliance and export certificates. Tailored branding, barcoding, and carton formats are fully customizable.',
  //   tags: ['Organic Honey', 'Coconut Oil', 'Herbal Supplements'],
  //   products: [
  //     {
  //       name: 'Organic Honey (Multiflora)',
  //       hsCode: '0409.00',
  //       origin: 'Rajasthan',
  //       moq: '100 KG',
  //       season: 'Year-round',
  //       certifications: ['FSSAI', 'Organic India'],
  //       image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
  //       description: 'Raw, unprocessed multiflora honey with HMF < 40mg/kg and moisture < 20%.',
  //     },
  //     {
  //       name: 'Virgin Coconut Oil',
  //       hsCode: '1513.11',
  //       origin: 'Kerala',
  //       moq: '200 KG',
  //       season: 'Year-round',
  //       certifications: ['FSSAI', 'APEDA', 'Organic'],
  //       image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
  //       description: 'Cold-pressed VCO with lauric acid > 48%. Available in bulk drums or retail bottles.',
  //     },
  //     {
  //       name: 'Herbal Supplements',
  //       hsCode: '2106.90',
  //       origin: 'India',
  //       moq: '1000 units',
  //       season: 'Year-round',
  //       certifications: ['FSSAI', 'GMP'],
  //       image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
  //       description: 'Ashwagandha, Moringa, Amla capsules and powders. Ayurvedic-grade ingredients.',
  //     },
  //   ],
  // },
  // {
  //   id: 'organic',
  //   name: 'Organic & Natural Products',
  //   slug: 'organic',
  //   icon: '🌿',
  //   image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  //   color: '#059669',
  //   description:
  //     'Certified organic agricultural foods, wellness powders, and seed products direct from farmers.',
  //   longDescription:
  //     'Our dedicated organic catalog holds NPOP, USDA Organic, and EU Organic certifications. Total traceability from farming clusters guarantees high quality standards.',
  //   tags: ['Organic Moringa', 'Certified Organic', 'Natural Food'],
  //   products: [
  //     {
  //       name: 'Organic Moringa Powder',
  //       hsCode: '1212.99',
  //       origin: 'Rajasthan / Tamil Nadu',
  //       moq: '100 KG',
  //       season: 'Year-round',
  //       certifications: ['Organic', 'FSSAI'],
  //       image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  //       description: 'Drumstick leaf powder rich in iron and vitamins. Steam-sterilized to <100 CFU/g TPC.',
  //     },
  //   ],
  // },
  // {
  //   id: 'custom-sourcing',
  //   name: 'Custom Sourcing',
  //   slug: 'custom-sourcing',
  //   icon: '📦',
  //   image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  //   color: '#4B5563',
  //   description:
  //     'Custom manufacturing, private-label branding, packaging, and product procurement across India.',
  //   longDescription:
  //     'Our nationwide sourcing network covers thousands of verified vendors, mills, and farms. We manage the vendor vetting, regulatory audits, custom packing, quality checks, and sea freight logistics.',
  //   tags: ['Private Label', 'OEM', 'Bulk Procurement', 'B2B Sourcing'],
  //   products: [
  //     {
  //       name: 'Private Label Products',
  //       hsCode: 'Various',
  //       origin: 'India',
  //       moq: 'MOQ varies',
  //       season: 'Year-round',
  //       certifications: ['As per product'],
  //       image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
  //       description: 'Your brand on Indian products — we handle sourcing, quality control, labeling, and export.',
  //     },
  //     {
  //       name: 'OEM Manufacturing',
  //       hsCode: 'Various',
  //       origin: 'India',
  //       moq: 'By specification',
  //       season: 'Year-round',
  //       certifications: ['ISO 9001', 'GMP'],
  //       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  //       description: 'Contract manufacturing for food, nutraceuticals, cosmetics, and industrial goods.',
  //     },
  //   ],
  // },
];

export const featuredProducts = [
  {
    name: 'Basmati Rice (1121 Extra Long)',
    badge: 'Premium Export Grade',
    image: 'https://images.unsplash.com/photo-1723475158232-819e29803f4d?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
    origin: 'Punjab / Haryana',
    hsCode: '1006.30',
    moq: '2 MT',
    season: 'Year-round',
    price: 'Quote on Request',
    description: 'Premium 1121 extra-long grain basmati with 8mm+ grain length and aromatic profile. Aged to perfection for superior cooking quality.',
    certifications: ['APEDA', 'FSSAI'],
    icon: '🍚'
  },
  {
    name: 'Pomegranate (Bhagwa)',
    badge: 'Seasonal Bestseller',
    image: 'https://images.unsplash.com/photo-1580636521086-7b0c742dd567?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=format&fit=crop&w=600&q=80',
    origin: 'Nashik, Maharashtra',
    hsCode: '0810.90',
    moq: '500 KG',
    season: 'Sep–Feb',
    price: 'Quote on Request',
    description: 'Ruby-red Bhagwa pomegranates with high ARILS and sweetness. Direct from Mira Road, Mumbai with export-grade packaging.',
    certifications: ['APEDA', 'GlobalG.A.P'],
    icon: '🍎'
  },
  {
    name: 'Banana (Cavendish)',
    badge: 'High Demand',
    image: 'https://images.unsplash.com/photo-1619995750009-5256e91437b0?q=80&w=1170&auto=format&fit=crop&w=600&q=80',
    origin: 'Jalgaon / Maharashtra',
    hsCode: '0803.90',
    moq: '1 MT',
    season: 'Year-round',
    price: 'Quote on Request',
    description: 'Premium Cavendish bananas carefully selected for optimal size, spotless yellow skin, and extended shelf life during transit.',
    certifications: ['APEDA', 'GlobalG.A.P'],
    icon: '🍌'
  },
  {
    name: 'Green Chillies',
    badge: 'Farm Fresh',
    image: 'https://images.unsplash.com/photo-1576763595295-c0371a32af78?auto=format&fit=crop&w=600&q=80',
    origin: 'Maharashtra / AP',
    hsCode: '0709.60',
    moq: '500 KG',
    season: 'Year-round',
    price: 'Quote on Request',
    description: 'Fresh, vibrant green chillies with high pungency. Carefully packed in ventilated cartons to maintain freshness during air freight.',
    certifications: ['APEDA', 'Phytosanitary'],
    icon: '🫑'
  }
];
