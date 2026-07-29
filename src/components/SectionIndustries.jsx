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
    <Section id="industries" className="bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-textMain mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-textMuted">
            Whether you’re a one-person startup or a 500-employee organization, X-Staff AI transforms your operations instantly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="px-6 py-3 rounded-full border border-gray-200 text-textMain font-medium hover:border-brandBlack transition-colors"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
