import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, X, ArrowRight } from 'lucide-react';

export default function SectionDifferentiator() {
  return (
    <Section id="differentiator" className="py-20 bg-[#0c0c10] border-t border-white/10">
      <Container>
        
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
          <div className="bg-[#121216] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
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
          <div className="bg-[#121216] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
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
          <div className="bg-[#181824] border-2 border-[#31c0de]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-cyan-950/20">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
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
        <div className="max-w-3xl mx-auto bg-[#14141a] border border-white/10 rounded-2xl p-8 sm:p-10 text-center shadow-lg">
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

