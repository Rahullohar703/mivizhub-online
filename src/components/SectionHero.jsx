import React from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';
import { Phone, Calendar, ArrowRight, Check, Sparkles, TrendingUp, Bot, CalendarCheck, CheckCircle2 } from 'lucide-react';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-transparent text-textMain relative overflow-hidden">
      
      {/* Ambient Lighting Spotlights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#31c0de]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 -left-20 w-[450px] h-[350px] bg-[#4F46E5]/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-60 -right-20 w-[450px] h-[350px] bg-[#9333EA]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Trustworthy Badge with Glowing Border */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#31c0de] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">
            Done-For-You Business Growth • Zero Software To Learn
          </span>
        </div>

        {/* Primary Headline: Exact user requirement, massive legibility */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl mx-auto">
          Your Next Best Employee <br className="hidden sm:inline" />
          <span className="text-[#31c0de] drop-shadow-[0_0_25px_rgba(49,192,222,0.25)]">Isn't Human.</span>
        </h1>

        {/* Supporting Copy: Exact user requirement, readable 18px-20px */}
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-9 font-normal">
          We build and manage AI Employees that answer calls, qualify leads, follow up with customers, and automate repetitive work so your business grows without growing your payroll.
        </p>

        {/* CTAs: Clean, large, boomer-friendly */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-5">
          <Button 
            onClick={onOpenBooking} 
            variant="primary" 
            className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl shadow-lg shadow-indigo-600/35 border-0 transition-all hover:scale-[1.02]"
          >
            Book a Free 15-Minute Intro Call
          </Button>
          <a 
            href="#services" 
            className="w-full sm:w-auto text-base font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl px-7 py-4 text-center transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            See Our 2 Simple Services <ArrowRight className="w-4 h-4 text-gray-400" />
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-sm sm:text-base text-gray-400 mb-12 font-medium">
          No pushy sales reps • We set everything up • Works with your existing phone number
        </p>

        {/* 2-Pillar Elevated Glass Bar */}
        <div className="w-full max-w-4xl mx-auto mb-10">
          <div className="card-base p-6 sm:p-8 relative overflow-hidden">
            {/* Subtle inner corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#31c0de]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
              
              {/* Service 1 */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-inner">
                  01
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-0.5">
                    Marketing & Growth
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Brings Business In
                  </h3>
                  <p className="text-sm text-gray-400 leading-snug">
                    Targeted Google & local ads that get your phone ringing with customers ready for quotes.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start gap-4 text-left border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                <div className="w-10 h-10 rounded-xl bg-[#31c0de]/10 border border-[#31c0de]/20 text-[#31c0de] font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-inner">
                  02
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block mb-0.5">
                    AI Staffing
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Handles The Work 24/7
                  </h3>
                  <p className="text-sm text-gray-400 leading-snug">
                    Dedicated AI staff that answers calls, qualifies web leads in 60s, follows up on quotes, and manages your schedule.
                  </p>
                </div>
              </div>

            </div>

            {/* Clean bottom note */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 text-center sm:text-left relative z-10">
              <span>Zero software for you to learn. We set up, train, and manage everything.</span>
              <span className="text-gray-300 font-semibold">Use one service or combine both</span>
            </div>
          </div>
        </div>

        {/* Visual Growth Architecture Flow Graphic (Makes the value visual!) */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-[#101015]/60 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  How The MivizHub Growth Pipeline Operates
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#31c0de] bg-[#31c0de]/10 px-2.5 py-0.5 rounded border border-[#31c0de]/20 hidden sm:inline-block">
                Fully Automated • Done-For-You
              </span>
            </div>

            {/* 3-Node Visual Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 relative">
              
              {/* Node 1: Inbound Lead */}
              <div className="bg-[#16161e] border border-white/10 rounded-xl p-4 text-left relative group hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    01. Marketing
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-0.5">High-Intent Lead Arrives</h4>
                <p className="text-xs text-gray-400 leading-snug">
                  Customer finds you on Google Maps or clicks local ad and requests an estimate.
                </p>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Call or form captured</span>
                </div>
              </div>

              {/* Node 2: AI Staff Action */}
              <div className="bg-[#161622] border-2 border-[#31c0de]/30 rounded-xl p-4 text-left relative group hover:border-[#31c0de]/60 transition-colors shadow-lg shadow-cyan-950/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-[#31c0de]/10 border border-[#31c0de]/20 text-[#31c0de]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-[#31c0de] bg-[#31c0de]/10 px-2 py-0.5 rounded">
                    02. AI Staffing
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-0.5">Instant 60s Engagement</h4>
                <p className="text-xs text-gray-300 leading-snug">
                  AI picks up call in 1 ring, answers FAQs, pre-qualifies budget & timeframe.
                </p>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#31c0de] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#31c0de]" />
                  <span>Zero missed opportunities</span>
                </div>
              </div>

              {/* Node 3: Calendar Booking */}
              <div className="bg-[#16161e] border border-white/10 rounded-xl p-4 text-left relative group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    03. Your Revenue
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-0.5">Job Booked in Calendar</h4>
                <p className="text-xs text-gray-400 leading-snug">
                  Appointment added to your schedule. Confirmation & reminders sent to client.
                </p>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SMS alert sent to your phone</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}


