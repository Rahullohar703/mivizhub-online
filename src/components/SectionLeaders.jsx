import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionLeaders() {
  return (
    <Section id="leaders" className="bg-background relative py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-background pointer-events-none" />
      <Container className="relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-textMain tracking-tight mb-6">
            The Shift in Business Operations
          </h2>
          <p className="text-lg md:text-xl text-textMuted leading-relaxed mb-12">
            Industry leaders agree that integrating AI employees into your daily operations is the easiest way to regain your competitive advantage.
          </p>
          
          <div className="card-base p-8 border-brandAccent/20">
            <p className="text-textMuted italic font-medium">
              "The integration of AI employees into daily workflows isn't just about efficiency; it's a fundamental shift in how businesses will compete in the next decade."
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
