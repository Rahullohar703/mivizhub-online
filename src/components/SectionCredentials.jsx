import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Compass, Link2, Wrench, Settings, BarChart3 } from 'lucide-react';

export default function SectionCredentials() {
  const principles = [
    {
      num: "01",
      title: "Industry-Focused Thinking",
      desc: "We consider your sales cycle, customers, workflows, and operational challenges before recommending solutions.",
      icon: <Compass className="w-5 h-5 text-blue-600" />
    },
    {
      num: "02",
      title: "One Connected Growth Partner",
      desc: "Marketing, lead management, and automation work together instead of operating as disconnected services.",
      icon: <Link2 className="w-5 h-5 text-indigo-600" />
    },
    {
      num: "03",
      title: "Practical Automation",
      desc: "We focus on workflows that solve real business problems—not AI for the sake of AI.",
      icon: <Wrench className="w-5 h-5 text-cyan-600" />
    },
    {
      num: "04",
      title: "Built Around Your Business",
      desc: "We assess your existing tools, team, and processes before designing an implementation.",
      icon: <Settings className="w-5 h-5 text-slate-700" />
    },
    {
      num: "05",
      title: "Focused on Measurable Outcomes",
      desc: "We track relevant indicators such as enquiries, response time, lead conversion, campaign performance, and operational efficiency.",
      icon: <BarChart3 className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <Section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
      <Container className="max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Why MivizHub
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            We Understand That Every Industry Operates Differently.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A pragmatic, systems-driven approach engineered around your real-world operations.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((pr, idx) => (
            <div 
              key={idx}
              className={`bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:border-blue-400 hover:shadow-md transition-all ${
                idx === principles.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                  {pr.num}
                </span>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  {pr.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
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
