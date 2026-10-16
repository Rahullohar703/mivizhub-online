import { useEffect } from 'react';

/**
 * SEOHead - Dynamically updates document title, meta tags, OpenGraph,
 * canonical link, and JSON-LD structured data for 100% SEO rich metrics.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "article",
  jsonLd = null,
}) {
  useEffect(() => {
    // 1. Title tag
    if (title) {
      document.title = title;
    }

    // Helper to set or create meta tag
    const setMetaTag = (attribute, attributeValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('name', 'keywords', keywordsStr);
    }
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    if (canonicalUrl) {
      setMetaTag('property', 'og:url', canonicalUrl);
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 5. Canonical Link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // 6. JSON-LD Structured Data
    const SCRIPT_ID = 'seo-dynamic-json-ld';
    let scriptTag = document.getElementById(SCRIPT_ID);
    if (scriptTag) {
      scriptTag.remove();
    }

    if (jsonLd) {
      scriptTag = document.createElement('script');
      scriptTag.id = SCRIPT_ID;
      scriptTag.type = 'application/ld+json';
      scriptTag.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(scriptTag);
    }

    return () => {
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) existing.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogType, jsonLd]);

  return null;
}
