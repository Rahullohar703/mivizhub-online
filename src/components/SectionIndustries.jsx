import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionIndustries() {
  const industries = [
    'Mom & Pop Shops', 'Solopreneurs', 'Startups', 'Small & Mid-Size', 
    'Corporate Orgs'
  ];

  return (
    <Section id="industries" className="bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-background pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-textMain mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-textMuted">
            Whether you’re a one-person startup or a 500-employee organization, MivizHub transforms your operations instantly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-surfaceBorder bg-surface/50 backdrop-blur text-textMain font-medium hover:border-brandAccent hover:text-brandAccent hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all cursor-default"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
