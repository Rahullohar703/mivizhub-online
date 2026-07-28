import React, { useState } from 'react';
import { Building2, Zap, ArrowRight, CheckCircle, AlertTriangle, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/industries';

export default function IndustrySolutions({ onOpenBooking }) {
  const [selectedIndustryId, setSelectedIndustryId] = useState("construction");

  const currentIndustry = INDUSTRIES_DATA.find(ind => ind.id === selectedIndustryId) || INDUSTRIES_DATA[0];

  return (
    <section id="industries" className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Overlay */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0066FF]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Vertical Enterprise Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            AI Employees Built For <span className="text-gradient-blue">Your Industry.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Tailored digital workforces trained on industry-specific terminology, workflows, and operating procedures.
          </p>
        </div>

        {/* Large Interactive Industry Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            const Icon = ind.icon === "Building2" ? Building2 : ind.icon === "Zap" ? Zap : Layers;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`px-6 py-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 text-sm font-bold ${
                  isSelected 
                    ? 'bg-[#0066FF] text-white border-white/30 shadow-xl shadow-[#0066FF]/25 scale-105' 
                    : 'bg-[#121215] text-zinc-400 hover:text-white hover:bg-[#18181D] border-white/5'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#0066FF]'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-Sectors Pills Bar */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-12">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
              Covered Sectors in {currentIndustry.name}:
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              Extensible Modular Architecture
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentIndustry.subSectors.map((sub, i) => (
              <span key={i} className="px-3 py-1.5 rounded-xl bg-white/5 text-xs font-medium text-zinc-200 border border-white/10">
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Industry Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Industry Pain Points & Solutions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pain Points Card */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Industry Specific Operational Friction
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentIndustry.painPoints.map((pain, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <h4 className="text-xs font-mono font-bold text-amber-300 mb-1">
                      {pain.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pain.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended AI Employees Roster */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0066FF]" />
                Deployable AI Workforce Roster
              </h3>
              <div className="space-y-3">
                {currentIndustry.aiEmployeesRoster.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                      <div>
                        <span className="text-xs font-bold text-white">{item.role}</span>
                        <p className="text-xs text-zinc-400">{item.task}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded shrink-0">
                      Pre-Trained
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Workflow Steps & Quantifiable Results (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* End-to-End Workflow Box */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-emerald-400" />
                Operational Workflow
              </h3>
              <div className="space-y-3">
                {currentIndustry.workflowSteps.map((wf, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs font-mono font-bold text-[#0066FF] px-2 py-0.5 rounded bg-[#0066FF]/10 shrink-0">
                      {wf.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">{wf.title}</h4>
                      <p className="text-[11px] text-zinc-400 mt-0.5">{wf.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantifiable Business Results Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0066FF]/20 via-[#121216] to-[#121216] border border-[#0066FF]/30 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                Verified Sector Financial Results
              </h3>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-zinc-400">Response Speed</span>
                  <p className="text-xl font-extrabold text-white">{currentIndustry.metrics.responseSpeed}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-zinc-400">Missed Calls</span>
                  <p className="text-xl font-extrabold text-emerald-400">{currentIndustry.metrics.missedCallRate}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                <span className="text-xs font-mono text-zinc-400">Average Revenue Impact</span>
                <p className="text-base font-extrabold text-gradient-blue mt-0.5">{currentIndustry.metrics.revenueImpact}</p>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-[#0066FF] hover:bg-[#1A75FF] text-white text-xs font-bold shadow-lg shadow-[#0066FF]/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Deploy AI Workforce For {currentIndustry.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
