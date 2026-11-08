import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50/80 via-white to-blue-50/20 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* High-Attention Vibrant Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12)_0%,rgba(14,165,233,0.06)_40%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle modern tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Badge with Pulsing Live Status Dot */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/80 mb-6 shadow-sm shadow-blue-500/10 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
          </span>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-700">
            GROWTH &amp; AI AUTOMATION FOR INDUSTRY
          </span>
        </div>

        {/* Primary Headline with Rich Gradient */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-slate-900 leading-[1.16] mb-6 max-w-5xl mx-auto font-heading">
          Build a Stronger Business. Win More Opportunities.{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-xs">
            Automate the Work Holding You Back.
          </span>
        </h1>

        {/* Body Copy */}
        <div className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 space-y-3 font-normal">
          <p>
            We help construction, real estate, engineering, manufacturing, and operations-heavy businesses attract better customers, convert more enquiries, and streamline everyday operations.
          </p>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
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
            className="w-full sm:w-auto shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5"
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
            className="w-full sm:w-auto border-2 border-slate-200 shadow-sm hover:border-slate-400 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          />
        </div>

        {/* Trust Line & Micro-Chips */}
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-6">
          Built for businesses where projects, people, operations, and sales are complex.
        </p>

        {/* Attention-retaining Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm hover:border-blue-400 hover:text-blue-700 transition-colors">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            <span>Built For Complex Industries</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm hover:border-indigo-400 hover:text-indigo-700 transition-colors">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            <span>Connects With Your Existing Tools</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm hover:border-emerald-400 hover:text-emerald-700 transition-colors">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            <span>Pragmatic Automation (No Tech Overwhelm)</span>
          </div>
        </div>

      </Container>
    </Section>
  );
}
