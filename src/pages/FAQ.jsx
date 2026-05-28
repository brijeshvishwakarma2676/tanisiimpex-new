import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircleQuestion, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { faqItems } from '@/data/faqData';
export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ — B2B Import from India: MOQ, Payment Terms, Shipping & Quality Questions"
        description="Answers to the most common questions about importing from Tanisi Impex: minimum order quantity, payment terms (LC/TT), transit times, quality certifications, and product availability. Plus chat with Tenisi, our AI trade assistant."
        keywords="import from India FAQ, MOQ Indian exporter, LC payment terms India, basmati rice MOQ, Indian export quality certification, shipping time India to UAE, B2B import questions India"
        path="/faq"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.title,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.content
            }
          }))
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-900 border-b border-navy-800">
        <div className="absolute inset-0 bg-dark-gradient opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-400/10 text-gold-400 text-sm font-semibold mb-6 border border-gold-400/20">
              <MessageCircleQuestion className="w-4 h-4" />
              <span>Help Center & Chat</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Tanisi Support <span className="text-transparent bg-clip-text bg-gold-gradient">Hub</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
              Explore our structured FAQ or chat directly with Tenisi, our smart AI trade assistant, for instant import guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 font-body text-lg">Quick reference guidelines for B2B global imports.</p>
            </div>

              <Accordion type="single" collapsible className="w-full" defaultValue="q1">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AccordionItem value={item.id} className="py-2 border-gray-200">
                      <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-lg font-heading font-bold text-navy-900 leading-tight transition-all hover:text-gold-500 [&[data-state=open]>svg]:rotate-180 hover:no-underline">
                        <span className="flex flex-col space-y-1.5">
                          <span>{item.title}</span>
                          {item.sub && <span className="text-sm font-body font-normal text-gray-500">{item.sub}</span>}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-gray-600 font-body leading-relaxed text-base">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>

          {/* Still have questions block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 bg-navy-50 rounded-3xl p-8 md:p-10 text-center border border-navy-100"
          >
            <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 font-body mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy-900 text-white font-semibold hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
              <a href="tel:+919152121077" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-navy-900 border border-gray-200 font-semibold hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4" />
                +91 91521 21077
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
