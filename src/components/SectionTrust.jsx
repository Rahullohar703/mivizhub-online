import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Layers, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

export default function SectionTrust() {
  const pillars = [
    { title: "Industry Understanding", desc: "Built around complex project workflows and industry sales cycles." },
    { title: "Growth Systems", desc: "Predictable pipeline from digital presence to closed proposals." },
    { title: "Smarter Operations", desc: "Automate repetitive administration so teams focus on high-value work." }
  ];

  return (
    <Section id="positioning" className="py-20 bg-white border-b border-slate-200 text-slate-900 relative">
      <Container className="max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Built For High-Complexity Sectors
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading">
            You Know Your Industry. We Help You Grow Within It.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <p>
              Your business isn’t like every other business.
            </p>
            <p>
              You manage projects, coordinate teams, handle enquiries, prepare quotations, and deal with complex sales cycles.
            </p>
            <p className="text-slate-700 font-medium">
              Generic marketing and disconnected software rarely solve these challenges. MivizHub combines industry-focused growth strategies with practical AI automation to help your business operate and grow more efficiently.
            </p>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline Footer */}
        <div className="mt-12 text-center pt-8 border-t border-slate-100">
          <p className="text-sm sm:text-base font-semibold text-slate-700 tracking-wide">
            Industry understanding. <span className="text-blue-600">•</span> Growth systems. <span className="text-blue-600">•</span> Smarter operations.
          </p>
        </div>

      </Container>
    </Section>
  );
}
