import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wheat, ShoppingBag, Factory, Leaf, Sprout, Package, Award } from 'lucide-react';
import { productCategories } from '@/data/products';

const categoryConfig = {
  agricultural:      { Icon: Wheat,       bg: 'from-emerald-900/90 via-emerald-800/60 to-transparent', cardBg: 'bg-gradient-to-br from-emerald-700 to-green-950' },
  fmcg:              { Icon: ShoppingBag, bg: 'from-blue-900/90 via-blue-800/60 to-transparent',       cardBg: 'bg-gradient-to-br from-blue-700 to-indigo-950' },
  organic:           { Icon: Leaf,        bg: 'from-green-900/90 via-green-800/60 to-transparent',     cardBg: 'bg-gradient-to-br from-green-700 to-teal-950' },
  agrochemicals:     { Icon: Sprout,      bg: 'from-amber-900/90 via-amber-800/60 to-transparent',     cardBg: 'bg-gradient-to-br from-amber-700 to-orange-950' },
  'custom-sourcing': { Icon: Package,     bg: 'from-rose-900/90 via-rose-800/60 to-transparent',       cardBg: 'bg-gradient-to-br from-rose-700 to-red-950' },
};

export default function ProductGrid({ limit }) {
  const categories = limit ? productCategories.slice(0, limit) : productCategories;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, i) => {
        const cfg = categoryConfig[cat.id] || categoryConfig.agricultural;
        const { Icon } = cfg;
        return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to={`/products/${cat.slug}`}
              className="group relative block h-72 rounded-2xl overflow-hidden shadow-card"
            >
              {/* Background */}
              <div className={`absolute inset-0 ${cfg.cardBg} transition-transform duration-500 group-hover:scale-105`} />

              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cfg.bg} transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Icon top-left */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Icon size={24} className="text-white" />
              </div>

              {/* Product count badge */}
              <div className="absolute top-4 right-4">
                <span className="badge bg-white/20 text-white text-[10px] backdrop-blur-sm">
                  <Award size={10} /> {cat.products.length} Products
                </span>
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-semibold text-white text-xl mb-2 leading-tight">{cat.name}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cat.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="badge bg-white/20 text-white text-[10px]">{tag}</span>
                  ))}
                  {cat.tags.length > 3 && (
                    <span className="badge bg-white/20 text-white text-[10px]">+{cat.tags.length - 3} more</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-gold-300 text-sm font-semibold font-body
                                translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  View Products <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
