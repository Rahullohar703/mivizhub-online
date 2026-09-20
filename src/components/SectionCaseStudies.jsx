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
    <Section id="case-studies" className="py-20 bg-[#0c0c10] border-t border-white/10">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
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

        {/* 3 High-Impact Cards - Wide & Expansive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-[#121216] border border-white/10 rounded-3xl p-8 sm:p-9 flex flex-col justify-between hover:border-[#31c0de]/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                  <span className="text-base font-bold text-white">
                    {study.industry}
                  </span>
                  <span className="text-xs font-semibold text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded-full border border-[#31c0de]/20">
                    {study.badge}
                  </span>
                </div>

                {/* Big Result Stat */}
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white block mb-1 tracking-tight">
                    {study.stat}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400">
                    {study.statDesc}
                  </span>
                </div>

                {/* Before / After 1-Liners */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="bg-[#181820] p-4 rounded-xl border border-white/5">
                    <span className="text-rose-400 font-bold block mb-1 text-xs uppercase tracking-wider">Before:</span>
                    <p className="text-gray-300 leading-relaxed">{study.before}</p>
                  </div>

                  <div className="bg-[#181820] p-4 rounded-xl border border-white/5">
                    <span className="text-[#31c0de] font-bold block mb-1 text-xs uppercase tracking-wider">With MivizHub:</span>
                    <p className="text-gray-200 leading-relaxed">{study.after}</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 text-xs text-gray-500 font-medium">
                Verified client workflow
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}

