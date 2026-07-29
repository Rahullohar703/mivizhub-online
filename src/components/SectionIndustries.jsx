import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionIndustries() {
  const industries = [
    { name: 'Architects', desc: 'Handle consultation requests and site visit bookings.' },
    { name: 'Builders & Contractors', desc: 'Never miss homeowner enquiries or project requests.' },
    { name: 'Interior Designers', desc: 'Qualify design consultations automatically.' },
    { name: 'Real Estate', desc: 'Automate showing requests and follow up with new buyers.' },
    { name: 'Home Services', desc: 'Book repair and estimate appointments directly into your dispatch system.' },
    { name: 'Manufacturers', desc: 'Quickly route wholesale and technical support queries to the right department.' },
    { name: 'DG Set Dealers', desc: 'Respond instantly to rental, sales, and service enquiries.' },
    { name: 'Local Service Providers', desc: 'Capture every single Google or Yelp inquiry immediately.' }
  ];

  return (
    <Section id="industries" className="bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-background pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 pb-2">
            Built for Businesses That Can't Afford to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent via-brandPurple to-[#00F0FF]">Miss Enquiries.</span>
          </h2>
          <p className="text-lg text-textMuted">
            Our AI workforce is tailored to handle the exact conversations your clients expect.
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
