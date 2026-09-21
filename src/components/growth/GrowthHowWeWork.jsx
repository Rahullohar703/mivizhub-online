import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Briefcase, Users, TrendingUp, Compass } from 'lucide-react';

export default function GrowthHowWeWork() {
  const pillars = [
    {
      step: "01",
      title: "BUSINESS",
      desc: "What you sell, how you create value, and what makes you different.",
      icon: Briefcase,
      focus: "Value proposition, pricing model, core strengths & delivery capabilities",
    },
    {
      step: "02",
      title: "AUDIENCE",
      desc: "Who you're trying to reach, what they care about, and what influences their decisions.",
      icon: Users,
      focus: "Pain points, buying triggers, decision makers & consumption habits",
    },
    {
      step: "03",
      title: "MARKET",
      desc: "What people are searching for, discussing, and responding to in your industry.",
      icon: TrendingUp,
      focus: "Keyword volume, seasonal trends, search intent & platform behavior",
    },
    {
      step: "04",
      title: "COMPETITION",
      desc: "What competitors are doing, how they're positioned, and where opportunities exist.",
      icon: Compass,
      focus: "Competitor ad angles, SEO gaps, positioning weaknesses & white space",
    },
  ];

  return (
    <Section id="how-we-work" className="py-20 bg-[#09090b] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Research-Led Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            We Don't Start With Content. We Start With Understanding.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Before creating websites, articles, social posts, or campaigns, we understand the business behind them.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-[#121216] border border-white/10 hover:border-white/20 p-7 flex flex-col justify-between transition-colors shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-gray-400 font-bold bg-white/5 px-2.5 py-1 rounded">
                      PHASE {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#31c0de]/10 border border-[#31c0de]/20 flex items-center justify-center text-[#31c0de]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-gray-300 font-normal leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 bg-[#18181f] p-3 rounded-xl border border-white/5 leading-relaxed">
                  <span className="text-[#31c0de] font-bold block mb-0.5">Key Analysis:</span>
                  {pillar.focus}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Punchline */}
        <div className="text-center">
          <p className="text-base sm:text-lg font-bold text-white tracking-wide inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#31c0de]" />
            <span>The result: marketing built around your business — not generic templates.</span>
          </p>
        </div>

      </Container>
    </Section>
  );
}
