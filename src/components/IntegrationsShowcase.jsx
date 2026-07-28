import React, { useState } from 'react';
import { ShieldCheck, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { INTEGRATIONS_DATA } from '../data/integrations';

export default function IntegrationsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "CRM & Sales", "Communication", "Productivity", "Industry Specific"];

  const filteredIntegrations = activeCategory === "All" 
    ? INTEGRATIONS_DATA 
    : INTEGRATIONS_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="integrations" className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Native Enterprise Connectivity
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Integrates With <span className="text-gradient-blue">Your Tech Stack.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            MivizHub AI Employees connect directly into your existing CRMs, calendar systems, communication channels, and ERPs with zero workflow disruption.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeCategory === cat 
                  ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/25' 
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIntegrations.map((item, i) => (
            <div
              key={i}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white font-mono font-bold text-xs flex items-center justify-center group-hover:bg-[#0066FF] group-hover:border-white/30 transition-colors">
                    {item.logoText}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#3385FF] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Native API Sync
                </span>
                <span className="text-zinc-500">Instant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Security Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center text-[#0066FF] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Enterprise Security & Compliance Ready</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                SOC2 Type II security framework, ISO 27001 data processing standards, and end-to-end TLS 1.3 encryption.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">SOC2 Type II</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">ISO 27001</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">256-Bit TLS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
