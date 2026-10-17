import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, MapPin, CheckCircle2, ArrowRight, ArrowLeft, 
  ChevronRight, Quote, PhoneCall, Check, Award, HelpCircle, ChevronDown
} from 'lucide-react';
import Container from '../components/ui/Container';
import { CASE_STUDIES } from '../data/caseStudies';
import SEOHead from '../components/SEOHead';

// Helper to render inline markdown: bold, italic, and links cleanly without asterisks
function renderInlineMarkdown(rawText) {
  if (!rawText) return null;
  const tokens = [];
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(rawText)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(rawText.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('[') && token.includes('](')) {
      const linkText = token.substring(1, token.indexOf(']('));
      const linkUrl = token.substring(token.indexOf('](') + 2, token.length - 1);
      if (linkUrl.startsWith('/') && !linkUrl.includes('#')) {
        tokens.push(
          <Link key={match.index} to={linkUrl} className="text-cyan-800 font-bold hover:underline">
            {linkText}
          </Link>
        );
      } else {
        tokens.push(
          <a key={match.index} href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-800 font-bold hover:underline">
            {linkText}
          </a>
        );
      }
    } else if (token.startsWith('**') && token.endsWith('**')) {
      tokens.push(
        <strong key={match.index} className="font-extrabold text-gray-900">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      tokens.push(
        <em key={match.index} className="italic text-gray-800">
          {token.slice(1, -1)}
        </em>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < rawText.length) {
    tokens.push(rawText.substring(lastIndex));
  }
  return tokens.length > 0 ? tokens : rawText;
}

// Parses numbered solution items (e.g. 1. **Title:**\n Description)
function parseSolution(raw) {
  if (!raw) return { intro: '', items: [] };
  const lines = raw.trim().split('\n');
  const intro = [];
  const items = [];
  let currentItem = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const numMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      if (currentItem) items.push(currentItem);
      let title = numMatch[2].trim();
      if (title.startsWith('**') && title.endsWith('**')) {
        title = title.slice(2, -2).trim();
      }
      currentItem = { number: numMatch[1], title, bodyLines: [] };
    } else if (currentItem) {
      currentItem.bodyLines.push(line);
    } else {
      intro.push(line);
    }
  }
  if (currentItem) items.push(currentItem);

  return {
    intro: intro.join(' '),
    items: items.map(it => ({
      number: it.number,
      title: it.title,
      body: it.bodyLines.join(' ')
    }))
  };
}

// Parses bulleted outcome items (e.g. - **Metric:** Description)
function parseResults(raw) {
  if (!raw) return { intro: '', items: [] };
  const lines = raw.trim().split('\n');
  const intro = [];
  const items = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith('- ') || line.startsWith('* ')) {
      items.push(line.replace(/^[-*]\s+/, '').trim());
    } else if (items.length === 0) {
      intro.push(line);
    } else {
      items[items.length - 1] += ' ' + line;
    }
  }

  return {
    intro: intro.join(' '),
    items
  };
}

export default function CaseStudyDetailPage({ onOpenBooking }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  const study = CASE_STUDIES.find((s) => s.slug === slug || s.legacySlug === slug);

  if (!study) {
    navigate('/casestudy', { replace: true });
    return null;
  }

  // Schema.org JSON-LD Rich Snippet Data (Article, Breadcrumbs, FAQs, Reviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://www.mivizhub.online/casestudy/${study.slug}/#article`,
        "headline": study.headline,
        "description": study.metaDescription || study.summary,
        "datePublished": "2026-10-12T08:00:00+00:00",
        "dateModified": "2026-10-16T12:00:00+00:00",
        "author": {
          "@type": "Person",
          "name": "Rahul Lohar",
          "jobTitle": "Founder & Automation Strategist",
          "url": "https://www.mivizhub.online"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MivizHub",
          "url": "https://www.mivizhub.online",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.mivizhub.online/logo-256.png"
          }
        },
        "about": {
          "@type": "Organization",
          "name": study.clientName
        },
        "keywords": (study.targetKeywords || [study.industry, "case study", "MivizHub results"]).join(", "),
        "mainEntityOfPage": `https://www.mivizhub.online/casestudy/${study.slug}`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mivizhub.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://www.mivizhub.online/casestudy"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": study.clientName,
            "item": `https://www.mivizhub.online/casestudy/${study.slug}`
          }
        ]
      },
      ...(study.faq && study.faq.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": study.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }] : []),
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": `MivizHub ${study.badge}`,
          "provider": {
            "@type": "Organization",
            "name": "MivizHub"
          }
        },
        "author": {
          "@type": "Person",
          "name": study.quote.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": study.quote.text
      }
    ]
  };

  return (
    <article className="bg-white text-gray-900 min-h-screen pt-24 sm:pt-28 pb-20">
      <SEOHead
        title={study.seoTitle || `${study.clientName} Case Study | MivizHub Results`}
        description={study.metaDescription || study.summary}
        keywords={study.targetKeywords || [study.industry, study.clientName, "case study", "MivizHub results"]}
        canonicalUrl={`https://www.mivizhub.online/casestudy/${study.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <Container className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/casestudy" className="hover:text-gray-900 transition-colors">Client Results</Link>
          <ChevronRight size={14} />
          <span className="text-gray-800 font-semibold truncate max-w-[200px] sm:max-w-xs">{study.clientName}</span>
        </nav>

        {/* Case Study Header */}
        <header className="mb-10 pb-8 border-b-2 border-gray-200">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded bg-gray-100 text-gray-900 border border-gray-300 flex items-center gap-1.5">
              <Building2 size={14} /> {study.industry}
            </span>
            <span className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-900 border border-cyan-200">
              {study.badge}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 font-medium">
              <MapPin size={13} /> {study.location}
            </span>
            {study.privacyNote && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                🔒 Client Anonymized for Privacy
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {study.headline}
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
            {study.summary}
          </p>
        </header>

        {/* Key Results Numbers Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 p-5 sm:p-7 bg-gradient-to-b from-[#f8fafc] to-white border-2 border-gray-300/80 rounded-2xl mb-8 shadow-sm">
          {study.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="text-center p-3 rounded-xl bg-white/70 border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow"
            >
              <span className={`text-2xl sm:text-3xl font-black block mb-1 tracking-tight ${stat.highlight ? "text-emerald-700" : "text-gray-900"}`}>
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-600 font-semibold block leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Service Plan & Transparent Investment Context */}
        {study.planTier && (
          <div className="mb-10 bg-gradient-to-r from-cyan-50/80 via-white to-sky-50/80 border-2 border-cyan-300 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-cyan-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 block mb-1">
                  MivizHub Service Package Deployed:
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 block">
                  {study.planTier.name}
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  Pricing: <strong className="text-gray-900">{study.planTier.price}</strong> • {study.planTier.billingCadence || "Flat Monthly • Cancel Anytime"}
                </span>
              </div>
              <Link
                to="/growth"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan-900 bg-cyan-100 hover:bg-cyan-200 border border-cyan-300 px-4 py-2.5 rounded-xl transition-all shadow-sm self-start sm:self-auto shrink-0"
              >
                <span>Compare Plans on /growth</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 text-left">
              <div className="bg-white/80 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">Client Investment</span>
                <span className="text-base sm:text-lg font-extrabold text-gray-900 block">{study.planTier.totalInvestment || study.planTier.price}</span>
                <span className="text-xs text-gray-500 mt-1 block">Predictable flat fee, zero hidden costs</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">Market Alternative Cost</span>
                <span className="text-base sm:text-lg font-extrabold text-rose-700 block">{study.planTier.marketAlternative}</span>
                <span className="text-xs text-gray-500 mt-1 block">Traditional agency / in-house payroll</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">Measured Return on Spend</span>
                <span className="text-base sm:text-lg font-extrabold text-emerald-700 block">{study.planTier.roiMultiple}</span>
                <span className="text-xs text-gray-500 mt-1 block">Directly attributed business revenue</span>
              </div>
            </div>

            {study.planTier.planFeatures && (
              <div className="mt-5 pt-4 border-t border-cyan-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                  Key Plan Inclusions Utilized:
                </span>
                <div className="flex flex-wrap gap-2">
                  {study.planTier.planFeatures.map((feat, fIdx) => (
                    <span key={fIdx} className="text-xs font-semibold bg-white text-gray-800 px-3 py-1 rounded-md border border-cyan-200 flex items-center gap-1.5 shadow-2xs">
                      <CheckCircle2 size={13} className="text-cyan-700" /> {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Executive Summary Takeaways (Featured Snippet Optimized) */}
        {study.keyTakeaways && (
          <div className="mb-12 bg-white border-2 border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-emerald-900 font-extrabold text-lg sm:text-xl">
              <CheckCircle2 size={24} className="text-emerald-700" />
              <span>Key Implementation Outcomes:</span>
            </div>
            <ul className="space-y-3">
              {study.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3 text-base sm:text-lg text-gray-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-2.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content Sections */}
        <div className="space-y-10">
          
          {/* 1. The Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-rose-50/50 border-2 border-rose-200 rounded-2xl p-6 sm:p-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-rose-900 block mb-2">
              The Problem Before MivizHub
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Where The Business Was Losing Money & Time
            </h2>
            <div className="text-gray-800 leading-relaxed text-base sm:text-lg space-y-4 font-normal">
              {study.theChallenge
                .trim()
                .split(/\n\s*\n/)
                .map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {renderInlineMarkdown(paragraph.replace(/\n/g, ' ').trim())}
                  </p>
                ))}
            </div>
          </motion.section>

          {/* 2. The Solution */}
          {(() => {
            const { intro, items } = parseSolution(study.theSolution);
            return (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="bg-cyan-50/40 border-2 border-cyan-200 rounded-2xl p-6 sm:p-8"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-900 block mb-2">
                  The Plan & Setup
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How MivizHub Solved The Issue
                </h2>
                {intro && (
                  <p className="text-gray-800 leading-relaxed text-base sm:text-lg mb-6 font-normal">
                    {renderInlineMarkdown(intro)}
                  </p>
                )}
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <div key={idx} className="bg-white/90 border border-cyan-200/90 rounded-xl p-4 sm:p-5 shadow-2xs">
                      <div className="flex items-start gap-3.5">
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-700 text-white font-extrabold text-sm shrink-0 mt-0.5 shadow-xs">
                          {item.number}
                        </span>
                        <div className="flex-1 space-y-1">
                          <h3 className="font-extrabold text-gray-900 text-base sm:text-lg">
                            {renderInlineMarkdown(item.title)}
                          </h3>
                          {item.body && (
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                              {renderInlineMarkdown(item.body)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            );
          })()}

          {/* 3. The Results */}
          {(() => {
            const { intro, items } = parseResults(study.theResults);
            return (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="bg-emerald-50/40 border-2 border-emerald-200 rounded-2xl p-6 sm:p-8"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-2">
                  The Measured Results
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What Happened After Deployment
                </h2>
                {intro && (
                  <p className="text-gray-900 font-bold text-base sm:text-lg mb-4">
                    {renderInlineMarkdown(intro)}
                  </p>
                )}
                <div className="space-y-3.5">
                  {items.map((itemText, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/90 border border-emerald-200/90 rounded-xl p-4 shadow-2xs">
                      <CheckCircle2 size={20} className="text-emerald-700 shrink-0 mt-0.5" />
                      <div className="text-sm sm:text-base text-gray-800 leading-relaxed flex-1 font-normal">
                        {renderInlineMarkdown(itemText)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            );
          })()}

          {/* Client Testimonial Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-6 sm:p-8"
          >
            <Quote className="text-gray-400 mb-3" size={32} />
            <p className="text-base sm:text-lg text-gray-900 font-medium italic leading-relaxed mb-4">
              "{study.quote.text}"
            </p>
            <div>
              <div className="text-base font-bold text-gray-900">{study.quote.author}</div>
              <div className="text-sm text-cyan-800 font-semibold">{study.quote.role}</div>
            </div>
          </motion.div>

          {/* Active Capabilities Box */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Tools & Setup Put In Place For This Client:
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.technologiesUsed.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-gray-100 border border-gray-300 text-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium"
                >
                  <CheckCircle2 size={16} className="text-emerald-700" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions (FAQ Accordion with JSON-LD Schema) */}
        {study.faq && study.faq.length > 0 && (
          <section className="mt-14 pt-10 border-t-2 border-gray-200">
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle className="text-cyan-800" size={26} />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {study.faq.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left font-bold text-base sm:text-lg text-gray-900 hover:bg-gray-50 flex items-center justify-between gap-4 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-cyan-800" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-[#f8fafc]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Call to Action Box */}
        <div className="mt-16 bg-[#f8fafc] border-2 border-gray-300 rounded-2xl p-8 sm:p-10 text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Want Similar Results For Your Business?
            </h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              We set up custom phone handling and growth campaigns in under 72 hours. Let's look at your numbers together on a short 30-minute call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} /> Schedule a Free 30-Min Call
              </button>
              <Link
                to="/casestudy"
                className="text-base font-semibold text-gray-800 hover:text-black px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                View More Client Stories →
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </article>
  );
}
