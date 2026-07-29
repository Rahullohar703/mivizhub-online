import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionFAQ() {
  const faqs = [
    {
      q: 'What is an AI Employee?',
      a: 'An AI Employee is simply a set of AI software, apps, workflows and automations custom-designed around your business to perform a specific job role—like answering calls, booking appointments, following up with leads, or handling admin tasks—consistently and fast.'
    },
    {
      q: 'Is this just an AI app or ChatGPT?',
      a: 'No. Most “AI apps” are tools you still have to learn, set up, and babysit. MivizHub delivers managed AI Employees—we design the workflow, build it, connect it to your systems, and keep improving it.'
    },
    {
      q: 'Do you install everything for me?',
      a: 'Yes. We do the installs, setup, integrations, testing, and go-live, then we manage, maintain and optimize performance over time.'
    },
    {
      q: 'Do I need to fire my staff?',
      a: 'No. Do not fire your staff. AI Employees work best alongside your team. They remove repetitive work so your people can focus on higher-value tasks (customers, quality, sales, operations).'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-offWhite">
      <Container className="max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full text-left px-6 py-6 font-bold text-lg text-textMain flex justify-between items-center"
              >
                {faq.q}
                <span className="text-2xl text-gray-400">
                  {open === idx ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-textMuted leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
