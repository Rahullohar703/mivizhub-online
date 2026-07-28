import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionHero({ onOpenBooking }) {
  return (
    <Section id="hero" className="pt-40 pb-24 md:pt-48 md:pb-32 bg-offWhite overflow-hidden relative">
      <Container className="relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-textMain leading-[1.05] mb-8">
            You don’t need another employee. <br className="hidden md:block" />
            <span className="text-textMuted font-medium tracking-tight">You need someone who never sleeps.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-textMuted leading-relaxed">
            We provide virtual team members for your business. They answer the phone, reply to texts, and book jobs 24/7. No hiring, no payroll, no headaches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button onClick={onOpenBooking} variant="primary" className="w-full sm:w-auto text-base px-8 py-4">
            Book a Free Chat
          </Button>
          <a href="#how-it-works" className="w-full sm:w-auto text-base font-medium text-textMuted hover:text-textMain transition-colors px-8 py-4 text-center">
            See How It Works
          </a>
        </motion.div>

      </Container>
    </Section>
  );
}
