import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { Check, ArrowRight } from 'lucide-react';

export default function SectionMarketing({ onOpenBooking }) {
  const pillars = [
    {
      step: "01",
      title: "Google Maps & Local Search",
      desc: "Dominate the local map pack and search results when property owners and builders in your area search for your trade.",
      points: [
        "Top 3 Google Map Pack rankings in your territory",
        "High-intent search ads that deliver ready-to-buy calls"
      ]
    },
    {
      step: "02",
      title: "Turn Clicks Into Scheduled Bids",
      desc: "Fast, mobile-friendly landing pages engineered specifically for homeowners and commercial project managers to request an estimate.",
      points: [
        "Simple quote request flow with project detail capture",
        "Instant SMS confirmation sent immediately to each lead"
      ]
    },
    {
      step: "03",
      title: "Honest Job & Lead Attribution",
      desc: "Know exactly how many phone calls, quote requests, and won contracts came in, and what each job cost to acquire.",
      points: [
        "Plain-English reports (calls, bids, cost per acquired job)",
        "Zero vanity metrics or agency fluff"
      ]
    }
  ];

  return (
    <Section id="marketing" className="py-20 scroll-mt-24 bg-gradient-to-b from-[#0e101f] via-[#0d1829] to-[#0a1220] border-t border-white/10 relative overflow-hidden">
      {/* Subtle cyan-indigo ambient spotlight */}
      <div className="absolute top-0 right-1/3 w-[650px] h-[320px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.08)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Growth Plans Deep Dive
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Bring High-Value Projects Through The Door.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            We build and manage your complete contractor marketing engine so you get a predictable flow of estimate requests without burning cash on useless clicks.
          </p>
        </div>

        {/* 3 Clean, Wide Expansive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#101726]/90 border border-white/10 rounded-3xl p-8 sm:p-9 flex flex-col justify-between hover:border-indigo-500/40 transition-colors shadow-xl"
            >
              <div>
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 inline-block mb-4">
                  Step {pillar.step}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                <div className="space-y-3 pt-5 border-t border-white/10">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="bg-[#10172a]/90 border border-white/10 rounded-3xl p-8 sm:p-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Want a steady flow of high-value bids?
            </h4>
            <p className="text-sm sm:text-base text-gray-300">
              Let's review your local service area and map out the exact strategy to win top rankings.
            </p>
          </div>
          <ArrowFillButton 
            btnText="Book a Contractor Growth Review" 
            onClick={() => onOpenBooking('Growth ($500/mo)')} 
            bgColor="#10141e"
            textColor="#ffffff"
            fillBgColor="#4F46E5"
            fillTextColor="#ffffff"
            arrowColor="#ffffff"
            hoverArrowColor="#ffffff"
            className="border-indigo-500/30 shadow-lg shadow-indigo-600/20"
          />
        </div>

      </Container>
    </Section>
  );
}


