import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { AlertCircle, ArrowDown, CheckCircle2 } from 'lucide-react';

export default function SectionProblems() {
  const problems = [
    "Valuable enquiries get missed or delayed.",
    "Quotations go unanswered.",
    "Your business depends heavily on referrals.",
    "Marketing generates leads without consistently converting them.",
    "Your team spends hours on repetitive administrative work.",
    "Opportunities disappear because nobody follows up.",
    "Growth means adding more people, more workload, and more complexity."
  ];

  return (
    <Section id="problem" className="bg-slate-50 py-20 border-b border-slate-200 text-slate-900 relative">
      <Container className="max-w-5xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-600 block mb-2">
            The Operational Reality
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4 font-heading">
            You’re Busy Running Your Business. But Is Your Business Growing?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            You deliver projects. Manage teams. Handle clients. Solve problems every day. <span className="font-semibold text-slate-800">But behind the scenes:</span>
          </p>
        </div>

        {/* 7 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-14">
          {problems.map((text, idx) => (
            <div 
              key={idx}
              className={`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-slate-300 transition-colors ${
                idx === problems.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertCircle className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* The Solution Bridge Card */}
        <div className="text-center max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 mb-4">
            <ArrowDown className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-heading">
            You don’t necessarily need more tools.
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            You need better systems connecting the tools, people, and processes you already have. <span className="text-blue-600 font-semibold">That’s where MivizHub comes in.</span>
          </p>
        </div>

      </Container>
    </Section>
  );
}
