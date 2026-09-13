import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, X, ArrowRight } from 'lucide-react';

export default function SectionDifferentiator() {
  return (
    <Section id="differentiator" className="py-20 bg-transparent border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#31c0de]/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Power of The Combination
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why Marketing & AI Staffing <br className="hidden sm:inline" />
            Belong Together
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            Most businesses try to fix growth one piece at a time — and get stuck. Here is why doing both changes everything:
          </p>
        </div>

        {/* 3 Clear Real-World Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Scenario 1 */}
          <div className="card-base p-6 sm:p-7 flex flex-col justify-between hover:border-rose-500/40 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Scenario A
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Marketing Alone
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Ads bring calls, but you're busy on site. Callers hit voicemail and hire the next competitor on Google.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-rose-400">
              <X className="w-4 h-4 flex-shrink-0" />
              <span>Wasted ad spend & lost jobs</span>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="card-base p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Scenario B
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                AI Staffing Alone
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Inquiries, customer calls, and quote follow-ups run flawlessly 24/7, but growth stalls because not enough new prospects know you exist.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <X className="w-4 h-4 flex-shrink-0" />
              <span>Great operations, but slow growth</span>
            </div>
          </div>

          {/* Scenario 3: The Winner */}
          <div className="card-base card-glow-cyan p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all border-[#31c0de]/40">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de]">
                  The MivizHub Solution
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Marketing + AI Staffing
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                Marketing drives qualified leads to your business. AI employees handle calls, follow up in 60 seconds, and chase quotes until jobs are booked.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-emerald-400">
              <Check className="w-4 h-4 flex-shrink-0" />
              <span>Full schedule, zero missed revenue</span>
            </div>
          </div>

        </div>

        {/* Supporting Statement: Bold & Memorable */}
        <div className="max-w-3xl mx-auto card-base p-8 sm:p-10 text-center shadow-xl">
          <blockquote className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            “One brings more business in. The other helps you get the work done.”
          </blockquote>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            You don't have to hire a high-priced agency for marketing and then hire multiple full-time administrative staff. MivizHub gives you the complete growth engine in one simple partnership.
          </p>
        </div>

      </Container>
    </Section>
  );
}

