/**
 * Reusable SEO component.
 * Wraps react-helmet-async's Helmet with all required meta tags for Google ranking:
 * - Standard meta (title, description, keywords, canonical)
 * - Open Graph (Facebook, WhatsApp, LinkedIn previews)
 * - Twitter Card
 * - JSON-LD Structured Data (auto-injects business schema on every page)
 */

import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.tanisiimpex.com';
const BRAND = 'Tanisi Impex';
const DEFAULT_IMAGE = `${BASE_URL}/images/og-cover.jpg`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tanisi Impex",
  "alternateName": "Tanisii Impex",
  "url": BASE_URL,
  "logo": `${BASE_URL}/images/logo.png`,
  "description": "Tanisi Impex is a leading Indian export company based in Mira Road, Mumbai, specializing in premium Basmati rice, spices, fresh vegetables, fruits, FMCG products, and organic goods. Trusted by B2B buyers in 30+ countries.",
  "foundingDate": "2009",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1403, A Wing, Vasudev Paradise, Kanakia Road, Near Unique Garden",
    "addressLocality": "Mira Road",
    "addressRegion": "Maharashtra",
    "postalCode": "401107",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-91521-21077",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi", "Arabic"]
    }
  ],
  "sameAs": [
    "https://wa.me/919152121077"
  ],
  "knowsAbout": [
    "Basmati Rice Export", "Indian Spices Export", "Agricultural Commodity Export",
    "FMCG Export from India", "Organic Products Export"
  ]
};

export default function SEO({
  title,
  description,
  keywords = '',
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema = null,
}) {
  const fullTitle = title ? `${title} | ${BRAND}` : `${BRAND} — Premium Indian Export Company`;
  const canonical = `${BASE_URL}${path}`;

  const defaultKeywords = `Indian exporter, export from India, basmati rice exporter, Indian spices exporter, agricultural export India, FMCG export India, Mira Road Mumbai exporter, B2B import from India, ISO certified Indian exporter, APEDA registered exporter`;
  const allKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content={BRAND} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── JSON-LD: Organization (every page) ── */}
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>

      {/* ── JSON-LD: Page-specific schema ── */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
