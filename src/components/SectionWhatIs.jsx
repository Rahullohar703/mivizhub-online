import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionWhatIs() {
  const steps = [
    { title: 'Flawless Phone Coverage', desc: 'Answers every single phone call immediately. Zero wait times, even if five people call your business at the exact same moment.' },
    { title: 'Smart Lead Filtering', desc: 'Asks the right questions up front, ensuring you only spend your valuable time talking to serious, paying customers.' },
    { title: 'Seamless Scheduling', desc: 'Books consultations directly into your calendar based on your availability, ending the endless back-and-forth emails.' },
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

          <div className="relative pl-8 border-l border-surfaceBorder space-y-12 py-4">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[39.5px] top-1 w-5 h-5 rounded-full bg-brandAccent border-4 border-background shadow-[0_0_10px_rgba(79,70,229,0.8)]" />
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
