import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionHowItWorks() {
  const steps = [
    { num: '01', title: 'AI Readiness Audit', desc: 'We analyze your operations to identify bottlenecks and high-ROI automation opportunities.' },
    { num: '02', title: 'AI Employee Installation', desc: 'We configure and deploy custom AI agents tailored to your specific business workflows.' },
    { num: '03', title: 'Optimization & Automation', desc: 'We refine performance and connect your AI employees to your existing software stack.' },
    { num: '04', title: 'Full Support & Reporting', desc: 'Ongoing monitoring, updates, and performance reporting to ensure maximum efficiency.' }
  ];

  return (
    <Section id="how-it-works" className="bg-offWhite">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain mb-6">
            How It Works
          </h2>
          <p className="text-lg text-textMuted">
            From analysis to deployment, we handle the entire process of modernizing your workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="text-3xl font-heading font-bold text-gray-200 mb-6">{step.num}</div>
              <h3 className="text-xl font-bold text-textMain mb-3">{step.title}</h3>
              <p className="text-textMuted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
