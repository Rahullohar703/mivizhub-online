import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionSolution() {
  return (
    <Section id="solution" className="bg-[#111111] text-white">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Stop paying for software.<br className="hidden md:block" /> Start hiring virtual staff.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-16">
            You don't need to learn a new dashboard or download another app. We install a virtual employee that plugs directly into your existing phone line and email.
          </p>
        </motion.div>

        {/* Minimal transition graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto h-[300px] md:h-[400px] border border-gray-800 rounded-3xl bg-[#161616] flex items-center justify-center relative overflow-hidden"
        >
          {/* Subtle noise/gradient background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_70%)]" />
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-300 font-medium tracking-wide">
              Zero learning curve. Zero friction.
            </p>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
