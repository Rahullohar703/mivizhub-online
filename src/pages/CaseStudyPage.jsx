import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2, Building2, MapPin, PhoneCall, TrendingUp, Bot, Sparkles, Zap, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import { CASE_STUDIES, CASE_STUDY_CATEGORIES, CASE_STUDY_INDUSTRIES } from '../data/caseStudies';
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

export default function CaseStudyPage({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const filteredStudies = CASE_STUDIES.filter((study) => {
    const matchesCategory =
      selectedCategory === "All Services" ||
      study.serviceCategory === selectedCategory;
    const matchesIndustry =
      selectedIndustry === "All Industries" ||
      study.industry === selectedIndustry;
    return matchesCategory && matchesIndustry;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "MivizHub Client Case Studies & Verified Results",
    "description": "Real business outcomes and ROI case studies from small businesses using MivizHub marketing and AI staffing.",
    "url": "https://www.mivizhub.online/casestudy"
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 sm:pt-28 pb-20">
      <SEOHead
        title="Client Case Studies & Verified Results | MivizHub"
        description="See real results from business owners who grew local search rankings, cut cost-per-lead, eliminated missed calls, and scaled revenue with MivizHub."
        keywords={["client case studies", "marketing growth case study", "small business AI results", "SEO case study India", "business growth results"]}
        canonicalUrl="https://www.mivizhub.online/casestudy"
        ogType="website"
        jsonLd={jsonLd}
      />

      {/* Header Section */}
      <div className="bg-[#f8fafc] border-b border-gray-200 py-12 sm:py-16">
        <Container className="max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Award size={16} className="text-emerald-700" />
            Verified Client Outcomes & Numbers
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Real Results for Real Businesses
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore verified case studies across search visibility, website conversion, customer acquisition, and 24/7 AI staff automation.
          </p>

          {/* Primary Solution Tabs: Marketing & Growth vs AI Staffing */}
          <div className="relative max-w-full mb-8">
            <div className="inline-flex p-1.5 bg-gray-200/80 rounded-2xl max-w-full overflow-x-auto no-scrollbar border border-gray-300">
              {CASE_STUDY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-shrink-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-gray-900 text-white shadow-md"
                        : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
                    }`}
                  >
                    {cat === "Marketing & Growth" && <TrendingUp size={15} className={isActive ? "text-cyan-300" : "text-gray-500"} />}
                    {cat === "AI Staffing & Automation" && <Bot size={15} className={isActive ? "text-cyan-300" : "text-gray-500"} />}
                    {cat === "All Services" && <Sparkles size={15} className={isActive ? "text-cyan-300" : "text-gray-500"} />}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Aggregate Stat Bar - Clean, White Cards with Strong Contrast */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 block mb-0.5">Top 3</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Google Maps Pack</span>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 block mb-0.5">-69%</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Paid Cost-Per-Lead</span>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-800 block mb-0.5">+38%</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Booked Consultations</span>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 block mb-0.5">&lt; 45s</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Inbound Response Time</span>
            </div>
          </div>

          {/* Industry Filter Buttons - Mobile Horizontal Scroll with Edge Fades & Desktop Wrap */}
          <div className="relative max-w-full pt-1">
            {/* Subtle edge fade overlays on mobile */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 sm:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 sm:hidden" />

            {/* Micro swipe hint for mobile */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-500 mb-2 sm:hidden">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-700 animate-pulse" />
              <span>Swipe to filter by industry</span>
            </div>

            <div className="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-0 sm:flex-wrap py-1.5 snap-x">
              {CASE_STUDY_INDUSTRIES.map((industry) => {
                const isActive = selectedIndustry === industry;
                return (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`flex-shrink-0 snap-center whitespace-nowrap text-xs sm:text-sm px-4 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-cyan-800 text-white shadow-md shadow-cyan-900/20 scale-[1.02]"
                        : "bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 shadow-2xs hover:border-gray-400"
                    }`}
                  >
                    {industry}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* Case Studies List */}
      <Container className="max-w-5xl mt-12 sm:mt-16">
        <div className="space-y-8 sm:space-y-10">
          {filteredStudies.map((study) => {
            const highlightStat = study.stats.find((s) => s.highlight) || study.stats[0];
            const roiBadge = study.planTier?.roiMultiple 
              ? study.planTier.roiMultiple.split(' ')[0] + " ROI"
              : highlightStat.value;

            return (
              <Link
                key={study.id}
                to={`/casestudy/${study.slug}`}
                className="group relative block bg-white border-2 border-gray-200 hover:border-gray-900 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/5 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                {/* Top Subtle Gradient Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:via-emerald-500 group-hover:to-cyan-600 transition-all duration-300" />

                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-md bg-gray-900 text-white">
                      {study.serviceCategory || "Growth Service"}
                    </span>
                    {study.planTier && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-100 text-cyan-900 border border-cyan-300/80 flex items-center gap-1">
                        <Zap size={12} className="text-cyan-700 fill-cyan-700" />
                        {study.planTier.shortName} • {study.planTier.price.split(' ')[0]}
                      </span>
                    )}
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-1.5">
                      <Building2 size={13} className="text-gray-500" /> {study.industry}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                      <MapPin size={13} className="text-gray-400" /> {study.location}
                    </span>
                    {study.privacyNote && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                        🔒 Confidential
                      </span>
                    )}
                  </div>

                  {/* Primary Standout Outcome Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 font-extrabold text-xs sm:text-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                    <TrendingUp size={14} className="stroke-[2.5]" />
                    <span>{roiBadge}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Headline, Summary, Before/After & Quote */}
                  <div className="lg:col-span-8 space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors leading-snug">
                      {study.headline}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Before vs. With MivizHub Visual Contrast Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      <div className="bg-rose-50/70 p-3.5 sm:p-4 rounded-xl border border-rose-200/90">
                        <span className="text-rose-900 font-extrabold text-xs tracking-wider uppercase flex items-center gap-1 mb-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-rose-500" /> The Problem Before:
                        </span>
                        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed line-clamp-3 font-normal">
                          {renderInlineMarkdown(study.theChallenge.split('\n\n')[0].replace(/\n/g, ' ').trim())}
                        </p>
                      </div>

                      <div className="bg-emerald-50/70 p-3.5 sm:p-4 rounded-xl border border-emerald-200/90">
                        <span className="text-emerald-900 font-extrabold text-xs tracking-wider uppercase flex items-center gap-1 mb-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" /> With MivizHub:
                        </span>
                        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed line-clamp-3 font-normal">
                          {renderInlineMarkdown(study.theSolution.split('\n\n')[0].replace(/\n/g, ' ').trim())}
                        </p>
                      </div>
                    </div>

                    {/* Client Quote Strip */}
                    {study.quote && (
                      <div className="border-l-4 border-cyan-700 pl-3.5 py-1 text-xs sm:text-sm text-gray-700 bg-gray-50/80 rounded-r-lg">
                        <p className="italic">"{study.quote.text}"</p>
                        <span className="block not-italic text-xs font-bold text-gray-900 mt-1">
                          — {study.quote.author}, {study.quote.role}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Measured Results Scorecard */}
                  <div className="lg:col-span-4 bg-gray-50 border-2 border-gray-200/90 rounded-xl p-5 group-hover:border-gray-300 transition-colors">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Verified Results
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 size={11} /> Audited
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {study.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
                          <span className={`text-2xl sm:text-3xl font-black block tracking-tight ${stat.highlight ? "text-emerald-700" : "text-gray-900"}`}>
                            {stat.value}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-600 font-medium">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        Included Deliverables:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.technologiesUsed.slice(0, 3).map((tech, tIdx) => (
                          <span key={tIdx} className="text-xs bg-white text-gray-800 px-2.5 py-1 rounded border border-gray-300 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Action Footer Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-5 mt-6 border-t border-gray-100">
                  <span className="text-xs sm:text-sm font-medium text-gray-500 flex items-center gap-1.5">
                    <Clock size={14} className="text-gray-400" />
                    <span>4-min read • Full timeline, pricing &amp; implementation</span>
                  </span>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl bg-gray-900 text-white group-hover:bg-cyan-700 transition-all">
                    <span>Read Full Case Study</span>
                    <ArrowRight size={15} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* High-Converting CTA Box */}
        <div className="mt-20 bg-[#f8fafc] border-2 border-gray-300 rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800 block mb-2">
              Free Growth & Opportunity Audit
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Ready to Strengthen Your Business Presence?
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Let's look at your Google search visibility, website conversion, and customer response speed together on a free 30-minute consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} /> Schedule a Free 30-Min Call
              </button>
              <Link
                to="/growth"
                className="text-base font-semibold text-gray-800 hover:text-black px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Explore /growth Services →
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
