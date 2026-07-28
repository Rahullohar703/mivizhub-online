import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionFAQ() {
  const faqs = [
    {
      q: 'Do my customers know it’s an AI?',
      a: 'The voice and text are so natural that most people never know. It pauses, uses conversational tone, and answers intelligently.'
    },
    {
      q: 'Is it hard to set up?',
      a: 'No. We handle 100% of the setup. We just interview you about your business for 30 minutes, and we build it.'
    },
    {
      q: 'Will it mess up my calendar?',
      a: 'We program it with strict rules based on how you already schedule jobs. It will only book when and where you allow it to.'
    },
    {
      q: 'What happens if it doesn’t know the answer?',
      a: 'It will politely tell the customer that it needs to check with you, take a detailed message, and text you immediately.'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-offWhite">
      <Container className="max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain">
            Common questions.
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
