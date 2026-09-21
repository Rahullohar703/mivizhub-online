import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Search, Shield, MessageSquare, PhoneCall, AlertTriangle, ArrowRight, XCircle } from 'lucide-react';

export default function GrowthProblem() {
  const steps = [
    { title: "FIND", subtitle: "Search & Visibility", desc: "Show up where your highest-intent buyers are searching.", icon: Search },
    { title: "TRUST", subtitle: "Authority & Social Proof", desc: "Build immediate credibility with market positioning & design.", icon: Shield },
    { title: "ENGAGE", subtitle: "Strategic Content", desc: "Deliver relevant answers that capture interest and educate.", icon: MessageSquare },
    { title: "CONTACT", subtitle: "Frictionless Conversion", desc: "Provide intuitive, high-converting paths to book or reach out.", icon: PhoneCall },
  ];

  const commonProblems = [
    "Outdated or weak website",
    "Poor search visibility",
    "Inconsistent content",
    "No clear content strategy",
    "Little understanding of competitors",
    "No meaningful tracking",
    "No consistent lead-generation system"
  ];

  return (
    <Section id="problem" className="py-20 bg-[#0b0b0e] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Modern Reality
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Being Online Isn't Enough.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            A website alone doesn't create growth. Your customers need to find you, trust you, engage with you, and have an easy way to contact you.
          </p>
        </div>

        {/* Visual Sequence: FIND → TRUST → ENGAGE → CONTACT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div 
                key={step.title}
                className="relative rounded-2xl bg-[#121216] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#31c0de] tracking-wider font-bold">
                      0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#31c0de]/10 border border-[#31c0de]/20 flex items-center justify-center text-[#31c0de]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-xl font-bold text-white mb-1">
                    {step.title}
                  </div>
                  <div className="text-xs font-bold text-[#31c0de] mb-2 font-mono">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Common Problems Breakdown */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="rounded-2xl bg-[#121216] border border-white/10 p-7 sm:p-9 shadow-xl">
            <div className="text-xs font-bold font-mono text-rose-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Where Most Businesses Get Stranded</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commonProblems.map((prob) => (
                <div 
                  key={prob} 
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#18181f] border border-white/5"
                >
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span className="text-sm text-gray-200 font-medium">{prob}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition into Mivizhub */}
        <div className="max-w-4xl mx-auto text-center rounded-2xl bg-[#121216] border border-[#31c0de]/30 p-8 sm:p-10 shadow-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Integrated Solution
          </span>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            That's where Mivizhub comes in.
          </h3>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            We connect the pieces into one digital growth system built around your business.
          </p>
        </div>

      </Container>
    </Section>
  );
}
