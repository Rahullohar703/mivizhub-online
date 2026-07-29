import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionHowItWorks() {
  const steps = [
    { num: '01', title: 'The Breakdown', desc: 'We hop on a call to learn exactly how you want your phones answered, your leads handled, and your calendar booked.' },
    { num: '02', title: 'The Build', desc: 'We custom-build your AI Employee based entirely on your specific business rules, pricing, and services.' },
    { num: '03', title: 'The Relief', desc: 'We flip the switch. Your new digital team member takes over the front desk, your calendar gets booked, and you finally get a breather.' }
  ];

  return (
    <Section id="how-it-works" className="bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(79,70,229,0.05),transparent_50%)] pointer-events-none" />
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 pb-2">
            How We Install Your New <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-brandAccent">AI Team Member</span>
          </h2>
          <p className="text-lg text-textMuted">
            You do not need to be technical. We handle everything from the initial setup to the ongoing maintenance. You just answer the qualified calls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-base p-8 relative overflow-hidden group bg-[radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.1)_0%,transparent_60%)]"
            >
              <div className="text-4xl font-heading font-extrabold text-surfaceBorder group-hover:text-brandAccent/40 transition-colors mb-6">{step.num}</div>
              <h3 className="text-xl font-bold text-textMain mb-3">{step.title}</h3>
              <p className="text-textMuted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
