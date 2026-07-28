import React from 'react';
import { Building2, Palette, HardHat, Zap, ArrowRight } from 'lucide-react';

export default function IndustrySolutionsSection({ onOpenBooking }) {
  const industries = [
    {
      title: "Architects",
      icon: Building2,
      challenge: "Design leads spend 15+ hours weekly answering routine discovery questions while managing active blueprints.",
      employeesUsed: "AI Receptionist + AI Sales Assistant",
      result: "Qualifies client budgets before booking initial consultations, saving 15 hours/week per senior architect."
    },
    {
      title: "Interior Designers",
      icon: Palette,
      challenge: "High volume of website inquiry forms go unhandled during busy client presentations and site visits.",
      employeesUsed: "AI Receptionist + AI Follow-Up Assistant",
      result: "Instant 5-second response to new inquiries with zero missed high-end renovation leads."
    },
    {
      title: "Builders & Contractors",
      icon: HardHat,
      challenge: "Subcontractors and site leads call constantly while project managers are on active job sites.",
      employeesUsed: "AI Estimator + AI Project Coordinator",
      result: "Generates quick proposal quotes and dispatches daily site schedule updates seamlessly."
    },
    {
      title: "Generator Dealers",
      icon: Zap,
      challenge: "Emergency power breakdown calls occur after 6 PM and go to voicemail. Expired AMC contracts leak revenue.",
      employeesUsed: "AI Receptionist + AI Support",
      result: "24/7 emergency call handling and automated renewal tracking for maintenance contracts."
    }
  ];

  return (
    <section id="industries" className="py-24 bg-[#FAFAFA] border-t border-[#ECECEC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Industry Solutions
          </h2>
          <p className="text-base text-[#666666]">
            Tailored AI workforces designed specifically for your industry's daily operating reality.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="card-clean p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111111]">{ind.title}</h3>
                  </div>

                  <div className="space-y-4 text-xs mb-8">
                    <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#666666] tracking-wider">Biggest Challenge:</span>
                      <p className="text-[#111111] leading-relaxed font-normal">{ind.challenge}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#2563EB] tracking-wider">AI Employees Deployed:</span>
                      <p className="text-[#111111] font-semibold">{ind.employeesUsed}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Business Result:</span>
                      <p className="text-emerald-950 font-bold">{ind.result}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-full bg-[#111111] hover:bg-[#222222] text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Build Workforce for {ind.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
