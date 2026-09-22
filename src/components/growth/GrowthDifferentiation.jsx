import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export default function GrowthDifferentiation() {
  const comparisonRows = [
    {
      feature: "Monthly Pricing",
      traditional: "$3,000 – $5,000/mo + hefty setup fees",
      mivizhub: "$250 or $500/mo flat (Zero surprises)",
    },
    {
      feature: "Contract Terms",
      traditional: "6 to 12-month lock-in contracts",
      mivizhub: "Zero lock-in. Cancel or pause anytime.",
    },
    {
      feature: "Strategy & Copy",
      traditional: "Generic, junior outsourced template text",
      mivizhub: "In-depth competitor, audience & niche research",
    },
    {
      feature: "Performance Focus",
      traditional: "Vanity metrics (impressions, follower counts)",
      mivizhub: "Commercial inquiries (direct calls, quote requests)",
    },
    {
      feature: "Speed to Launch",
      traditional: "3 to 6 weeks of bureaucratic meetings",
      mivizhub: "Live & indexed in days with weekly delivery cadence",
    },
    {
      feature: "Complete Ecosystem",
      traditional: "Charges extra for websites, SEO, and social",
      mivizhub: "All-in-one: Web, Local SEO, Content & Distribution",
    },
  ];

  return (
    <Section id="differentiation" className="py-24 bg-gradient-to-b from-[#080b12] via-[#0b101c] to-[#090b12] border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#31c0de] block mb-3">
            The MivizHub Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Not Generic Agency Marketing.<br />
            <span className="text-[#31c0de]">Engineered For Small Business Growth.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Traditional agencies charge thousands for vanity reports. We provide a streamlined productized growth engine focused on tangible business results.
          </p>
        </div>

        {/* Agency Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-[#11131a] border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-[#0d0f17]">
              <div className="md:col-span-4 p-5 sm:p-6 text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
                Feature Breakdown
              </div>
              <div className="md:col-span-4 p-5 sm:p-6 text-xs font-semibold uppercase tracking-wider text-rose-400 border-t md:border-t-0 md:border-l border-white/10 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Traditional Agency</span>
              </div>
              <div className="md:col-span-4 p-5 sm:p-6 text-xs font-semibold uppercase tracking-wider text-[#31c0de] border-t md:border-t-0 md:border-l border-white/10 bg-[#121c29] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#31c0de]" />
                <span>MivizHub Growth</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-white/10 text-sm">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 hover:bg-white/[0.02] transition-colors">
                  
                  {/* Feature Label */}
                  <div className="md:col-span-4 p-4 sm:p-5 font-semibold text-white flex items-center">
                    {row.feature}
                  </div>

                  {/* Traditional Agency */}
                  <div className="md:col-span-4 p-4 sm:p-5 text-xs sm:text-sm text-gray-400 md:border-l border-white/10 flex items-center gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>{row.traditional}</span>
                  </div>

                  {/* MivizHub Advantage */}
                  <div className="md:col-span-4 p-4 sm:p-5 text-xs sm:text-sm text-gray-100 font-medium md:border-l border-white/10 bg-[#121c29]/50 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-white">{row.mivizhub}</span>
                  </div>

                </div>
              ))}
            </div>

            {/* Table Footer Note */}
            <div className="p-4 sm:p-5 bg-[#0d0f17] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
              <span>All plans include setup, technical management, and hosting optimization.</span>
              <span className="text-[#31c0de] font-semibold">Transparent flat pricing • Zero hidden fees</span>
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}
