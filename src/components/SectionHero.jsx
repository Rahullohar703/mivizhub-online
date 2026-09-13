import React from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';
import { Phone, Calendar, ArrowRight, Check, Sparkles } from 'lucide-react';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#09090b] text-textMain relative overflow-hidden">
      {/* Clean, subtle top ambiance */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Simple, Trustworthy Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#31c0de] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">
            Done-For-You Business Growth • Zero Software To Learn
          </span>
        </div>

        {/* Primary Headline: Exact user requirement, massive legibility */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl mx-auto">
          Your Next Best Employee <br className="hidden sm:inline" />
          <span className="text-[#31c0de]">Isn't Human.</span>
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
            className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl shadow-lg shadow-indigo-600/30 border-0 transition-all hover:scale-[1.02]"
          >
            Book a Free 15-Minute Intro Call
          </Button>
          <a 
            href="#services" 
            className="w-full sm:w-auto text-base font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl px-7 py-4 text-center transition-all flex items-center justify-center gap-2"
          >
            See Our 2 Simple Services <ArrowRight className="w-4 h-4 text-gray-400" />
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-sm sm:text-base text-gray-400 mb-12 font-medium">
          No pushy sales reps • We set everything up • Works with your existing phone number
        </p>

        {/* Clean, Breathable 2-Pillar Bar (No text overload) */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-[#121216]/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Service 1 */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center flex-shrink-0 text-sm">
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
                <div className="w-10 h-10 rounded-xl bg-[#31c0de]/10 border border-[#31c0de]/20 text-[#31c0de] font-bold flex items-center justify-center flex-shrink-0 text-sm">
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
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 text-center sm:text-left">
              <span>Zero software for you to learn. We set up, train, and manage everything.</span>
              <span className="text-gray-300 font-semibold">Use one service or combine both</span>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}


