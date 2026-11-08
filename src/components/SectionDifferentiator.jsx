import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { Eye, Inbox, UserCheck, Cpu, TrendingUp } from 'lucide-react';

export default function SectionDifferentiator({ onOpenBooking }) {
  const steps = [
    {
      stage: "01",
      name: "ATTRACT",
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      desc: "Get discovered by the right customers through digital presence and targeted marketing."
    },
    {
      stage: "02",
      name: "CAPTURE",
      icon: <Inbox className="w-5 h-5 text-indigo-600" />,
      desc: "Convert website visitors, calls, and enquiries into structured opportunities."
    },
    {
      stage: "03",
      name: "CONVERT",
      icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
      desc: "Respond faster, qualify prospects, and follow up consistently."
    },
    {
      stage: "04",
      name: "AUTOMATE",
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      desc: "Reduce repetitive administrative work and connect your existing systems."
    },
    {
      stage: "05",
      name: "OPTIMISE",
      icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
      desc: "Track performance, identify bottlenecks, and improve the process."
    }
  ];

  return (
    <Section id="system" className="py-20 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
      <Container className="max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 block mb-2">
            The Combined System
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            The MivizHub Growth &amp; Operations System
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            More than marketing. More than automation. We connect your business growth and operational workflows into a system designed to support your next stage.
          </p>
        </div>

        {/* 5-Stage Framework Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Stage {st.stage}
                  </span>
                  {st.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading tracking-wide">
                  {st.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Combined CTA Callout */}
        <div className="text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-heading">
            Ready to connect growth and operations into one system?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
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
            className="w-full sm:w-auto shadow-md"
          />
        </div>

      </Container>
    </Section>
  );
}
