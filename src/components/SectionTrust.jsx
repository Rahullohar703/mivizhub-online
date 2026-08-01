import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';

export default function SectionTrust() {
  const logos = [
    { name: 'OpenAI' },
    { name: 'Claude' },
    { name: 'Google' },
    { name: 'HubSpot' },
    { name: 'Twilio' },
    { name: 'Microsoft' },
  ];

  return (
    <section className="py-12 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05),transparent_50%)] pointer-events-none" />
      <Container>
        <p className="text-center text-sm font-medium text-textMuted mb-8 tracking-wide uppercase">
          Helping Businesses Build Their AI Workforce.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {logos.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex items-center text-gray-500"
            >
              <span className="font-heading font-bold text-xl md:text-2xl tracking-tight">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
