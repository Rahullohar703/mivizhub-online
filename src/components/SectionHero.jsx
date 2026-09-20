import React from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';
import { Phone, Calendar, ArrowRight, Check } from 'lucide-react';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#09090b] text-textMain relative overflow-hidden">
      {/* Clean, subtle top ambiance */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Simple, Trustworthy Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide">
            Done-For-You Business Growth • Zero Software To Learn
          </span>
        </div>

        {/* Primary Headline: Wide container so it completes in 1 to 2 lines cleanly */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-6xl mx-auto">
          Your Next Best Employee <span className="text-[#31c0de]">Isn't Human.</span>
        </h1>

        {/* Supporting Copy: Exact user requirement, readable 18px-20px */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-10 font-normal">
          We build and manage AI Employees that answer calls, qualify leads, follow up with customers, and automate repetitive work so your business grows without growing your payroll.
        </p>

        {/* CTAs: Clean, large, boomer-friendly */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
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
            <span>See Our 2 Simple Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-sm sm:text-base text-gray-400 mb-14 font-medium">
          No pushy sales reps • We set everything up • Works with your existing phone number
        </p>

        {/* Clean, Expansive 2-Pillar Bar (Wide, Unboxed & Modern) */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-[#10141e]/80 border border-white/10 rounded-2xl p-7 sm:p-10 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Service 1 */}
              <div className="flex items-start gap-5 text-left">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center flex-shrink-0 text-base">
                  01
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                    Marketing & Growth
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Brings Business In
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Targeted Google & local ads that get your phone ringing with customers ready for quotes.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start gap-5 text-left border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 lg:pl-12">
                <div className="w-12 h-12 rounded-xl bg-[#31c0de]/10 border border-[#31c0de]/20 text-[#31c0de] font-bold flex items-center justify-center flex-shrink-0 text-base">
                  02
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block mb-1">
                    AI Staffing
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Handles The Work 24/7
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Dedicated AI staff that answers calls, qualifies web leads in 60s, follows up on quotes, and manages your schedule.
                  </p>
                </div>
              </div>

            </div>

            {/* Clean bottom note */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              <span>Zero software for you to learn. We set up, train, and manage everything.</span>
              <span className="text-gray-200 font-semibold">Use one service or combine both</span>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

