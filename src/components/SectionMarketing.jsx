import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export default function SectionMarketing({ onOpenBooking }) {
  const pillars = [
    {
      step: "01",
      title: "Google & Local Search",
      desc: "Show up at the very top of Google Maps and search when people in your city need your work.",
      points: [
        "Top rankings on Google Maps",
        "High-intent search ads that bring real calls"
      ]
    },
    {
      step: "02",
      title: "Turn Clicks Into Calls",
      desc: "Make it dead simple for homeowners and commercial clients to request an estimate in 30 seconds.",
      points: [
        "Fast quote request pages with zero confusion",
        "Instant text confirmation sent to every lead"
      ]
    },
    {
      step: "03",
      title: "Honest Monthly Reports",
      desc: "Know exactly how many calls and quote requests came in, and what each job cost to acquire.",
      points: [
        "Plain-English summary (calls, leads, cost per job)",
        "Zero vanity metrics or agency fluff"
      ]
    }
  ];

  return (
    <Section id="marketing" className="py-20 bg-[#09090b] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Service 01: Marketing & Growth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Bring More Customers In.
          </h2>
          <p className="text-base text-gray-300">
            We manage your entire marketing system so you get a predictable flow of quote requests without burning money on useless clicks.
          </p>
        </div>

        {/* 3 Clean, Lightweight Cards (Zero Wall of Text) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#121216] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
            >
              <div>
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20 inline-block mb-3">
                  Step {pillar.step}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {pillar.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
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
        <div className="bg-[#14141a] border border-white/10 rounded-2xl p-6 sm:p-7 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want a steady flow of quote requests?
            </h4>
            <p className="text-sm text-gray-400">
              Let's review your market and show you what it will take to get consistent leads.
            </p>
          </div>
          <Button 
            onClick={onOpenBooking} 
            variant="primary" 
            className="px-6 py-3.5 flex-shrink-0 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl border-0 shadow-lg shadow-indigo-600/30"
          >
            Book a Marketing Review
          </Button>
        </div>

      </Container>
    </Section>
  );
}


