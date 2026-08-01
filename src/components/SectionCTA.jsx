import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section className="bg-background text-white overflow-hidden py-32 md:py-48 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)] pointer-events-none" />
      <Container className="text-center relative z-10">
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8 text-white">
            Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-[#00F0FF]">AI Workforce?</span>
          </h2>
          <p className="text-xl text-textMuted mb-12">
            In a free 30-minute strategy call, we'll identify where AI Employees can save you time, reduce costs, and help you capture more business without adding more people to your payroll.
          </p>
          <Button onClick={onOpenBooking} variant="primary" className="text-lg px-12 py-6 font-bold tracking-widest shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_50px_rgba(79,70,229,0.8)]">
            Book a Strategy Call
          </Button>
        </div>

      </Container>
    </Section>
  );
}
