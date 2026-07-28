import React, { useState } from 'react';
import { AlertTriangle, Bot, Clock, Sparkles, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function TrustedWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "problem",
      title: "Business Problem",
      subtitle: "The Operations Bottleneck",
      icon: AlertTriangle,
      iconColor: "text-amber-400",
      bgGlow: "from-amber-500/10",
      desc: "Inquiries land after hours. Phone rings while your project leads are on site. Proposals take 3 days to compile. Cold leads decay without follow-up.",
      metric: "35% Inquiries Missed Or Delayed"
    },
    {
      id: "employee",
      title: "AI Employee Deployed",
      subtitle: "Sub-Second Activation",
      icon: Bot,
      iconColor: "text-[#0066FF]",
      bgGlow: "from-[#0066FF]/20",
      desc: "Custom AI Employees (Receptionist, Sales Rep, Estimator) integrate directly with your phone system, WhatsApp, and CRM within 48 hours.",
      metric: "< 2s Instant SLA Response"
    },
    {
      id: "execution",
      title: "Works 24/7",
      subtitle: "Zero Fatigue • Zero Downtime",
      icon: Clock,
      iconColor: "text-emerald-400",
      bgGlow: "from-emerald-500/10",
      desc: "Handles unlimited concurrent calls, answers FAQs, collects specs, drafts PDF estimates, and books calendar meetings day, night, weekends, and holidays.",
      metric: "100% Operational Uptime"
    },
    {
      id: "time-saved",
      title: "Your Team Saves Time",
      subtitle: "Eliminate Manual Grunt Work",
      icon: Sparkles,
      iconColor: "text-cyan-400",
      bgGlow: "from-cyan-500/10",
      desc: "Senior estimators, engineers, and sales directors stop wasting hours on routine data entry and phone tag to focus 100% on high-value closing.",
      metric: "20+ Hours/Week Saved Per Person"
    },
    {
      id: "growth",
      title: "Business Grows",
      subtitle: "Scalable Profit Margin",
      icon: TrendingUp,
      iconColor: "text-blue-400",
      bgGlow: "from-blue-500/20",
      desc: "Capture 100% of revenue opportunities without expanding administrative payroll. Expand operational throughput with zero friction.",
      metric: "3.4x Average ROI In 90 Days"
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Autonomous Operating Sequence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Trusted <span className="text-gradient-blue">AI Workflow.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            How MivizHub transforms manual administrative friction into an autonomous, 24/7 revenue engine.
          </p>
        </div>

        {/* Animated Step Nodes Timeline Bar */}
        <div className="relative mb-16">
          
          {/* Horizontal Line connecting nodes */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/30 via-[#0066FF]/50 to-emerald-500/30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative group ${
                    isActive 
                      ? 'bg-[#15151C] border-[#0066FF] shadow-xl shadow-[#0066FF]/15 scale-[1.02]' 
                      : 'bg-[#101014] border-white/5 hover:border-white/20 hover:bg-[#141419]'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                      STEP 0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${step.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-3">
                    {step.subtitle}
                  </p>
                  
                  <div className="mt-2 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono font-semibold text-[#0066FF]">
                    <span>{step.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Spotlight Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#14141A] to-[#0D0D10] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0066FF]/10 text-[#3385FF] border border-[#0066FF]/20 text-xs font-mono uppercase font-semibold mb-3">
                Workflow Phase 0{activeStep + 1}: {steps[activeStep].title}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {steps[activeStep].subtitle}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                  Impact Metric: <strong className="text-white">{steps[activeStep].metric}</strong>
                </div>
                <div className="px-3.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  Human Oversight: <strong className="text-white">Full Approval Control</strong>
                </div>
              </div>
            </div>

            {/* Quick Step Navigation Actions */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-xs font-mono text-zinc-400">Navigate Workflow:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#0066FF] hover:bg-[#1A75FF] text-white shadow-lg shadow-[#0066FF]/25 transition-colors flex items-center gap-1"
                >
                  Next Step →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
