import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <Section className="bg-[#111111] text-white overflow-hidden py-32 md:py-48">
      <Container className="text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
            READY TO GIVE US A TRY?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Don't wait until your competitors are running a full AI team. Most companies never go back. This is the last hiring decision you’ll ever need to make.
          </p>
          <Button onClick={onOpenBooking} variant="primary" className="bg-white text-black hover:bg-gray-100 px-10 py-5 text-lg shadow-xl">
            BOOK A DEMO
          </Button>
        </motion.div>

      </Container>
    </Section>
  );
}
