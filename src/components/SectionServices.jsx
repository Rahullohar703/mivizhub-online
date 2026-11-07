import React, { useState } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, Info, ArrowRight, Sparkles, ShieldCheck, Zap, Phone, Bot, Target, Wrench } from 'lucide-react';
import { ArrowFillButton } from './ui/arrow-fill-button';

const OFFER_TOOLTIPS = {
  // AI Automation
  "24/7 AI Voice Dispatch": "Answers inbound calls in 1 ring with natural conversation, screening routine questions and emergency calls.",
  "Sub-60s Estimate Qualification": "Instant SMS and call follow-up for new web and ad leads to capture project scope, location, and budget.",
  "Automated Quote Follow-Up": "Multi-touch SMS and email sequences that nurture open estimates so high-value bids don't go cold.",
  "Jobber / Housecall / Procore Sync": "Automatically logs customer notes, leads, and job details directly into your field software and CRM.",
  "Subcontractor & Crew Reminders": "Automated text notifications for schedule updates, site arrivals, and job site reminders.",

  // Presence
  "Contractor Website / Landing Page": "Fast, high-converting design showcasing past work, licenses, insurance, and customer reviews.",
  "Google Maps & GBP #1 Rank Setup": "Local SEO architecture engineered to rank your business at the top of local Google Map Pack searches.",
  "Call & Form Lead Tracking": "Know exactly how many calls and form submissions your digital presence generates each month.",
  "2–3 Local SEO Articles / mo": "Search-intent content targeting specific commercial and residential contractor queries in your service area.",
  "4 Project Showcase Social Posts": "Professional project highlights and case studies posted reliably without manual effort.",

  // Growth
  "Targeted Google & Meta Ads": "High-intent search and social campaigns targeting local property owners actively seeking contractor bids.",
  "High-Converting Bid Landing Pages": "Dedicated pages built specifically to convert paid ad traffic into scheduled estimate requests.",
  "4–6 Commercial/Residential Articles": "Topical authority content targeting high-margin commercial bids and specialized construction projects.",
  "8–12 Strategic Social Posts / mo": "Jobsite video clips, client testimonials, and project breakdowns that establish dominant local authority.",
  "Speed-to-Lead Follow-Up Engine": "Automated multi-channel response sequences so you are always the first contractor to respond to a new bid request."
};

function FeatureBullet({ label, activeTooltip, onToggleTooltip }) {
  const tooltipText = OFFER_TOOLTIPS[label];
  const isTooltipOpen = activeTooltip === label;

  return (
    <li className="flex items-start justify-between gap-2 text-xs sm:text-sm text-gray-200 relative">
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
            <div className="absolute right-0 bottom-full mb-2 w-64 sm:w-72 bg-[#171b26] border border-white/20 rounded-xl p-3.5 shadow-2xl text-xs text-gray-200 z-50 pointer-events-none">
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

export default function SectionServices({ onOpenBooking }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleToggleTooltip = (label) => {
    setActiveTooltip((prev) => (prev === label ? null : label));
  };

  const handleContainerClick = () => {
    if (activeTooltip) setActiveTooltip(null);
  };

  return (
    <Section 
      id="offers" 
      className="py-24 scroll-mt-20 bg-gradient-to-b from-[#0c1222] via-[#090d18] to-[#0c101c] border-t border-white/10 relative overflow-hidden"
      onClick={handleContainerClick}
    >
      {/* Anchor alias so #services still smoothly scrolls here */}
      <div id="services" className="absolute -top-24" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.08)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            3 Core Solutions For Construction &amp; Field Ops
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Get High-Value Jobs. Automate Your Operations.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Pick the exact package your business needs today: automate field calls &amp; estimate follow-up, build dominant local presence, or scale with a full customer acquisition engine.
          </p>
        </div>

        {/* 3 Core Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 items-stretch">
          
          {/* ================= OFFER 1: AI Automation & Ops ================= */}
          <div className="bg-[#0f1422]/95 border border-white/10 hover:border-[#31c0de]/40 rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-xl relative hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded-full border border-[#31c0de]/20">
                  Operations &amp; Dispatch
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Field AI</span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Turnkey Managed</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                AI Automation &amp; Ops
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                Never miss high-paying jobs while tools are in hand. AI answers calls in 1 ring, qualifies job scope, and follows up on open estimates 24/7.
              </p>

              {/* Highlights Pill Box */}
              <div className="p-3.5 rounded-2xl bg-[#090c14] border border-white/10 mb-6 space-y-1.5 text-xs text-gray-300">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#31c0de] flex-shrink-0" />
                  <span>100% Inbound Calls Answered in 1 Ring</span>
                </div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <Bot className="w-3.5 h-3.5 text-[#31c0de] flex-shrink-0" />
                  <span>Instant &lt;60s Lead &amp; Quote Follow-Up</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  What's Included:
                </span>
                <ul className="space-y-2.5">
                  {[
                    "24/7 AI Voice Dispatch",
                    "Sub-60s Estimate Qualification",
                    "Automated Quote Follow-Up",
                    "Jobber / Housecall / Procore Sync",
                    "Subcontractor & Crew Reminders"
                  ].map((item) => (
                    <FeatureBullet 
                      key={item}
                      label={item}
                      activeTooltip={activeTooltip}
                      onToggleTooltip={handleToggleTooltip}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <button
                onClick={() => onOpenBooking ? onOpenBooking('AI Automation & Field Ops') : null}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>Deploy AI Automation</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-400 mt-2.5">
                We configure, train, and manage your AI systems hands-off.
              </p>
            </div>
          </div>

          {/* ================= OFFER 2: Presence Plan ($250/mo) ================= */}
          <div className="bg-[#0f1422]/95 border border-white/10 hover:border-sky-500/40 rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-xl relative hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  Foundation Plan
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Local SEO</span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$250</span>
                <span className="text-gray-400 text-sm font-semibold">/ month</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Presence Plan
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                Build local search authority so your business looks credible, ranks #1 on Google Maps, and captures homeowners searching for your trade.
              </p>

              {/* Highlights Pill Box */}
              <div className="p-3.5 rounded-2xl bg-[#090c14] border border-white/10 mb-6 space-y-1.5 text-xs text-gray-300">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  <span>Google Business Profile #1 Map Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <Wrench className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  <span>High-Converting Contractor Website</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  What's Included:
                </span>
                <ul className="space-y-2.5">
                  {[
                    "Contractor Website / Landing Page",
                    "Google Maps & GBP #1 Rank Setup",
                    "Call & Form Lead Tracking",
                    "2–3 Local SEO Articles / mo",
                    "4 Project Showcase Social Posts"
                  ].map((item) => (
                    <FeatureBullet 
                      key={item}
                      label={item}
                      activeTooltip={activeTooltip}
                      onToggleTooltip={handleToggleTooltip}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <button
                onClick={() => onOpenBooking ? onOpenBooking('Presence ($250/mo)') : null}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>Get Presence Plan</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-400 mt-2.5">
                Zero long contracts. Upgrade, downgrade, or cancel anytime.
              </p>
            </div>
          </div>

          {/* ================= OFFER 3: Growth Engine Plan ($500/mo) ================= */}
          <div className="bg-[#121625]/98 border-2 border-[#31c0de]/50 hover:border-[#31c0de] rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-2xl relative hover:-translate-y-1">
            {/* Ambient card top glow */}
            <div className="absolute top-0 right-0 left-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.18)_0%,transparent_70%)] pointer-events-none rounded-t-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded-full border border-[#31c0de]/30">
                  Acquisition Engine
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#31c0de]/20 to-indigo-600/20 border border-[#31c0de]/40 text-[#31c0de] text-xs font-extrabold tracking-wide uppercase">
                  <Sparkles className="w-3 h-3 text-[#31c0de]" />
                  <span>MOST POPULAR</span>
                </span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$500</span>
                <span className="text-gray-400 text-sm font-semibold">/ month</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Growth Engine
              </h3>

              <p className="text-sm text-gray-200 leading-relaxed mb-6 font-medium">
                Turn local search intent and targeted ads into a predictable pipeline of high-margin residential and commercial construction contracts.
              </p>

              {/* Highlights Pill Box */}
              <div className="p-3.5 rounded-2xl bg-[#090b14] border border-[#31c0de]/20 mb-6 space-y-1.5 text-xs text-gray-200">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Target className="w-3.5 h-3.5 text-[#31c0de] flex-shrink-0" />
                  <span>High-Intent Google &amp; Meta Ads</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Zap className="w-3.5 h-3.5 text-[#31c0de] flex-shrink-0" />
                  <span>Includes Everything in Presence Plan</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#31c0de] block mb-2">
                  What's Included:
                </span>
                <ul className="space-y-2.5">
                  {[
                    "Targeted Google & Meta Ads",
                    "High-Converting Bid Landing Pages",
                    "4–6 Commercial/Residential Articles",
                    "8–12 Strategic Social Posts / mo",
                    "Speed-to-Lead Follow-Up Engine"
                  ].map((item) => (
                    <FeatureBullet 
                      key={item}
                      label={item}
                      activeTooltip={activeTooltip}
                      onToggleTooltip={handleToggleTooltip}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center relative z-10">
              <button
                onClick={() => onOpenBooking ? onOpenBooking('Growth ($500/mo)') : null}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-xl shadow-indigo-600/35 transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:scale-[1.01]"
              >
                <span>Launch Growth Engine</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-300 mt-2.5">
                Maximum local visibility &amp; consistent project leads.
              </p>
            </div>
          </div>

        </div>

        {/* Contractor Power Bundle Callout */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#121625] via-[#10192e] to-[#0c1220] border border-[#31c0de]/30 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31c0de]/10 border border-[#31c0de]/20 text-[#31c0de] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Complete Contractor Engine</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Want the full pipeline: Ads + Instant 24/7 Call Answering?
            </h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Combine the <span className="text-white font-semibold">Growth Engine ($500/mo)</span> with <span className="text-white font-semibold">AI Automation</span> to flood your pipeline with quote requests and automatically answer, qualify, and close them 24/7 without lifting a finger.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking ? onOpenBooking('Contractor Power Bundle (Growth + AI Automation)') : null}
            className="w-full md:w-auto py-4 px-8 rounded-xl font-bold text-sm text-white bg-[#31c0de] hover:bg-[#28a9c4] text-[#080d18] font-bold shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            <span>Ask About The Power Bundle</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </Container>
    </Section>
  );
}
