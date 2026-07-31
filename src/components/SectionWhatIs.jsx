import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionWhatIs() {
  const features = [
    'Answer every incoming enquiry',
    'Book meetings and site visits',
    'Follow up with prospects automatically',
    'Qualify potential customers',
    'Answer common customer questions',
    'Update your CRM and notify your team'
  ];

  return (
    <Section id="what-is" className="bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 pb-2">
              What exactly is an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-brandAccent">AI Employee?</span>
            </h2>
            <p className="text-lg text-textMuted leading-relaxed mb-8">
              Think of it as a digital team member that handles repetitive work just like a human receptionist or administrator would only it works 24/7, never misses a call, and never needs training. It is an intelligent safety net designed to give your human team their time back.
            </p>
          </div>

          <div className="relative space-y-6 py-4 pl-0 md:pl-8 md:border-l border-surfaceBorder">
            <h3 className="text-2xl font-bold text-white mb-6">Your AI Employee Can...</h3>
            <ul className="space-y-4">
              {features.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-lg text-textMuted font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-brandAccent flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </Section>
  );
}
