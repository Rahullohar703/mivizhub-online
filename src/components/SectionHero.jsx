import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-32 pb-24 md:pt-40 md:pb-40 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brandAccent/50 to-transparent" />
      <Container className="relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mx-auto"
        >
          <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-tight md:leading-[1.05] mb-6 relative z-10 mx-auto max-w-7xl px-4">
            <span className="text-white drop-shadow-sm">Your Next Best Employee </span>
            <span className="text-gradient-punchy drop-shadow-sm">Isn't Human.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto mb-12"
        >
          <p className="text-xl sm:text-2xl text-textMuted leading-relaxed mb-10 max-w-2xl mx-auto px-4">
            We build and manage AI Employees that answer calls, qualify leads, follow up with customers, and automate repetitive work so your business grows without growing your payroll.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-6 text-sm md:text-base font-bold text-textMain bg-surface/50 border border-surfaceBorder rounded-2xl md:rounded-full px-6 py-5 md:py-3 shadow-lg max-w-fit mx-auto text-left md:text-center">
            <span className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-brandAccent animate-pulse" /> Up and running in 48 hours</span>
            <span className="hidden md:block text-surfaceBorder">|</span>
            <span className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-brandPurple animate-pulse" /> A fraction of payroll costs</span>
            <span className="hidden md:block text-surfaceBorder">|</span>
            <span className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /> Zero technical skills required</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button onClick={onOpenBooking} variant="primary" className="w-full sm:w-auto text-base md:text-lg px-10 py-5 font-bold tracking-wide uppercase">
            Book a Strategy Call
          </Button>
          <a href="#how-it-works" className="w-full sm:w-auto text-base font-medium text-textMuted hover:text-white transition-colors px-8 py-4 text-center">
            See How It Works
          </a>
        </motion.div>

      </Container>
    </Section>
  );
}
