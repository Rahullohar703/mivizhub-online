import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionProblems() {
  return (
    <Section id="problem" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain leading-[1.1] mb-6">
              THE TRUTH <br className="hidden md:block"/> You Don't Need Another Hiring Cycle.
            </h2>
            <p className="text-lg text-textMuted leading-relaxed">
              You Need Coverage. MivizHub installs and manages AI employees that answer, qualify, book, and follow up without interviews, turnover, or staffing fees.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-offWhite p-12 rounded-[2rem] border border-gray-100 flex flex-col justify-center"
          >
            <div className="text-[3rem] md:text-[4rem] font-extrabold tracking-tighter text-textMain leading-none mb-4">
              The Old Way is Dead.
            </div>
            <h3 className="text-xl font-semibold text-textMain mb-2">
              Traditional Hiring
            </h3>
            <p className="text-textMuted leading-relaxed">
              • "Candidate pipeline" takes 4 weeks<br/>
              • Costs $3,000–$7,000/mo per head<br/>
              • Requires constant management
            </p>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
