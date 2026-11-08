import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { 
  Search, 
  Bot, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  PhoneCall,
  Clock
} from 'lucide-react';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-20 md:pt-38 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* High-Attention Vibrant Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12)_0%,rgba(14,165,233,0.06)_40%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle modern tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Badge with Pulsing Live Dot */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200 mb-6 shadow-sm shadow-blue-500/10 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
          </span>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-700">
            GROWTH &amp; AI AUTOMATION FOR INDUSTRY
          </span>
        </motion.div>

        {/* Primary Headline with Rich Visual Hierarchy */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6 max-w-5xl mx-auto font-heading"
        >
          Build a Stronger Business. Win More Opportunities.{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-xs">
            Automate the Work Holding You Back.
          </span>
        </motion.h1>

        {/* Body Copy with Distinct Hierarchy (Not Text Heavy) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-9 space-y-2.5"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
            We help construction, real estate, engineering, manufacturing, and operations-heavy businesses attract better customers, convert more enquiries, and streamline everyday operations.
          </p>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            From marketing and lead generation to AI-powered automation, we build systems designed around how your industry actually works.
          </p>
        </motion.div>

        {/* CTAs with ArrowFillButton - Both Buttons with 100% VISIBLE ICONS */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6"
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

          {/* Secondary Light Button - Visible Blue Arrow Circle with White Arrow */}
          <ArrowFillButton 
            btnText="Explore Our Solutions" 
            href="#solutions" 
            size="lg"
            variant="light"
            className="w-full sm:w-auto shadow-sm hover:shadow-md transition-all duration-300"
          />
        </motion.div>

        {/* Trust Line */}
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-12">
          Built for businesses where projects, people, operations, and sales are complex.
        </p>

        {/* Hero Interactive Visual Showcase: Breaks "card card card" monotony */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-20 blur-md group-hover:opacity-30 transition duration-500" />
            
            <div className="relative bg-white border-2 border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Node 1: Inbound Lead Capture */}
                <div className="flex-1 flex items-center gap-3.5 text-left w-full md:w-auto p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-300 transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Search className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider block">Stage 01 • Traffic</span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">SEO &amp; Targeted Marketing</h4>
                    <span className="text-xs text-slate-500">Google Search, Maps &amp; Ads</span>
                  </div>
                </div>

                {/* Connector Arrow 1 */}
                <div className="hidden md:flex text-slate-400 items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 animate-pulse" />
                </div>

                {/* Node 2: AI Qualification */}
                <div className="flex-1 flex items-center gap-3.5 text-left w-full md:w-auto p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/20">
                    <Bot className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-indigo-700 uppercase tracking-wider block">Stage 02 • AI Ops</span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">24/7 Enquiry Response</h4>
                    <span className="text-xs text-slate-500">&lt;2 min lead qualification</span>
                  </div>
                </div>

                {/* Connector Arrow 2 */}
                <div className="hidden md:flex text-slate-400 items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-emerald-500 animate-pulse" />
                </div>

                {/* Node 3: Revenue Pipeline */}
                <div className="flex-1 flex items-center gap-3.5 text-left w-full md:w-auto p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-300 transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <TrendingUp className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">Stage 03 • Revenue</span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">Automated Quotation Flow</h4>
                    <span className="text-xs text-slate-500">More closed project bids</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Metric Ticker */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" /> &lt;2 Min Enquiry Response
                </span>
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-indigo-600" /> Zero Missed Calls or Leads
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-600" /> Plug-and-Play With Your Tools
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
