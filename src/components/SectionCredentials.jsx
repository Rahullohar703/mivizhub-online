import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Compass, Link2, Wrench, Settings, BarChart3, Sparkles } from 'lucide-react';

export default function SectionCredentials() {
  const principles = [
    {
      num: "01",
      title: "Industry-Focused Thinking",
      desc: "We consider your sales cycle, customers, workflows, and operational challenges before recommending solutions.",
      icon: <Compass className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/25",
      borderHover: "hover:border-blue-400 group-hover:border-t-blue-500"
    },
    {
      num: "02",
      title: "One Connected Growth Partner",
      desc: "Marketing, lead management, and automation work together instead of operating as disconnected services.",
      icon: <Link2 className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-indigo-600 to-purple-600",
      shadow: "shadow-indigo-500/25",
      borderHover: "hover:border-indigo-400 group-hover:border-t-indigo-500"
    },
    {
      num: "03",
      title: "Practical Automation",
      desc: "We focus on workflows that solve real business problems—not AI for the sake of AI.",
      icon: <Wrench className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-cyan-600 to-teal-600",
      shadow: "shadow-cyan-500/25",
      borderHover: "hover:border-cyan-400 group-hover:border-t-cyan-500"
    },
    {
      num: "04",
      title: "Built Around Your Business",
      desc: "We assess your existing tools, team, and processes before designing an implementation.",
      icon: <Settings className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/25",
      borderHover: "hover:border-amber-400 group-hover:border-t-amber-500"
    },
    {
      num: "05",
      title: "Focused on Measurable Outcomes",
      desc: "We track relevant indicators such as enquiries, response time, lead conversion, campaign performance, and operational efficiency.",
      icon: <BarChart3 className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/25",
      borderHover: "hover:border-emerald-400 group-hover:border-t-emerald-500"
    }
  ];

  return (
    <Section id="why-us" className="py-24 bg-slate-50/70 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Why MivizHub</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            We Understand That <span className="text-blue-600">Every Industry Operates Differently.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A pragmatic, systems-driven approach engineered around your real-world operations.
          </p>
        </div>

        {/* 5 Principles Grid with High Attention Colorful Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((pr, idx) => (
            <div 
              key={idx}
              className={`group bg-white border-2 border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative cursor-default ${
                idx === principles.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${pr.borderHover}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  0{idx + 1}
                </span>
                
                {/* Vibrant Gradient Icon Box */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pr.gradient} flex items-center justify-center shadow-lg ${pr.shadow} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  {pr.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 font-heading group-hover:text-blue-600 transition-colors">
                {pr.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {pr.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
