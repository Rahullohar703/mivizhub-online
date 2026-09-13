import React from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section id="contact" className="py-24 bg-[#0c0c10] border-t border-white/10 text-center relative">
      <Container>
        
        <div className="max-w-3xl mx-auto bg-[#14141a] border border-white/10 rounded-3xl p-8 sm:p-14 shadow-2xl">
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
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl shadow-lg shadow-indigo-600/30 border-0 flex items-center justify-center gap-2"
            >
              <span>Book a Free 15-Minute Intro Call</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <button 
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl px-7 py-4 transition-all"
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
