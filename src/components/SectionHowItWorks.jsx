import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { ArrowRight } from 'lucide-react';

export default function SectionHowItWorks({ onOpenBooking }) {
  const steps = [
    {
      num: "1",
      title: "Understand",
      emoji: "🔍",
      desc: "We discuss your business, industry, goals, current challenges, and growth opportunities.",
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/25",
      borderHover: "hover:border-blue-400 group-hover:border-t-blue-500"
    },
    {
      num: "2",
      title: "Identify",
      emoji: "🎯",
      desc: "We identify where your business is losing opportunities, wasting time, or struggling to scale.",
      gradient: "from-indigo-600 to-purple-600",
      shadow: "shadow-indigo-500/25",
      borderHover: "hover:border-indigo-400 group-hover:border-t-indigo-500"
    },
    {
      num: "3",
      title: "Build",
      emoji: "🛠️",
      desc: "We recommend and implement the right combination of marketing, lead management, and automation.",
      gradient: "from-cyan-600 to-emerald-500",
      shadow: "shadow-cyan-500/25",
      borderHover: "hover:border-cyan-400 group-hover:border-t-cyan-500"
    },
    {
      num: "4",
      title: "Improve",
      emoji: "🚀",
      desc: "We monitor performance, identify improvements, and optimise your systems over time.",
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/25",
      borderHover: "hover:border-emerald-400 group-hover:border-t-emerald-500"
    }
  ];

  return (
    <Section id="how-it-works" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10 px-4 sm:px-6">
        
        {/* Section Header with Consistent Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <span>📋</span>
            <span>The Process</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Simple to Start. <span className="text-blue-600">Built Around Your Business.</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A structured, collaborative approach to improving your growth and operations.
          </p>
        </div>

        {/* 4 Steps Connected Roadmap with Real Emojis */}
        <div className="relative mb-16">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-16 right-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-full z-0 opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((st, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className={`group bg-slate-50/90 hover:bg-white border-2 border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative cursor-default ${st.borderHover}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${st.gradient} flex items-center justify-center shadow-lg ${st.shadow} text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {st.emoji}
                    </div>
                    
                    <span className="font-mono text-xs font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Step {st.num}: {st.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                {/* Connecting arrow indicator for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-300">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <ArrowFillButton 
            onClick={() => onOpenBooking ? onOpenBooking('Process Strategy Call') : null}
            btnText="Book Your Strategy Call"
            size="lg"
            bgColor="#0f172a"
            textColor="#ffffff"
            fillBgColor="#2563eb"
            fillTextColor="#ffffff"
            arrowColor="#ffffff"
            hoverArrowColor="#ffffff"
            className="w-full sm:w-auto shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300"
          />
        </div>

      </Container>
    </Section>
  );
}
