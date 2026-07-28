import React from 'react';
import { Sliders, Users, RefreshCw } from 'lucide-react';

export default function WhyMivizHubSection() {
  const pillars = [
    {
      title: "We build around YOUR workflow.",
      desc: "No complicated software overhauls. Your AI Employees connect to your existing phone numbers, calendar, and email without disrupting how you work.",
      icon: Sliders
    },
    {
      title: "We don't replace your team.",
      desc: "AI Employees take over repetitive phone tag, manual data entry, and FAQ answers so your human staff can focus on high-value client work.",
      icon: Users
    },
    {
      title: "We continuously improve every AI Employee.",
      desc: "Every digital employee is continuously updated with your newest pricing, project SOPs, and service policies with full human supervision.",
      icon: RefreshCw
    }
  ];

  return (
    <section id="why-mivizhub" className="py-24 bg-[#FAFAFA] border-t border-[#ECECEC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Why MivizHub
          </h2>
          <p className="text-base text-[#666666]">
            Built with simplicity, clarity, and genuine operational respect for business owners.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-clean p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
