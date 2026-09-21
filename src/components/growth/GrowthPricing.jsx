import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Check, Info, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { ArrowFillButton } from '../ui/arrow-fill-button';

const TOOLTIP_DETAILS = {
  // Presence: Foundation
  "Professional Website / Landing Page": "Conversion-focused structure, messaging, responsive design and clear paths for visitors to take action.",
  "Google Business Profile": "Profile setup and optimization designed to strengthen local visibility, credibility and customer discovery.",
  "GSC + GA4 Setup": "Track search visibility, website traffic, user behavior and key conversion actions from the start.",
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
  "Niche & Competitor Research": "Research your niche and competitors to identify relevant topics, positioning opportunities and content gaps.",
  "Copy + Creative Direction": "Messaging and creative concepts aligned with your offer, audience and campaign objective.",
  "Content Scheduling": "Full hands-off management so content posts reliably without manual effort.",

  // Growth: Strategy & Research
  "Competitor & Market Research": "Analyze competitors, positioning, content, offers and market gaps to identify opportunities.",
  "Audience & Offer Analysis": "Understand who you're targeting, what they care about, and how your offer can be positioned effectively.",
  "Monthly Growth Strategy": "A monthly plan connecting content, SEO, social and paid acquisition around measurable objectives.",
  "Search & Content Opportunities": "Continuous discovery of emerging search terms and buyer questions in your vertical.",

  // Growth: Content Engine
  "4–6 SEO Articles / month": "Search-intent, keyword and competitor-informed content designed to build topical authority and capture relevant searches.",
  "8–12 Strategic Social Posts / month": "Content based on your niche, audience, positioning, competitors, industry trends and buying intent.",
  "Platform-Specific Content": "Adapt content to the format, audience and behavior of each relevant platform.",
  "Short-Form Content / Reels": "Short-form concepts designed around attention, education, credibility and engagement.",
  "LinkedIn Thought Leadership": "Industry-focused content designed to establish expertise and keep your brand visible to relevant decision-makers.",

  // Growth: Paid Acquisition
  "Google & Meta Ads": "Campaign strategy, setup, targeting, tracking and ongoing optimization across relevant paid channels.",
  "Campaign Setup & Management": "Build, launch, monitor and continuously optimize campaigns based on performance.",
  "Ad Copy & Creative Direction": "Messaging and creative concepts aligned with your offer, audience and campaign objective.",
  "Audience & Keyword Targeting": "Target relevant audiences and search intent based on your market and campaign goals.",
  "Landing Page Optimization": "Improve messaging, structure and calls-to-action to create a clearer path from click to inquiry.",

  // Growth: Lead Generation
  "Conversion Landing Pages": "Dedicated high-converting pages built specifically to turn paid ad traffic into scheduled calls.",
  "Lead Forms & WhatsApp": "Instant multi-channel capture allowing leads to connect via their preferred communication method.",
  "Lead Tracking": "End-to-end attribution showing exactly which ad and keyword produced each customer.",
  "Lead Qualification": "Capture key information and help distinguish relevant inquiries from low-intent leads.",
  "Follow-Up Automation": "Automated responses and follow-ups designed to reduce missed opportunities and keep prospects engaged.",
  "Retargeting": "Reconnect with relevant visitors and audiences who previously interacted with your business."
};

function FeatureItem({ label, activeTooltip, onToggleTooltip, hasTooltip = true }) {
  const tooltipText = TOOLTIP_DETAILS[label];
  const isTooltipOpen = activeTooltip === label;

  return (
    <li className="flex items-start justify-between gap-2 text-sm text-gray-200 group/item relative">
      <div className="flex items-start gap-2.5">
        <Check className="w-4 h-4 text-[#31c0de] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
        <span className="leading-snug">{label}</span>
      </div>

      {hasTooltip && tooltipText && (
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

          {/* Crisp, Lightweight Tooltip (Zero lag) */}
          {isTooltipOpen && (
            <div className="absolute right-0 bottom-full mb-2 w-64 sm:w-72 bg-[#1a1a24] border border-white/20 rounded-xl p-3.5 shadow-2xl text-xs text-gray-200 z-50 pointer-events-none">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#31c0de]" />
                <span>{label}</span>
              </div>
              <p className="text-gray-300 leading-relaxed font-normal">
                {tooltipText}
              </p>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default function GrowthPricing({ onOpenBooking }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleToggleTooltip = (name) => {
    setActiveTooltip(activeTooltip === name ? null : name);
  };

  return (
    <Section id="pricing" className="py-20 bg-[#0b0b0e] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Transparent Productized Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Choose Where Your Business Is Today.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Start by establishing your foundation, or build on it with an active customer acquisition system.
          </p>
        </div>

        {/* Two Pricing Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14 items-stretch">
          
          {/* CARD 1: $250/mo — Presence */}
          <div className="bg-[#121216] border border-white/10 hover:border-white/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl transition-colors">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold bg-white/5 px-3 py-1 rounded">
                  ESTABLISH
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  Digital Foundation
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold font-heading text-white">
                  $250
                </span>
                <span className="text-gray-400 text-base font-semibold">/ month</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Presence
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-2 font-normal">
                Establish a credible, search-ready digital presence built around your business and market.
              </p>

              <p className="text-xs text-gray-400 mb-8 leading-relaxed font-medium">
                Built around your niche, audience, positioning, and competitive landscape.
              </p>

              <div className="w-full h-px bg-white/10 mb-8" />

              {/* Feature Groups */}
              <div className="space-y-6 mb-8">
                
                {/* Group 1: Digital Foundation */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">
                    DIGITAL FOUNDATION
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="Professional Website / Landing Page" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Google Business Profile" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="GSC + GA4 Setup" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Lead Capture & Contact Forms" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Technical SEO Foundation" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  </ul>
                </div>

                {/* Group 2: Search & Content */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">
                    SEARCH & CONTENT
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="Keyword & Topic Research" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="2–3 SEO Articles / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="On-Page SEO" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Internal Linking & Content Structure" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  </ul>
                </div>

                {/* Group 3: Social Presence */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">
                    SOCIAL PRESENCE
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="4 Strategic Social Posts / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="LinkedIn + Instagram + Facebook" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Niche & Competitor Research" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Copy + Creative Direction" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Content Scheduling" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  </ul>
                </div>

                {/* Group 4: Optimization */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">
                    OPTIMIZATION
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="Website & Content Updates" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                    <FeatureItem label="SEO Monitoring" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                    <FeatureItem label="Monthly Performance Report" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                    <FeatureItem label="Next-Step Recommendations" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                  </ul>
                </div>

              </div>
            </div>

            {/* Card Footer / CTA */}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenBooking('Presence ($250/mo)')}
                className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] group shadow-md"
              >
                <span>Build My Presence</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-gray-400 mt-2.5 font-medium">
                Build your digital foundation.
              </p>
            </div>
          </div>

          {/* CARD 2: $500/mo — Growth (MOST POPULAR) */}
          <div className="relative bg-[#121216] border-2 border-[#31c0de] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_10px_40px_rgba(49,192,222,0.15)] transition-colors">
            
            {/* Most Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#31c0de] text-[#09090b] text-xs font-bold tracking-widest uppercase shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MOST POPULAR</span>
              </span>
            </div>

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#31c0de] font-bold bg-[#31c0de]/10 px-3 py-1 rounded border border-[#31c0de]/20">
                  ACCELERATE
                </span>
                <span className="text-xs font-semibold text-[#31c0de]">
                  Full Customer Engine
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold font-heading text-white">
                  $500
                </span>
                <span className="text-gray-400 text-base font-semibold">/ month</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Growth
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-2 font-normal">
                Turn your digital presence into a customer acquisition system.
              </p>

              <p className="text-xs text-[#31c0de] mb-8 leading-relaxed font-bold">
                Everything in Presence, plus an active strategy for attracting and converting opportunities.
              </p>

              <div className="w-full h-px bg-white/10 mb-8" />

              {/* Feature Groups */}
              <div className="space-y-6 mb-8">
                
                {/* Group 1: Strategy & Research */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#31c0de] font-bold mb-3">
                    STRATEGY & RESEARCH
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="Competitor & Market Research" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Audience & Offer Analysis" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Monthly Growth Strategy" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Search & Content Opportunities" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  </ul>
                </div>

                {/* Group 2: Content Engine */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#31c0de] font-bold mb-3">
                    CONTENT ENGINE
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="4–6 SEO Articles / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="8–12 Strategic Social Posts / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Platform-Specific Content" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Short-Form Content / Reels" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="LinkedIn Thought Leadership" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  </ul>
                </div>

                {/* Group 3: Paid Acquisition */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#31c0de] font-bold mb-3">
                    PAID ACQUISITION
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="Google & Meta Ads" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Campaign Setup & Management" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Ad Copy & Creative Direction" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Audience & Keyword Targeting" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Landing Page Optimization" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  </ul>
                </div>

                {/* Group 4: Lead Generation */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#31c0de] font-bold mb-3">
                    LEAD GENERATION
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="Conversion Landing Pages" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Lead Forms & WhatsApp" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Lead Tracking" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Lead Qualification" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Follow-Up Automation" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                    <FeatureItem label="Retargeting" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  </ul>
                </div>

                {/* Group 5: Growth Intelligence */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#31c0de] font-bold mb-3">
                    GROWTH INTELLIGENCE
                  </h4>
                  <ul className="space-y-2.5">
                    <FeatureItem label="Performance Analysis" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                    <FeatureItem label="Traffic & Search Insights" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                    <FeatureItem label="Campaign & Lead Metrics" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                    <FeatureItem label="Monthly Growth Recommendations" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} hasTooltip={false} />
                  </ul>
                </div>

              </div>
            </div>

            {/* Card Footer / CTA */}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenBooking('Growth ($500/mo)')}
                className="w-full py-4 px-6 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-base shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] group"
              >
                <span>Start Growing</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-[#31c0de] mt-2.5 font-bold">
                Turn visibility into opportunities.
              </p>
            </div>
          </div>

        </div>

        {/* Reassurance Line */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sm text-gray-400 font-medium">
            No long-term complexity. Start with the level your business needs and scale when you're ready.
          </p>
        </div>

        {/* Transition Bridge to AI Workforce */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#121216] border border-white/10 p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block mb-1">
              BUILD → GROW → AUTOMATE
            </span>
            <h3 className="text-xl font-bold text-white mb-1">
              Need more than marketing?
            </h3>
            <p className="text-sm text-gray-300">
              Automate what happens after the lead arrives.
            </p>
          </div>

          <ArrowFillButton
            btnText="Explore AI Workforce"
            href="/"
            bgColor="#1a1a24"
            textColor="#ffffff"
            fillBgColor="#31c0de"
            fillTextColor="#09090b"
            arrowColor="#09090b"
            hoverArrowColor="#09090b"
            className="flex-shrink-0 border-white/15 hover:border-white/30"
          />
        </div>

      </Container>
    </Section>
  );
}
