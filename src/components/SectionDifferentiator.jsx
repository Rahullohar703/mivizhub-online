import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, X, ArrowRight } from 'lucide-react';

export default function SectionDifferentiator() {
  return (
    <Section id="differentiator" className="py-20 bg-[#0c0c10] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Power of The Combination
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why Marketing & AI Staffing Belong Together
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Most businesses try to fix growth one piece at a time — and get stuck. Here is why doing both changes everything:
          </p>
        </div>

        {/* 3 Clear Real-World Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Scenario 1 */}
          <div className="bg-[#121216] border border-white/10 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-xl">
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
                Ads bring calls, but you're busy on site. Callers hit voicemail and hire the next competitor on Google.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-rose-400">
              <X className="w-4 h-4 flex-shrink-0" />
              <span>Wasted ad spend & lost jobs</span>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="bg-[#121216] border border-white/10 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Scenario B
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI Staffing Alone
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                Inquiries, customer calls, and quote follow-ups run flawlessly 24/7, but growth stalls because not enough new prospects know you exist.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400">
              <X className="w-4 h-4 flex-shrink-0" />
              <span>Great operations, but slow growth</span>
            </div>
          </div>

          {/* Scenario 3: The Winner */}
          <div className="bg-[#181824] border-2 border-[#31c0de]/40 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-2xl shadow-cyan-950/25">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de]">
                  The MivizHub Solution
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Marketing + AI Staffing
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
                Marketing drives qualified leads to your business. AI employees handle calls, follow up in 60 seconds, and chase quotes until jobs are booked.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400">
              <Check className="w-4 h-4 flex-shrink-0" />
              <span>Full schedule, zero missed revenue</span>
            </div>
          </div>

        </div>

        {/* Supporting Statement: Bold & Memorable */}
        <div className="max-w-5xl mx-auto bg-[#14141a] border border-white/10 rounded-3xl p-10 sm:p-14 text-center shadow-2xl">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-5 leading-snug">
            “One brings more business in. The other helps you get the work done.”
          </blockquote>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            You don't have to hire a high-priced agency for marketing and then hire multiple full-time administrative staff. MivizHub gives you the complete growth engine in one simple partnership.
          </p>
        </div>

      </Container>
    </Section>
  );
}

