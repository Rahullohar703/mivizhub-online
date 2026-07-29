import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionProblems() {
  return (
    <Section id="problem" className="bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-background pointer-events-none" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-textMain leading-[1.1] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent via-brandPurple to-[#EC4899]">THE TRUTH.</span> <br className="hidden md:block"/> You Don't Need Another Hiring Cycle.
            </h2>
            <p className="text-xl text-textMuted leading-relaxed mb-8">
              You Need Coverage. MivizHub installs and manages AI employees that answer, qualify, book, and follow up without interviews, turnover, or staffing fees.
            </p>
            
            <div className="bg-surface/50 p-6 rounded-2xl border border-surfaceBorder mb-6">
              <h3 className="text-xl font-bold text-textMain mb-4">Instead of Human staff, hire AI employees:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'No placement fees',
                  'No hourly upcharges',
                  'No turnover replacements',
                  'No drama',
                  'No missed shifts',
                  'No endless recruiting'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-textMain font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-base p-10 md:p-14 flex flex-col justify-center relative overflow-hidden group border-[#EC4899]/30 hover:border-[#EC4899]/60 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.1)_0%,transparent_60%)]"
          >
            <div className="relative z-10">
              <div className="text-[3rem] md:text-[4.5rem] font-extrabold tracking-tighter text-textMain leading-[1.1] mb-6">
                The Old Way<br/>is Dead.
              </div>
              <h3 className="text-xl font-bold text-[#EC4899] mb-4 uppercase tracking-wider">
                Traditional Hiring
              </h3>
              <ul className="space-y-3 text-lg text-textMuted font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> "Candidate pipeline" takes 4 weeks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> Costs $3,000–$7,000/mo per head
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> Requires constant management
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
