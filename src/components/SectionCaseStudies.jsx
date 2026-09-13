import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionCaseStudies() {
  const caseStudies = [
    {
      industry: "General Contractor",
      badge: "AI Staffing",
      stat: "Zero Missed Calls",
      statDesc: "+$14,000 extra work booked in Month 1",
      before: "Owner missed 4-6 calls a day on noisy job sites. Leads called competitors instead.",
      after: "AI receptionist picks up in 1 ring 24/7 and books estimator site visits on his calendar."
    },
    {
      industry: "Healthcare Clinic",
      badge: "AI Staffing",
      stat: "Zero Hold Times",
      statDesc: "35% increase in confirmed bookings",
      before: "10-minute morning phone queues, stressed receptionists, and frustrated patients.",
      after: "AI handles routine scheduling and clinic FAQs instantly, freeing front desk to care for patients."
    },
    {
      industry: "Home Services & Roofing",
      badge: "Marketing + AI Staffing",
      stat: "+28% More Jobs Won",
      statDesc: "From automated quote follow-up",
      before: "Sent estimates sat without follow-up while owner was in the field, losing jobs to competitors.",
      after: "AI qualifies web leads in 45s and automatically nurtures unclosed quotes until booked."
    }
  ];

  return (
    <Section id="case-studies" className="py-20 bg-transparent border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-emerald-500/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Proven In The Field
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Real Results for Real Businesses
          </h2>
          <p className="text-base text-gray-300">
            How solving customer acquisition and workload creates immediate growth.
          </p>
        </div>

        {/* 3 High-Impact Cards (Scannable in 5 seconds) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="card-base p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-sm font-bold text-white">
                    {study.industry}
                  </span>
                  <span className="text-xs font-semibold text-[#31c0de] bg-[#31c0de]/10 px-2.5 py-0.5 rounded border border-[#31c0de]/20">
                    {study.badge}
                  </span>
                </div>

                {/* Big Result Stat */}
                <div className="mb-5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white block mb-0.5 tracking-tight">
                    {study.stat}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {study.statDesc}
                  </span>
                </div>

                {/* Before / After 1-Liners with Tinted Visual Contrast */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="bg-rose-950/20 border border-rose-500/20 p-3.5 rounded-xl">
                    <span className="text-rose-400 font-bold block mb-1 text-xs uppercase tracking-wider">Before:</span>
                    <p className="text-gray-300 leading-snug">{study.before}</p>
                  </div>

                  <div className="bg-[#31c0de]/5 border border-[#31c0de]/25 p-3.5 rounded-xl shadow-sm shadow-cyan-950/20">
                    <span className="text-[#31c0de] font-bold block mb-1 text-xs uppercase tracking-wider">With MivizHub:</span>
                    <p className="text-gray-200 leading-snug">{study.after}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/5 text-[11px] text-gray-400 font-medium flex items-center justify-between">
                <span>Verified client workflow</span>
                <span className="text-emerald-400">● Live</span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}

