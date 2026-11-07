import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, X, ArrowRight } from 'lucide-react';

export default function SectionDifferentiator() {
  return (
    <Section id="differentiator" className="py-20 bg-gradient-to-b from-[#0c101c] via-[#131124] to-[#0e101f] border-t border-white/10 relative overflow-hidden">
      {/* Subtle royal indigo ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Power of The Combination
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why Contractor Marketing &amp; Field Automation Belong Together
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Most trade businesses try to fix growth one piece at a time — and get stuck. Here is why doing both transforms your business:
          </p>
        </div>

        {/* 3 Clear Real-World Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Scenario 1 */}
          <div className="bg-[#131122]/90 border border-white/10 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Scenario A
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Marketing Alone
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                Ads and Google rankings bring phone calls, but you're on a noisy roof or job site. Callers hit voicemail and hire the next contractor on Google.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-rose-400">
              <X className="w-4 h-4 flex-shrink-0" />
              <span>Wasted ad budget &amp; lost $10k+ jobs</span>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="bg-[#131122]/90 border border-white/10 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Scenario B
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI Automation Alone
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                Every inbound call is answered in 1 ring, estimates are nurtured, and dispatch notes are logged, but growth stalls because not enough local property owners know you exist.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400">
              <X className="w-4 h-4 flex-shrink-0" />
              <span>Smooth jobsite ops, but quiet weeks</span>
            </div>
          </div>

          {/* Scenario 3: The Winner */}
          <div className="bg-[#1a1730]/90 border-2 border-[#31c0de]/50 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-2xl shadow-cyan-950/25">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de]">
                  The MivizHub Solution
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Growth Plans + AI Automation
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
                Targeted marketing floods your pipeline with high-value bid requests. AI automation answers calls, qualifies project scope in 60s, and follows up until the contract is signed.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400">
              <Check className="w-4 h-4 flex-shrink-0" />
              <span>Full project schedule, zero missed revenue</span>
            </div>
          </div>

        </div>

        {/* Supporting Statement */}
        <div className="max-w-5xl mx-auto bg-[#131122]/90 border border-white/10 rounded-3xl p-10 sm:p-14 text-center shadow-2xl">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-5 leading-snug">
            “One brings high-value projects in. The other ensures you never lose a job to a missed call.”
          </blockquote>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            You don't need to juggle multiple expensive marketing agencies and full-time office dispatchers. MivizHub delivers a complete, hands-off growth and operations system designed specifically for contractors.
          </p>
        </div>

      </Container>
    </Section>
  );
}

