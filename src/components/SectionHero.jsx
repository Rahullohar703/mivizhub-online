import React from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';
import { Phone, Calendar, ArrowRight, Check } from 'lucide-react';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#080b12] text-textMain relative overflow-hidden">
      {/* Clean, subtle ambient glow (hardware-accelerated, zero blur overhead) */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.12)_0%,rgba(59,130,246,0.04)_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(49,192,222,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Simple, Trustworthy Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide">
            Built For Contractors, Trade Pros &amp; Field Operations • Zero Software To Learn
          </span>
        </div>

        {/* Primary Headline: Wide container so it completes in 1 to 2 lines cleanly */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-6xl mx-auto">
          Win More High-Value Projects. <span className="text-[#31c0de]">Stop Losing Bids to Missed Calls.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-10 font-normal">
          We build and manage done-for-you local marketing and AI operations for construction, trade contractors, and field teams. Rank #1 locally, answer calls in 1 ring, qualify leads in 60 seconds, and automate back-office admin.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
          <ArrowFillButton 
            onClick={onOpenBooking} 
            btnText="Book a Free 15-Minute Strategy Call"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto shadow-xl shadow-blue-600/30"
          />

          <ArrowFillButton 
            btnText="Explore Our 3 Core Offers" 
            href="#offers" 
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto border-white/15 hover:border-white/30"
          />
        </div>

        {/* Reassurance text */}
        <p className="text-sm sm:text-base text-gray-400 mb-14 font-medium">
          No pushy sales reps • Turnkey setup in 7 days • Works with your existing phone number
        </p>

        {/* 3-Pillar Offer Highlight Bar */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-[#0e1322]/95 border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Offer 1 */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-[#31c0de]/10 border border-[#31c0de]/20 text-[#31c0de] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  01
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#31c0de] block mb-1">
                    AI Automation &amp; Ops
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Field &amp; Office 24/7
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    24/7 voice dispatch, instant quote qualification in &lt;60s, estimate follow-ups, and calendar/CRM sync.
                  </p>
                </div>
              </div>

              {/* Offer 2 */}
              <div className="flex items-start gap-4 text-left border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6 lg:pl-8">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  02
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                    Presence Plan ($250/mo)
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Contractor Foundation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    High-converting landing page, Google Maps #1 rank optimization, local SEO, and monthly project showcases.
                  </p>
                </div>
              </div>

              {/* Offer 3 */}
              <div className="flex items-start gap-4 text-left border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6 lg:pl-8">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  03
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                    Growth Engine ($500/mo)
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    High-Ticket Project Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Targeted Google &amp; Meta ad campaigns, dedicated bid pages, speed-to-lead automation, and end-to-end tracking.
                  </p>
                </div>
              </div>

            </div>

            {/* Clean bottom note */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              <span>Zero software for you to learn. We set up, train, and manage everything hands-off.</span>
              <a href="#offers" className="text-[#31c0de] hover:underline font-semibold flex items-center gap-1">
                <span>View Full Plan Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

