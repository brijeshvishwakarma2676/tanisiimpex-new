import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import { useForm } from 'react-hook-form';
import { CheckCircle, ArrowRight } from 'lucide-react';

import { inquiryProductList as productList, inquiryIncoterms as incoterms, inquiryPaymentTerms as paymentTerms } from '@/data/companyData';

export default function Inquiry() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-card p-12 max-w-md w-full text-center mx-4">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={44} className="text-green-500" />
          </div>
          <h2 className="font-heading text-navy-800 text-2xl mb-3">Inquiry Submitted!</h2>
          <p className="text-gray-500 font-body mb-2">We'll respond within <strong>24 hours</strong> with a Proforma Invoice.</p>
          <p className="text-gray-400 font-body text-sm mb-8">For urgent: WhatsApp +91 91521 21077</p>
          <button onClick={() => setSubmitted(false)} className="btn-primary w-full justify-center">
            Submit Another <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Request an Export Quote — B2B Product Inquiry Form"
        description="Submit your B2B import inquiry to Tanisi Impex. Specify product (Basmati rice, spices, vegetables, FMCG), quantity, destination port, Incoterm (FOB/CIF/CFR), and payment preference. Receive a Proforma Invoice within 24 hours."
        keywords="request export quote India, B2B import inquiry India, FOB quote India, CIF quote basmati rice, Indian spices wholesale inquiry, import from India form"
        path="/inquiry"
      />

      <section className="bg-hero-gradient py-24">
        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold-300">B2B Inquiry Form</span>
            <h1 className="font-heading text-white mt-4 mb-4">Request an Export Quote</h1>
            <p className="text-white/70 font-body max-w-xl mx-auto">Fill in the details and our team will send a competitive Proforma Invoice within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="section-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-card p-8 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-400 font-body font-semibold mb-4">Company Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Full Name *', name: 'name', ph: 'John Smith', rule: { required: 'Required' } },
                    { label: 'Company *', name: 'company', ph: 'ABC Trading LLC', rule: { required: 'Required' } },
                    { label: 'Country *', name: 'country', ph: 'United Arab Emirates', rule: { required: 'Required' } },
                    { label: 'Phone/WhatsApp *', name: 'phone', ph: '+971 50 123 4567', rule: { required: 'Required' } },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">{f.label}</label>
                      <input {...register(f.name, f.rule)} placeholder={f.ph}
                        className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 ${errors[f.name] ? 'border-red-400' : 'border-gray-200'}`} />
                      {errors[f.name] && <p className="text-red-500 text-xs mt-1">{errors[f.name].message}</p>}
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Email *</label>
                    <input {...register('email', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                      type="email" placeholder="you@company.com"
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-xs uppercase tracking-wider text-gray-400 font-body font-semibold mb-4">Product Requirements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Product *</label>
                    <select {...register('product', { required: 'Required' })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 ${errors.product ? 'border-red-400' : 'border-gray-200'}`}>
                      <option value="">Select product</option>
                      {productList.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Quantity *</label>
                    <input {...register('quantity', { required: 'Required' })} placeholder="e.g. 10 MT"
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 ${errors.quantity ? 'border-red-400' : 'border-gray-200'}`} />
                    {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Destination Port *</label>
                    <input {...register('destination', { required: 'Required' })} placeholder="e.g. Jebel Ali, UAE"
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 ${errors.destination ? 'border-red-400' : 'border-gray-200'}`} />
                    {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Incoterm</label>
                    <select {...register('incoterm')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500">
                      {incoterms.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Payment Term</label>
                    <select {...register('paymentTerm')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500">
                      {paymentTerms.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Required By</label>
                    <input {...register('timeline')} type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <label className="block text-sm font-medium text-gray-700 font-body mb-1.5">Additional Requirements</label>
                <textarea {...register('notes')} rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy-500 resize-none"
                  placeholder="Packaging preferences, certifications required, quality parameters..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60">
                {isSubmitting ? 'Submitting...' : <><span>Submit Trade Inquiry</span> <ArrowRight size={18} /></>}
              </button>
              <p className="text-center text-xs text-gray-400 font-body">We respond within 24 hours. Your information is kept confidential.</p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
