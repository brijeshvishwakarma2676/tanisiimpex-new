import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you use our website or submit an inquiry, we may collect the following types of information:
- **Contact Information:** Name, company name, email address, phone number, and country.
- **Inquiry Details:** Products of interest, quantity requirements, destination port, and preferred Incoterms.
- **Usage Data:** Pages visited, time spent, browser type, and IP address (collected anonymously via analytics tools).
We do not collect sensitive personal information such as financial account numbers or government ID numbers through this website.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use your information solely for legitimate B2B business purposes:
- To respond to your product inquiries and send Proforma Invoices.
- To maintain business communication and follow up on trade discussions.
- To improve our website experience and services.
- To comply with applicable export regulations and legal obligations.
We will never sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: "3. Data Storage & Security",
    content: `Your data is stored securely on protected servers. We employ industry-standard security measures including:
- SSL/TLS encryption for all data transmitted through our website.
- Restricted access to personal data — only authorised Tanisi Impex team members can view inquiry details.
- Regular security reviews of our systems and third-party service providers.
Chat history from our AI Trade Assistant ("Tenisi") is stored locally in your browser's localStorage and is never transmitted to our servers.`,
  },
  {
    title: "4. Cookies & Tracking",
    content: `Our website uses cookies to enhance your experience:
- **Essential Cookies:** Required for the website to function (e.g., session management, cookie consent preference).
- **Analytics Cookies:** We may use anonymised analytics to understand how visitors use our site. No personally identifiable information is tracked.
You can manage your cookie preferences through the cookie banner displayed on your first visit, or through your browser settings.`,
  },
  {
    title: "5. Third-Party Services",
    content: `We use the following trusted third-party services:
- **Groq AI (for the AI Trade Assistant "Tenisi"):** Your chat messages are processed by Groq's LLM API. Please review Groq's privacy policy at groq.com.
- **Unsplash:** Product imagery is served from Unsplash's CDN. No personal data is shared.
- **Google Analytics (if applicable):** Anonymised website traffic analysis only.
- **Vercel:** Our website hosting platform. See Vercel's privacy policy at vercel.com.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your country, you may have the following rights regarding your personal data:
- **Right to Access:** Request a copy of the personal data we hold about you.
- **Right to Correction:** Ask us to correct inaccurate data.
- **Right to Deletion:** Request deletion of your personal data, subject to legal retention obligations.
- **Right to Object:** Object to processing of your data for specific purposes.
To exercise any of these rights, please contact us at **tanisiimpex@gmail.com** or **+91 91521 21077**.`,
  },
  {
    title: "7. Retention Period",
    content:
      "We retain your personal information only as long as necessary to fulfil the purposes described in this policy, or as required by law. Trade inquiry records are typically retained for 7 years in accordance with Indian financial record-keeping requirements.",
  },
  {
    title: "8. Contact Us",
    content: `For any questions, concerns, or requests related to this Privacy Policy, please contact us:

**Tanisi Impex**
1403, A Wing, Vasudev Paradise, Kanakia Road, Near Unique Garden,
Mira Road, Mumbai - 401107, Maharashtra, India

**Email:** tanisiimpex@gmail.com
**Phone / WhatsApp:** +91 91521 21077
**Business Hours:** Mon – Sat, 9:00 AM – 7:00 PM IST`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — How We Handle Your Data"
        description="Read Tanisi Impex's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our website or submit a B2B trade inquiry."
        path="/privacy-policy"
      />

      {/* Hero */}
      <section className="bg-hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-gold-300">Legal</span>
            <h1 className="font-heading text-white mt-4 mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60 font-body text-sm max-w-lg mx-auto">
              Last updated: May 28, 2026 &nbsp;|&nbsp; Tanisi Impex, Mira Road,
              Mumbai, India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-4xl">
          <p className="text-gray-600 font-body text-base leading-relaxed mb-10 p-6 bg-gold-50 border border-gold-200 rounded-2xl">
            <strong className="text-navy-800">Tanisi Impex</strong> ("we", "us",
            or "our") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you visit <strong>www.tanisiimpex.com</strong> or engage with
            our B2B trade services.
          </p>

          <div className="space-y-10">
            {sections.map(({ title, content }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b border-gray-100 pb-10 last:border-0"
              >
                <h2 className="font-heading text-navy-800 text-xl font-semibold mb-4">
                  {title}
                </h2>
                <div className="text-gray-600 font-body text-base leading-relaxed whitespace-pre-line">
                  {content.split("\n").map((line, j) => {
                    if (line.startsWith("- **")) {
                      const [bold, ...rest] = line
                        .replace("- **", "")
                        .split(":**");
                      return (
                        <div key={j} className="flex gap-2 mt-2">
                          <span className="text-gold-500 mt-1">•</span>
                          <span>
                            <strong className="text-navy-700">{bold}:</strong>
                            {rest.join(":")}
                          </span>
                        </div>
                      );
                    }
                    if (line.startsWith("- "))
                      return (
                        <div key={j} className="flex gap-2 mt-2">
                          <span className="text-gold-500 mt-1">•</span>
                          <span>{line.slice(2)}</span>
                        </div>
                      );
                    if (line.startsWith("**") && line.endsWith("**"))
                      return (
                        <p key={j} className="font-semibold text-navy-800 mt-3">
                          {line.slice(2, -2)}
                        </p>
                      );
                    return line ? (
                      <p key={j} className="mt-2">
                        {line}
                      </p>
                    ) : null;
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
