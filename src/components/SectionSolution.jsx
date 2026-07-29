import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionSolution() {
  return (
    <Section id="solution" className="bg-surface relative border-y border-surfaceBorder">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.1),transparent_50%)] pointer-events-none" />
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            The Comparison<br className="hidden md:block" /> No One Wants You to See
          </h2>
          <p className="text-lg text-textMuted leading-relaxed mb-16">
            See why AI Employees win every time against Human Employees, Virtual Assistants, and DIY AI Apps.
          </p>
        </motion.div>

        {/* Minimal transition graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto h-[300px] md:h-[400px] card-base flex items-center justify-center relative overflow-hidden group bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_60%)]"
        >
          <div className="text-center relative z-10 p-8">
            <h3 className="text-3xl font-extrabold text-gradient-dark mb-8">MivizHub Employees: <span className="text-brandAccent">WINNER</span></h3>
            <ul className="text-left text-textMain font-medium tracking-wide space-y-4 inline-block text-lg">
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Cost 70–90% less</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Train in hours, not weeks</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Never quit, never sick</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Work 24/7/365</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Execute perfectly</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Scale instantly</li>
            </ul>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
