import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowDown } from 'lucide-react';

export default function SectionProblems() {
  return (
    <Section id="problem" className="bg-gradient-to-b from-[#0a0f1d] via-[#0f172a] to-[#0c1222] py-20 border-t border-white/10 relative overflow-hidden">
      {/* Subtle midnight-blue ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Reality of Running a Construction &amp; Field Ops Business
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Working on the job site shouldn't mean losing bids at the desk.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Most contractors and operations leaders find themselves trapped between two constant headaches:
          </p>
        </div>

        {/* The Two Problems: Wide, High Contrast & Spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-14">
          
          {/* Problem 1 */}
          <div className="bg-[#121829]/90 p-7 sm:p-9 rounded-2xl border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-gray-400 bg-white/5 px-3 py-1 rounded border border-white/5">
                  Headache #1
                </span>
                <span className="text-xs font-semibold text-rose-400">Unpredictable Pipeline</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                "The Phone Doesn't Ring Often Enough"
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                Relying solely on word-of-mouth creates feast-or-famine cycles. One month crews are overwhelmed, and the next month equipment sits idle and payroll feels heavy.
              </p>
            </div>

            <div className="bg-[#0b101c] p-4 rounded-xl border border-white/5 text-xs sm:text-sm text-rose-300">
              <span className="text-white font-bold block mb-1">What this costs you:</span>
              Quiet weeks, cash flow stress, and zero predictability over your upcoming project schedule.
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-[#121829]/90 p-7 sm:p-9 rounded-2xl border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-gray-400 bg-white/5 px-3 py-1 rounded border border-white/5">
                  Headache #2
                </span>
                <span className="text-xs font-semibold text-amber-400">Field vs. Office Friction</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                "Drowning in Missed Calls &amp; Stalled Estimates"
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                When you're on a noisy jobsite or driving between bids, answering calls is impossible. Phone calls go to voicemail, open quotes sit uncalled, and homeowners hire the next contractor on Google.
              </p>
            </div>

            <div className="bg-[#0b101c] p-4 rounded-xl border border-white/5 text-xs sm:text-sm text-amber-300">
              <span className="text-white font-bold block mb-1">What this costs you:</span>
              Lost $5,000–$50,000+ jobs, unclosed estimates going cold, and working until midnight doing admin.
            </div>
          </div>

        </div>

        {/* The Solution Bridge: Plain English */}
        <div className="text-center max-w-5xl mx-auto bg-[#101728]/90 border border-white/10 rounded-2xl p-8 sm:p-11 shadow-2xl">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-[#31c0de] mb-3">
            <ArrowDown className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            MivizHub Solves Both Ends of the Contractor Equation
          </h3>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our <span className="text-white font-bold">Growth Marketing Plans</span> bring qualified local homeowner and commercial project inquiries straight to your phone. Our <span className="text-white font-bold">AI Operations &amp; Dispatch</span> answers calls in 1 ring, qualifies job scope, nurtures pending estimates, and keeps your crews booked.
          </p>
        </div>

      </Container>
    </Section>
  );
}

