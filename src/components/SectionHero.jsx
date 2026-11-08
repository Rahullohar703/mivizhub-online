import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50/90 via-white/85 to-blue-50/30 backdrop-blur-sm text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Engineered Atmospheric Color Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.16)_0%,rgba(6,182,212,0.08)_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Blueprint lines accent overlay */}
      <div 
        className="absolute inset-0 bg-blueprint-lines opacity-[0.35] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" 
        aria-hidden="true" 
      />

      <Container className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
        
        {/* Eyebrow Badge with Real Emoji and Pulsing Live Dot */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 mb-6 shadow-sm shadow-blue-500/10 backdrop-blur-md hover:scale-105 transition-transform duration-200"
        >
          <span className="text-sm">🚀</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 font-sans">
            Growth &amp; AI Automation for Industry
          </span>
        </motion.div>

        {/* Primary Headline with Consistent Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6 max-w-5xl mx-auto"
        >
          Build a Stronger Business. Win More Opportunities.{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-xs">
            Automate the Work Holding You Back.
          </span>
        </motion.h1>

        {/* Body Copy with Clean Hierarchy */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-8 space-y-2.5 px-2"
        >
          <p className="font-sans text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
            We help construction, real estate, engineering, manufacturing, and operations-heavy businesses attract better customers, convert more enquiries, and streamline everyday operations.
          </p>
          <p className="font-sans text-xs sm:text-sm md:text-base text-slate-500 font-normal">
            From marketing and lead generation to AI-powered automation, we build systems designed around how your industry actually works.
          </p>
        </motion.div>

        {/* CTAs with ArrowFillButton */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-6 px-4"
        >
          {/* Primary Action Button */}
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
            className="w-full sm:w-auto shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300"
          />

          {/* Secondary Light Button with Visible Blue Arrow */}
          <ArrowFillButton 
            btnText="Explore Our Solutions" 
            href="#solutions" 
            size="lg"
            variant="light"
            className="w-full sm:w-auto shadow-sm hover:shadow-md transition-all duration-300"
          />
        </motion.div>

        {/* Trust Line */}
        <p className="font-sans text-xs sm:text-sm text-slate-500 font-semibold mb-10">
          Built for businesses where projects, people, operations, and sales are complex.
        </p>

        {/* Hero Interactive Visual Showcase: Blueprint Tactile Glass Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto px-2"
        >
          <div className="relative group">
            {/* Halo backlight */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-25 blur-lg group-hover:opacity-35 transition duration-500" />
            
            <div className="relative bg-white/95 backdrop-blur-md border-2 border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">
                
                {/* Node 1: Inbound Lead Capture */}
                <div className="flex-1 flex items-center gap-3 text-left w-full p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                    🔍
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Stage 1 • Traffic</span>
                    <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug">SEO &amp; Local Search</h4>
                    <span className="font-sans text-xs text-slate-500">Google Maps, Search &amp; Ads</span>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex text-blue-500 items-center justify-center py-1 md:py-0">
                  <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
                  <ArrowDown className="md:hidden w-4 h-4 animate-bounce" />
                </div>

                {/* Node 2: AI Qualification */}
                <div className="flex-1 flex items-center gap-3 text-left w-full p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-xl shadow-md shadow-indigo-500/20">
                    🤖
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold text-indigo-700 uppercase tracking-wider block">Stage 2 • 24/7 AI Ops</span>
                    <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug">Instant Qualification</h4>
                    <span className="font-sans text-xs text-slate-500">&lt;2 min response to every enquiry</span>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex text-emerald-500 items-center justify-center py-1 md:py-0">
                  <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
                  <ArrowDown className="md:hidden w-4 h-4 animate-bounce" />
                </div>

                {/* Node 3: Revenue Pipeline */}
                <div className="flex-1 flex items-center gap-3 text-left w-full p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all duration-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                    📈
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">Stage 3 • Revenue</span>
                    <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug">Automated Quotation Flow</h4>
                    <span className="font-sans text-xs text-slate-500">Fast proposal follow-up &amp; wins</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Metric Ticker */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-between gap-3 text-xs font-semibold text-slate-600 font-sans">
                <span className="flex items-center gap-1.5">
                  <span>⚡</span> &lt;2 Min Enquiry Response
                </span>
                <span className="flex items-center gap-1.5">
                  <span>📞</span> Zero Missed Calls or Leads
                </span>
                <span className="flex items-center gap-1.5">
                  <span>🛠️</span> Plug and Play With Your Tools
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
