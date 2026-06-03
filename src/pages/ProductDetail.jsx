import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, ArrowRight, Package, Globe, Shield, Scale } from 'lucide-react';
import { productCategories } from '@/data/products';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import ContainerCalculator from '@/components/ui/ContainerCalculator';

export const createSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const getProductImage = (product, categoryImage) => {
  if (product.image && !product.image.startsWith('/spice_pages')) return product.image;
  // Use specific images for spices if they are local placeholders to look better, or keep them.
  // Actually, keeping the provided images is fine. The helper from Products.jsx was mainly for unsplash fallbacks.
  if (product.image) return product.image;
  
  const name = product.name.toLowerCase();
  if (name.includes('onion')) return 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80';
  if (name.includes('pomegranate')) return 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80';
  if (name.includes('grapes')) return 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80';
  if (name.includes('mango')) return 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80';
  if (name.includes('chilli') || name.includes('pepper')) return 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80';
  if (name.includes('rice')) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80';
  if (name.includes('turmeric') || name.includes('cumin') || name.includes('spices')) return 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80';
  if (name.includes('honey')) return 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80';
  if (name.includes('coconut')) return 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80';
  if (name.includes('oil')) return 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80';
  return categoryImage || 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80';
};

export default function ProductDetail() {
  const { category, product } = useParams();
  
  const cat = productCategories.find((c) => c.slug === category);
  if (!cat) return <Navigate to="/products" replace />;
  
  const item = cat.products.find((p) => createSlug(p.name) === product);
  if (!item) return <Navigate to={`/products/${cat.slug}`} replace />;

  const baseImg = getProductImage(item, cat.image);
  
  // Construct multi-image gallery
  const images = item.images || [
    baseImg,
    cat.image || 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80', // Food/agricultural generic
    'https://images.unsplash.com/photo-1586528116311-ad8ed3c8310d?auto=format&fit=crop&w=800&q=80' // Logistics cargo generic
  ];

  const [activeImage, setActiveImage] = useState(0);

  // Reset active image when product route parameter changes
  useEffect(() => {
    setActiveImage(0);
  }, [product]);

  return (
    <>
      <Helmet>
        <title>{item.name} | Export from India | Tanisi Impex</title>
        <meta name="description" content={`Import premium ${item.name} from Tanisi Impex. Origin: ${item.origin}. MOQ: ${item.moq}. Request bulk FOB/CIF pricing.`} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="section-container py-3">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 font-body flex-wrap">
            <Link to="/" className="hover:text-navy-700 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-navy-700 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <Link to={`/products/${cat.slug}`} className="hover:text-navy-700 transition-colors">{cat.name}</Link>
            <ChevronRight size={14} />
            <span className="text-navy-800 font-medium">{item.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24 space-y-4"
            >
              <div className="rounded-3xl overflow-hidden shadow-card relative aspect-square lg:aspect-[4/3] bg-navy-50 group">
                <img 
                  key={activeImage}
                  src={images[activeImage] || images[0]} 
                  alt={item.name} 
                  className="w-full h-full object-cover animate-fade-in" 
                />
                <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm text-2xl">
                  {cat.icon}
                </div>
              </div>
              
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                  {images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 border-2 
                        ${activeImage === idx ? 'border-gold-400 shadow-md ring-2 ring-gold-400/20' : 'border-transparent hover:opacity-80'}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="badge-gold mb-3">{cat.name}</span>
                <h1 className="font-heading font-bold text-navy-800 text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                  {item.name}
                </h1>
                <p className="text-gray-500 font-body text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-semibold text-navy-800 text-lg mb-4">Product Specifications</h3>
                <div className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                      <Scale size={16} className="text-navy-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-body">HS Code</div>
                      <div className="font-semibold text-navy-800 font-body">{item.hsCode || 'Available on request'}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                      <Globe size={16} className="text-navy-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-body">Origin</div>
                      <div className="font-semibold text-navy-800 font-body">{item.origin || 'India'}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                      <Package size={16} className="text-navy-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-body">Minimum Order Quantity (MOQ)</div>
                      <div className="font-semibold text-navy-800 font-body">{item.moq || '1 MT'}</div>
                    </div>
                  </div>
                  {item.season && (
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-8 h-8 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                        <Shield size={16} className="text-navy-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-body">Availability / Season</div>
                        <div className="font-semibold text-navy-800 font-body">{item.season}</div>
                      </div>
                    </div>
                  )}
                </div>

                {item.certifications && item.certifications.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-xs text-gray-400 font-body mb-3">Certifications & Quality</div>
                    <div className="flex flex-wrap gap-2">
                      {item.certifications.map(c => (
                        <span key={c} className="badge bg-green-50 border border-green-100 text-green-700 text-xs">
                          <CheckCircle size={12} className="mr-1" /> {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={`/inquiry?product=${encodeURIComponent(item.name)}&incoterm=CIF`}
                  className="btn-primary flex-1 justify-center py-4 text-base shadow-lg shadow-navy-900/20"
                >
                  Request Bulk Quote <ArrowRight size={18} />
                </Link>
                <a 
                  href="https://wa.me/919152121077" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-navy flex-1 justify-center py-4 text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Container Calculator */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="section-container">
          <SectionHeader 
            label="Logistics" 
            heading="Plan Your Cargo" 
            subtext={`Estimate container load requirements and packaging options for ${item.name}.`} 
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <ContainerCalculator />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="font-heading font-bold text-navy-800 text-2xl md:text-3xl mb-8">
            More from {cat.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cat.products.filter(p => p.name !== item.name).slice(0, 4).map(p => {
              const pImg = getProductImage(p, cat.image);
              const pSlug = createSlug(p.name);
              return (
                <Link to={`/products/${cat.slug}/${pSlug}`} key={p.name} className="card p-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
                  <div className="h-40 bg-navy-50 rounded-xl mb-4 overflow-hidden">
                    <img src={pImg} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy-800 text-lg group-hover:text-gold-500 transition-colors">{p.name}</h3>
                  <div className="text-gray-500 text-sm font-body mt-1">{p.origin}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner 
        heading={`Looking to import ${item.name}?`} 
        subtext="Our team will handle everything from farm-gate procurement to customs clearance at your destination port."
        buttonLabel="Contact Export Sales"
        buttonTo="/contact"
      />
    </>
  );
}
