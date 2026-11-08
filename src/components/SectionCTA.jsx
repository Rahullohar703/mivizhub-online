import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section id="contact" className="py-24 bg-white text-center relative overflow-hidden">
      <Container className="max-w-5xl">
        
        <div className="bg-slate-900 text-white rounded-3xl p-10 sm:p-16 lg:p-20 shadow-xl relative overflow-hidden text-center">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.25)_0%,transparent_70%)] pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3 relative z-10">
            Next Steps
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto relative z-10 font-heading">
            Your Business Has the Potential to Do More. Let’s Build the Systems to Support It.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
            Whether you need more qualified enquiries, a stronger digital presence, better sales follow-up, or smarter operations, MivizHub can help you identify the next opportunity. Let’s understand your business and build a practical plan for growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-6">
            <ArrowFillButton 
              onClick={() => onOpenBooking ? onOpenBooking('Growth Strategy Call') : null}
              btnText="Book Your Growth Strategy Call"
              size="lg"
              bgColor="#2563eb"
              textColor="#ffffff"
              fillBgColor="#1d4ed8"
              fillTextColor="#ffffff"
              arrowColor="#ffffff"
              hoverArrowColor="#ffffff"
              className="w-full sm:w-auto shadow-lg shadow-blue-600/30 font-bold"
            />

            <ArrowFillButton 
              onClick={() => onOpenBooking ? onOpenBooking('Tell Us About Your Business') : null}
              btnText="Tell Us About Your Business"
              size="lg"
              bgColor="rgba(255, 255, 255, 0.1)"
              textColor="#ffffff"
              fillBgColor="#ffffff"
              fillTextColor="#0f172a"
              arrowColor="#ffffff"
              hoverArrowColor="#0f172a"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40"
            />
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-medium relative z-10">
            Start with a conversation. Leave with clarity on what to improve next.
          </p>
        </div>

      </Container>
    </Section>
  );
}
