import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle background ambiance */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-6 shadow-sm">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700">
            GROWTH &amp; AI AUTOMATION FOR INDUSTRY
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 max-w-5xl mx-auto font-heading">
          Build a Stronger Business. Win More Opportunities. <span className="text-blue-600">Automate the Work Holding You Back.</span>
        </h1>

        {/* Body Copy */}
        <div className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 space-y-3 font-normal">
          <p>
            We help construction, real estate, engineering, manufacturing, and operations-heavy businesses attract better customers, convert more enquiries, and streamline everyday operations.
          </p>
          <p className="text-slate-500 text-sm sm:text-base">
            From marketing and lead generation to AI-powered automation, we build systems designed around how your industry actually works.
          </p>
        </div>

        {/* CTAs with ArrowFillButton */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
          <ArrowFillButton 
            onClick={() => onOpenBooking ? onOpenBooking('Growth Strategy Call') : null}
            btnText="Book Your Growth Strategy Call"
            size="lg"
            bgColor="#0f172a"
            textColor="#ffffff"
            fillBgColor="#2563eb"
            fillTextColor="#ffffff"
            arrowColor="#ffffff"
            hoverArrowColor="#ffffff"
            className="w-full sm:w-auto shadow-lg shadow-slate-900/10"
          />

          <ArrowFillButton 
            btnText="Explore Our Solutions" 
            href="#solutions" 
            size="lg"
            bgColor="#ffffff"
            textColor="#0f172a"
            fillBgColor="#0f172a"
            fillTextColor="#ffffff"
            arrowColor="#0f172a"
            hoverArrowColor="#ffffff"
            className="w-full sm:w-auto border border-slate-300 shadow-sm hover:border-slate-400"
          />
        </div>

        {/* Trust Line */}
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Built for businesses where projects, people, operations, and sales are complex.
        </p>

      </Container>
    </Section>
  );
}
