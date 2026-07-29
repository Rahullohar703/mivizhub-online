import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionWhatIs() {
  const steps = [
    { title: 'AI Bots & Workflows', desc: 'Multi-step AI workflows that run your entire back office.' },
    { title: 'Phone Agents & Email + SMS', desc: 'Engage leads immediately. Zero wait times means higher conversion rates.' },
    { title: 'Data Processors & Web Assistants', desc: 'Intelligent software systems & automations uniquely designed for your business.' },
  ];

  return (
    <Section id="what-is" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-textMain leading-[1.1] mb-6">
              What AI Employees Actually Are
            </h2>
            <p className="text-lg text-textMuted leading-relaxed mb-8">
              They are not robots sitting at a desk. They are intelligent software systems & automations uniquely designed for your business. They don’t "look" like employees. They behave like them — only better. 
            </p>
          </div>

          <div className="relative pl-8 border-l border-gray-200 space-y-12 py-4">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[39.5px] top-1 w-5 h-5 rounded-full bg-white border-4 border-brandBlack" />
                <h3 className="text-xl font-bold text-textMain mb-2">{step.title}</h3>
                <p className="text-textMuted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
