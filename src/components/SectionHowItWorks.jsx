import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionHowItWorks({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We discuss your business, industry, goals, current challenges, and growth opportunities."
    },
    {
      num: "02",
      title: "Identify",
      desc: "We identify where your business is losing opportunities, wasting time, or struggling to scale."
    },
    {
      num: "03",
      title: "Build",
      desc: "We recommend and implement the right combination of marketing, lead management, and automation."
    },
    {
      num: "04",
      title: "Improve",
      desc: "We monitor performance, identify improvements, and optimise your systems over time."
    }
  ];

  return (
    <Section id="how-it-works" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
      <Container className="max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 block mb-2">
            The Process
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            Simple to Start. Built Around Your Business.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A structured, collaborative approach to improving your growth and operations.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-900 font-extrabold flex items-center justify-center text-lg mb-5 shadow-2xs font-mono">
                  {st.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  Step {st.num} — {st.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
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
            className="w-full sm:w-auto shadow-md"
          />
        </div>

      </Container>
    </Section>
  );
}
