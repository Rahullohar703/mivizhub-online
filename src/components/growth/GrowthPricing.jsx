import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { 
  Check, Info, ArrowRight, Sparkles, ShieldCheck, Zap, 
  Globe, FileText, Share2, Target, BarChart3, MessageSquare, Bot 
} from 'lucide-react';
import { ArrowFillButton } from '../ui/arrow-fill-button';

const TOOLTIP_DETAILS = {
  // Presence
  "Professional Website / Landing Page": "Conversion-focused structure, messaging, responsive design and clear paths for visitors to take action.",
  "Google Business Profile": "Profile setup and optimization designed to strengthen local visibility, credibility and customer discovery.",
  "GSC + GA4 Setup": "Track search visibility, website traffic, user behavior and key conversion actions from the start.",
  "Lead Capture & Contact Forms": "Clean, high-converting forms engineered to convert visitors into direct phone, email, and inquiry leads.",
  "Technical SEO Foundation": "Essential indexing, metadata, sitemap, robots, site structure and technical SEO setup.",
  "Keyword & Topic Research": "Identify relevant search opportunities based on your market, audience, competitors and customer intent.",
  "2–3 SEO Articles / month": "Search-intent, keyword and competitor-informed content designed to build your organic search footprint.",
  "On-Page SEO": "Optimized meta tags, heading hierarchy, image alts, and semantic markup for every page.",
  "4 Strategic Social Posts / month": "Content developed around your audience, positioning, niche, competitors and relevant industry conversations.",
  "LinkedIn + Instagram + Facebook": "Targeted distribution tailored for the platforms where your prospective buyers spend their time.",
  "Content Scheduling": "Full hands-off management so content posts reliably without manual effort.",

  // Growth
  "Competitor & Market Research": "Analyze competitors, positioning, content, offers and market gaps to identify opportunities.",
  "Monthly Growth Strategy": "A monthly plan connecting content, SEO, social and paid acquisition around measurable objectives.",
  "4–6 SEO Articles / month": "Topical authority and search-intent articles designed to rank for commercial buying queries.",
  "8–12 Strategic Social Posts / month": "High-cadence content covering thought leadership, client education, and case studies.",
  "Google & Meta Ads": "Campaign strategy, setup, targeting, tracking and ongoing optimization across relevant paid channels.",
  "Conversion Landing Pages": "Dedicated high-converting pages built specifically to turn paid ad traffic into scheduled calls.",
  "Lead Tracking & Attribution": "End-to-end attribution showing exactly which ad and keyword produced each customer inquiry.",
  "Follow-Up Automation": "Automated responses and follow-ups designed to reduce missed opportunities and keep prospects engaged.",
};

function FeatureBullet({ label, activeTooltip, onToggleTooltip }) {
  const tooltipText = TOOLTIP_DETAILS[label];
  const isTooltipOpen = activeTooltip === label;

  return (
    <li className="flex items-start justify-between gap-2 text-xs sm:text-sm text-gray-200 group/item relative">
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
    <Section id="pricing" className="py-24 bg-gradient-to-b from-[#0b0e18] via-[#0f182c] to-[#090c14] border-b border-white/10 relative overflow-hidden">
      {/* Background radial spotlight over Growth plan (hardware-accelerated, zero blur overhead) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(49,192,222,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#31c0de] block mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Two Clear Plans. Zero Long Contracts.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Choose the phase that fits your business today. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* PLAN 1: $250/mo Presence */}
          <div className="bg-[#11131a] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all relative">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1 rounded border border-[#38bdf8]/20">
                  Foundation Plan
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  Establish Credibility
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white">
                  $250
                </span>
                <span className="text-gray-400 text-base font-semibold">/ month</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Presence
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-normal">
                Build your digital foundation so your business looks credible, ranks on Google, and gets found locally.
              </p>

              {/* Tangible Visual Deliverable Highlights */}
              <div className="grid grid-cols-2 gap-2.5 p-4 rounded-2xl bg-[#090b10] border border-white/10 mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Globe className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                  <span>Custom Website</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                  <span>Google Profile</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <FileText className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                  <span>2–3 SEO Articles/mo</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Share2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                  <span>4 Social Posts/mo</span>
                </div>
              </div>

              {/* Core Feature Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  WHAT'S INCLUDED:
                </div>
                <ul className="space-y-2.5">
                  <FeatureBullet label="Professional Website / Landing Page" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Google Business Profile" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Technical SEO Foundation" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="GSC + GA4 Setup" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Lead Capture & Contact Forms" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Keyword & Topic Research" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="2–3 SEO Articles / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="On-Page SEO" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="4 Strategic Social Posts / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="LinkedIn + Instagram + Facebook" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Content Scheduling" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                </ul>
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="pt-6 border-t border-white/10">
              <ArrowFillButton
                btnText="Build My Presence"
                onClick={() => onOpenBooking('Presence ($250/mo)')}
                size="lg"
                variant="secondary"
                className="w-full justify-center"
              />
              <p className="text-center text-xs text-gray-400 mt-3 font-medium">
                Best for businesses establishing their online footprint.
              </p>
            </div>
          </div>

          {/* PLAN 2: $500/mo Growth (MOST POPULAR) */}
          <div className="relative bg-[#10141e] border-2 border-[#31c0de] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_12px_50px_rgba(49,192,222,0.18)] transition-all">
            
            {/* Popular Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#31c0de] text-[#09090b] text-xs font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MOST POPULAR • FULL ENGINE</span>
              </span>
            </div>

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded border border-[#31c0de]/20">
                  Accelerator Plan
                </span>
                <span className="text-xs font-semibold text-[#31c0de]">
                  Active Customer Pipeline
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white">
                  $500
                </span>
                <span className="text-gray-400 text-base font-semibold">/ month</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Growth
              </h3>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6 font-normal">
                Turn your digital presence into an active client acquisition engine with paid ads, aggressive content, and lead generation.
              </p>

              {/* Tangible Visual Deliverables Highlight */}
              <div className="grid grid-cols-2 gap-2.5 p-4 rounded-2xl bg-[#090e18] border border-[#31c0de]/30 mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Zap className="w-4 h-4 text-[#31c0de] flex-shrink-0" />
                  <span>Everything in Presence</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Target className="w-4 h-4 text-[#31c0de] flex-shrink-0" />
                  <span>Google & Meta Ads</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <FileText className="w-4 h-4 text-[#31c0de] flex-shrink-0" />
                  <span>4–6 SEO Articles/mo</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Share2 className="w-4 h-4 text-[#31c0de] flex-shrink-0" />
                  <span>8–12 Social Posts/mo</span>
                </div>
              </div>

              {/* Core Feature Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#31c0de]">
                  GROWTH ENGINE ACCELERATORS:
                </div>
                <ul className="space-y-2.5">
                  <FeatureBullet label="Competitor & Market Research" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Monthly Growth Strategy" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="4–6 SEO Articles / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="8–12 Strategic Social Posts / month" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Google & Meta Ads" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Conversion Landing Pages" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Lead Tracking & Attribution" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                  <FeatureBullet label="Follow-Up Automation" activeTooltip={activeTooltip} onToggleTooltip={handleToggleTooltip} />
                </ul>
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="pt-6 border-t border-white/10">
              <ArrowFillButton
                btnText="Start Growing"
                onClick={() => onOpenBooking('Growth ($500/mo)')}
                size="lg"
                variant="primary"
                className="w-full justify-center shadow-xl shadow-cyan-500/30"
              />
              <p className="text-center text-xs text-[#31c0de] mt-3 font-semibold">
                Best for businesses ready to generate active customer inquiries.
              </p>
            </div>
          </div>

        </div>

        {/* Reassurance Guarantee Line */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sm text-gray-400 font-medium">
            No long contracts or hidden setup fees. Pause or cancel anytime with zero friction.
          </p>
        </div>

        {/* Transition Bridge to AI Workforce */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#12141e] border border-white/15 p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block mb-0.5 font-mono">
                BUILD → GROW → AUTOMATE
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                Need more than marketing?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Deploy 24/7 AI staff to answer calls and qualify leads instantly.
              </p>
            </div>
          </div>

          <ArrowFillButton
            btnText="Explore AI Workforce"
            href="/"
            size="default"
            variant="secondary"
            className="flex-shrink-0 border-white/15 hover:border-white/30"
          />
        </div>

      </Container>
    </Section>
  );
}
