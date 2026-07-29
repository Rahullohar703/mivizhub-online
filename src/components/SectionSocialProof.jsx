import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionSocialProof() {
  return (
    <Section id="social-proof" className="bg-white">
      <Container className="text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-brandBlack mb-8">
            <svg className="w-12 h-12 mx-auto opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-textMain leading-snug mb-8">
            "X-Staff AI has completely changed our business. The AI Receptionist answers every call, books jobs, and handles customer questions better than our old VA. We added an extra $12,800 in monthly revenue within 60 days because we no longer miss calls. Best investment we’ve made."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div className="text-left">
              <div className="font-bold text-textMain">Lisa R.</div>
              <div className="text-sm text-textMuted">Real Estate Broker</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
