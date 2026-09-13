import React from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section id="contact" className="py-24 bg-transparent border-t border-white/10 text-center relative overflow-hidden">
      
      {/* Vibrant Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-indigo-600/20 via-[#31c0de]/20 to-purple-600/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        <div className="max-w-3xl mx-auto card-base card-glow-cyan p-8 sm:p-14 shadow-2xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-3">
            Take The Next Step
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Ready to Grow Without <br className="hidden sm:inline" />
            Doing Everything Yourself?
          </h2>

          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you need more customers, 24/7 phone answering, or both — we set up everything for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={onOpenBooking} 
              variant="primary" 
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl shadow-lg shadow-indigo-600/35 border-0 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Book a Free 15-Minute Intro Call</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <button 
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl px-7 py-4 transition-all backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#31c0de]" />
              <span>Talk to Our Team</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-6 font-medium">
            Quick 15-minute phone call • Zero high-pressure sales • Direct answers to your questions
          </p>
        </div>

      </Container>
    </Section>
  );
}
