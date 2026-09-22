import React from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section id="contact" className="py-24 bg-gradient-to-b from-[#080c16] via-[#0e182e] to-[#05070d] border-t border-white/10 text-center relative overflow-hidden">
      <Container>
        
        <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#12192a]/95 via-[#0d1422]/95 to-[#090e18]/95 border border-white/15 rounded-3xl p-10 sm:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.15)_0%,transparent_70%)] pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-3 relative z-10">
            Take The Next Step
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto relative z-10">
            Ready to Grow Without Doing Everything Yourself?
          </h2>

          <p className="text-base sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed relative z-10">
            Whether you need more customers, 24/7 phone answering, or both — we set up, train, and manage everything for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <ArrowFillButton 
              onClick={onOpenBooking} 
              btnText="Book a Free 15-Minute Intro Call"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto shadow-xl shadow-blue-600/30"
            />

            <ArrowFillButton 
              btnText="Talk to Our Team" 
              onClick={onOpenBooking} 
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto border-white/15 hover:border-white/30"
            />
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-8 font-medium relative z-10">
            Quick 15-minute phone call • Zero high-pressure sales • Direct answers to your questions
          </p>
        </div>

      </Container>
    </Section>
  );
}
