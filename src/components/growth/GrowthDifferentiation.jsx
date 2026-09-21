import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Search, Target, Share2, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function GrowthDifferentiation() {
  const blocks = [
    {
      title: "Research Before Creation",
      desc: "We study your niche, competitors, audience and search behavior before creating content.",
      icon: Search,
      badge: "In-Depth Discovery",
      detail: "Avoid blind guessing. Every piece of copy targets verified intent and buyer behavior."
    },
    {
      title: "Strategy Before Posting",
      desc: "Every piece of content has a purpose — visibility, authority, engagement, education or conversion.",
      icon: Target,
      badge: "Commercial Intent",
      detail: "Zero vanity metrics. Every article and post moves prospects closer to a buying decision."
    },
    {
      title: "One Idea. Multiple Channels.",
      desc: "A strong idea can become an article, LinkedIn post, Instagram content, Google Business content and more.",
      icon: Share2,
      badge: "Compound Distribution",
      detail: "Repurpose high-performing concepts natively across all channels to maximize reach and ROI."
    },
    {
      title: "Continuous Optimization",
      desc: "We review performance and continuously improve what we're doing based on what the data tells us.",
      icon: TrendingUp,
      badge: "Data-Driven Iteration",
      detail: "Monthly reviews ensure campaigns, keywords, and landing pages sharpen over time."
    },
  ];

  return (
    <Section id="differentiation" className="py-20 bg-[#0b0b0e] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Mivizhub Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Not Generic Marketing. Built Around Your Business.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            We don't create content simply to fill a calendar. We build each activity around your market, audience, positioning and business objectives.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-3xl bg-[#121216] border border-white/10 hover:border-white/20 p-8 sm:p-10 flex flex-col justify-between transition-colors shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#31c0de] px-3 py-1 rounded-full bg-[#31c0de]/10 border border-[#31c0de]/20">
                      {b.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#31c0de]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {b.title}
                  </h3>

                  <p className="text-base text-gray-300 font-normal leading-relaxed mb-6">
                    {b.desc}
                  </p>
                </div>

                <div className="bg-[#18181f] p-3.5 rounded-xl border border-white/5 flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#31c0de] flex-shrink-0" />
                  <span>{b.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
