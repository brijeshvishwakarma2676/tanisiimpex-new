import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Filter } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { productCategories, featuredProducts } from '@/data/products';
import CTABanner from '@/components/ui/CTABanner';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ProductsHero({ search, setSearch }) {
  return (
    <section className="bg-hero-gradient py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
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
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products, categories, HS codes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white border border-white/20 text-gray-800
                         placeholder:text-gray-400 font-body text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
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

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="card p-5 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-heading font-semibold text-navy-800 text-base leading-tight">{product.name}</h3>
        <span className="badge-navy shrink-0 ml-2">{category.icon}</span>
      </div>

      <p className="text-gray-500 text-sm font-body leading-relaxed flex-1">{product.description}</p>

      <div className="grid grid-cols-2 gap-2 text-xs font-body">
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
        <div className="flex flex-wrap gap-1.5">
          {product.certifications.map((c) => (
            <span key={c} className="badge bg-green-50 text-green-700 text-[10px]">{c}</span>
          ))}
        </div>
      )}

      <Link
        to="/inquiry"
        className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-navy-800 text-white text-sm font-semibold
                   hover:bg-navy-700 transition-colors"
      >
        Request Quote <ArrowRight size={14} />
      </Link>
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
            <div key={fp.name} className="bg-white rounded-3xl shadow-card p-6 flex flex-col transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <span className="badge bg-gold-400 text-navy-800 font-semibold">{fp.badge}</span>
                <span className="text-3xl">{fp.icon}</span>
              </div>
              <h3 className="font-heading text-navy-800 text-xl mb-3">{fp.name}</h3>
              <p className="text-gray-600 text-sm font-body leading-relaxed mb-5 flex-1">{fp.description}</p>
              
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
                <Link to="/inquiry" className="btn-primary flex-1 text-center py-2 text-sm">Get Quote</Link>
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
      <Helmet>
        <title>Products | Tanisii Impex — Agricultural, FMCG, Industrial, Organic Exports</title>
        <meta name="description" content="Browse Tanisii Impex's export product catalog — agricultural produce, FMCG, industrial goods, organic products, and custom sourcing from Nashik, India." />
      </Helmet>

      <ProductsHero search={search} setSearch={setSearch} />
      <FeaturedProducts />

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
