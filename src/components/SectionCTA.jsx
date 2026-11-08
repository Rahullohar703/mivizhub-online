import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section id="contact" className="py-24 bg-white/70 backdrop-blur-sm text-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12)_0%,rgba(6,182,212,0.06)_40%,transparent_75%)] pointer-events-none" />
      <Container className="max-w-5xl px-4 sm:px-6">
        
        {/* Deep Navy High-Attention CTA Card with Radiant Gradient Halo */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-30 blur-lg group-hover:opacity-45 transition duration-500" />

          <div className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-14 lg:p-18 shadow-2xl overflow-hidden text-center border border-white/10">
            {/* Ambient lighting inside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.35)_0%,rgba(6,182,212,0.15)_40%,transparent_70%)] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold uppercase tracking-wider text-blue-300 mb-6 backdrop-blur-sm relative z-10">
              <span>🚀</span>
              <span>Next Steps</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto relative z-10">
              Your Business Has the Potential to Do More.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Let’s Build the Systems to Support It.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-300 mb-9 max-w-2xl mx-auto leading-relaxed relative z-10 font-normal">
              Whether you need more qualified enquiries, a stronger digital presence, better sales follow-up, or smarter operations, MivizHub can help you identify the next opportunity. Let’s understand your business and build a practical plan for growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-8">
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
                className="w-full sm:w-auto shadow-xl shadow-blue-600/40 font-bold hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300"
              />

              <ArrowFillButton 
                onClick={() => onOpenBooking ? onOpenBooking('Tell Us About Your Business') : null}
                btnText="Tell Us About Your Business"
                size="lg"
                bgColor="rgba(255, 255, 255, 0.1)"
                textColor="#ffffff"
                fillBgColor="#ffffff"
                fillTextColor="#0f172a"
                arrowColor="#0f172a"
                hoverArrowColor="#0f172a"
                className="w-full sm:w-auto border border-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
              />
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-400 font-medium relative z-10">
              Start with a conversation. Leave with clarity on what to improve next.
            </p>
          </div>
        </div>

      </Container>
    </Section>
  );
}
