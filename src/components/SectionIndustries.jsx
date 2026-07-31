import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionIndustries() {
  const industries = [
    { name: 'Construction Companies', desc: 'Handle consultation requests and site visit bookings.' },
    { name: 'Builders & Developers', desc: 'Never miss project requests or stakeholder enquiries.' },
    { name: 'General Contractors', desc: 'Automate showing requests and follow up with investors.' },
    { name: 'Architecture Firms', desc: 'Qualify design consultations automatically.' },
    { name: 'Interior Design Firms', desc: 'Book site assessments directly into your dispatch system.' },
    { name: 'Engineering Consultants', desc: 'Quickly route technical queries to the right department.' }
  ];

  return (
    <Section id="industries" className="bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-background pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 pb-2">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent via-brandPurple to-[#00F0FF]">Modern Construction Businesses</span>
          </h2>
          <p className="text-lg text-textMuted">
            Whether you manage residential projects, commercial developments, design services, or construction operations, our AI Employees help your team respond faster, stay organized, and focus on delivering great projects instead of repetitive administrative work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="px-6 md:px-8 py-4 md:py-5 rounded-2xl border border-surfaceBorder bg-surface/50 backdrop-blur hover:border-brandAccent transition-all cursor-default text-left w-full sm:w-[calc(50%-12px)] flex flex-col justify-center"
            >
              <div className="font-bold text-textMain text-lg mb-1">{industry.name}</div>
              <div className="text-sm text-textMuted">{industry.desc}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
