import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Cpu, HeartHandshake } from 'lucide-react';

export default function SectionWhyUs() {
  const pillars = [
    {
      icon: Layers,
      title: "Turnkey Service, Not Software",
      desc: "You aren't buying complex SaaS tools your team has to manage. We handle 100% of the build, onboarding, training, and ongoing management."
    },
    {
      icon: Cpu,
      title: "Zero Disruption Architecture",
      desc: "Your digital workforce integrates directly with your existing phone providers, calendar tools, WhatsApp, and CRM. No operational downtime."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Ongoing Optimization",
      desc: "We continuously audit conversation logs, update business knowledge bases, and refine voice & chat prompts as your service offerings expand."
    }
  ];

  return (
    <section className="bg-[#09090B] py-28 lg:py-40 text-white relative overflow-hidden bg-grid-pattern-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
            Enterprise Guarantee
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Why Market Leaders Partner With Us.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            We operate as your specialized AI implementation partner—delivering enterprise-grade reliability, data security, and bespoke AI employee builds.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="p-8 lg:p-10 rounded-3xl bg-gray-950 border border-gray-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800/80 flex items-center gap-2 text-xs font-mono text-blue-400">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Enterprise Implementation</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
