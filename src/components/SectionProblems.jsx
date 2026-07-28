import React from 'react';
import { motion } from 'framer-motion';
import { PhoneOff, Clock, FileWarning, ArrowUpRight } from 'lucide-react';

export default function SectionProblems() {
  const problems = [
    {
      icon: PhoneOff,
      stat: "42%",
      badge: "Lost Customers",
      title: "If you don't answer, they call the next guy.",
      description: "When you're busy on a job, phone calls go to voicemail. Most people just hang up and call your competitor instead."
    },
    {
      icon: Clock,
      stat: "24h+",
      badge: "Slow Responses",
      title: "People hate waiting for replies.",
      description: "If someone fills out a form on your website on Friday night, they want an answer now. Waiting until Monday means losing the job."
    },
    {
      icon: FileWarning,
      stat: "15h/wk",
      badge: "Too Much Paperwork",
      title: "Spending your nights doing admin work.",
      description: "Instead of spending time with family, you're stuck at your desk typing up quotes, answering emails, and doing paperwork."
    }
  ];

  return (
    <section className="bg-darkBg py-16 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-electricBlue mb-3 block">
            The Daily Struggle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            The Biggest Headaches of Running a Service Business.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            You're great at what you do, but dealing with the phone, chasing leads, and catching up on paperwork is taking over your life.
          </p>
        </div>

        {/* 3 Elevated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="bg-cardBg p-6 lg:p-10 rounded-3xl border border-white/10 shadow-sm hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-300">
                      <IconComponent className="w-6 h-6 text-gray-300" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-4xl font-extrabold text-white tracking-tight mb-4">
                    {item.stat}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Business Impact</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
