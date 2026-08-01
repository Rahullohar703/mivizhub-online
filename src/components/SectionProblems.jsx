import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { CheckCircle2 } from 'lucide-react';

export default function SectionProblems() {
  const problems = [
    "Answering repetitive calls",
    "Chasing leads",
    "Booking appointments",
    "Updating CRM",
    "Following up",
    "Administrative work"
  ];

  return (
    <Section id="problem" className="bg-background relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-background pointer-events-none" />
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-textMain leading-[1.1] mb-8">
            Is Your Team Spending <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-brandPurple">Too Much Time</span> On...
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-surface/50 p-6 rounded-2xl border border-surfaceBorder hover:border-brandPurple/50 transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 text-[#00F0FF] flex-shrink-0" />
                <span className="text-lg md:text-xl font-medium text-textMain">{problem}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-textMain mb-4">
              Your people should be growing the business.
            </p>
            <p className="text-xl md:text-2xl text-textMuted">
              Not buried in repetitive tasks.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
