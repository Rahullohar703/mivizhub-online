import React, { useState } from 'react';
import { 
  ArrowRight, Search, Globe, FileText, Share2, Target, 
  CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Activity, Zap 
} from 'lucide-react';
import Container from '../ui/Container';
import { ArrowFillButton } from '../ui/arrow-fill-button';

export default function GrowthHero({ onOpenBooking, onSelectPlan }) {
  const [activeTimeline, setActiveTimeline] = useState('month1');

  const timelineData = {
    month1: {
      tab: "Month 1: Foundation",
      phase: "Phase 01 • Foundation & Setup",
      headline: "Establish Digital Credibility & Instant Search Indexing",
      desc: "We build your conversion-focused website, verify your Google Maps profile, and resolve technical SEO so ready-to-buy customers find and trust you immediately.",
      deliverables: [
        { title: "Custom Business Website", status: "Live & Responsive", icon: Globe },
        { title: "Google Business Profile", status: "Verified & Optimized", icon: ShieldCheck },
        { title: "Technical SEO Foundation", status: "100% Crawl Health", icon: Search },
        { title: "Targeted Topic Research", status: "Commercial Intent Mapped", icon: Target },
      ],
      metrics: [
        { label: "Website Readiness", val: "100%", sub: "High-intent layout", bar: 100, color: "text-[#31c0de]" },
        { label: "Google Business Verification", val: "Active", sub: "Top tier local profile", bar: 95, color: "text-emerald-400" },
        { label: "Technical SEO Score", val: "99 / 100", sub: "Zero crawl errors", bar: 99, color: "text-blue-400" },
        { label: "Initial Search Discovery", val: "Indexed", sub: "Google indexing active", bar: 85, color: "text-cyan-300" },
      ]
    },
    month2: {
      tab: "Month 2: Traction",
      phase: "Phase 02 • Authority & Traffic",
      headline: "Climb Google Rankings & Capture Buyer Attention",
      desc: "We publish regular commercial SEO articles and distribute thought leadership to pull nearby buyers directly into your customer pipeline.",
      deliverables: [
        { title: "Commercial SEO Articles", status: "Weekly Publishing", icon: FileText },
        { title: "Multi-Channel Social Proof", status: "LinkedIn & IG Active", icon: Share2 },
        { title: "Review Generation Engine", status: "5-Star Local Social Proof", icon: ShieldCheck },
        { title: "On-Page Conversion Tweaks", status: "Frictionless Forms", icon: Zap },
      ],
      metrics: [
        { label: "Local Map Pack", val: "Top 3", sub: "Dominant map search", bar: 90, color: "text-[#31c0de]" },
        { label: "Search Visibility", val: "+210%", sub: "Organic keyword surge", bar: 92, color: "text-emerald-400" },
        { label: "High-Intent Search Terms", val: "45+ Ranked", sub: "Commercial buying queries", bar: 80, color: "text-blue-400" },
        { label: "Inbound Quote Requests", val: "Incoming", sub: "Direct calls & messages", bar: 88, color: "text-cyan-300" },
      ]
    },
    month3: {
      tab: "Month 3: Scale",
      phase: "Phase 03 • Compounding Pipeline",
      headline: "Turn Presence Into Predictable Client Acquisition",
      desc: "We introduce targeted advertising and automated follow-ups to turn your steady organic presence into a compounding customer pipeline.",
      deliverables: [
        { title: "Google & Meta Ad Campaigns", status: "High-ROI Targeting", icon: Target },
        { title: "Instant Lead Follow-Up", status: "Under 60s Routing", icon: Zap },
        { title: "Monthly Attribution Insights", status: "Clear ROI Tracking", icon: TrendingUp },
        { title: "Market Footprint Scaling", status: "Category Dominance", icon: Globe },
      ],
      metrics: [
        { label: "Lead Acquisition Efficiency", val: "-38% Cost", sub: "Optimized ad spend", bar: 94, color: "text-emerald-400" },
        { label: "Inbound Deal Flow", val: "Predictable", sub: "Weekly customer quotes", bar: 96, color: "text-[#31c0de]" },
        { label: "Category Authority", val: "Top Organic", sub: "Outranking local competitors", bar: 90, color: "text-blue-400" },
        { label: "System Maintenance", val: "Hands-Free", sub: "Managed by MivizHub", bar: 100, color: "text-cyan-300" },
      ]
    }
  };

  const currentTimeline = timelineData[activeTimeline];

  return (
    <section id="hero" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#080b12] text-textMain relative overflow-hidden">
      {/* Radiant atmospheric lighting for visual richness */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.2)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-48 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 -left-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Editorial Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#31c0de] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">
            Done-For-You Marketing & Growth • Flat Monthly Pricing
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-5xl mx-auto">
          Your Business Deserves <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31c0de] via-[#38bdf8] to-blue-400">More Than Just a Website.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
          We build the digital presence, content, and growth systems that help your business get discovered, trusted, and contacted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <ArrowFillButton
            onClick={() => onSelectPlan ? onSelectPlan('presence') : onOpenBooking('Presence ($250/mo)')}
            btnText="Build My Presence"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto shadow-xl shadow-cyan-500/25"
          />

          <ArrowFillButton
            btnText="Talk to Our Team"
            onClick={() => onOpenBooking()}
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto border-white/15 hover:border-white/30"
          />
        </div>

        {/* REIMAGINED: Sleek Floating Growth Showcase (NOT an ugly heavy box) */}
        <div className="w-full max-w-5xl mx-auto text-left">
          
          {/* Timeline Stage Switcher Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-6">
            {['month1', 'month2', 'month3'].map((key, i) => {
              const isActive = activeTimeline === key;
              const step = timelineData[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTimeline(key)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#31c0de] to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-[1.02]'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    isActive ? 'bg-white text-[#09090b]' : 'bg-white/10 text-gray-300'
                  }`}>
                    0{i + 1}
                  </span>
                  <span>{step.tab}</span>
                </button>
              );
            })}
          </div>

          {/* Luminous Glass Showcase Card */}
          <div className="bg-gradient-to-b from-[#111728]/90 via-[#0d1220]/90 to-[#090d18]/95 border border-cyan-500/25 rounded-3xl p-6 sm:p-10 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden">
            
            {/* Luminous Top Edge Glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#31c0de]/80 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: What We Build & Deliver (7 cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {currentTimeline.phase}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                  {currentTimeline.headline}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal mb-8">
                  {currentTimeline.desc}
                </p>

                {/* 4 Crisp Visual Deliverable Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentTimeline.deliverables.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#31c0de] flex-shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-xs font-semibold text-white truncate">{item.title}</div>
                          <div className="text-[11px] text-gray-400 truncate">{item.status}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Live Performance Cockpit (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#070b14]/90 border border-white/10 p-5 sm:p-6 shadow-inner relative">
                  
                  {/* Cockpit Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-white tracking-wide uppercase">
                        Live System Metrics
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Real-Time Target
                    </span>
                  </div>

                  {/* Dynamic Progress Bars & Stats */}
                  <div className="space-y-4">
                    {currentTimeline.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-gray-300 font-medium">{m.label}</span>
                          <span className={`font-bold ${m.color}`}>{m.val}</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-0.5">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 ease-out"
                            style={{ width: `${m.bar}%` }}
                          />
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cockpit Footer */}
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Zero Manual Setup</span>
                    </span>
                    <span className="text-gray-400">100% Done-For-You</span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
