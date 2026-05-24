import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const contactInfo = [
  { Icon: MapPin, label: 'Address', value: 'Plot No. 14, MIDC Industrial Area,\nNashik, Maharashtra – 422010, India' },
  { Icon: Phone, label: 'Phone / WhatsApp', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { Icon: Mail, label: 'Email', value: 'info@tanisiiimpex.com', href: 'mailto:info@tanisiiimpex.com' },
  { Icon: Clock, label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM IST' },
];

const productOptions = [
  'Fresh Onion', 'Pomegranate', 'Grapes', 'Alphonso Mango', 'Spices', 'Basmati Rice',
  'FMCG Products', 'Organic Products', 'Custom Sourcing',
];

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Simulate form submission (replace with EmailJS/Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Contact form data:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle size={36} className="text-green-500" />
        </div>
        <h3 className="font-heading font-semibold text-navy-800 text-2xl mb-2">Message Sent!</h3>
        <p className="text-gray-500 font-body mb-6">We'll get back to you within 24 hours on your email or WhatsApp.</p>
        <button onClick={() => setSubmitted(false)} className="btn-outline-navy text-sm">Send Another Message</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input {...register('name', { required: 'Name is required' })}
            className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 transition-all ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="John Smith" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Company Name *</label>
          <input {...register('company', { required: 'Company is required' })}
            className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 transition-all ${errors.company ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="ABC Trading Co." />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Country *</label>
          <input {...register('country', { required: 'Country is required' })}
            className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 transition-all ${errors.country ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="United Arab Emirates" />
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Phone / WhatsApp *</label>
          <input {...register('phone', { required: 'Phone is required' })}
            className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 transition-all ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="+971 50 123 4567" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Email Address *</label>
        <input {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
          type="email"
          className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 transition-all ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
          placeholder="you@company.com" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Product Interest *</label>
        <select {...register('product', { required: 'Please select a product' })}
          className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 transition-all ${errors.product ? 'border-red-400' : 'border-gray-200'}`}>
          <option value="">Select a product category</option>
          {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Quantity Required</label>
        <input {...register('quantity')}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500"
          placeholder="e.g. 10 MT, 1 FCL container, 500 KG" />
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Message / Specific Requirements</label>
        <textarea {...register('message')} rows={4}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 resize-none"
          placeholder="Tell us about your specific requirements, packaging preferences, delivery timeline..." />
      </div>

      <button type="submit" disabled={isSubmitting}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60">
        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Tanisii Impex — Nashik, Maharashtra, India</title>
        <meta name="description" content="Contact Tanisii Impex for export inquiries. Nashik, Maharashtra, India. Phone, WhatsApp, email. We respond within 24 hours." />
      </Helmet>

      <section className="bg-hero-gradient py-28 relative overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold-300">Reach Out</span>
            <h1 className="font-heading text-white mt-4 mb-6">Get In Touch</h1>
            <p className="text-white/70 text-lg font-body max-w-xl mx-auto">We respond to all trade inquiries within 24 hours. For urgent matters, chat with us directly on WhatsApp.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="font-heading text-navy-800 text-2xl mb-6">Contact Information</h2>
              {contactInfo.map(({ Icon, label, value, href }) => (
                <motion.div key={label} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="card p-5 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-navy-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-body mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-navy-800 font-body font-semibold text-sm hover:text-gold-500 transition-colors whitespace-pre-line">{value}</a>
                    ) : (
                      <div className="text-navy-800 font-body font-semibold text-sm whitespace-pre-line">{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <a href="https://wa.me/919876543210?text=Hello%20Tanisii%20Impex%2C%20I%20have%20an%20inquiry."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-green-500 text-white rounded-xl px-5 py-4 font-semibold font-body hover:bg-green-600 transition-colors">
                <FaWhatsapp size={22} />
                <div>
                  <div className="text-sm">Chat Instantly on WhatsApp</div>
                  <div className="text-green-200 text-xs font-normal">Usually responds within 1 hour</div>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-navy-50 flex items-center justify-center">
                <div className="text-center text-gray-400 font-body text-sm">
                  <MapPin size={28} className="mx-auto mb-2 text-navy-400" />
                  <div className="font-semibold text-navy-700">Nashik, Maharashtra</div>
                  <div className="text-xs">MIDC Industrial Area, 422010</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-card p-8">
                <h2 className="font-heading text-navy-800 text-2xl mb-2">Send Us a Message</h2>
                <p className="text-gray-500 font-body text-sm mb-6">Fill in the form and we'll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
