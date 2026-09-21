import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Search, Eye, MousePointerClick, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';
import { AntiMetalButton } from '../ui/anti-metal-button';
import { ArrowFillButton } from '../ui/arrow-fill-button';

export default function GrowthHero({ onOpenBooking, onSelectPlan }) {
  const progressionSteps = [
    { label: "Presence", desc: "Foundation & Setup", icon: ShieldCheck, stat: "100% Ready" },
    { label: "Visibility", desc: "SEO & Discovery", icon: Search, stat: "Top Organic" },
    { label: "Engagement", desc: "Content & Social", icon: Eye, stat: "Active Authority" },
    { label: "Leads", desc: "Inquiries & Capture", icon: MousePointerClick, stat: "High-Intent" },
    { label: "Growth", desc: "Compounding Pipeline", icon: TrendingUp, stat: "Predictable Scale" },
  ];

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#09090b] text-textMain relative overflow-hidden">
      {/* Clean, subtle top ambiance using fast CSS radial gradient */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.08)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Badge matching Home style */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#31c0de] mr-2" />
          <span className="text-xs sm:text-sm font-bold text-[#31c0de] uppercase tracking-wider font-mono">
            MIVIZHUB GROWTH
          </span>
        </div>

        {/* Primary Headline: Matching Home typography size & weight */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-6xl mx-auto">
          Your Business Deserves <span className="text-[#31c0de]">More Than Just a Website.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-4 font-normal">
          We build the digital presence, content, and growth systems that help your business get discovered, trusted, and contacted.
        </p>

        {/* Secondary supporting line */}
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-8 font-medium">
          Built around your business, niche, audience, positioning, and competitive landscape.
        </p>

        {/* CTAs: Clean, large, bold buttons matching Home style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
          <AntiMetalButton
            onClick={() => onSelectPlan ? onSelectPlan('presence') : onOpenBooking('Presence ($250/mo)')}
            label="Build My Presence"
            size="lg"
            className="w-full sm:w-auto shadow-xl shadow-blue-500/25"
          />

          <ArrowFillButton
            btnText="Talk to Us"
            onClick={() => onOpenBooking()}
            bgColor="#121622"
            textColor="#f4f4f5"
            fillBgColor="#31c0de"
            fillTextColor="#09090b"
            arrowColor="#09090b"
            hoverArrowColor="#09090b"
            className="w-full sm:w-auto border-white/15 hover:border-white/30"
          />
        </div>


        {/* Reassurance Trust / Value Line */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-medium px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-14">
          <span>Website</span>
          <span className="text-gray-600">•</span>
          <span>SEO</span>
          <span className="text-gray-600">•</span>
          <span>Content</span>
          <span className="text-gray-600">•</span>
          <span>Social</span>
          <span className="text-gray-600">•</span>
          <span>Paid Growth</span>
          <span className="text-gray-600">•</span>
          <span className="text-[#31c0de] font-semibold">Lead Generation</span>
        </div>

        {/* Clean, High-Contrast Growth Console (Matching Home 2-Pillar Bar structure) */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-[#121216] border border-white/10 rounded-2xl p-6 sm:p-9 shadow-2xl">
            
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-4 mb-6 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="text-xs font-mono text-gray-200 font-bold tracking-wide">
                  SYSTEM STATUS: ACTIVE GROWTH ENGINE
                </span>
              </div>
              <div className="text-xs font-mono text-gray-400">
                ARCHITECTURE: <span className="text-[#31c0de] font-semibold">BUSINESS → PIPELINE</span>
              </div>
            </div>

            {/* Progression Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-2">
              {progressionSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === progressionSteps.length - 1;

                return (
                  <div key={step.label} className="relative group">
                    <div className="h-full rounded-xl bg-[#18181f] hover:bg-[#1f1f28] border border-white/5 hover:border-[#31c0de]/30 p-4 flex flex-col items-center text-center transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-[#31c0de]/10 border border-[#31c0de]/20 flex items-center justify-center text-[#31c0de] mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1 font-semibold">
                        0{idx + 1}
                      </div>
                      <div className="font-heading font-bold text-white text-sm sm:text-base mb-1">
                        {step.label}
                      </div>
                      <div className="text-xs text-gray-400 mb-2">
                        {step.desc}
                      </div>
                      <div className="mt-auto inline-flex items-center text-[11px] font-mono text-[#31c0de] font-semibold bg-[#31c0de]/10 px-2 py-0.5 rounded">
                        {step.stat}
                      </div>
                    </div>

                    {!isLast && (
                      <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center text-gray-500">
                        <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Micro Live Signal Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#31c0de]" />
                <span>Synchronized across Search, Social, Paid, and Organic footprint</span>
              </div>
              <div className="text-gray-400">
                Zero generic templates • 100% Customized
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
