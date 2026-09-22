import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Compass, Hammer, Magnet, CheckCircle, LineChart } from 'lucide-react';

export default function GrowthMethodology() {
  const stages = [
    {
      num: "01",
      title: "Understand",
      subtitle: "Research & Audit",
      desc: "Audit your offer, interview customer motivations, and identify gaps competitors leave wide open.",
      icon: Compass,
      deliverable: "Strategic Growth Blueprint"
    },
    {
      num: "02",
      title: "Build",
      subtitle: "Digital Foundation",
      desc: "Develop a modern website, optimize your Google Business Profile, and install tracking analytics.",
      icon: Hammer,
      deliverable: "High-Converting Web Setup"
    },
    {
      num: "03",
      title: "Attract",
      subtitle: "Search & Visibility",
      desc: "Publish weekly SEO articles and strategic social posts to pull ready-to-buy prospects from search engines.",
      icon: Magnet,
      deliverable: "Top 3 Local Map Rankings"
    },
    {
      num: "04",
      title: "Convert",
      subtitle: "Inbound Capture",
      desc: "Direct phone routing, WhatsApp pings, and streamlined quote forms that capture leads in under 30 seconds.",
      icon: CheckCircle,
      deliverable: "Direct Customer Inquiries"
    },
    {
      num: "05",
      title: "Scale",
      subtitle: "Optimization & ROI",
      desc: "Review keyword rankings and ad attribution data every month to double down on what produces revenue.",
      icon: LineChart,
      deliverable: "Compounding Monthly ROI"
    }
  ];

  return (
    <Section id="methodology" className="py-24 bg-gradient-to-b from-[#090c14] via-[#0d1424] to-[#080b12] border-b border-white/10 relative overflow-hidden">
      {/* Ambient blueprint lighting (hardware-accelerated, zero blur overhead) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(49,192,222,0.12)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#31c0de] block mb-3">
            The Delivery Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            One Cohesive System.<br />
            <span className="text-[#31c0de]">From Zero Visibility to Daily Inbound Calls.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            A continuous growth engine turning cold searches into high-intent quotes and repeat customer business.
          </p>
        </div>

        {/* 5-Stage Innovation Pipeline */}
        <div className="relative max-w-6xl mx-auto mb-14">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div key={stage.title} className="h-full rounded-2xl bg-[#11131a] border border-white/10 hover:border-white/20 p-5 sm:p-6 flex flex-col justify-between transition-all shadow-xl group">
                  <div>
                    {/* Top Row: Step number and clean icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded">
                        {stage.num}
                      </span>
                      
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#31c0de]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-[#31c0de] uppercase tracking-wider block mb-1">
                      {stage.subtitle}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {stage.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mb-5">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Deliverable Badge */}
                  <div className="pt-3 border-t border-white/5 text-xs">
                    <span className="text-gray-400 block text-[11px] mb-0.5">MILESTONE:</span>
                    <span className="text-white font-semibold">{stage.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reassurance Footer Banner */}
        <div className="max-w-4xl mx-auto text-center p-5 rounded-2xl bg-[#11131a] border border-white/10">
          <p className="text-xs sm:text-sm text-gray-300 font-medium">
            Every stage connects directly: research informs your website, content powers your SEO, and SEO drives customer inquiries.
          </p>
        </div>

      </Container>
    </Section>
  );
}
