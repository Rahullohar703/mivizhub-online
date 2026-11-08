import React from 'react';
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
  AlertTriangle 
} from 'lucide-react';

export default function SectionProblems() {
  const problems = [
    {
      text: "Valuable enquiries get missed or delayed.",
      icon: <PhoneMissed className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50 border-amber-200/80 group-hover:bg-amber-100",
      accent: "hover:border-amber-300"
    },
    {
      text: "Quotations go unanswered.",
      icon: <FileClock className="w-5 h-5 text-rose-600" />,
      bg: "bg-rose-50 border-rose-200/80 group-hover:bg-rose-100",
      accent: "hover:border-rose-300"
    },
    {
      text: "Your business depends heavily on referrals.",
      icon: <Share2 className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-50 border-purple-200/80 group-hover:bg-purple-100",
      accent: "hover:border-purple-300"
    },
    {
      text: "Marketing generates leads without consistently converting them.",
      icon: <Target className="w-5 h-5 text-red-600" />,
      bg: "bg-red-50 border-red-200/80 group-hover:bg-red-100",
      accent: "hover:border-red-300"
    },
    {
      text: "Your team spends hours on repetitive administrative work.",
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-50 border-blue-200/80 group-hover:bg-blue-100",
      accent: "hover:border-blue-300"
    },
    {
      text: "Opportunities disappear because nobody follows up.",
      icon: <UserX className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50 border-indigo-200/80 group-hover:bg-indigo-100",
      accent: "hover:border-indigo-300"
    },
    {
      text: "Growth means adding more people, more workload, and more complexity.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-200/80 group-hover:bg-emerald-100",
      accent: "hover:border-emerald-300"
    }
  ];

  return (
    <Section id="problem" className="bg-slate-50/70 py-24 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3 shadow-2xs">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>The Operational Reality</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4 font-heading">
            You’re Busy Running Your Business.{' '}
            <span className="text-rose-600">But Is Your Business Growing?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            You deliver projects. Manage teams. Handle clients. Solve problems every day.{' '}
            <span className="font-semibold text-slate-800">But behind the scenes:</span>
          </p>
        </div>

        {/* 7 Colorful Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {problems.map((item, idx) => (
            <div 
              key={idx}
              className={`group bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-default ${
                idx === problems.length - 1 ? 'md:col-span-2' : ''
              } ${item.accent}`}
            >
              {/* Vibrant Colored Icon Container */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${item.bg}`}>
                {item.icon}
              </div>
              
              <div className="flex-1 pt-1">
                <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug group-hover:text-slate-950 transition-colors">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The Solution Bridge Card with Gradient Highlight */}
        <div className="text-center max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-20 blur-sm group-hover:opacity-35 transition duration-500" />
          
          <div className="relative bg-white border-2 border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 mb-5 shadow-sm shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              <ArrowDown className="w-6 h-6" strokeWidth={2.5} />
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 font-heading">
              You don’t necessarily need more tools.
            </h3>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              You need better systems connecting the tools, people, and processes you already have.{' '}
              <span className="text-blue-600 font-bold">That’s where MivizHub comes in.</span>
            </p>
          </div>
        </div>

      </Container>
    </Section>
  );
}
