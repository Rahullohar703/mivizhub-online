import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section className="bg-background text-white overflow-hidden py-32 md:py-48 relative border-t border-surfaceBorder">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)] pointer-events-none" />
      <Container className="text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8 text-gradient-dark">
            READY TO GIVE US A TRY?
          </h2>
          <p className="text-xl text-textMuted mb-12">
            Don't wait until your competitors are running a full AI team. Most companies never go back. This is the last hiring decision you’ll ever need to make.
          </p>
          <Button onClick={onOpenBooking} variant="primary" className="text-lg px-12 py-6 font-bold tracking-widest shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_50px_rgba(79,70,229,0.8)]">
            BOOK A DEMO
          </Button>
        </motion.div>

      </Container>
    </Section>
  );
}
