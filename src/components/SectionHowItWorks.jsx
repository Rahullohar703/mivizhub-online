import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionHowItWorks() {
  const steps = [
    { num: '01', title: 'We map your process.', desc: 'We learn how you talk to customers and what questions you ask.' },
    { num: '02', title: 'We build your employee.', desc: 'We program the virtual staff member to follow your exact rules.' },
    { num: '03', title: 'We connect the lines.', desc: 'We plug it into your phone line, website, and calendar. You go back to work.' }
  ];

  return (
    <Section id="how-it-works" className="bg-offWhite">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain mb-6">
            Zero technical setup required.
          </h2>
          <p className="text-lg text-textMuted">
            We don't hand you a login and wish you luck. We provide a done-for-you installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
