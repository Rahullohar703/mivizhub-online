import React from 'react';
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We audit your daily customer calls, inquiry volume, and administrative friction points.",
      icon: Search
    },
    {
      num: "02",
      title: "Build",
      desc: "We customize your AI Employees with your company guidelines, pricing, and business SOPs.",
      icon: Wrench
    },
    {
      num: "03",
      title: "Deploy",
      desc: "Seamless activation into your existing business phone line, website, and email in 48 hours.",
      icon: Rocket
    },
    {
      num: "04",
      title: "Optimize",
      desc: "Continuous supervised monitoring to ensure every customer interaction is accurate and professional.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base text-[#666666]">
            A simple 4-step process to deploy your digital workforce without changing how you run your business.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="card-clean p-8 rounded-3xl flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#2563EB] px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                      STEP {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#ECECEC] text-[#111111] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECECEC] text-[11px] text-[#888888]">
                  Phase {s.num} Complete
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
