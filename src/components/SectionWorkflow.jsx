import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SectionWorkflow() {
  const steps = [
    {
      num: "01",
      icon: Search,
      timeframe: "Day 1 – 2",
      title: "Workflow & Operations Audit",
      description: "We analyze your current inbound phone volume, inquiry sources, quote workflows, and CRM software to map out your exact operational bottlenecks."
    },
    {
      num: "02",
      icon: Cpu,
      timeframe: "Day 3 – 5",
      title: "AI Employee Customization",
      description: "We configure your AI employees with your specific pricing rules, company FAQs, brand tone of voice, calendar rules, and internal escalation protocols."
    },
    {
      num: "03",
      icon: Rocket,
      timeframe: "Day 6 – 7",
      title: "Integration & Go-Live",
      description: "We connect your AI employees to your live phone lines, WhatsApp, email, and CRM system with zero downtime or disruption to your existing operations."
    },
    {
      num: "04",
      icon: ShieldCheck,
      timeframe: "Ongoing",
      title: "Managed Optimization & Support",
      description: "Our team continuously monitors conversation quality, updates your AI employee knowledge base as your business grows, and provides dedicated account management."
    }
  ];

  return (
    <section className="bg-gray-50 py-28 lg:py-40 border-y border-gray-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-600 mb-3 block">
            Managed Implementation Service
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            We Build It. You Run Your Business.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
            Zero technical complexity for your team. We handle 100% of the build, integration, testing, and ongoing optimization.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-gray-900 font-mono">
                      {step.num}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 mb-6">
                    <IconComp className="w-5 h-5 text-gray-800" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Fully Managed Step</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
