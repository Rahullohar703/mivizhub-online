import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { Eye, Inbox, UserCheck, Cpu, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function SectionDifferentiator({ onOpenBooking }) {
  const [activeStage, setActiveStage] = useState(0);

  const steps = [
    {
      stage: "01",
      name: "ATTRACT",
      role: "Digital Discovery",
      icon: <Eye className="w-5 h-5 text-white" strokeWidth={2.2} />,
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/30",
      activeRing: "ring-blue-500/40 border-blue-500",
      desc: "Get discovered by the right customers through digital presence and targeted marketing."
    },
    {
      stage: "02",
      name: "CAPTURE",
      role: "Inbound Pipeline",
      icon: <Inbox className="w-5 h-5 text-white" strokeWidth={2.2} />,
      gradient: "from-indigo-600 to-blue-600",
      shadow: "shadow-indigo-500/30",
      activeRing: "ring-indigo-500/40 border-indigo-500",
      desc: "Convert website visitors, calls, and enquiries into structured opportunities."
    },
    {
      stage: "03",
      name: "CONVERT",
      role: "Sales Acceleration",
      icon: <UserCheck className="w-5 h-5 text-white" strokeWidth={2.2} />,
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/30",
      activeRing: "ring-emerald-500/40 border-emerald-500",
      desc: "Respond faster, qualify prospects, and follow up consistently."
    },
    {
      stage: "04",
      name: "AUTOMATE",
      role: "Repetitive Tasks",
      icon: <Cpu className="w-5 h-5 text-white" strokeWidth={2.2} />,
      gradient: "from-cyan-600 to-blue-600",
      shadow: "shadow-cyan-500/30",
      activeRing: "ring-cyan-500/40 border-cyan-500",
      desc: "Reduce repetitive administrative work and connect your existing systems."
    },
    {
      stage: "05",
      name: "OPTIMISE",
      role: "Continuous Scale",
      icon: <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.2} />,
      gradient: "from-purple-600 to-indigo-600",
      shadow: "shadow-purple-500/30",
      activeRing: "ring-purple-500/40 border-purple-500",
      desc: "Track performance, identify bottlenecks, and improve the process."
    }
  ];

  return (
    <Section id="system" className="py-24 bg-slate-50/70 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The Connected Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            The MivizHub Growth &amp; Operations System
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            More than marketing. More than automation. We connect your business growth and operational workflows into a unified, predictable flywheel.
          </p>
        </div>

        {/* Continuous Horizontal Conveyor / Pipeline Track */}
        <div className="relative mb-16">
          {/* Continuous Glowing Progress Track Behind Nodes */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full z-0 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((st, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStage(idx)}
                className={`group bg-white rounded-2xl p-6 border-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col justify-between ${
                  activeStage === idx 
                    ? `border-slate-900 ring-4 ${st.activeRing}` 
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Node Header with Connected Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      Stage {st.stage}
                    </span>
                    
                    {/* Vibrant Gradient Node Icon */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${st.gradient} flex items-center justify-center shadow-lg ${st.shadow} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      {st.icon}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest block mb-1">
                    {st.role}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading tracking-wide group-hover:text-blue-600 transition-colors">
                    {st.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                {/* Status Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                  <span>Step {idx + 1} of 5</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Combined CTA Callout with Radiant Gradient Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center relative group max-w-3xl mx-auto"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-20 blur-sm group-hover:opacity-30 transition duration-500" />
          
          <div className="relative bg-white border-2 border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-heading">
              Ready to connect growth and operations into one system?
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed font-normal">
              Eliminate friction between marketing leads and back-office execution with an integrated setup.
            </p>
            
            <ArrowFillButton 
              onClick={() => onOpenBooking ? onOpenBooking('Business Growth System') : null}
              btnText="Build My Business Growth System"
              size="lg"
              bgColor="#0f172a"
              textColor="#ffffff"
              fillBgColor="#2563eb"
              fillTextColor="#ffffff"
              arrowColor="#ffffff"
              hoverArrowColor="#ffffff"
              className="w-full sm:w-auto shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300"
            />
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
