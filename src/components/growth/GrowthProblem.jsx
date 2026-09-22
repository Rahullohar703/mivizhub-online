import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { 
  Search, Shield, MessageSquare, PhoneCall, ArrowRight, 
  XCircle, CheckCircle2, TrendingDown, TrendingUp 
} from 'lucide-react';

export default function GrowthProblem() {
  const stages = [
    { 
      step: "01",
      title: "Find", 
      desc: "Show up at the top of Google Maps & organic search when buyers search for your exact services.", 
      icon: Search,
      highlight: "Top 3 Local Placement"
    },
    { 
      step: "02",
      title: "Trust", 
      desc: "Build instant authority with modern positioning, verified reviews, and crisp messaging.", 
      icon: Shield,
      highlight: "Immediate Authority"
    },
    { 
      step: "03",
      title: "Engage", 
      desc: "Answer customer questions with targeted articles and social posts that prove your expertise.", 
      icon: MessageSquare,
      highlight: "Customer Buy-In"
    },
    { 
      step: "04",
      title: "Contact", 
      desc: "Make it effortless for ready-to-buy clients to request quotes or call your phone directly.", 
      icon: PhoneCall,
      highlight: "Frictionless Inbound"
    },
  ];

  return (
    <Section id="problem" className="py-24 bg-gradient-to-b from-[#080b12] via-[#0e1526] to-[#0a0d17] border-t border-b border-white/10 relative overflow-hidden">
      {/* Ambient background highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#31c0de] block mb-3">
            The Reality Check
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Being Online Isn't Enough.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            A website alone doesn't generate revenue. Customers must discover you, trust your capability, and easily contact you.
          </p>
        </div>

        {/* 4 Connected Stages: Clean, spacious, high readability */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isLast = idx === stages.length - 1;

              return (
                <div 
                  key={stage.title}
                  className="rounded-2xl bg-[#11131a] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-lg relative group"
                >
                  <div>
                    {/* Top Row: Step Number & Minimal Clean Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded">
                        STEP {stage.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#31c0de]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed font-normal mb-5">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 text-xs font-semibold text-[#31c0de]">
                    {stage.highlight}
                  </div>

                  {/* Flow Arrow for Desktop */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#161822] border border-white/15 items-center justify-center text-gray-400">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Breakdown: Clean, Uncluttered Visual Contrast */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
              Side-By-Side Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Most Business Websites Generate Zero Leads
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Typical Broken Setup */}
            <div className="rounded-3xl bg-[#130f12] border border-rose-500/25 p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-rose-500/15">
                  <div className="flex items-center gap-2.5">
                    <TrendingDown className="w-5 h-5 text-rose-400" />
                    <span className="font-bold text-white text-lg">Typical Static Website</span>
                  </div>
                  <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full">
                    98% Drop-off
                  </span>
                </div>

                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Buried on Page 4 of Google</strong>
                      <span className="text-gray-400 text-xs">No local SEO or keyword strategy. Zero discovery by nearby buyers.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Generic Stock Copy</strong>
                      <span className="text-gray-400 text-xs">Templates that sound identical to competitors and fail to build trust.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Dormant Social Proof</strong>
                      <span className="text-gray-400 text-xs">No active content or verified customer reviews to prove credibility.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Friction-Heavy Inquiries</strong>
                      <span className="text-gray-400 text-xs">Clunky forms with no direct call, WhatsApp, or instant quote path.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-500/15 text-xs text-rose-300 font-semibold text-center">
                Outcome: Monthly hosting bills with zero customer inquiries
              </div>
            </div>

            {/* The MivizHub Growth System */}
            <div className="rounded-3xl bg-[#0f141a] border border-[#31c0de]/40 p-7 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#31c0de]/15">
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="w-5 h-5 text-[#31c0de]" />
                    <span className="font-bold text-white text-lg">MivizHub Growth Engine</span>
                  </div>
                  <span className="text-xs font-semibold text-[#31c0de] bg-[#31c0de]/10 px-2.5 py-1 rounded-full">
                    Active System
                  </span>
                </div>

                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Top 3 Google Maps Placement</strong>
                      <span className="text-gray-300 text-xs">Local SEO and directory optimization to capture ready-to-buy searchers.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Researched Niche Copy</strong>
                      <span className="text-gray-300 text-xs">Copywriting tailored to customer doubts, objections, and buying triggers.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Weekly Multi-Channel Distribution</strong>
                      <span className="text-gray-300 text-xs">Regular SEO articles and social updates demonstrating active authority.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold">Instant Inbound Channels</strong>
                      <span className="text-gray-300 text-xs">Fast 1-tap call, WhatsApp, and streamlined booking paths for customers.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#31c0de]/15 text-xs text-[#31c0de] font-semibold text-center">
                Outcome: Predictable weekly inbound phone calls and quote requests
              </div>
            </div>

          </div>
        </div>

        {/* Clean, Non-Gimmicky Reassurance Banner */}
        <div className="max-w-4xl mx-auto text-center rounded-2xl bg-[#11131a] border border-white/10 p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Stop losing local customers to inferior competitors.
          </h3>
          <p className="text-base text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We handle everything: competitor research, website design, local SEO, weekly content, and ongoing optimization so your pipeline stays full.
          </p>
        </div>

      </Container>
    </Section>
  );
}
