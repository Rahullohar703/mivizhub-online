import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { 
  PhoneMissed, 
  FileClock, 
  Share2, 
  Target, 
  Clock, 
  UserX, 
  Layers, 
  ArrowDown, 
  AlertTriangle,
  Flame,
  Activity
} from 'lucide-react';

export default function SectionProblems() {
  const salesProblems = [
    {
      text: "Valuable enquiries get missed or delayed.",
      icon: <PhoneMissed className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-100/80 border-amber-200"
    },
    {
      text: "Quotations go unanswered.",
      icon: <FileClock className="w-5 h-5 text-rose-600" />,
      bg: "bg-rose-100/80 border-rose-200"
    },
    {
      text: "Your business depends heavily on referrals.",
      icon: <Share2 className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-100/80 border-purple-200"
    },
    {
      text: "Marketing generates leads without consistently converting them.",
      icon: <Target className="w-5 h-5 text-red-600" />,
      bg: "bg-red-100/80 border-red-200"
    },
    {
      text: "Opportunities disappear because nobody follows up.",
      icon: <UserX className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-100/80 border-indigo-200"
    }
  ];

  const opsProblems = [
    {
      text: "Your team spends hours on repetitive administrative work.",
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-100/80 border-blue-200"
    },
    {
      text: "Growth means adding more people, more workload, and more complexity.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-100/80 border-emerald-200"
    }
  ];

  return (
    <Section id="problem" className="bg-slate-50/80 py-24 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10">
        
        {/* Section Header with Clear Hierarchy */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3 shadow-2xs">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>The Operational Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4 font-heading">
            You’re Busy Running Your Business.{' '}
            <span className="text-rose-600">But Is Your Business Growing?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            You deliver projects. Manage teams. Handle clients. Solve problems every day.{' '}
            <span className="font-bold text-slate-800">But behind the scenes:</span>
          </p>
        </div>

        {/* 2-Column Operational Friction Breakdown (Structured Flow, Not Plain Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Column 1: Sales & Pipeline Friction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-slate-200/90 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Where Opportunities Disappear</h3>
                <span className="text-xs text-slate-500">Sales pipeline &amp; follow-up bottlenecks</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {salesProblems.map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-800 leading-snug pt-1 group-hover:text-slate-950">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Operational Complexity Friction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-slate-200/90 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Where Time Gets Wasted</h3>
                  <span className="text-xs text-slate-500">Administrative overhead &amp; scaling complexity</span>
                </div>
              </div>

              <div className="space-y-4">
                {opsProblems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${item.bg}`}>
                      {item.icon}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug pt-1 group-hover:text-slate-950">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Impact Note */}
              <div className="mt-6 p-4 rounded-xl bg-rose-50/60 border border-rose-200/60 text-xs text-rose-900 leading-relaxed font-medium">
                ⚠️ Adding more staff to solve manual chaos only compounds overhead. Real scale requires connected workflows.
              </div>
            </div>

            {/* The Solution Bridge Callout */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-sm group-hover:opacity-30 transition duration-500" />
              
              <div className="relative bg-white border-2 border-blue-200 rounded-3xl p-6 sm:p-7 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30">
                  <ArrowDown className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    You don’t necessarily need more tools.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    You need better systems connecting the tools, people, and processes you already have. <span className="text-blue-600 font-bold">That’s where MivizHub comes in.</span>
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </Container>
    </Section>
  );
}
