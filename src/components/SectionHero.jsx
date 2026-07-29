import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-40 pb-24 md:pt-56 md:pb-40 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandPurple/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brandAccent/50 to-transparent" />
      <Container className="relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter leading-[1.05] mb-8">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">The Future of Staffing is</span> <span className="text-gradient-punchy drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">Here.</span> <br className="hidden md:block" />
            <span className="text-xl md:text-3xl text-textMuted font-medium tracking-tight mt-6 block">We are the world's first disruptive AI Staffing agency providing AI employees not humans.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-textMuted leading-relaxed mb-8">
            The companies who adopt AI Employees now will own the next decade. Those who don’t… will become a cautionary tale.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm md:text-base font-bold text-textMain bg-surface/50 border border-surfaceBorder rounded-full px-6 py-3 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" /> Deploy in 24-72 Hours</span>
            <span className="hidden md:block text-surfaceBorder">|</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brandPurple animate-pulse" /> 5x-20x ROI</span>
            <span className="hidden md:block text-surfaceBorder">|</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Zero Risk</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button onClick={onOpenBooking} variant="primary" className="w-full sm:w-auto text-base md:text-lg px-10 py-5 font-bold tracking-wide">
            BOOK A DEMO
          </Button>
          <a href="#how-it-works" className="w-full sm:w-auto text-base font-medium text-textMuted hover:text-white transition-colors px-8 py-4 text-center">
            See How It Works
          </a>
        </motion.div>

      </Container>
    </Section>
  );
}
