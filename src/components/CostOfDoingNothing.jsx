import React, { useState } from 'react';
import { DollarSign, AlertCircle, TrendingUp, ShieldCheck, ArrowRight, Clock, Zap, Users } from 'lucide-react';

export default function CostOfDoingNothing({ onOpenBooking }) {
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState(60);
  const [avgDealValue, setAvgDealValue] = useState(15000);
  const [currentResponseHours, setCurrentResponseHours] = useState(4);

  // Mathematical Model for Cost of Doing Nothing
  // Industry studies show 35% of leads calling after hours or waiting >1hr go to a competitor
  const missedLeadRate = Math.min(0.45, 0.15 + (currentResponseHours * 0.05));
  const lostDealsPerMonth = Math.round(inquiriesPerMonth * missedLeadRate * 0.20); // 20% would have closed
  const lostDealsPerYear = lostDealsPerMonth * 12;
  const annualRevenueLost = lostDealsPerYear * avgDealValue;
  
  // With MivizHub (Sub-2s response, 0 missed calls, 100% follow-up capture)
  const recoveredDealsPerYear = Math.round(lostDealsPerYear * 0.75); // 75% recovery rate
  const annualRecoveredRevenue = recoveredDealsPerYear * avgDealValue;

  const businessMetrics = [
    { title: "10x Faster Response", desc: "Sub-2 second SLA across phone, WhatsApp, email, and web forms." },
    { title: "0 Missed Leads", desc: "100% inquiry capture day, night, weekends, and holidays." },
    { title: "24/7 Availability", desc: "Zero downtime or holiday gaps without staff overtime pay." },
    { title: "75% Less Repetitive Work", desc: "Frees senior estimators, architects, & sales leads for strategy." },
    { title: "89% CSAT Score", desc: "Instant, accurate, professional responses on every touchpoint." },
    { title: "3.4x ROI in 90 Days", desc: "Rapid payback via recovered lost deals and payroll efficiency." }
  ];

  return (
    <section id="cost-calculator" className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0066FF]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Financial Impact & Revenue Leakage Analysis
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Cost Of <span className="text-gradient-blue">Doing Nothing.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            See how much revenue your business loses each year to delayed response times and unhandled after-hours inquiries.
          </p>
        </div>

        {/* INTERACTIVE CALCULATOR ENGINE */}
        <div className="mb-20 p-6 sm:p-10 rounded-2xl bg-[#0D0D11] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 pb-3 border-b border-white/10">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Input Your Business Parameters
              </h3>

              {/* Slider 1: Monthly Inquiries */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-300 font-semibold">Monthly Inbound Inquiries & Calls:</span>
                  <span className="text-[#0066FF] font-bold text-sm">{inquiriesPerMonth} Inquiries/Mo</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={inquiriesPerMonth}
                  onChange={(e) => setInquiriesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>10</span>
                  <span>150</span>
                  <span>300+</span>
                </div>
              </div>

              {/* Slider 2: Average Deal Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-300 font-semibold">Average Deal / Contract Value ($):</span>
                  <span className="text-[#0066FF] font-bold text-sm">${avgDealValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>$2,000</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              {/* Slider 3: Current Response Hours */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-300 font-semibold">Current Average First Response Time:</span>
                  <span className="text-amber-400 font-bold text-sm">{currentResponseHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="24"
                  step="0.5"
                  value={currentResponseHours}
                  onChange={(e) => setCurrentResponseHours(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>30 Mins</span>
                  <span>6 Hours</span>
                  <span>24 Hours (Next Day)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Leads contacted after 30 minutes drop conversion probability by 80%. After-hours calls without an immediate answer usually call the next competitor on Google.
                </span>
              </div>
            </div>

            {/* Results Display Panel (5 Cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-[#16161E] to-[#101015] border border-white/15 space-y-6">
              
              <div className="space-y-1 text-center">
                <span className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider">
                  Estimated Annual Revenue Lost
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-red-400 font-mono tracking-tight">
                  -${annualRevenueLost.toLocaleString()} <span className="text-xs text-zinc-400 font-sans font-normal">/ year</span>
                </p>
                <p className="text-xs text-zinc-400">
                  ~{lostDealsPerYear} high-value contracts lost to delayed response & missed calls
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/40 text-center space-y-1">
                <span className="text-xs font-mono uppercase text-[#3385FF] font-bold tracking-wider">
                  With MivizHub AI Workforce Recovery
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">
                  +${annualRecoveredRevenue.toLocaleString()} <span className="text-xs text-zinc-300 font-sans font-normal">/ year</span>
                </p>
                <p className="text-xs text-emerald-300 font-medium">
                  Recovers ~{recoveredDealsPerYear} contracts with 24/7 instant 2-second response
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#1A75FF] text-white font-bold text-xs shadow-xl shadow-[#0066FF]/30 transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <span>Stop Revenue Leakage Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Quantifiable Business Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessMetrics.map((metric, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 flex items-center justify-center font-bold text-sm mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{metric.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{metric.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
