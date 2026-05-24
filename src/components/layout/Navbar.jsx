import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, Phone, Mail,
  Wheat, ShoppingBag, Factory, Leaf, Sprout, Package,
  Globe, Award, FileText, Headphones, Shield, Ship,
} from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Products',
    to: '/products',
    children: [
      { label: 'Agricultural Products', to: '/products/agricultural', Icon: Wheat },
      { label: 'FMCG & Consumer Goods', to: '/products/fmcg', Icon: ShoppingBag },
      { label: 'Organic & Natural', to: '/products/organic', Icon: Leaf },
      { label: 'Agro-Chemicals', to: '/products/agrochemicals', Icon: Sprout },
      { label: 'Custom Sourcing', to: '/products/custom-sourcing', Icon: Package },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Global Reach', to: '/global-reach' },
  { label: 'Quality', to: '/quality' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* ── Top info bar (fixed, above main nav) ── */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden lg:flex bg-navy-900">
        <div className="section-container flex items-center justify-between w-full py-1.5">
          <div className="flex items-center gap-6 text-xs text-white/65">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <Phone size={11} /> +91 98765 43210
            </a>
            <a href="mailto:info@tanisiiimpex.com" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <Mail size={11} /> info@tanisiiimpex.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/45">
            <span>IEC: AABCT1234A</span>
            <span className="text-white/20">|</span>
            <span>APEDA Registered</span>
            <span className="text-white/20">|</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar (fixed, below info bar) ── */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 bg-navy-800/95 backdrop-blur-xl border-b border-white/10 shadow-lg ${
          isScrolled ? 'top-0 py-0' : 'top-0 lg:top-[32px] py-1 lg:py-0'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.png" 
                alt="Tanisii Impex Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div>
                <div className="font-heading font-bold text-white text-[17px] leading-none tracking-wider">
                  TANISII IMPEX
                </div>
                <div className="text-gold-300/80 text-[9px] font-body tracking-[0.18em] uppercase leading-none mt-1 hidden sm:block">
                  Global Trade · Indian Excellence
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium font-body transition-all duration-200
                        text-white/80 hover:text-white hover:bg-white/10
                        ${isActive ? '!text-gold-300' : ''}`
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`text-white/50 transition-transform duration-200 ${
                          openDropdown === link.label ? 'rotate-180 text-gold-300' : ''
                        }`}
                      />
                    </NavLink>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-card-hover border border-gray-100 py-2 z-50 overflow-hidden"
                        >
                          {link.children.map(({ to, label, Icon }) => (
                            <NavLink
                              key={to}
                              to={to}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2.5 text-sm font-body transition-colors ${
                                  isActive
                                    ? 'text-gold-500 bg-gold-50 font-semibold'
                                    : 'text-gray-700 hover:bg-navy-50 hover:text-navy-800'
                                }`
                              }
                            >
                              <Icon size={15} className="text-navy-400 shrink-0" />
                              {label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-lg text-sm font-medium font-body transition-all duration-200
                      text-white/80 hover:text-white hover:bg-white/10
                      ${isActive ? '!text-gold-300 bg-white/8' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/inquiry" className="hidden sm:flex btn-primary text-sm px-5 py-2.5">
                Request a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2.5 rounded-xl text-white bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-navy-900 z-[61] lg:hidden overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img src="/images/logo.png" alt="Tanisii Impex Logo" className="h-8 w-auto object-contain" />
                  <span className="font-heading font-bold text-white text-base">TANISII IMPEX</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="p-4 space-y-0.5">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/8 transition-colors text-sm font-medium font-body"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform text-white/40 ${
                            openDropdown === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-2"
                          >
                            {link.children.map(({ to, label, Icon }) => (
                              <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                  `flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-body transition-colors ${
                                    isActive
                                      ? 'text-gold-300 bg-white/8 font-semibold'
                                      : 'text-white/60 hover:text-white hover:bg-white/8'
                                  }`
                                }
                              >
                                <Icon size={14} className="shrink-0 opacity-70" />
                                {label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-sm font-medium font-body transition-colors ${
                          isActive
                            ? 'text-gold-300 bg-white/8 font-semibold'
                            : 'text-white/80 hover:text-white hover:bg-white/8'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
              </nav>

              <div className="px-4 pb-6 mt-2 border-t border-white/10 pt-4 space-y-3">
                <Link to="/inquiry" className="btn-primary w-full justify-center text-sm">
                  Request a Quote
                </Link>
                <div className="flex flex-col gap-2 text-sm text-white/45">
                  <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold-300 transition-colors">
                    <Phone size={13} /> +91 98765 43210
                  </a>
                  <a href="mailto:info@tanisiiimpex.com" className="flex items-center gap-2 hover:text-gold-300 transition-colors">
                    <Mail size={13} /> info@tanisiiimpex.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
