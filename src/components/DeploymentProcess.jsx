import React from 'react';
import { Search, Cpu, Rocket, BookOpen, Activity, RefreshCw, ArrowRight } from 'lucide-react';

export default function DeploymentProcess({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "Understand Business",
      desc: "We audit your inbound communication channels, phone call volume, CRM workflows, and current administrative bottlenecks.",
      icon: Search
    },
    {
      num: "02",
      title: "Design AI Employee",
      desc: "We build custom knowledge bases, set voice/tone guidelines, define escalation rules, and configure CRM integration fields.",
      icon: Cpu
    },
    {
      num: "03",
      title: "Deploy",
      desc: "Seamless sub-second integration into your existing phone numbers, WhatsApp Business API, web forms, and internal channels.",
      icon: Rocket
    },
    {
      num: "04",
      title: "Train",
      desc: "Supervised fine-tuning with your real historical client interactions to ensure 100% brand alignment and compliance.",
      icon: BookOpen
    },
    {
      num: "05",
      title: "Monitor",
      desc: "Real-time executive telemetric dashboard tracking conversations, lead qualification scores, and human escalation logs.",
      icon: Activity
    },
    {
      num: "06",
      title: "Improve",
      desc: "Continuous autonomous optimization based on new operational data, product rates, and changing business requirements.",
      icon: RefreshCw
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Deployment Lifecycle
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How It <span className="text-gradient-blue">Works.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            From initial operational audit to active 24/7 digital workforce execution in 48 hours.
          </p>
        </div>

        {/* 6-Step Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#0066FF] px-2.5 py-1 rounded bg-[#0066FF]/10 border border-[#0066FF]/20">
                      STEP {st.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>Phase {st.num} Execution</span>
                  <span className="text-emerald-400">Managed Setup</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0D0D12] via-[#14141E] to-[#0D0D12] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">Ready to deploy your digital workforce?</h3>
            <p className="text-xs text-zinc-400 mt-1">Our engineering team manages the entire onboarding and knowledge-base setup.</p>
          </div>
          
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0066FF] text-white text-xs font-bold shadow-lg shadow-[#0066FF]/30 hover:bg-[#1A75FF] transition-all flex items-center justify-center gap-2 border border-white/20 shrink-0"
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
