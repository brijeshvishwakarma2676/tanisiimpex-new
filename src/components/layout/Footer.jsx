import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Products", to: "/products" },
    { label: "Our Services", to: "/services" },
    { label: "Global Reach", to: "/global-reach" },
    { label: "Quality & Certs", to: "/quality" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Bulk Inquiry", to: "/inquiry" },
  ],
  categories: [
    { label: "Fruits & Vegetables", to: "/products/fruits-vegetables" },
    { label: "Premium Spices", to: "/products/spices" },
    { label: "Grains & Commodities", to: "/products/agricultural" },
    { label: "FMCG & Consumer Goods", to: "/products/fmcg" },
    { label: "Organic & Natural", to: "/products/organic" },
    { label: "Custom Sourcing", to: "/products/custom-sourcing" },
  ],
};

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="Tanisi Impex Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-heading font-bold text-lg leading-none">
                  TANISI IMPEX
                </div>
                <div className="text-gold-300 text-[10px] tracking-widest uppercase font-body mt-0.5">
                  Global Trade, Indian Excellence
                </div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5 font-body">
              Premium Indian exports from Mira Road, Mumbai. Trusted by B2B
              buyers in 30+ countries across the globe since 2009.
            </p>
            <div className="space-y-2.5 text-sm text-white/60 font-body">
              <div className="flex gap-2">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>
                  1403, A Wing, Vasudev Paradise,
                  <br />
                  Kanakia Road, Near Unique Garden,
                  <br />
                  Mira Road, Mumbai - 401107, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold-400 shrink-0" />
                <a
                  href="tel:+919152121077"
                  className="hover:text-gold-300 transition-colors"
                >
                  +91 91521 21077
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400 shrink-0" />
                <a
                  href="mailto:info@tanisiimpex.com"
                  className="hover:text-gold-300 transition-colors"
                >
                  info@tanisiimpex.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-400 shrink-0" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://linkedin.com/company/tanisiimpex" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-navy-950 transition-all hover:scale-110">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://facebook.com/tanisiimpex" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-navy-950 transition-all hover:scale-110">
                <FaFacebookF size={14} />
              </a>
              <a href="https://twitter.com/tanisiimpex" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-navy-950 transition-all hover:scale-110">
                <FaTwitter size={14} />
              </a>
              <a href="https://instagram.com/tanisiimpex" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-navy-950 transition-all hover:scale-110">
                <FaInstagram size={14} />
              </a>
              <a
                href="https://wa.me/919152121077"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60
                           hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/55 hover:text-gold-300 transition-colors font-body flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400 group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Product Categories */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-white">
              Product Categories
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/55 hover:text-gold-300 transition-colors font-body flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400 group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="font-body font-semibold text-sm text-white mb-3">
                Certifications & Memberships
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "ISO 9001:2015",
                  "APEDA",
                  "FIEO",
                  "FSSAI",
                  "Spices Board",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="badge bg-white/10 text-white/70 text-xs"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4 — Trade Details */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-white">
              Trade Details
            </h3>
            <div className="space-y-4 font-body text-sm">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  IEC Code
                </div>
                <div className="text-white/80">Available upon request</div>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  GSTIN
                </div>
                <div className="text-white/80">Available upon request</div>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Ports of Loading
                </div>
                <div className="text-white/80">
                  JNPT Mumbai | Mundra | Chennai
                </div>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Incoterms
                </div>
                <div className="text-white/80">FOB | CIF | CFR | DDP | EXW</div>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Payment Terms
                </div>
                <div className="text-white/80">LC at Sight | TT | DP | DA</div>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Invoice Currency
                </div>
                <div className="text-white/80">USD | EUR | GBP | AED</div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919152121077?text=Hello%2C%20I'm%20interested%20in%20importing%20from%20Tanisi%20Impex."
              className="mt-6 flex items-center gap-2.5 bg-green-600/20 border border-green-500/30 text-green-400
                         rounded-xl px-4 py-3 text-sm font-semibold hover:bg-green-600/30 transition-colors"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-body">
          <div>
            © {new Date().getFullYear()} Tanisi Impex. All rights reserved.
            Mira Road, Mumbai, India.
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-gold-300 transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <span>IEC: AAMCT5095R</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
