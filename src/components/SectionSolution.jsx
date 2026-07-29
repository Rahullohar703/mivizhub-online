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
            The Comparison<br className="hidden md:block" /> No One Wants You to See
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-16">
            See why AI Employees win every time against Human Employees, Virtual Assistants, and DIY AI Apps.
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
          
          <div className="text-center relative z-10 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">MivizHub Employees: WINNER</h3>
            <ul className="text-left text-gray-300 font-medium tracking-wide space-y-2 inline-block">
              <li>✓ Cost 70–90% less</li>
              <li>✓ Train in hours, not weeks</li>
              <li>✓ Never quit, never sick</li>
              <li>✓ Work 24/7/365</li>
              <li>✓ Execute perfectly</li>
              <li>✓ Scale instantly</li>
            </ul>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
