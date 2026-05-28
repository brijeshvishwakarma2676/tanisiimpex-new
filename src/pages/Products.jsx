import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Filter } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { productCategories, featuredProducts } from '@/data/products';
import CTABanner from '@/components/ui/CTABanner';
import ContainerCalculator from '@/components/ui/ContainerCalculator';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ProductsHero({ search, setSearch }) {
  return (
    <section className="bg-hero-gradient py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
      </div>
      <div className="section-container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="section-label text-gold-300">Export Product Catalog</span>
          <h1 className="font-heading text-white mt-4 mb-6">Our Export Products</h1>
          <p className="text-white/70 text-lg font-body max-w-xl mx-auto mb-8">
            500+ products across 6 categories. All export-ready with full documentation support.
          </p>
          {/* Search */}
          <div className="max-w-lg mx-auto relative z-20">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products, categories, HS codes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white border border-white/20 text-gray-800
                         placeholder:text-gray-400 font-body text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400 relative z-30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Category Filter ──────────────────────────────────────────────────────────
function CategoryFilter({ active, onChange }) {
  const tabs = [
    { id: 'all', label: 'All Categories' },
    ...productCategories.map((c) => ({ id: c.id, label: c.name })),
  ];
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
            active === t.id
              ? 'bg-navy-800 text-white shadow-card'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-navy-300 hover:text-navy-700'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

// Helper to get beautiful context-appropriate Unsplash images
const getProductImage = (product, categoryImage) => {
  if (product.image) return product.image;
  
  const name = product.name.toLowerCase();
  if (name.includes('onion')) return 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=400&q=80';
  if (name.includes('pomegranate')) return 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80';
  if (name.includes('grapes')) return 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80';
  if (name.includes('mango')) return 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80';
  if (name.includes('chilli') || name.includes('pepper')) return 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80';
  if (name.includes('rice')) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80';
  if (name.includes('turmeric') || name.includes('cumin') || name.includes('spices')) return 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80';
  if (name.includes('soybean') || name.includes('soymeal')) return 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=400&q=80';
  if (name.includes('honey')) return 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80';
  if (name.includes('coconut')) return 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80';
  if (name.includes('moringa')) return 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80';
  if (name.includes('sesame')) return 'https://images.unsplash.com/photo-1536638317175-32449e082d60?auto=format&fit=crop&w=400&q=80';
  if (name.includes('oil')) return 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80';
  if (name.includes('fertilizer') || name.includes('npk')) return 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=400&q=80';
  if (name.includes('private label') || name.includes('sourcing')) return 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80';
  return categoryImage || 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=400&q=80';
};

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, category }) {
  const imgSrc = getProductImage(product, category.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group"
    >
      {/* Card Image header */}
      <div className="h-40 w-full overflow-hidden relative bg-navy-50">
        <img 
          src={imgSrc} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <span className="text-lg">{category.icon}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between">
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-tight">{product.name}</h3>
        </div>

        <p className="text-gray-500 text-sm font-body leading-relaxed flex-1">{product.description}</p>

        <div className="grid grid-cols-2 gap-2 text-xs font-body border-t border-gray-100 pt-3">
          <div>
            <span className="text-gray-400">HS Code:</span>
            <div className="font-semibold text-navy-700">{product.hsCode}</div>
          </div>
          <div>
            <span className="text-gray-400">Origin:</span>
            <div className="font-semibold text-navy-700">{product.origin}</div>
          </div>
          <div>
            <span className="text-gray-400">MOQ:</span>
            <div className="font-semibold text-navy-700">{product.moq}</div>
          </div>
          {product.season && (
            <div>
              <span className="text-gray-400">Season:</span>
              <div className="font-semibold text-navy-700">{product.season}</div>
            </div>
          )}
        </div>

        {product.certifications && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.certifications.map((c) => (
              <span key={c} className="badge bg-green-50 text-green-700 text-[10px]">{c}</span>
            ))}
          </div>
        )}

        <Link
          to={`/inquiry?product=${encodeURIComponent(product.name)}&incoterm=FOB`}
          className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-navy-800 text-white text-sm font-semibold
                     hover:bg-navy-700 transition-colors"
        >
          Request Quote <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Featured Products ────────────────────────────────────────────────────────
function FeaturedProducts() {
  return (
    <section className="py-20 bg-gold-100/50">
      <div className="section-container">
        <SectionHeader label="Star Exports" heading="Our Signature Products" subtext="High-demand Indian produce globally recognized for superior quality." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((fp) => (
            <div key={fp.name} className="bg-white rounded-3xl shadow-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover group">
              {/* Product Image */}
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={fp.image} 
                  alt={fp.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="badge bg-gold-400 text-navy-800 font-semibold shadow-sm">{fp.badge}</span>
                </div>
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <span className="text-xl">{fp.icon}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-navy-800 text-xl mb-3">{fp.name}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed mb-5 flex-1">{fp.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-5 text-xs font-body border-t border-gray-100 pt-4">
                  <div>
                    <div className="text-gray-400">HS Code</div>
                    <div className="font-semibold text-navy-800">{fp.hsCode}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Origin</div>
                    <div className="font-semibold text-navy-800">{fp.origin}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">MOQ</div>
                    <div className="font-semibold text-navy-800">{fp.moq}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Season</div>
                    <div className="font-semibold text-navy-800">{fp.season}</div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <Link 
                    to={`/inquiry?product=${encodeURIComponent(fp.name)}&incoterm=CIF`} 
                    className="btn-primary w-full text-center py-3 text-sm justify-center"
                  >
                    Request Bulk Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter products
  const filteredCategories = productCategories
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      products: cat.products.filter((p) => {
        if (!search) return true;
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q) ||
          p.hsCode?.includes(q) ||
          p.origin?.toLowerCase().includes(q)
        );
      }),
    }))
    .filter((cat) => cat.products.length > 0);

  return (
    <>
      <SEO
        title="Indian Export Products — Basmati Rice, Spices, Fresh Vegetables, FMCG, Organic"
        description="Explore Tanisi Impex's full B2B export product catalog. Premium Basmati rice (1121 Golden Sella, Pusa, Sona Masoori), Indian spices (turmeric, cumin, red chilli), fresh vegetables, FMCG, and organic products. ISO & APEDA certified. Ships from Mumbai to 30+ countries."
        keywords="basmati rice exporter India, Indian spices wholesale, turmeric exporter India, cumin seeds exporter, fresh onion exporter Mumbai, FMCG export India, organic products exporter India, 1121 basmati rice exporter, Sona Masoori rice exporter"
        path="/products"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Tanisi Impex Export Product Catalog",
          "description": "Premium Indian agricultural commodities and FMCG products for B2B import",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Basmati Rice", "url": "https://www.tanisiimpex.com/products/rice" },
            { "@type": "ListItem", "position": 2, "name": "Indian Spices", "url": "https://www.tanisiimpex.com/products/spices" },
            { "@type": "ListItem", "position": 3, "name": "Fresh Vegetables", "url": "https://www.tanisiimpex.com/products/fresh-vegetables" },
            { "@type": "ListItem", "position": 4, "name": "Fresh Fruits", "url": "https://www.tanisiimpex.com/products/fresh-fruits" },
            { "@type": "ListItem", "position": 5, "name": "FMCG Products", "url": "https://www.tanisiimpex.com/products/fmcg" },
            { "@type": "ListItem", "position": 6, "name": "Organic Products", "url": "https://www.tanisiimpex.com/products/organic" }
          ]
        }}
      />

      <ProductsHero search={search} setSearch={setSearch} />
      
      {!search && <FeaturedProducts />}

      {/* Container Cargo Estimator Section */}
      {!search && (
        <section className="py-20 bg-white border-t border-b border-gray-100">
          <div className="section-container">
            <SectionHeader
              label="B2B Tool"
              heading="Container Cargo Load Estimator"
              subtext="Select a commodity and input your target order weight to estimate container counts, package units, temp controls, and stowage specs."
            />
            <div className="mt-12">
              <ContainerCalculator />
            </div>
          </div>
        </section>
      )}

      {/* Product grid with filters */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="mb-8">
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-20 text-gray-400 font-body">
              <Search size={40} className="mx-auto mb-4 opacity-40" />
              <p>No products found for "{search}"</p>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h2 className="font-heading text-navy-800 text-2xl">{cat.name}</h2>
                    <p className="text-gray-500 text-sm font-body">{cat.description}</p>
                  </div>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="ml-auto btn-ghost text-sm hidden sm:flex"
                  >
                    View Category <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {cat.products.map((p) => (
                    <ProductCard key={p.name} product={p} category={cat} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <CTABanner
        heading="Can't Find What You're Looking For?"
        subtext="Our custom sourcing team can procure almost any Indian product. Tell us your requirements and we'll find it."
        buttonLabel="Send Custom Sourcing Request"
        buttonTo="/inquiry"
      />
    </>
  );
}
