import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Compass, TrendingUp, Zap, Sparkles } from 'lucide-react';

export default function SectionTrust() {
  const pillars = [
    {
      num: "01",
      title: "Industry Understanding",
      desc: "Built around complex project workflows, estimation hurdles, and industry sales cycles.",
      icon: <Compass className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/25",
      borderHover: "hover:border-blue-400 group-hover:border-t-blue-600"
    },
    {
      num: "02",
      title: "Growth Systems",
      desc: "Predictable pipeline from digital presence to qualified enquiries and closed proposals.",
      icon: <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-indigo-600 to-purple-600",
      shadow: "shadow-indigo-500/25",
      borderHover: "hover:border-indigo-400 group-hover:border-t-indigo-600"
    },
    {
      num: "03",
      title: "Smarter Operations",
      desc: "Automate repetitive administration and follow-ups so teams focus on high-value billable work.",
      icon: <Zap className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/25",
      borderHover: "hover:border-emerald-400 group-hover:border-t-emerald-600"
    }
  ];

  return (
    <Section id="positioning" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Built For High-Complexity Sectors</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading">
            You Know Your Industry. <span className="text-blue-600">We Help You Grow Within It.</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <p>
              Your business isn’t like every other business.
            </p>
            <p>
              You manage projects, coordinate teams, handle enquiries, prepare quotations, and deal with complex sales cycles.
            </p>
            <p className="text-slate-800 font-medium">
              Generic marketing and disconnected software rarely solve these challenges. MivizHub combines industry-focused growth strategies with practical AI automation to help your business operate and grow more efficiently.
            </p>
          </div>
        </div>

        {/* 3 Colorful Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className={`group bg-slate-50/80 hover:bg-white border-2 border-slate-200/90 rounded-2xl p-7 text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default ${pillar.borderHover}`}
            >
              {/* Vibrant Colorful Icon Badge */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg ${pillar.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {pillar.icon}
              </div>

              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Pillar {pillar.num}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-blue-600 transition-colors">
                {pillar.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline Footer */}
        <div className="mt-14 text-center pt-8 border-t border-slate-200">
          <p className="text-sm sm:text-base font-bold text-slate-700 tracking-wide">
            Industry understanding. <span className="text-blue-600 font-extrabold mx-1.5">•</span> Growth systems. <span className="text-indigo-600 font-extrabold mx-1.5">•</span> Smarter operations.
          </p>
        </div>

      </Container>
    </Section>
  );
}
