import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, Info, ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

// Comprehensive dictionary for all ⓘ tooltips
const TOOLTIP_DETAILS = {
  // Presence: Foundation
  "Professional Website / Landing Page": "Conversion-focused structure, messaging, responsive design and clear paths for visitors to take action.",
  "Google Business Profile": "Profile setup and optimization designed to strengthen local visibility, credibility and customer discovery.",
  "GSC + GA4 Setup": "Track search visibility, website traffic, user behavior and key conversion actions.",
  "Lead Capture & Contact Forms": "Clean, high-converting forms engineered to convert visitors into direct phone, email, and inquiry leads.",
  "Technical SEO Foundation": "Essential indexing, metadata, sitemap, robots, site structure and technical SEO setup.",
  
  // Presence: Search & Content
  "Keyword & Topic Research": "Identify relevant search opportunities based on your market, audience, competitors and customer intent.",
  "2–3 SEO Articles / month": "Search-intent, keyword and competitor-informed content designed to build your organic search footprint.",
  "On-Page SEO": "Optimized meta tags, heading hierarchy, image alts, and semantic markup for every page.",
  "Internal Linking & Content Structure": "Strategic architecture connecting topics together to boost search crawling and user flow.",
  
  // Presence: Social
  "4 Strategic Social Posts / month": "Content developed around your audience, positioning, niche, competitors and relevant industry conversations — not generic templates.",
  "LinkedIn + Instagram + Facebook": "Targeted distribution tailored for the platforms where your prospective buyers spend their time.",
  "Niche & Competitor Research": "In-depth audit of what top players in your space are saying and where the opportunities lie.",
  "Copy + Creative Direction": "Compelling hooks, professional tone, and visuals aligned with your brand standard.",
  "Content Scheduling": "Full hands-off management so content posts reliably without manual effort.",
  
  // Growth: Strategy & Research
  "Competitor & Market Research": "Analyze competitors, positioning, content, offers and market gaps to identify opportunities.",
  "Audience & Offer Analysis": "Understand who you are targeting, what they care about and how your offer can be positioned effectively.",
  "Monthly Growth Strategy": "A monthly plan connecting content, SEO, social and paid acquisition around measurable objectives.",
  "Search & Content Opportunities": "Continuous discovery of emerging search terms and buyer questions in your vertical.",
  
  // Growth: Content Engine
  "4–6 SEO Articles / month": "Search-intent, keyword and competitor-informed content designed to build topical authority and capture relevant searches.",
  "8–12 Strategic Social Posts / month": "Content based on your niche, audience, positioning, competitors, industry trends and buying intent.",
  "Platform-Specific Content": "Native formatting optimized for each channel's specific algorithm and consumption style.",
  "Short-Form Content / Reels": "Snappy, high-engagement video concepts and scripts built to build brand familiarity.",
  "LinkedIn Thought Leadership": "Authority-building executive posts highlighting your methodology, case studies, and insights.",
  
  // Growth: Paid Acquisition
  "Google & Meta Ads": "Campaign strategy, setup, targeting, tracking and ongoing optimization across relevant paid channels.",
  "Campaign Setup & Management": "Daily budget allocation, negative keyword pruning, and bid management for optimal ROI.",
  "Ad Copy & Creative Direction": "High-intent messaging designed to repel tire-kickers and attract ready-to-buy clients.",
  "Audience & Keyword Targeting": "Laser-focused buyer persona targeting, excluding wasted clicks and unqualified queries.",
  "Landing Page Optimization": "A/B tested headlines, CTA placements, and friction reduction to maximize conversions.",
  
  // Growth: Lead Generation
  "Conversion Landing Pages": "Dedicated high-converting pages built specifically to turn paid ad traffic into scheduled calls.",
  "Lead Forms & WhatsApp": "Instant multi-channel capture allowing leads to connect via their preferred communication method.",
  "Lead Tracking": "End-to-end attribution showing exactly which ad and keyword produced each customer.",
  "Lead Qualification": "Capture key information and help distinguish relevant inquiries from low-intent leads.",
  "Follow-Up Automation": "Automated responses and follow-ups designed to reduce missed opportunities and keep prospects engaged.",
  "Retargeting": "Reconnect with relevant visitors and audiences who previously interacted with your business."
};

// Interactive Deliverable Item with Smart Tooltip
function FeatureItem({ label, activeTooltip, onToggleTooltip }) {
  const tooltipText = TOOLTIP_DETAILS[label];
  const isTooltipOpen = activeTooltip === label;

  return (
    <li className="flex items-start justify-between gap-2 text-sm text-gray-200 group/item relative">
      <div className="flex items-start gap-2.5">
        <Check className="w-4 h-4 text-[#31c0de] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
        <span className="leading-snug">{label}</span>
      </div>

      {tooltipText && (
        <div className="relative flex-shrink-0">
          <button
            type="button"
            aria-label={`Details about ${label}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleTooltip(label);
            }}
            onMouseEnter={() => onToggleTooltip(label)}
            onMouseLeave={() => onToggleTooltip(null)}
            className="text-gray-400 hover:text-[#31c0de] transition-colors p-0.5 rounded-full hover:bg-white/10 focus:outline-none"
          >
            <Info className="w-3.5 h-3.5" />
          </button>

          {/* Polished Glass Tooltip */}
          <AnimatePresence>
            {isTooltipOpen && (
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 bottom-full mb-2 w-64 sm:w-72 bg-[#121624]/95 backdrop-blur-xl border border-white/20 rounded-xl p-3.5 shadow-2xl text-xs text-gray-200 z-50 pointer-events-none"
              >
                <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#31c0de]" />
                  <span>{label}</span>
                </div>
                <p className="text-gray-300 leading-relaxed font-normal">
                  {tooltipText}
                </p>
                {/* Micro tooltip arrow */}
                <div className="absolute right-3 top-full w-2 h-2 bg-[#121624] border-r border-b border-white/20 transform rotate-45 -translate-y-1" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </li>
  );
}

export default function SectionPricing({ onOpenBooking }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleToggleTooltip = (label) => {
    setActiveTooltip((prev) => (prev === label ? null : label));
  };

  // Close tooltips on outside container click
  const handleContainerClick = () => {
    if (activeTooltip) setActiveTooltip(null);
  };

  return (
    <Section id="pricing" className="py-24 bg-[#09090b] border-t border-white/10 relative overflow-hidden" onClick={handleContainerClick}>
      {/* Subtle top ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.08)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-3">
            Predictable Growth Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Start Where Your Business Is. Grow From There.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you’re establishing your digital presence or actively generating demand, Mivizhub builds the system around your business.
          </p>

          {/* Visual Progression Journey */}
          <div className="inline-flex items-center gap-2 sm:gap-4 mt-8 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-medium text-gray-300">
            <span className="text-[#31c0de] font-semibold">01 BUILD</span>
            <span className="text-gray-500">→</span>
            <span className="text-indigo-400 font-semibold">02 GROW</span>
            <span className="text-gray-500">→</span>
            <span className="text-purple-400 font-semibold">03 AUTOMATE</span>
          </div>
        </div>

        {/* The Two Primary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* ================= CARD 1: $250/mo — Presence ================= */}
          <div className="group bg-[#0e121a]/90 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-xl relative hover:-translate-y-1">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  ESTABLISH
                </span>
                <span className="text-xs text-gray-400 font-medium">Stage 01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Presence
              </h3>

              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$250</span>
                <span className="text-gray-400 text-base font-medium">/month</span>
              </div>

              <p className="text-sm sm:text-base text-gray-300 mb-2 leading-relaxed font-medium">
                Establish a credible, search-ready digital presence built around your business and market.
              </p>

              <p className="text-xs text-gray-400 mb-8 pb-6 border-b border-white/10">
                Built around your niche, audience, positioning and competitive landscape.
              </p>

              {/* Deliverable Categories */}
              <div className="space-y-6 mb-10">
                
                {/* 1. Digital Foundation */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Digital Foundation
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Professional Website / Landing Page",
                      "Google Business Profile",
                      "GSC + GA4 Setup",
                      "Lead Capture & Contact Forms",
                      "Technical SEO Foundation"
                    ].map((item) => (
                      <FeatureItem
                        key={item}
                        label={item}
                        activeTooltip={activeTooltip}
                        onToggleTooltip={handleToggleTooltip}
                      />
                    ))}
                  </ul>
                </div>

                {/* 2. Search & Content */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Search & Content
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Keyword & Topic Research",
                      "2–3 SEO Articles / month",
                      "On-Page SEO",
                      "Internal Linking & Content Structure"
                    ].map((item) => (
                      <FeatureItem
                        key={item}
                        label={item}
                        activeTooltip={activeTooltip}
                        onToggleTooltip={handleToggleTooltip}
                      />
                    ))}
                  </ul>
                </div>

                {/* 3. Social Presence */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Social Presence
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "4 Strategic Social Posts / month",
                      "LinkedIn + Instagram + Facebook",
                      "Niche & Competitor Research",
                      "Copy + Creative Direction",
                      "Content Scheduling"
                    ].map((item) => (
                      <FeatureItem
                        key={item}
                        label={item}
                        activeTooltip={activeTooltip}
                        onToggleTooltip={handleToggleTooltip}
                      />
                    ))}
                  </ul>
                </div>

                {/* 4. Optimization */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Optimization
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Website & Content Updates",
                      "SEO Monitoring",
                      "Monthly Performance Report",
                      "Next-Step Recommendations"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-200">
                        <Check className="w-4 h-4 text-[#31c0de] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Card 1 CTA */}
            <div className="pt-6 border-t border-white/10 text-center">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 transition-all duration-200 shadow-md flex items-center justify-center gap-2 group/btn"
              >
                <span>Build My Presence</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-400 mt-3 font-medium">
                Start building your digital foundation.
              </p>
            </div>
          </div>


          {/* ================= CARD 2: $500/mo — Growth (Featured) ================= */}
          <div className="group bg-[#111625]/95 backdrop-blur-xl border border-[#31c0de]/40 hover:border-[#31c0de]/80 rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-2xl relative hover:-translate-y-1">
            {/* Ambient card glow */}
            <div className="absolute top-0 right-0 left-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.18)_0%,transparent_70%)] pointer-events-none rounded-t-3xl" />

            <div className="relative z-10">
              {/* Header Info with Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded-full border border-[#31c0de]/30">
                  ACCELERATE
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#31c0de]/20 to-indigo-600/20 border border-[#31c0de]/40 text-[#31c0de] text-xs font-extrabold tracking-wide uppercase shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#31c0de]" />
                  <span>MOST POPULAR</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 flex items-center gap-2">
                <span>Growth</span>
              </h3>

              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$500</span>
                <span className="text-gray-400 text-base font-medium">/month</span>
              </div>

              <p className="text-sm sm:text-base text-gray-200 mb-2 leading-relaxed font-semibold">
                Turn your digital presence into a customer acquisition system.
              </p>

              <p className="text-xs text-[#31c0de] mb-8 pb-6 border-b border-white/10 font-medium">
                Everything in Presence, plus an active strategy for attracting and converting opportunities.
              </p>

              {/* Deliverable Categories */}
              <div className="space-y-6 mb-10">
                
                {/* 1. Strategy & Research */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#31c0de] mb-3">
                    Strategy & Research
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Competitor & Market Research",
                      "Audience & Offer Analysis",
                      "Monthly Growth Strategy",
                      "Search & Content Opportunities"
                    ].map((item) => (
                      <FeatureItem
                        key={item}
                        label={item}
                        activeTooltip={activeTooltip}
                        onToggleTooltip={handleToggleTooltip}
                      />
                    ))}
                  </ul>
                </div>

                {/* 2. Content Engine */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#31c0de] mb-3">
                    Content Engine
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "4–6 SEO Articles / month",
                      "8–12 Strategic Social Posts / month",
                      "Platform-Specific Content",
                      "Short-Form Content / Reels",
                      "LinkedIn Thought Leadership"
                    ].map((item) => (
                      <FeatureItem
                        key={item}
                        label={item}
                        activeTooltip={activeTooltip}
                        onToggleTooltip={handleToggleTooltip}
                      />
                    ))}
                  </ul>
                </div>

                {/* 3. Paid Acquisition */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#31c0de] mb-3">
                    Paid Acquisition
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Google & Meta Ads",
                      "Campaign Setup & Management",
                      "Ad Copy & Creative Direction",
                      "Audience & Keyword Targeting",
                      "Landing Page Optimization"
                    ].map((item) => (
                      <FeatureItem
                        key={item}
                        label={item}
                        activeTooltip={activeTooltip}
                        onToggleTooltip={handleToggleTooltip}
                      />
                    ))}
                  </ul>
                </div>

                {/* 4. Lead Generation */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#31c0de] mb-3">
                    Lead Generation
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Conversion Landing Pages",
                      "Lead Forms & WhatsApp",
                      "Lead Tracking",
                      "Lead Qualification",
                      "Follow-Up Automation",
                      "Retargeting"
                    ].map((item) => (
                      <FeatureItem
                        key={item}
                        label={item}
                        activeTooltip={activeTooltip}
                        onToggleTooltip={handleToggleTooltip}
                      />
                    ))}
                  </ul>
                </div>

                {/* 5. Growth Intelligence */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#31c0de] mb-3">
                    Growth Intelligence
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Performance Analysis",
                      "Traffic & Search Insights",
                      "Campaign & Lead Metrics",
                      "Monthly Growth Recommendations"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-200">
                        <Check className="w-4 h-4 text-[#31c0de] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Card 2 CTA */}
            <div className="pt-6 border-t border-white/10 text-center relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-xl shadow-indigo-600/35 transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:scale-[1.01]"
              >
                <span>Start Growing</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-300 mt-3 font-medium">
                Turn visibility into opportunities.
              </p>
            </div>
          </div>

        </div>

        {/* Subtle Reassurance Microcopy */}
        <div className="text-center mt-12 mb-16">
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            No long-term complexity. Start with the level your business needs and scale when you’re ready.
          </p>
        </div>

        {/* Next Stage Bridge: Build -> Grow -> Automate */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#121624] to-[#0c0e17] border border-white/10 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-purple-400 mb-4">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>Phase 03: The AI Workforce</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Need more than marketing?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl mx-auto">
            Automate what happens after the lead arrives. 24/7 AI Receptionists and digital staff that answer calls in 1 ring and book appointments.
          </p>

          <a
            href="#ai-staffing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all hover:scale-[1.02]"
          >
            <span>Explore AI Workforce</span>
            <ArrowRight className="w-4 h-4 text-[#31c0de]" />
          </a>
        </div>

      </Container>
    </Section>
  );
}
