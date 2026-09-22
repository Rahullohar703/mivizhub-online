import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Briefcase, Users, Search, Compass, CheckCircle2 } from 'lucide-react';

export default function GrowthHowWeWork() {
  const pillars = [
    {
      step: "01",
      title: "Business & Offer Audit",
      subtitle: "Positioning & Margin Alignment",
      desc: "We analyze what you sell, your highest-margin services, and your unfair advantage to craft sharp messaging that makes visitors choose you.",
      icon: Briefcase,
      takeaway: "Visitors immediately grasp your value within 5 seconds of landing."
    },
    {
      step: "02",
      title: "Buyer Intent Mapping",
      subtitle: "Objection & Trigger Analysis",
      desc: "We study why your customers hesitate, what questions they need answered, and their urgency triggers so our copy overcomes their doubts.",
      icon: Users,
      takeaway: "Directly addresses the exact doubts keeping prospects from calling."
    },
    {
      step: "03",
      title: "Commercial Search Discovery",
      subtitle: "High-Intent Keyword Intelligence",
      desc: "We identify the exact search queries and commercial phrases local buyers type into Google when looking to hire someone immediately.",
      icon: Search,
      takeaway: "Ranks your website for high-value searches competitors ignore."
    },
    {
      step: "04",
      title: "Competitor White-Space",
      subtitle: "Market Gap Exploitation",
      desc: "We analyze the weaknesses of competitors in your city—their slow response times, poor websites, and bad SEO—to position you as the premium choice.",
      icon: Compass,
      takeaway: "Makes your business the obvious, trustworthy local authority."
    },
  ];

  return (
    <Section id="how-we-work" className="py-24 bg-gradient-to-b from-[#0a0d17] via-[#080c14] to-[#0b0e18] border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glow (hardware-accelerated, zero blur overhead) */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(8,145,178,0.12)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#31c0de] block mb-3">
            Research-First Approach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            We Don't Start With Templates.<br />
            <span className="text-[#31c0de]">We Start With Market Intelligence.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Before writing a single line of copy or setting up campaigns, we uncover the exact reasons buyers will choose you over competitors.
          </p>
        </div>

        {/* 4 Clean Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="rounded-3xl bg-[#0f1422]/90 border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all shadow-xl group"
              >
                <div>
                  {/* Step and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded">
                      PILLAR {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#31c0de]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#31c0de] uppercase tracking-wider block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{pillar.takeaway}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="max-w-4xl mx-auto text-center p-6 rounded-2xl bg-[#11131a] border border-white/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white">100% Customized Around Your Business Niche</div>
            <div className="text-xs text-gray-400">Zero generic templates. Zero outsourced filler content.</div>
          </div>
          <span className="text-xs font-semibold text-[#31c0de] px-3.5 py-1.5 rounded-full bg-[#31c0de]/10 border border-[#31c0de]/20">
            Commercial Intent Framework
          </span>
        </div>

      </Container>
    </Section>
  );
}
