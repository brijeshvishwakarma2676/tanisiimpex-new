import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { productCategories } from '@/data/products';
import CTABanner from '@/components/ui/CTABanner';
import { createSlug } from '@/pages/ProductDetail';

export default function ProductCategory() {
  const { category } = useParams();
  const cat = productCategories.find((c) => c.slug === category);

  if (!cat) return <Navigate to="/products" replace />;

  const gradients = {
    'fresh-fruits': 'from-fuchsia-800 to-pink-950',
    'fresh-vegetables': 'from-emerald-800 to-green-950',
    spices: 'from-red-800 to-amber-950',
    agricultural: 'from-amber-700 to-orange-950',
    fmcg: 'from-blue-800 to-indigo-950',
    industrial: 'from-slate-700 to-slate-950',
    organic: 'from-green-700 to-teal-950',
    'custom-sourcing': 'from-slate-800 to-slate-950',
  };

  return (
    <>
      <Helmet>
        <title>{cat.name} | Tanisi Impex — Indian Export Products</title>
        <meta name="description" content={cat.longDescription} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="section-container py-3">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 font-body">
            <Link to="/" className="hover:text-navy-700 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-navy-700 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-navy-800 font-medium">{cat.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className={`bg-gradient-to-br ${gradients[cat.slug] || gradients.agricultural} py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h1 className="font-heading text-white mb-4">{cat.name}</h1>
            <p className="text-white/75 font-body max-w-2xl text-lg leading-relaxed">{cat.longDescription}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {cat.tags.map((t) => (
                <span key={t} className="badge bg-white/20 text-white">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products + Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product list */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-navy-800 text-2xl mb-6">{cat.products.length} Products Available</h2>
              <div className="space-y-6">
                {cat.products.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="card overflow-hidden group"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Product Image */}
                      {p.image && (
                        <div className="sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden relative">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="font-heading font-semibold text-navy-800 text-xl">{p.name}</h3>
                          <span className="badge-gold shrink-0">HS: {p.hsCode}</span>
                        </div>
                        {p.description && (
                          <p className="text-gray-500 font-body text-sm leading-relaxed mb-4">{p.description}</p>
                        )}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            ['Origin', p.origin],
                            ['MOQ', p.moq],
                            p.season && ['Season', p.season],
                          ]
                            .filter(Boolean)
                            .map(([k, v]) => (
                              <div key={k} className="bg-gray-50 rounded-lg p-2.5">
                                <div className="text-xs text-gray-400 font-body">{k}</div>
                                <div className="text-sm font-semibold text-navy-700 font-body">{v}</div>
                              </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
                          {p.certifications && (
                            <div className="flex flex-wrap gap-1.5">
                              {p.certifications.map((c) => (
                                <span key={c} className="badge bg-green-50 text-green-700 text-[10px]">
                                  <CheckCircle size={9} /> {c}
                                </span>
                              ))}
                            </div>
                          )}
                          <Link 
                            to={`/products/${cat.slug}/${createSlug(p.name)}`}
                            className="text-navy-800 font-body font-bold text-sm flex items-center gap-1.5 hover:text-gold-500 transition-colors"
                          >
                            View Details <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick Inquiry */}
              <div className="bg-navy-800 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-heading font-semibold text-xl mb-2">Request a Quote</h3>
                <p className="text-white/60 text-sm font-body mb-5">
                  Get FOB/CIF pricing for any product in this category within 24 hours.
                </p>
                <div className="space-y-3 mb-5">
                  {['Product Name', 'Quantity Required', 'Destination Port'].map((f) => (
                    <input
                      key={f}
                      type="text"
                      placeholder={f}
                      className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/40
                                 rounded-xl px-4 py-2.5 text-sm font-body focus:outline-none focus:border-gold-400"
                    />
                  ))}
                </div>
                <Link to="/inquiry" className="btn-primary w-full justify-center text-sm">
                  Submit Inquiry <ArrowRight size={14} />
                </Link>
              </div>

              {/* Download catalog */}
              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center shrink-0">
                    <Download size={18} className="text-navy-700" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-navy-800 text-sm">Download Catalog</div>
                    <div className="text-gray-400 text-xs font-body">Product sheet with full specs</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="/catalogs/spices-catalog-sample.pdf"
                    download={`${cat.name.replace(/\s+/g, '-')}-Catalog-TanisiImpex.pdf`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-700 text-xs font-semibold font-body hover:bg-red-100 transition-colors"
                  >
                    <Download size={12} /> Download PDF
                  </a>
                  <a
                    href="/catalogs/spices-catalog-template.docx"
                    download={`${cat.name.replace(/\s+/g, '-')}-Catalog-TanisiImpex.docx`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold font-body hover:bg-blue-100 transition-colors"
                  >
                    <Download size={12} /> Download Word (Editable)
                  </a>
                </div>
              </div>

              {/* Navigation to other categories */}
              <div className="card p-5">
                <h4 className="font-heading font-semibold text-navy-800 mb-3">Other Categories</h4>
                <div className="space-y-1">
                  {productCategories
                    .filter((c) => c.id !== cat.id)
                    .map((c) => (
                      <Link
                        key={c.id}
                        to={`/products/${c.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-navy-50 hover:text-navy-800 transition-colors font-body"
                      >
                        <span>{c.icon}</span> {c.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Ready to Import ${cat.name}?`}
        subtext="Send us your requirements and get a competitive quote within 24 hours."
        buttonLabel="Request a Quote Now"
        buttonTo="/inquiry"
      />
    </>
  );
}
