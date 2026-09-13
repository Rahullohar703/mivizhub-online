import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowDown } from 'lucide-react';

export default function SectionProblems() {
  return (
    <Section id="problem" className="bg-[#0b0b0e] py-20 border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Reality of Running a Business
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Growing your business shouldn't mean <br className="hidden sm:inline" />
            working 80 hours a week.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Most business owners find themselves trapped between two constant headaches:
          </p>
        </div>

        {/* The Two Problems: High Contrast & Concise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          
          {/* Problem 1 */}
          <div className="bg-[#121216] p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  Headache #1
                </span>
                <span className="text-xs font-semibold text-rose-400">Customer Flow</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                "The Phone Doesn't Ring Often Enough"
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Word-of-mouth is unpredictable. One month you have more jobs than you can handle, and the next month your crew is sitting idle.
              </p>
            </div>

            <div className="bg-[#18181f] p-3.5 rounded-xl border border-white/5 text-xs text-rose-300">
              <span className="text-white font-bold block mb-0.5">What this costs you:</span>
              Quiet weeks, payroll stress, and zero control over your growth.
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-[#121216] p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  Headache #2
                </span>
                <span className="text-xs font-semibold text-amber-400">Daily Workload</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                "Drowning in Missed Calls, Inquiries & Admin"
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                You're busy serving clients. Calls go to voicemail, web inquiries sit unaddressed for hours, and sent quotes are forgotten without follow-up.
              </p>
            </div>

            <div className="bg-[#18181f] p-3.5 rounded-xl border border-white/5 text-xs text-amber-300">
              <span className="text-white font-bold block mb-0.5">What this costs you:</span>
              Lost jobs to faster competitors, stalled proposals, and evening paperwork.
            </div>
          </div>

        </div>

        {/* The Solution Bridge: Plain English */}
        <div className="text-center max-w-3xl mx-auto bg-[#14141a] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-lg">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-[#31c0de] mb-3">
            <ArrowDown className="w-4 h-4" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            MivizHub Solves Both Ends of the Equation
          </h3>
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Our <span className="text-white font-bold">Marketing</span> gets qualified customer inquiries coming in. Our <span className="text-white font-bold">AI Employees</span> answer your calls in 1 ring, follow up with leads in 60 seconds, chase pending quotes, and keep your schedule full.
          </p>
        </div>

      </Container>
    </Section>
  );
}

