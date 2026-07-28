import React from 'react';
import { Building2, Zap, ArrowRight, Shield, CheckCircle2, TrendingUp } from 'lucide-react';

export default function UseCasesSection({ onOpenBooking }) {
  const useCases = [
    {
      sector: "Commercial & Residential Builders",
      profile: "General Contractors & Developers ($5M – $50M Turnover)",
      icon: Building2,
      challenge: "Job site superintendents miss 20+ inquiry calls per week while managing active construction sites. Proposal generation takes 3 days.",
      solution: "Deploys AI Receptionist + AI Estimator + AI Project Coordinator.",
      impact: "100% call capture rate, sub-15 minute PDF quotes, and instant subcontractor daily schedule verification.",
      badge: "Construction"
    },
    {
      sector: "Generator Dealers & AMC Providers",
      profile: "DG Set Rental Fleets & Industrial Power Suppliers",
      icon: Zap,
      challenge: "After-hours factory breakdown emergency calls go to voicemail. Expired AMC contracts leak revenue without automated tracking.",
      solution: "Deploys AI Receptionist (24/7 Breakdown Dispatch) + AI Follow-Up Assistant (AMC Renewals).",
      impact: "Zero missed breakdown calls, automated technician routing, and +$95k/month in AMC contract renewals.",
      badge: "Power Systems"
    },
    {
      sector: "Architects & Interior Designers",
      profile: "High-End Architectural Studios & Luxury Renovation Firms",
      icon: Building2,
      challenge: "Designers spend 15+ hours weekly answering routine discovery questions and scheduling preliminary site consultations.",
      solution: "Deploys AI Receptionist + AI Sales Representative.",
      impact: "Qualifies client project budgets before booking discovery calls, saving 15 hours/week per senior designer.",
      badge: "Design & Architecture"
    }
  ];

  return (
    <section className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Enterprise Sector Fit
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Designed For <span className="text-gradient-blue">Businesses Like Yours.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Real enterprise use cases showing how MivizHub digital workforces solve industry-specific operational friction.
          </p>
        </div>

        {/* Use Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div
                key={i}
                className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between relative group hover:border-[#0066FF]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      {uc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{uc.sector}</h3>
                  <p className="text-xs font-mono text-zinc-400 mb-6">{uc.profile}</p>

                  <div className="space-y-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-amber-400 font-bold uppercase text-[10px]">Operational Challenge:</span>
                      <p className="text-zinc-300 leading-relaxed">{uc.challenge}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-[#3385FF] font-bold uppercase text-[10px]">AI Employee Deployment:</span>
                      <p className="text-zinc-300 leading-relaxed">{uc.solution}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15 space-y-1">
                      <span className="font-mono text-emerald-400 font-bold uppercase text-[10px]">Measured Business Impact:</span>
                      <p className="text-emerald-300 leading-relaxed">{uc.impact}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="mt-6 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-colors flex items-center justify-center gap-2 group-hover:border-[#0066FF]/40"
                >
                  <span>Build AI Workforce For This Sector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
